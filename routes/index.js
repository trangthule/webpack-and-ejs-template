const express = require("express");
const router = express.Router();
const path = require("path");

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("layout", {
      pageTitle: "Welcome",
      template: "index"
    });
  });
  return router;
};
