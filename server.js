const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index.js")

const app = express();
app.use(cors());

app.use("/api/v1",mainRouter);

app.listen(process.env.PORT || 5000,() =>{
    console.log("Application is started")
})