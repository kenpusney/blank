
const ejs = require("ejs")
const fs = require("fs")

const config = require("./config")


ejs.renderFile("index.ejs.html", config, (err, result) => {
    fs.mkdirSync("public")
    fs.writeFileSync("public/index.html", result)
})
