const express = require("express");
const path = require("path");
const port = 5000;
const app = express();


app.use("/", routes());

app.listen(port, () => console.log(`App is running on port ${port}`));
