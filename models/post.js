const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");

const PostSchema = new Schema({
  book: { type: String, required: true },
  fandom: { type: String, required: true },
  summary: { type: String, required: true },
  author : { type: Schema.Types.ObjectId, ref: "User", required: true }
});

// Always populate the author field
PostSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))


module.exports = mongoose.model("Post", PostSchema);