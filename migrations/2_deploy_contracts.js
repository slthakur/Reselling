var ChainList = artifacts.require("./Reselling.sol");

module.exports = function (deployer) {
    deployer.deploy(Reselling);
}
