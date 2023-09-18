import "./App.css";
import "./Components/Sort/Sort";
import Sort from "./Components/Sort/Sort";
import BookContainer from "./Components/Books/BookContainer";
import NewBook from "./Components/Books/NewBook";
import Alert from "./Components/Books/InvalidFormAlert";
import Search from "./Components/Sort/Search";
import { Book } from "./Components/Book/Book"
import { useEffect, useState } from "react";

function App() {
  const [view, setView] = useState("row");
  const [bookFormViewable, setBookFormViewable] = useState(false);
  const [library, setLibrary] = useState([]);
  const [formIsValid, setFormIsValid] = useState(true);

  useEffect(() => {
    const localData = localStorage.getItem("books");
    if (localData != null) {
      setLibrary(JSON.parse(localData));
    }
  }, []);

  // TODO local storage doesn't seem to retain any new books added from
  // the search
  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  function handleBookView(view) {
    setView(view);
  }

  let b1 = new Book(
    "Turtles all the way down", 
    "Hank Green", 
    "fiction", 
    200, 
    true
  );
  let b2 = new Book(
    "The intelligent investor",
    "Benjamin Graham",
    "Nonfiction",
    500,
    false
  );
  let b3 = new Book(
    "The Structure of Scientific Revolutions",
    "Thomas S. Khun",
    "Nonfiction",
    300,
    true
  );
  let b4 = new Book("One up on Wallstreet", "Peter Lynch", "Nonfiction", 400, true);
  let b5 = new Book("Clockwork Orange", "Someone", "Nonfiction", 200, false);

  function showBookForm(book) {
    if (bookFormViewable === false) {
      setBookFormViewable(true);
    }
  }

  function addBook(book) {
    let newBook = new Book(
      book.title,
      book.author,
      book.subject,
      book.pages,
      book.read
    );
    setLibrary((prevBooks) => {
      return [newBook, ...prevBooks];
    });

    if (bookFormViewable === true) {
      setFormIsValid(true);
      console.log("error message should be gone if it ever appeared");
      setBookFormViewable(false);
    }
  }

  function hideForm() {
    setBookFormViewable(false);
    setFormIsValid(true);
  }

  function sort(sorted, myLibrary) {
    // Unimplemented: todo - sort books
    console.log(sorted);
  }

  function handleInvalidForm(formValidity) {
    setFormIsValid(formValidity);
  }

  function deleteBook(bookKey) {
    console.log(`app.js: deleting ${bookKey} book`);
    const updatedLibrary = [...library];
    updatedLibrary.splice(bookKey, 1);
    setLibrary(updatedLibrary);
  }

  useEffect(() => {
    setLibrary([b1, b2, b3, b4, b5]);
  }, []);

  return (
    <div className="App" id="App">
      <div className="modal">
        <h1>Library</h1>
      </div>
      <div className="interactive">
        <Search addBook={addBook}/>
        <Sort setView={handleBookView} sort={sort} />
        <BookContainer
          view={view}
          books={library}
          add={showBookForm}
          deleteBook={deleteBook}
        />
        {bookFormViewable ? (
          <NewBook
          add={addBook}
          formView={bookFormViewable}
          hideForm={hideForm}
          handleInvalidForm={handleInvalidForm}
          />
          ) : null}
        {formIsValid ? null : (
          <Alert
            formIsValid={formIsValid}
            handleInvalidForm={handleInvalidForm}
          />
        )}
      </div>
    </div>
  );
}

export default App;
