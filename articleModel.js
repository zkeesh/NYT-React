/* INSTRUCTOR ONLY (18.3.02)
 *
 * Example model
 * ===================================== */

// First, we hook mongoose into the model with a require
var mongoose = require("mongoose");

// Then, we save the mongoose.Schema class as simply "Schema"
var Schema = mongoose.Schema;

/*
title (Title of the stored article from nytimes.com)
date (publish date and time of the article)
url (URL of the article on nytimes.com)
*/

// With our new Schema class, we instantiate an ExampleSchema object
// This is where we decide how our data must look before we accept it in the server, and how to format it in mongoDB
var ArticleSchema = new Schema({
  // string must be a string. We "trim" it to remove any trailing white space
  // Notice that it is required, as well. It must be entered or else mongoose will throw an error
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  date: {
    type: Date,
    default: Date.now
  },
  // This must be a unique number in the collection, and it must be entered
  url: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Finally, we export the module, allowing server.js to hook into it with a require statement
module.exports = Article;
