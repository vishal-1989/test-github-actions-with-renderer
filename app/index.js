// index.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Read deployment GUID from environment
const DEPLOYMENT_GUID = process.env.DEPLOYMENT_GUID || "not-set";

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Node.js app is running with added deployment",
    deploymentGuid: DEPLOYMENT_GUID,
    timestamp: new Date().toISOString()
  });
});

// Version endpoint (recommended)
app.get("/version", (req, res) => {
  res.send(`Deployment GUID: ${DEPLOYMENT_GUID}`);
});

app.listen(PORT, () => {
  console.log("🚀 Server started");
  console.log("PORT:", PORT);
  console.log("DEPLOYMENT_GUID:", DEPLOYMENT_GUID);
});