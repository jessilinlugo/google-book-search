import React from "react";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        input: ""
    }

    searchBtn = () => {
        console.log(this.state.input);
        API.getGoogleBooks(this.state.input)
        .then(books => {
            console.log(books);
        })
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({
            input: value
        })
    }

    render() {
        return (
            <div className="row">
 
                <div className="input-group mt-3">
                    
                        <input type="text" value={this.state.input} className="form-control" onChange={this.handleInputChange} placeholder="Enter a Book Title here" />
                        <button onClick={this.searchBtn} type="submit" className="btn btn-primary">Submit</button>
                    </div>

                        

            </div>
        )
    }
}

export default Search;