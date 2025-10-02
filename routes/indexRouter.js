const { Router } = require("express");
const indexRouter = Router();

let messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
        id: 1
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
        id: 2
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", {title: "Mini Message Board", messages: messages});
});

indexRouter.post("/new", (req, res) => {
    const newEntry = {
        text: req.body.message,
        user: req.body.user,
        added: new Date(),
        id: messages.length + 1
    }
    messages.push(newEntry);
    res.redirect("/");
})

indexRouter.get("/messageDetails/:id", (req, res) => {
    let message = messages.find((message) => message.id == req.params.id)
    res.render("messageDetails", {message: message});
})

module.exports = indexRouter