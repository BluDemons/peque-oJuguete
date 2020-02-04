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
res.json(fedex.Fedex()[1]);
res.json(fedex.Fedex()[0]);
res.json(fedex.Fedex()[2]);
});


app.listen(PORT, () => {
  console.log(`Servidor en el puerto: ${PORT}`);
});
