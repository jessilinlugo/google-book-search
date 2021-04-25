import React from "react";
import API from "../utils/API";
import book from "./Book";
import Book from "./Book";

class Library extends React.Component {
    state = {
        input: "",
        bookData: []
    }

    searchBtn = () => {
        console.log();
        API.getSavedBooks()
        .then(books => {
            console.log(books);
            const results = books.data.items;
            var booksList = results.map(book => ({
                title: book.volumeInfo.title,
                summary: book.volumeInfo.description,
                author: book.volumeInfo.authors[0] || "Not available",
                deleted: false,
                id:book._id
            })
            );
            console.log(booksList);
            this.setState({
              bookData: booksList  
            })
            })
    }

deleteBook = (bookDetails) => {
    console.log(bookDetails);
    API.deleteBook(bookDetails.id)
    .then(result => {
        console.log(result);
        let booksList = this.state.bookData
        let updateBooks = []
        for(let i=0;i<booksList.length;i++){
            if(booksList[i].id !== bookDetails.id){
                updateBooks.push(booksList[i])
            }else{
                booksList[i].deleted = true
            }
        }
        this.setState({
            bookData : booksList
        })
    })
}

    render() {
        return (
            <div className="row">
                <h1>Library</h1>
              <div className="d-fle flex-wrap">
            {this.state.bookData.map((book,key) => (<Book title={book.title}
            key={key}
            author={book.author}
            id={book.id}
            deleteBook={this.deleteBook}
            summary={book.summary}
            saved={book.saved}/>) )}
                        </div>

            </div>
        )
    }
}

export default Library;