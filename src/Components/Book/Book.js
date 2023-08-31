import React from "react";
import { BiTrashAlt, BiSolidCheckboxChecked, BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

export default function Book(props) {
  function handleDelete() {
    props.handleDelete();
  }

  function handleCheck() {
    return 
  }
  return (
    <div className={props.view === "row" ? "row" : "card"}>
      <div className="title">{props.book.title}</div>
      <div className="author">{props.book.author}</div>
      <div className="pages">{props.book.pages}</div>
      <div className="readStatus">Read</div>
      <div className="checkbox">
        {(props.book.read) ? <BiCheckbox/> : <BiCheckboxChecked/>}
      </div>
      <div className="trash">
        <BiTrashAlt onClick={handleDelete} />
      </div>
    </div>
  );
}
