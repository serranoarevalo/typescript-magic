"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, timestamp, data) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
    }
}
Block.calculateHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "303003303030", "", 132590, "Hello");
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = getNewTimestamp();
    const nextHash = Block.calculateHash(nextIndex, previousBlock.hash, nextTimestamp, data);
    const newBlock = new Block(nextIndex, nextHash, previousBlock.hash, nextTimestamp, data);
    return newBlock;
};
console.log(createNewBlock("hello"));
//# sourceMappingURL=index.js.map