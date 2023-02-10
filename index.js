const openai = require("openai");

const prompt = "What is the capital of France?"

openai.text_completion({
    model: "text-davinci-002"
    prompt: prompt,
    max_tokens: 100,
    n: 1,
    stop: "",
    temperature: 0.5,
}, (error, response) => {
    if (error) {
        console.error(error);    
    } else {
        console.log(response.choices[0].text);
    }
});