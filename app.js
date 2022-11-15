require("./connection");

const express = require("express");
const app = express();
const config = require("./modules/config");
const routerManufacters = require("./routes/routesManufacters");
const routerProducts = require("./routes/routesProducts");
const router = express.Router();
const hostname = config.HOST;
const port = config.PORT;
const cors = require("cors");

app.use(cors());
app.use("/manufacters", routerManufacters);
app.use("/products", routerProducts);

/*
app.use("/", (req, res, next) => {
  console.log("Endpoint de apertura");
  next();
});

app.use((err, req, res, next) => {
  console.log(`Error: ${err}`);
  res.status(404).end();
});

app.use("/", (req, res, next) => {
  console.log("Endpoint de cierre");
  res.status(200).end();
});
*/

app.listen(port, hostname, () => {
  console.log(`Servidor levantado con éxito en http://${hostname}:${port}`);
  //console.log(`Entorno: ${process.env.NODE_ENV}`);
});

module.exports = router;
