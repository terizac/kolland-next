import MainContract from "../artifacts/hardhat/contracts/Main.sol/MainContract.json";
import DemoProjectContract from "../artifacts/hardhat/contracts/Project.sol/ProjectNFT.json";
import main_contract_address from "../address/MainContract.json";
import demo_project_address from "../address/ProjectNFT.json";

// import baycAbi from "../external/bayc.json"; // external contract
// import nftAbi from "../external/nft.json";

export const main_contract = {
  address: main_contract_address.address,
  abi: MainContract.abi,
};

export const demo_project_contract = {
  address: demo_project_address.address,
  abi: DemoProjectContract.abi,
};

// export const bayc_contract = {
//   address: "0x8FFC91DB3C4cD77250130828a08926CC73B0d366",
//   abi: baycAbi,
// };

// export const ERC721_contract = {
//   abi: nftAbi,
// };