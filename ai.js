const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Define responses for different questions
const responses = {
  'What is your name?': { type: 'text', content: 'I am Your AI Assistant.' },
  'Tell me a joke.': { type: 'sound', content: 'https://example.com/joke.mp3' },
  'Explain a concept.': { type: 'video', content: 'https://example.com/explanation.mp4' },
  // Add more responses as needed
};

app.post('/api/ask', (req, res) => {
  const { question } = req.body;
  const response = responses[question] || { type: 'text', content: 'I do not understand that question.' };
  res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});