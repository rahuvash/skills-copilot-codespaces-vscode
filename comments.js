const express = require('express');

// Create web server
const app = express();
const PORT = 3000;

app.use(express.json());

let comments = [];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    if (!author || !text) {
        return res.status(400).json({ error: 'Author and text are required.' });
    }
    const comment = { id: comments.length + 1, author, text };
    comments.push(comment);
    res.status(201).json(comment);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



