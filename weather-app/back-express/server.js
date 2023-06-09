const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");
const mongoose = require("mongoose").default;

mongoose
  .connect("mongodb://127.0.0.1:27017/weatherdata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch(() => {
    console.log("erreur de connexion à la bd");
  });

var server = express();

server.use(express.json());
server.use(cors());

server.use("/", routes);
server.listen(8000, function check(error) {
  if (error) {
    console.log("error");
  } else {
    console.log("started");
  }
});
