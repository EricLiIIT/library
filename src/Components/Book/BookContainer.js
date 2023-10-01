import React from "react";
import { BookComponent } from "./Book";
import "./BookContainer.css";

export default function Books(props) {
  function handleSubmit(event) {
    event.preventDefault();
    props.add(event);
  }

  function handleDelete(bookKey) {
    props.deleteBook(bookKey);
  }

  return (
    <div
      className={
        props.view === "row" ? "book-container" : "book-container card"
      }
    >
      {props.books.map((book, index) => {
        return (
          <BookComponent
            className={props.view === "row" ? "row" : "card"}
            key={index}
            book={book}
            view={props.view}
            handleDelete={() => handleDelete(index)}
          />
        );
      })}

      <div className="add-book">
        <form onSubmit={handleSubmit}>
          <button>+ Add a book</button>
        </form>
      </div>
    </div>
  );
}
