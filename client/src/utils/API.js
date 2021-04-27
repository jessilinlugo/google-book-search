import Axios from "axios";

export default {
    getGoogleBooks: function(searchTerm){
        return Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm)
    },
    saveBook: function(bookDetails) {
        return Axios.post("/api/books", bookDetails)
    },
    getSavedBooks: function(){
        return Axios.get("/api/books/all")
    },
    deleteBook:function(id){
        return Axios.delete("/api/books/"+id)
    }
}