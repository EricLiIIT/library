import React from "react";
import Book from "../Book/Book";
import "./BookContainer.css";
import { useState } from "react";

export default function Books(props) {
  // const [row, setRow] = useState(false);

  // const handleView = () => {
  //   setRow(!row);
  // };

  function handleSubmit(event) {
    event.preventDefault();
    props.add(event);
  }

  return (
    <div
      className={
        props.view === "row" ? "book-container row" : "book-container card"
      }
    >
      {props.books.map((book) => {
        return (
          <Book
            className={props.view === "row" ? "row" : "card"}
            key={book.key}
            book={book}
            view={props.view}
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
