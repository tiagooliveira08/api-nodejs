const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//iniciando app;
const app = express();
app.use(express.json());
app.use(cors());

//iniciando db;
mongoose.connect("mongodb://localhost:27017/apinode", { useNewUrlParser : true });
requireDir("./models");

app.use("/api", require("./routes.js"));

app.listen(3001, () =>  {

    console.log("servidor running in port", 3001);
});