// Import OpenAI using ES6 import syntax if it's compatible with your project's configuration
//import { OpenAI } from 'openai';
  //import React, {useState} from 'react';
const {OpenAI} = require("openai");
import {latitude, longitude} from "./NavigateCard"
  //const [msgGPT, setMsgGPT] = useState('Response should be here');
// Create an instance of the OpenAI class with your API key
global.myDestination = "New York"
const openai = new OpenAI({
    apiKey: "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"
});
// Define a function to run chat completions
const runChat = async () => {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ "role": "system", "content": "You are a trip advisor that can plan a complete trip using just a destination. Your job is to use a destination and plan a complete day out from morning to night in that area with famous/great places to visit in that area. You list all the information out, but you make sure to keep it concise. You have a 10 word limit per bullet point." },
        {"role": "user", "content": "I want to go to New York, New Jersey." }],
    });
    console.log(chatCompletion.choices[0].message);

    global.myDestination = chatCompletion.choices[0].message;

    //setMsgGPT(chatCompletion.choices[0].message);
};

// Call the chat completions function
runChat();