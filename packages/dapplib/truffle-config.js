require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove regret payment unaware half process army giggle'; 
let testAccounts = [
"0x83f5a863c5da38b44e752f7af37798895dfb2366c37531d1804b194b8f9832e6",
"0x0c8b7408d698cb6e63d4799da4b171ac91e46316dfd007c24d706f7632b8d370",
"0xd94deddb7b4a680afbb42745790f7224a368d204ad0ab7d5f719cb83a7989bda",
"0x28faa4f0c874d24d4bee6ca38fc969a8983de01ff571cb04001352be8f83a054",
"0x445da0051f25910c24aa65ae2780efa64e2f83a864619cec579dafd77f98ef3f",
"0xdd7d462b987e9c89f4d8b78dc1bbf828c64e6f97b3c7ac015715ec6291dbdbe0",
"0x181ea610c062d1bfdc65f7a98e13e3233d10584b9679e6eb36daf244a67e85c4",
"0x662d8d22e6cc1a6d588624e92c3ecde50567b3ccd06bbfc0480697064404889d",
"0xe3a4ffc5f86ca5ec80553b9603fbc6c34d4ee5de95af0de5ef907bea8a5e1e41",
"0xfa948b935dbfdc6caacbb04411853ea3ed2b01167d17000b79a44d85a816567b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


