import { React, useState } from "react";
import { BiTrashAlt } from "react-icons/bi";

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
  validBook() {
    // Check if the number field has any non-int characters:
    if (!/^[0-9]*$/.test(this.pages)) {
      return false;
    }
    for (const [_, value] of Object.entries(this)) {
      if (value !== "") {
        continue
      } else {
        return false
      }
    }
    return true
  }
  get isValidBook() {
    return this.validBook()
  }
  updateStatus() {
    this.read = !this.read
  }
}

export function BookComponent(props) {
  const [readStatus, setReadStatus] = useState(props.book.read);
  function handleDelete() {
    props.handleDelete();
  }

  function updateReadStatus() {
    props.updateReadStatus();
    setReadStatus(!readStatus); 
  }

  return (
    <div className={props.view === "row" ? "row" : "card"}>
      <div>
        <div className="title">{props.book.title}</div>
        <div className="author">By: {props.book.author}</div>
      </div>
      <div className="subject">{props.book.subject}</div>
      <div className="pages">{props.book.pages} pages</div>
      <div className="checkbox">
        {(readStatus) ? 
          <p onClick={() => {
            updateReadStatus()}}>Read</p> :
          <p onClick={() => {
            updateReadStatus()}}>Unread</p>
          }
      </div>
      <div className="trash">
        <BiTrashAlt onClick={handleDelete} />
      </div>
    </div>
  );
}