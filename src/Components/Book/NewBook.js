import React, { useState } from "react";
import { Book } from "./Book";
import "./NewBook.css";
import { click } from "@testing-library/user-event/dist/click";

export default function NewBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [subject, setSubject] = useState("");
  const [read, setRead] = useState(false);

  function cancelAddBook() {
    props.hideForm(false);
  }

  const formParentContainer = document.querySelector(".form-container");
  const form = document.getElementsByClassName("add-book-form");
  const bookList = document.querySelector(".book-container");
  const body = document.body;
  bookList.addEventListener("click", (event) => {
      cancelAddBook();
  });
  document.addEventListener("click", event => {
    console.log("Clicked")
    // if (event.target !== formParentContainer || event.target !== form) {
      let clickInsideBody = body.contains(event.target);

      if (!clickInsideBody) {
        cancelAddBook();
      }
    // }
  })

  function createBook() {
    const newBook = new Book(title, author, subject, pages, read);
    if (newBook.isValidBook) {
      props.addBookToLibrary(newBook)
    } else {
      alert("Invalid Book!");
    }
  }

  return (
    <div className="form-container">
      <div className="add-book-form">
        <form className="add-book-form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={(event) => setAuthor(event.target.value)}
            value={author}
          />
          <label htmlFor="pages">Page Count</label>
          <input
            type="text"
            name="pages"
            id="pages"
            onChange={(event) => setPages(event.target.value)}
            value={pages}
          />
          <label htmlFor="subject">Genre</label>
          <input 
            type="text"
            name="subject"
            id="subject"
            onChange={(event) => setSubject(event.target.value)} 
            value={subject}/>
          <label htmlFor="read">Did you read this book?</label>
          <input
            type="checkbox"
            name="read"
            id="read"
            onChange={(event) => setRead(event.target.value)}
            value={read}
          />
          <button type="button" onClick={cancelAddBook}>
            Cancel
          </button>
          <button type="button" onClick={createBook}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
