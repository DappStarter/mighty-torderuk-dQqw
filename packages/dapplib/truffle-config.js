require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name riot saddle erode grace neck food genius'; 
let testAccounts = [
"0x866ad11bc32496842d2fd79aed1ad3af9bdbf3044ff6d8534a71c4c5d809c21a",
"0xc5ad09c29acadefb5d0614c3e3864308db349627ad7028a540c062b7d61a1af0",
"0x48328a4c7655a8861a438deeab921ace6a141b9461ad641972db7f48afc35236",
"0x902d7eca8e595395ee9bf2ee15755aa5dbe915fde376818669a99df645be6577",
"0x099e71eac644fddd6f8634a10204caaaa3b394514724f068de0c96225aa0b8be",
"0x6f6e18a6e443c1cc8c3e4ba6c7f17acfc7cf7071a525689b4c6436301f60979f",
"0x6c23d30c8546e39eeba5f915c002b92a83d69a580ac2e05c3aa2f7041fbd4db8",
"0xc6a1ee7d1e15e39abe4d3d0937833b3bc57cffffd0fbcffc44734c6bddce8f41",
"0x5b20dbf94d11004921b870260915c42274e748b7e89e2b5e18e87e11242b215d",
"0x35fee7802ef726dcdac0e2b5408126b92018552b7d2ddf866615f3374e2ebdbb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

