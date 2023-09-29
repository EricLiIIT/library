import "./App.css";
import "./Components/Sort/Sort";
import Sort from "./Components/Sort/Sort";
import BookContainer from "./Components/Book/BookContainer";
import NewBook from "./Components/Book/NewBook";
import Alert from "./Components/Book/InvalidFormAlert";
import Search from "./Components/Sort/Search";
import { Book } from "./Components/Book/Book"
import { useEffect, useState } from "react";
import { b1, b2, b3, b4, b5 } from "./Components/Book/SampleBooks"

function App() {
  const [view, setView] = useState("row");
  const [bookFormViewable, setBookFormViewable] = useState(false);
  const [library, setLibrary] = useState([]);
  const [formIsValid, setFormIsValid] = useState(true);
  const localStorageKey = 'library';

  useEffect(() => {
    const localData = localStorage.getItem(localStorageKey);
    try {
      if (localData == null) {
        // Key exists in localStorage
        console.log("Getting books from local storage")
        if (localData) {
          const parsedData = JSON.parse(localData);
          setLibrary(parsedData);
        }
      }
    } catch (error) {
      console.error(`Error accessing locally stored books: ${error}`)
    }
    // overriding any changes made to the list of books stored to localstorage
    if (localStorage.getItem(localStorageKey) !== null) {
      console.log("setting default lib")
      setLibrary([b1, b2, b3, b4, b5]);
      localStorage.setItem("library", JSON.stringify(library));
    }
  }, []);

  // TODO local storage doesn't seem to retain any new books added from
  // the search
  useEffect(() => {
    console.log("use effect firing because the library array was messed with")
    let jsonStringified = JSON.stringify(library)
    // console.log(jsonStringified)
    let prevBooks = localStorage.getItem(localStorageKey)
    if (prevBooks !== null) {
      localStorage.clear();
      localStorage.setItem(localStorageKey, jsonStringified);
    }
    console.log(localStorage.getItem(localStorageKey))
  }, [library]);

  function handleBookView(view) {
    setView(view);
  }

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

    setLibrary([...library, newBook]);
    console.log("Library after adding new book: ", library)
    localStorage.setItem(localStorageKey, JSON.stringify(library));
    console.log("book should be added to local storage", library)

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

  function handleCheck() {
    // update book read status
  }

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
          handleInvalidForm={handleInvalidForm} />
        ) : null}
        {formIsValid ? null : (
          <Alert
            formIsValid={formIsValid}
            handleInvalidForm={handleInvalidForm} />
        )}
      </div>
    </div>
  );
}

export default App;
