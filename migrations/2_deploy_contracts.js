const Dex = artifacts.require("Dex");
const ERC20Mock = artifacts.require("ERC20Mock");

const USDC_MAINNET = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
const UNLOCKED_ACCOUNT = "0x6262998ced04146fa42253a5c0af90ca02dfd2a3";

module.exports = async function (deployer, networks, accounts) {
    const usdc = await ERC20Mock.at(USDC_MAINNET);

    // Create Dex Contract with 10 ether from the deloper account
    await deployer.deploy(Dex, {
        from: accounts[0],
        value: "10000000000000000000"
    });

    const dex = await Dex.deployed();

    // Transfer USDC from unlocked account to Dex Contract
    await usdc.transfer(dex.address, 1000000000, {
        from: UNLOCKED_ACCOUNT,
    });

    // Transfer USDC from unlocked account to user account
    // 0x6a4cD4FD2d901F10929c61dB50b6A6BC19c178c6
    await usdc.transfer(accounts[1], 1000000000, {
        from: UNLOCKED_ACCOUNT,
    });
}