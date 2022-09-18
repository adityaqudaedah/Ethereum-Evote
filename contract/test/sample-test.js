const { expect, assert } = require("chai");
const { ethers } = require("hardhat");



describe("Unit Test E-vote Smart Contract", function () {
  it("inisialisasi kandidat", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();

    const candidate1 = await evote.proposals(0);
    const candidate2 = await evote.proposals(1);

    expect(candidate1["name"]).to.equal("arifin", "mengandung nama yang benar");
    expect(candidate2["name"]).to.equal("doni", "mengandung nama yang benar");
    expect(candidate1["voteCount"].toNumber()).to.equal(0, "hasil adalah 0");
    expect(candidate2["voteCount"].toNumber()).to.equal(0, "hasil adalah 0");
  });

  it("admin tidak dapat melakukan voting", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();

    const adminAddress = await evote.chairperson();
    const admin = await evote.voters(adminAddress);

    expect(admin.voted).to.equal(true, "mengandung nilai true");
  });

  it("admin dapat memberikan hak akses", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();

    const from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";
    await evote.giveRightToVote(from);

    const voter = await evote.voters(from);

    expect(voter.weight).to.equal(1, "voter telah diberikan haks akses");
  });

  it("voter tidak dapat melakukan voting jika belum diberi hak akses", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();
    const from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";

    try {
      await evote.vote(from, 0);
    } catch (error) {
      expect(error.message).to.contain(
        "Voter tidak memiliki hak akses untuk melakukan voting"
      );
    }
  });

  it("voter dapat memiliki hak akses untuk melakukan voting", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();

    const from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";

    await evote.giveRightToVote(from);
    await evote.vote(from, 0);
    const voter = await evote.voters(from);

    expect(voter.voted).to.equal(
      true,
      "mengandung nilai true karena voter telah melakukan voting"
    );
    expect(voter.vote).to.equal(0, "voter memilih kandidat no.1");
  });

  it("voter tidak dapat melakukan voting lebih dari 1x", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();
    const from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";

    await evote.giveRightToVote(from);
    await evote.vote(from, 0);

    try {
      await evote.vote(from, 0);
    } catch (error) {
      expect(error.message).to.contain("Voter sudah melakukan voting");
    }
  });

  it("admin tidak bisa memberikan hak akses kepada voter yang telah melakukan voting", async function () {
    const Evote = await ethers.getContractFactory("Evote");
    const evote = await Evote.deploy(["arifin", "doni"]);
    await evote.deployed();

    const from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";

    await evote.giveRightToVote(from);
    await evote.vote(from, 0);

    try {
      await evote.giveRightToVote(from);
    } catch (error) {
      expect(error.message).to.contain("Voter telah melakukan voting");
    }
  });
});
