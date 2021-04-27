import React from "react";
import Book from "./Book";

function Saved(props) {
  console.log("Saved",props)
  return (
    <>
    {props.deleted?<></>:
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.summary}</p>
          <h4> Author: {props.author}</h4>
          <button className="btn btn-danger"
           onClick={() =>
            props.deleteBook({ title: props.title, author: props.author, 
            summary: props.summary, id: props.id })}>Delete Book
    </button>
        </div>
      </div>
}
    </>
  )
}

export default Saved;