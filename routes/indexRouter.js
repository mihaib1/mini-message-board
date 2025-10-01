const { Router } = require("express");
const indexRouter = Router();

let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board", messages: messages});
});

indexRouter.post("/new", (req, res) => {
    console.log(req.body);
    const newEntry = {
        text: req.body.message,
        user: req.body.user,
        added: new Date()
    }
    messages.push(newEntry);
    res.redirect("/");
})

module.exports = indexRouter