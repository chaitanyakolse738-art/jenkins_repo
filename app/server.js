const express = require('express');
const app = express();
const port = 3000;

// Simple interactive page
app.get('/', (req, res) => {
    res.send(`
    <html>
    <head>
        <title>My DevOps App</title>
        <style>
            body { font-family: Arial; text-align:center; background:#f4f4f9; }
            h1 { color:#4CAF50; margin-top:50px; }
            button { padding:10px 20px; font-size:16px; background:#2196F3; color:white; border:none; border-radius:5px; cursor:pointer; margin-top:20px; }
            button:hover { background:#0b7dda; }
            #msg { margin-top:20px; font-size:18px; color:#333; }
        </style>
    </head>
    <body>
        <h1>Welcome to My DevOps Learning App!</h1>
        <button onclick="document.getElementById('msg').innerText='App running via Docker & Jenkins!'">Click Me</button>
        <div id="msg"></div>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
