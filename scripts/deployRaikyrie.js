
const hre = require("hardhat");


async function sleep(ms){
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const Raikyrie = await hre.ethers.getContractFactory("Raikyrie");
  const raikyrie = await Raikyrie.deploy();

  await raikyrie.deployed();

  console.log(
    `Raikyrie with 1 ETH and unlock timestamp ${unlockTime} deployed to ${raikyrie.address}`
  );

  // DELAY


  await sleep(60 * 1000) ;


  await hre.run("verify:verify", {
    address: raikyrie.address,
    constructorArguments: [],

  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
