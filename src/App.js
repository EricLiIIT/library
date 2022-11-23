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

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  Book.prototype.info = function () {
    return `${this.title} by ${this.author}. ${this.pages}, ${this.read}`;
  };

  let b1 = new Book("Turtles all the way down", "Hank Green", 200, true);
  let b2 = new Book("The intelligent investor", "Benjamin Graham", 500, false);
  let b3 = new Book(
    "The Structure of Scientific Revolutions",
    "Thomas S. Khun",
    300,
    true
  );
  let b4 = new Book("One up on wallstreet", "Peter Lynch", 400, true);
  let b5 = new Book("Clockwork Orange", "Someone", 200, false);

  // let myLib = [b1, b2, b3, b4, b5];

  // setLibrary([...myLib]);

  function showBookForm(book) {
    // Show form for new book
    if (bookFormViewable === false) {
      setBookFormViewable(true);
    }
    console.log(bookFormViewable);
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
    console.log(bookFormViewable);
  }

  let showBooks = function () {
    library.map();
  };

  function sort(sorted, myLibrary) {
    // let sortedLibrary = myLibrary.map()
    console.log(sorted);
  }

  // useEffect(() => {
  //   let myLib = [b1, b2, b3, b4, b5];
  //   setLibrary(...myLib);
  // });

  return (
    <div className="App" id="App">
      <h1>Library App</h1>
      <Sort setView={handleBookView} sort={sort} />
      <Books view={view} books={library} add={showBookForm} />
      {bookFormViewable ? <NewBook add={addBook} /> : null}
    </div>
  );
}

export default App;
