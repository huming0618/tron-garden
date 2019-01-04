const axios = require("axios")

const blockchain = require('./blockchain')


const main = async ()=>{
    setInterval(async () => {
        const latestBlock = await blockchain.getLatestBlocks()
        const blockHeader = latestBlock[0].block_header.raw_data
        console.log('')
        console.log(blockHeader.number)
        console.log(blockHeader.txTrieRoot)
        console.log(blockHeader.parentHash)

    }, 3000)

}

main()
