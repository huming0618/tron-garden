const axios = require("axios")
const confg = require("./config")

const fullnode = axios.create({
    baseURL: confg.endpoint.fullnode,
    timeout: 6000
    // headers: { 'X-Custom-Header': 'foobar' }
});

const blockchain = {}

blockchain.getLatestBlocks = async (num=1)=>{
    const resp = await fullnode.post("/wallet/getblockbylatestnum", { num: num })
    return resp.data.block
}

module.exports = blockchain