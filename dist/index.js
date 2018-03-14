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
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "303003303030", "", 132590, "Hello");
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getNewestBlock = () => blockchain[blockchain.length - 1];
const getNewTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getNewestBlock();
    const nextIndex = previousBlock.index + 1;
    const nextTimestamp = getNewTimestamp();
    const nextHash = Block.calculateHash(nextIndex, previousBlock.hash, nextTimestamp, data);
    const newBlock = new Block(nextIndex, nextHash, previousBlock.hash, nextTimestamp, data);
    addBlock(newBlock);
    return newBlock;
};
const getHashForBlock = (aBlock) => Block.calculateHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isNewBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        console.log("lalala");
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
    }
    else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isNewBlockValid(candidateBlock, getNewestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("suuup");
console.log(getBlockchain());
//# sourceMappingURL=index.js.map