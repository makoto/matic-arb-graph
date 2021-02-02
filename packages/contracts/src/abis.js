import erc20Abi from "./abis/erc20.json";
import ownableAbi from "./abis/ownable.json";
import bridgeAbi from "./abis/bridge.json";
import routerAbi from "./abis/router.json";
import aTokenRootChainManagerAbi from "./abis/ATokenRootChainManager.json";

const abis = {
  erc20: erc20Abi,
  ownable: ownableAbi,
  router: routerAbi,
  bridge: bridgeAbi,
  aTokenRootChainManager: aTokenRootChainManagerAbi
};

export default abis;
