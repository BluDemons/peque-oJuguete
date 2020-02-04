const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// ruta simple
app.get("/api/procesar", (req, res) => {
  res.json({ message: "Bienvenido a la aplicacion." });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});