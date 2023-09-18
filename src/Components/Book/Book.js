import { React, useState } from "react";
import { BiTrashAlt, BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

export class Book {
  constructor(title, author, subject, pages, read) {
    this.title = title;
    this.author = author;
    this.subject = subject;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `${this.title} by ${this.author} ${this.pages}, ${this.subject} ${this.read}`;
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
      <div className="subject">{props.book.subject}</div>
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