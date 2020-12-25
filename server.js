const express = require('express');
const path = require('path');
const openai = require("./openai");
const rateLimit = require('express-rate-limit');
global.fetch = require("node-fetch");

// Rate limiter from express-rate-limiter
const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 30,
  message: 'You have exceeded the 30 requests in 24 hrs limit!', 
  headers: true,
});

const app = express();

// Run a https server instead of the default http server
const http = require("http").createServer(app);

// Serve static files of the react application
app.use(express.static(path.join(__dirname, 'web/build')));

app.use(express.json());
app.use(express.urlencoded());

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Primary api endpoint with rate limiting enabled
app.post(
    "/api/completions",
    limiter,
    async (req, res) => res.send(await openai.translate(req.body.plaintext))
);

// Catch all other routes and throw the webpage to the user
app.get(
  '*',
  (req, res) => res.sendFile(path.join(__dirname, '/web/build/index.html'))
);

http.listen(process.env.PORT || 5000, () => console.log("Running."));
