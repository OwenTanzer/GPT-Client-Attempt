import { ChatGPTAPI } from 'chatgpt'
const configfile = require("./config.json")

async function example() {
    const api = new ChatGPTAPI({
        apikey: configfile.TOKEN
    })

    const res = await api.sendMessage('Hellow world!')
    console.log(res.text)
}
