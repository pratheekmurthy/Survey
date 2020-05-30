const mongoose = require("mongoose");
const { Schema } = mongoose; //const Schema = mongoose.Schema bot are equivalent

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema); // we are telling mongoose to create new collections of users
