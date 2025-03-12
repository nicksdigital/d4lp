
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  // Deploy BonkWars
  const BonkWars = await ethers.getContractFactory("BonkWars");
  const bonkWars = await BonkWars.deploy();
  await bonkWars.deployed();
  console.log("BonkWars deployed to:", bonkWars.address);

  // Deploy HydraFactory
  const HydraFactory = await ethers.getContractFactory("HydraFactory");
  const hydraFactory = await HydraFactory.deploy();
  await hydraFactory.deployed();
  console.log("HydraFactory deployed to:", hydraFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
