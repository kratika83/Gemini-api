import dotenv from "dotenv";
dotenv.config();
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "test\n" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "Okay! I'm ready.  How can I help you? What would you like to test? \n\nDo you want to test:\n\n* **My abilities?** (e.g., \"Write a poem about a cat,\" \"Translate 'hello' into Spanish,\" \"Summarize this article.\")\n* **A specific piece of text?** (e.g., \"Check this sentence for grammar errors.\")\n* **A concept?** (e.g., \"Explain quantum physics in simple terms.\")\n* **Something else entirely?**\n\nJust let me know what you have in mind! I'm here to be tested. 😊\n" },
                ],
            },
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text()
}

export default run;