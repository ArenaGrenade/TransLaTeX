const express = require("express");
const app = express();
const http = require("http").createServer(app);
const openai = require("./openai");
global.fetch = require("node-fetch");

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("build"));

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

app.post("/api/completions", async (req, res) =>
    res.send(await openai.translate(req.body.plaintext))
);

http.listen(process.env.PORT || 5000, () => console.log("Running."));
