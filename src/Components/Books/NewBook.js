import React, { useState } from "react";
import "./NewBook.css";

export default function NewBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [read, setRead] = useState(false);

  function addBook() {
    if (title.length > 0 && author.length > 0 && pages > 0) {
      let key = Math.random().toString() + title + author;
      props.add({ key, title, author, pages, read });
    }
  }

  function cancelAddBook() {
    props.hideForm(false);
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
          <button type="button" onClick={addBook}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
