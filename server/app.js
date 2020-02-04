const express = require("express");
const bodyParser = require("body-parser");
const empresas = require("./empresa/empresa");
const cors = require("cors");

const PORT = 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/procesar", (req, res) => {
const fedex= new empresas();
const correos= new empresas();
const servi= new empresas();
res.json(fedex.Fedex());
res.json(correos.CorreosDelEcuador());
res.json(servi.ServiEntrega());
});


app.listen(PORT, () => {
  console.log(`Servidor en el puerto: ${PORT}`);
});
