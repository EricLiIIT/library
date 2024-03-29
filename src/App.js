import "./App.css";
import "./Components/Sort/Sort";
import Sort from "./Components/Sort/Sort";
import BookContainer from "./Components/Book/BookContainer";
import NewBook from "./Components/Book/NewBook";
import Alert from "./Components/Book/InvalidFormAlert";
import Search from "./Components/Sort/Search";
import { Book } from "./Components/Book/Book"
import { useEffect, useState } from "react";

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
    let read = !library[bookIndex].read
    let updatedBook = {...library[bookIndex], read}
    library.splice(bookIndex, 1, updatedBook)
    setLibrary(library)
    localStorage.setItem(localStorageKey, JSON.stringify(library))
  }

  return (
    <div className="App" id="App">
      <div className="modal">
        <h1>Library</h1>
      </div>
      <div className="interactive">
        <Search addBook={addBookToLibrary}/>
        <Sort setView={handleBookView} />
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