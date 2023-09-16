import { React, useState } from "react";
import { BiTrashAlt, BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

export class Book {
  constructor(key, title, author, pages, read) {
    this.key = key;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `${this.title} by ${this.author}. ${this.pages}, ${this.read}`;
  }
}

export function BookComponent(props) {
  function handleDelete() {
    props.handleDelete();
  }

  const [readStatus, setReadStatus] = useState(props.book.read)
  return (
    <div className={props.view === "row" ? "row" : "card"}>
      <div className="title">{props.book.title}</div>
      <div className="author">By: {props.book.author}</div>
      <div className="pages">{props.book.pages} pages</div>
      <div className="checkbox">
        <p>Read?</p>
        {(readStatus) ? 
        <BiCheckboxChecked size="25" onClick={() => setReadStatus(!readStatus)}/> : 
        <BiCheckbox size="25" onClick={() => setReadStatus(!readStatus)}/>
        }
      </div>
      <div className="trash">
        <BiTrashAlt onClick={handleDelete} />
      </div>
    </div>
  );
}