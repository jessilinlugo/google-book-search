import mongoose from "mongoose";
const { Schema } = mongoose;


const bookSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: Array, required: true },
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;