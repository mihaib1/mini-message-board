const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 3000;

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({extended: true}))

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);

app.listen(PORT, (err) => {
    if(err){
        throw(err);
    }
    console.log(`Application running on port ${PORT}`);
})