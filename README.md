# NFT Minting and Listing Functions README

## Description
The code provided above demonstrates the creation and listing of NFT (Non-Fungible Token) objects using JavaScript. It utilizes an array `NFTs` to store the created NFTs and provides three main functions: `mintNFT`, `listNFTs`, and `getTotalSupply`.

## Functions

### 1. `mintNFT(_name, _designer, _shade, _feature)`
This function takes four parameters `_name`, `_designer`, `_shade`, and `_feature`, which represent the metadata attributes of an NFT: name, designer, shade, and feature. The function creates an NFT object using the provided parameters and stores it in the `NFTs` array.

### 2. `listNFTs()`
This function iterates through the `NFTs` array and prints the metadata of each NFT object using `console.log()`. It will display the entire array for each iteration, showing all the minted NFTs' metadata.

### 3. `getTotalSupply()`
This function prints the total number of NFTs that have been minted and stored in the `NFTs` array. It uses `console.log()` to display the count of NFT objects present in the array.

## Example Usage
The provided code demonstrates an example of minting one NFT, getting the total supply, and listing all the minted NFTs with their metadata. The output of this example will show the following:

```
Total no. of NFT's are : 1
[ { name: 'UTOPIA', designer: 'TRAVIS', shade: 'DARK', feature: 'GROOVY' } ]
```

Note: As this code runs in a JavaScript environment, it will not be deployed or executed as a Solidity smart contract. This code is for educational or testing purposes in a JavaScript runtime environment.
