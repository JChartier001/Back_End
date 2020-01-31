const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;
const patientRoute = require("./routes/patientRoute/patientRoute");
const driverRoute = require("./routes/driverRoute/driverRoute");

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

server.listen(port, host, () => {
  console.log(`\n=> Server up at http://localhost:${port}\n`);
});
