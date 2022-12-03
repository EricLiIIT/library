import React from "react";
import { BiTrashAlt } from "react-icons/bi";

export default function Book(props) {
  function handleDelete() {
    console.log("Deleting");
  }

  return (
    <div className={props.view === "row" ? "row" : "card"}>
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
      <div className="pages">{props.book.pages}</div>
      <div className="trash">
        <BiTrashAlt onClick={handleDelete} />
      </div>
    </div>
  );
}
