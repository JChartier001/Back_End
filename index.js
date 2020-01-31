const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
const port = process.env.PORT || 80;
const patientRoute = require("./routes/patientRoute/patientRoute");
const driverRoute = require("./routes/driverRoute/driverRoute");

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/patient", patientRoute);
server.use("/api/driver", driverRoute);

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "Server Error"
  });
});

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

server.listen(port, () => {
  console.log(`\n=> Server up at http://localhost:${port}\n`);
});

server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});
