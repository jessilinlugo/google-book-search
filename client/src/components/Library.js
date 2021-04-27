import React from "react";
import API from "../utils/API";
import book from "./Book";
import Saved from "./Saved";

class Library extends React.Component {
    state = {
        input: "",
        bookData: []
    }

     getBooksfromDB = () =>{
        API.getSavedBooks()
        .then(response => {
            let books = response.data
            console.log(books);
            let booksList = books.map(book => ({
                title: book.title,
                summary: book.summary,
                author: book.author,
                deleted: false,
                _id: book._id
            })
            )
            console.log("Library", booksList);
            this.setState({
                bookData: books
            })
        })
    }
    componentDidMount = () => {
        console.log();
        this.getBooksfromDB()
    }

    deleteBook = (bookDetails) => {
        console.log(bookDetails);
        API.deleteBook(bookDetails.id)
            .then(result => {
                this.getBooksfromDB()
            //     console.log(result);
            //     let booksList = this.state.bookData
            //     let updateBooks = []
            //     for (let i = 0; i < booksList.length; i++) {
            //         if (booksList[i].id === bookDetails.id) {
            //         //     updateBooks.push(booksList[i])
            //         // } else {
            //             booksList[i].deleted = true
            //         }
            //     }
            //     this.setState({
            //         bookData: booksList
            //     })
            })
    }

    render() {
        return (
            <div className="row">
                <h1>Library</h1>
                <div className="d-fle flex-wrap">
                    {this.state.bookData.map((book, key) => (<Saved title={book.title}
                        key={key}
                        author={book.author}
                        id={book._id}
                        deleteBook={this.deleteBook}
                        summary={book.summary}
                        deleted={book.deleted} />))}
                </div>

            </div>
        )
    }
}

export default Library;