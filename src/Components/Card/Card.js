import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
      <div className="pages">{props.book.pages}</div>
    </div>
  );
}
