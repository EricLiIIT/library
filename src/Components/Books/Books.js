import React from "react";
import Row from "../Row/Row";
import Card from "../Card/Card";
import "./Books.css";
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
      {props.view === "row"
        ? props.books.map((book) => {
            return <Row book={book} />;
          })
        : props.books.map((book) => {
            return <Card book={book} />;
          })}
      <div className="add-book">
        <form onSubmit={handleSubmit}>
          <button>+ Add a book</button>
        </form>
      </div>
    </div>
  );
}
