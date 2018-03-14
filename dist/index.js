class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "303003303030", "", "Hello", 132590);
let blockchain = [genesisBlock];
//# sourceMappingURL=index.js.map