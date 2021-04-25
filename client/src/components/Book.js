import React from "react";
function book(props){
    return (
        <div className="card">
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <h6 className="card-subtitle">{props.author}</h6>
    <p className="card-text">{props.summary}</p>
    {props.saved?<h6>Book  Saved!</h6>:
    <button className="btn btn-primary" onClick={() => props.saveBook({title: props.title, author: props.author, summary: props.summary})}>Save Book</button>}
  </div>
</div>
    )
}

export default book;