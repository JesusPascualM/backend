const mongoose = require("mongoose");
const user = "jesusp";
const password = "root1234";
const database = "concesionario";
const connectionString = `mongodb+srv://jesusp:${password}@cluster0.mrxuzhf.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error(err);
  });
