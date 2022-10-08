
const ejs = require("ejs")
const fs = require("fs")

const config = require("./config")

ejs.renderFile("index.ejs.html", config, (err, result) => {
    fs.writeFileSync("index.html", result)
})
