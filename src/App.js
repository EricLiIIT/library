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

    if (localData) {
      // Key exists in localStorage, parse and set it
      const parsedData = JSON.parse(localData);
      setLibrary(parsedData);
    } else {
      // Key does not exist in localStorage, initialize with default library
      // const defaultLibrary = [b1, b2, b3, b4, b5]; // Replace with your default data
      localStorage.setItem(localStorageKey, JSON.stringify([]));
      setLibrary([]);
    }
  }, []);

  function handleBookView(view) {
    setView(view);
  }

  function showBookForm(book) {
    if (bookFormViewable === false) {
      setBookFormViewable(true);
    }
  }

  function addBookToLibrary(book) {
    // let newBook = new Book(
    //   book.title,
    //   book.author,
    //   book.subject,
    //   book.pages,
    //   book.read
    // );
    const updatedLibrary = [...library];
    updatedLibrary.push(new Book(
      book.title,
      book.author,
      book.subject,
      book.pages,
      book.read
    ));
    setLibrary(updatedLibrary);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLibrary));

    if (bookFormViewable === true) {
      setFormIsValid(true);
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
    const updatedLibrary = [...library];
    updatedLibrary.splice(bookKey, 1);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedLibrary));
    setLibrary(updatedLibrary);
  }

  function updateReadStatus(bookIndex) {
    console.log(library[bookIndex]);
    let read = !library[bookIndex].read
    let updatedBook = {...library[bookIndex], read}
    library.splice(bookIndex, 1, updatedBook)
    console.log(library);
    // setLibrary(library)
    // console.log(library[bookIndex].info());
    // library[bookIndex].updateStatus();
    // console.log(library[bookIndex].info());
    // console.log(library[bookIndex].title)
    // let oldLib = localStorage.getItem(localStorageKey);
    // console.log(oldLib);
  }

  return (
    <div className="App" id="App">
      <div className="modal">
        <h1>Library</h1>
      </div>
      <div className="interactive">
        <Search addBook={addBookToLibrary}/>
        <Sort setView={handleBookView} sort={sort} />
        <BookContainer
          view={view}
          books={library}
          add={showBookForm}
          deleteBook={deleteBook}
          updateReadStatus={updateReadStatus}
        />
        {bookFormViewable ? (
          <NewBook
          addBookToLibrary={addBookToLibrary}
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