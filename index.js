const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.get('/', (req, res) => {
    res.send(`
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
    </ul>
    <h2>Home page</h2>
`)
})

app.get('/about', (req, res) => {
    res.send(`
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
    </ul>
    <h2>About page</h2>
`)
})

app.listen(PORT, () => {
    console.log('Server started! on ', PORT)
})
