import { ChatGPTAPI } from 'chatgpt'

async function example() {
    const api = new ChatGPTAPI({
        apikey: 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
    })

    const res = await api.sendMessage('Hellow world!')
    console.log(res.text)
}