import React from "react";
import API from "../utils/API";
import book from "./Book";
import Book from "./Book";

class Search extends React.Component {
    state = {
        input: "",
        bookData: []
    }

    searchBtn = () => {
        console.log(this.state.input);
        API.getGoogleBooks(this.state.input)
        .then(books => {
            console.log(books);
            const results = books.data.items;
            var booksList = results.map(book => ({
                title: book.volumeInfo.title,
                summary: book.volumeInfo.description,
                author: book.volumeInfo.authors[0] || "Not available",
                saved: false
            })
            );
            console.log(booksList);
            this.setState({
              bookData: booksList  
            })
            })
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            input: value
        })
    }
saveBook = (bookDetails) => {
    console.log(bookDetails);
    API.saveBook(bookDetails)
    .then(result => {
        console.log(result);
        let booksList = this.state.bookData
        for(let i=0;i<booksList.length;i++){
            if(booksList[i].title === bookDetails.title && booksList[i].summary === bookDetails.summary ){
                booksList[i].saved = true
            }
        }
        this.setState({
            bookData : booksList
        })
        window.location.reload()
    })
}

    render() {
        return (
            <div className="row">
 
                <div className="input-group mt-3">
                    
                        <input type="text" value={this.state.input} className="form-control" onChange={this.handleInputChange} placeholder="Enter a Book Title here" />
                        <button onClick={this.searchBtn} type="submit" className="btn btn-primary">Submit</button>
                    </div>
            {this.state.bookData.map((book,key) => (<Book title={book.title}
            key={key}
            author={book.author}
            saveBook={this.saveBook}
            summary={book.summary}
            saved={book.saved}/>) )}
                        

            </div>
        )
    }
}

export default Search;