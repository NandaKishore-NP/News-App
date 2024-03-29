const express = require("express");
const router = express.Router();
 
// Define your routes
router.get("/api/formdata", (req, res) => {
  res.send("This is a demo route");
});
 
module.exports = router;