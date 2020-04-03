const express = require("express");
const path = require("path");
const routes = require("../routes");
const port = 5000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Set folder to serve static files
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use("/", routes());

app.listen(port, () => console.log(`App is running on port ${port}`));
