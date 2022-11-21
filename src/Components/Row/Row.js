import React from "react";
import "./Row.css";

export default function Row(props) {
  return (
    <div className="row">
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
      <div className="pages">{props.book.pages}</div>
    </div>
  );
}
