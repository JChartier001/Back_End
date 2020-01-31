const express = require("express");

const cors = require("cors");
const helmet = require("helmet");


const patientRoute = require("./routes/patientRoute/patientRoute");
const driverRoute = require("./routes/driverRoute/driverRoute");

const server = express();
server.use(helmet());

server.use(express.json());
server.use(cors());

server.use("/api/patient", patientRoute);
server.use("/api/driver", driverRoute);



server.get("/", (req, res) => {
  res.status(200).json({ api: "up", dbenv: process.env.DB_ENV });
});

module.exports = server;
