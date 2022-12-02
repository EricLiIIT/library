import React from "react";
import "./Row.css";
import { BiTrashAlt } from "react-icons/bi";

export default function Row(props) {
  return (
    <div className="row">
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
      <div className="pages">{props.book.pages}</div>
      <div className="trash">
        <BiTrashAlt />
      </div>
    </div>
  );
}
