import React from "react";

class Search extends React.Component {
    state = {
        input: ""
    }
    render() {
        return (
            <div className="row">
 
                <div className="input-group mt-3">
                    
                        <input type="text" className="form-control" id="exampleInputBook" placeholder="Enter a Book Title here" />
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                        

            </div>
        )
    }
}

export default Search;