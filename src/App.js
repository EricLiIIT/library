import "./App.css";
import "./Components/Sort/Sort";
import Sort from "./Components/Sort/Sort";
import Books from "./Components/Books/Books";
import { useState } from "react";

function App() {
  const [view, setView] = useState("row");

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

  let myLibrary = [b1, b2, b3, b4, b5];

  function addBookToLibrary() {
    // Add Book to Library
  }

  let showBooks = function () {
    myLibrary.map();
  };

  function sort(sorted, myLibrary) {
    // let sortedLibrary = myLibrary.map()
    console.log(sorted);
  }
  return (
    <div className="App">
      <h1>Library App</h1>
      <Sort setView={handleBookView} sort={sort} />
      <Books view={view} books={myLibrary} />
    </div>
  );
}

export default App;
