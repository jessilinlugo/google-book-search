import Axios from "axios";

export default {
    getGoogleBooks: function(searchTerm){
        return Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    },
    saveBook: function(bookDetails) {
        return Axios.post("/api/books", bookDetails)
    }
}