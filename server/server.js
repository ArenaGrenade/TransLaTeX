const app = require("express")();
const http = require("http").createServer(app);
const openai = require("./openai");
global.fetch = require("node-fetch");

app.use(require("express").json());
app.use(require("express").urlencoded());

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

app.post(
    "/api/completions",
    async (req, res) => res.send(await openai.translate(req.body.plaintext))
);

http.listen(process.env.PORT || 5000, () => console.log("Running."));
