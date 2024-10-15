// server.js
import express from 'express';
import { myEmitter } from './events.js';
import cors from 'cors';
import {OpenAI} from 'openai';
const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
});

const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Define a route to emit an event
app.post('/sendEmail', (req, res) => {
  const { userEmail } = req.body;
  myEmitter.emit('sendEmail', userEmail);
  res.send('Event emitted!');
});

app.post('/ask', async (req, res) => {
  try{

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: req.body.message }],
      stream: true,
    });
    for await (const chunk of stream) {
      process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
    return res.status(200).send(response);;
  }catch(err){
    console.log(err)
    res.status(500).send(err.error ?? {message:"Something went wrong"});  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 