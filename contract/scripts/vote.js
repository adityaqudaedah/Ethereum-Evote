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
    "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  );

  const from = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";

  // await evote.giveRightToVote(from)
  await evote.vote(from, 0);

  // try {
  //   await evote.vote(from, 0);
    
  // } catch (error) {
  //   console.log(error)
  // }

  // console.log(await evote.voters(from))
  // console.log(await evote.proposals(1))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
