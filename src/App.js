import "./App.css";
import "./Components/Sort/Sort";
import Sort from "./Components/Sort/Sort";
import Books from "./Components/Books/Books";
import NewBook from "./Components/Books/NewBook";
import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState("row");
  const [bookFormViewable, setBookFormViewable] = useState(false);
  const [library, setLibrary] = useState([]);

  function handleBookView(view) {
    setView(view);
  }

  function Book(key, title, author, pages, read) {
    this.key = key;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  Book.prototype.info = function () {
    return `${this.title} by ${this.author}. ${this.pages}, ${this.read}`;
  };

  let b1 = new Book(1, "Turtles all the way down", "Hank Green", 200, true);
  let b2 = new Book(
    2,
    "The intelligent investor",
    "Benjamin Graham",
    500,
    false
  );
  let b3 = new Book(
    3,
    "The Structure of Scientific Revolutions",
    "Thomas S. Khun",
    300,
    true
  );
  let b4 = new Book(5, "One up on wallstreet", "Peter Lynch", 400, true);
  let b5 = new Book(6, "Clockwork Orange", "Someone", 200, false);

  function showBookForm(book) {
    if (bookFormViewable === false) {
      setBookFormViewable(true);
    }
  }

  function addBook(book) {
    console.log(book);
    let newBook = new Book(book.title, book.author, book.pages, book.read);
    setLibrary((prevBooks) => {
      return [newBook, ...prevBooks];
    });

    if (bookFormViewable === true) {
      setBookFormViewable(false);
    }
  }

  function hideForm() {
    setBookFormViewable(false);
  }

  let showBooks = function () {
    library.map();
  };

  function sort(sorted, myLibrary) {
    console.log(sorted);
  }

  useEffect(() => {
    setLibrary([b1, b2, b3, b4, b5]);
  }, []);

  return (
    <div className="App" id="App">
      <h1>Library</h1>
      <Sort setView={handleBookView} sort={sort} />
      <Books view={view} books={library} add={showBookForm} />
      {bookFormViewable ? (
        <NewBook
          add={addBook}
          formView={bookFormViewable}
          hideForm={hideForm}
        />
      ) : null}
    </div>
  );
}

export default App;
