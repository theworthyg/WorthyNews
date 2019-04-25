// Require mongoose
var mongoose = require("mongoose");
var Note = require("./Note");

// Create Schemas
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,

  },
  link: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  notes: [{
     type: Schema.Types.ObjectId,
     ref: "Note"
  }]
});

// Create the Article model with the Article Schema
var Article = mongoose.model("Article", ArticleSchema);

// Export
module.exports = Article;