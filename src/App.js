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
    if (localData == null || localData.length > 2) {
      // Key exists in localStorage
      console.log("There has been books added to local storage before")
      if (localData) {
        const parsedData = JSON.parse(localData);
        setLibrary(parsedData);
      }
    }
    if (localStorage.getItem(localStorageKey) == null || localStorage.getItem(localStorageKey).length < 3) {
      setLibrary([b1, b2, b3, b4, b5]);
      localStorage.setItem("library", JSON.stringify(library));
    }
  }, []);

  // useEffect(() => {
  //   const localData = localStorage.getItem("library");
  //   if (localData === null) {
  //     let localData = localStorage.setItem("library", JSON.stringify(library));
  //     console.log(localData)
  //   }
  // }, [library])


  // TODO local storage doesn't seem to retain any new books added from
  // the search
  // useEffect(() => {
  //   localStorage.setItem("library", JSON.stringify(library));
  // }, [library]);

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
    // const localData = localStorage.getItem("library");
    // localStorage.setItem("library", JSON.stringify())

    setLibrary([...library, newBook]);
    console.log("Library after adding new book: ", library)
    let localData = localStorage.setItem("library", JSON.stringify(library));
    console.log("book should be added to localstorage", library)
    // console.log("Local Data", localData)

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
