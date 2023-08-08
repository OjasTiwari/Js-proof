const NFTs=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _designer, _shade, _feature) {
   const NFT = {
      "name" : _name,
      "designer" : _designer,
      "shade" : _shade,
      "feature" : _feature
   }
   NFTs.push(NFT);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let j=0; j< NFTs.length; j++){
      console.log(NFTs);
   }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nTotal no. of NFT's are : " + NFTs.length);
}
// call your functions below this line
mintNFT("UTOPIA","TRAVIS","DARK", "GROOVY");
getTotalSupply();
listNFTs();
