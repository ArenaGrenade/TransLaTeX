const app = require("express")();
const http = require("http").createServer(app);
const openai = require("./openai");
const rateLimit = require('express-rate-limit');
global.fetch = require("node-fetch");

const limiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 30,
  message: 'You have exceeded the 30 requests in 24 hrs limit!', 
  headers: true,
});

app.use(require("express").json());
app.use(require("express").urlencoded());

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.post(
    "/api/completions",
    limiter,
    async (req, res) => res.send(await openai.translate(req.body.plaintext))
);

http.listen(process.env.PORT || 5000, () => console.log("Running."));
