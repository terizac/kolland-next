// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract ProjectNFT is ERC721, ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 public price = 0.05 ether;


    constructor() ERC721("ProjectToken", "PTK") {
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    modifier onlySufficientEther(uint256 _quantity, uint256 _price) {
        require(msg.value >= _quantity * _price, "Insufficient ether");
        _;
    }

    function safeMint(address to) public payable 
        onlySufficientEther(1, price) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // // Fallback function is called when msg.data is not empty
    // fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    function getPrice() public view returns (uint) {
        return price;
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}