// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ProjectToken {
    function safeMint(address to) external payable;
}

contract MainContract is Ownable {
    uint8 private _project_sharing = 90;
    uint8 private _kol_sharing = 8;

    // kol mapping 資料結構設計
    // 項目方分潤參數
    struct sharing_config {
        uint8 project_sharing;
        uint8 kol_sharing;
    }
    mapping(address => sharing_config) private project_configs;
    // 此項目有哪些 kol
    mapping(address => mapping(address => bool)) private project_kols;
    // 下級跟項目對應kol, mint 了多少錢
    mapping(address => mapping(address => uint256)) private kol_project_value;
    

    constructor() {
    }

    modifier callerIsUser() {
        require(tx.origin == msg.sender, "CALLER_IS_CONTRACT");
        _;
    }

    // Mint Function
    // ------------------------------------------------------------------------
    function MainMint(
        address projectAddress,
        address minter,
        address kolAddress
    ) public payable {
        // 1. call Project.sol's mint function 
        // 1-1 change to no need import contract (by interface and address)
        // method 1
        ProjectToken project = ProjectToken(projectAddress);
        // method 2 call unsafe
        // projectAddress.call(bytes4(keccak256("test()")));
        // 2-1 kol and project mapping log in main contract
        // 2-2 kol and child mapping when mint success
        // 3. profit sharing 
        // 3-1 mint price eth to project
        bool is_kol_in_project = project_kols[projectAddress][kolAddress];
        address kol;
        if (is_kol_in_project) {
            uint8 project_sharing = project_configs[projectAddress].project_sharing == 0 ? _project_sharing : project_configs[projectAddress].project_sharing;
            uint8 kol_sharing = project_configs[projectAddress].kol_sharing == 0 ? _kol_sharing : project_configs[projectAddress].kol_sharing;
            project.safeMint{value: msg.value * project_sharing / 100}(minter);
            kol = kolAddress;
            payable(kol).transfer(msg.value * kol_sharing / 100);
            // log
            kol_project_value[kolAddress][projectAddress] = kol_project_value[kolAddress][projectAddress] + msg.value;
        } else {
            // 3-2 trasfer eth to kol
            project.safeMint{value: msg.value}(minter);
        }
    }


    // KOL Related Function
    // ------------------------------------------------------------------------
    function recordKOLInProject(address projectAddress, address kolAddress) public {
        project_kols[projectAddress][kolAddress] = true;
    }

    function readKOLInProject(address projectAddress, address kolAddress) public view returns (bool) {
        return project_kols[projectAddress][kolAddress];
    }

    function setProjectConfig(address projectAddress, uint8 project_sharing, uint8 kol_sharing) external onlyOwner {
        project_configs[projectAddress].project_sharing = project_sharing;
        project_configs[projectAddress].kol_sharing = kol_sharing;
    }

    function getProjectConfig(address projectAddress) public view returns (sharing_config memory) {
        if (project_configs[projectAddress].project_sharing != 0) {
            return project_configs[projectAddress];
        } else {
            sharing_config memory project_config;
            project_config.project_sharing = _project_sharing;
            project_config.kol_sharing = _kol_sharing;
            return project_config;
        }
    }

    function getKOLValue(address kolAddress, address projectAddress) public view returns (uint256) {
        return kol_project_value[kolAddress][projectAddress];
    }
}
