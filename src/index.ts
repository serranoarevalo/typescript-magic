import * as CryptoJS from "crypto-js";

class Block {
  public static calculateHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  public static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "string" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "string" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    timestamp: number,
    data: string
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const genesisBlock: Block = new Block(0, "303003303030", "", 132590, "Hello");

let blockchain = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getNewestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getNewestBlock();
  const nextIndex: number = previousBlock.index + 1;
  const nextTimestamp: number = getNewTimestamp();
  const nextHash: string = Block.calculateHash(
    nextIndex,
    previousBlock.hash,
    nextTimestamp,
    data
  );
  const newBlock: Block = new Block(
    nextIndex,
    nextHash,
    previousBlock.hash,
    nextTimestamp,
    data
  );
  return newBlock;
};

const getHashForBlock = (aBlock: Block): string =>
  Block.calculateHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isNewBlockValid = (
  candidateBlock: Block,
  previousBlock: Block
): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isNewBlockValid(candidateBlock, getNewestBlock())) {
    blockchain.push(candidateBlock);
  }
};
