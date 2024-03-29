const mongoose = require("mongoose");
const FormDataSchema = new mongoose.Schema({
  heading: String,
  description: String,
  image: String,
});

// Create a model based on the schema

module.exports = mongoose.model("FormData", FormDataSchema);
