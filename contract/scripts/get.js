// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const EvoteFactory = await hre.ethers.getContractFactory("Evote");
  const evote = await EvoteFactory.attach(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );

  const admin = await evote.chairperson();
  // const candidate = await evote.proposals(0)

  //  const grantAccess = await evote.giveRightToVote("0xdD2FD4581271e230360230F9337D5c0430Bf44C0")
  // const winner = await evote.winnerName()
  const voters = await evote.voters(admin)

  // const vote = await evote.vote(0)

  // console.log("kandidat", candidate['voteCount']);
  // console.log('Candidate : ',candidate)
  // console.log('Pemenang : ', winner)
  console.log('voter',voters)
  // console.log(vote)
  console.log('admin',admin);

  // console.log(grantAccess);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
