import { useState } from "react";
import { getBookData } from "../../Services/GetBookData";
import { Book } from "../Book/Book"
import "./Search.css"

export default function SearchLibrary(props) {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  function search(event, title) {
    event.preventDefault()
    getBookData(title).then((response) => {
      let books = response.docs
      let res = []
      for (const book in books) {
        res.push(books[book])
      }
      setResults(res)
    }).catch((error) => {
      console.log(`Error while getting books from API in "Search.js": ${error}`)
      // If error is throw, display that there are no results
      setError(true);
    })
  }

  function handleBookSearch(event) {
    search(event, event.target.value)
    setTitle(event.target.value)
  }

  function generateBookObjectFromResult(result) {
    let author = result.author_name[0] ? 
      result.author_name[0] : "Unknown"
    let pageCount = result.number_of_pages_median ? 
      result.number_of_pages_median : "Unknown"
    let book = new Book (
      result.title,
      author,
      pageCount,
      true // TODO allow user to select if they've read it or not
    )
    props.addBook(book)
  }
  
  return (
    <div className="search">
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="title">Look for a book:</label>
        <input 
          type="search"
          name="title"
          id="title"
          value={title}
          onChange={handleBookSearch} 
          />
      </form>
      <div className={results.length > 1 ? "search-results" : ""}>
        {!error ? results.map((item, index) => {
          return (
          <p 
            key={`${item.title}_${index}`} 
            className="title-result" 
            onClick={() => generateBookObjectFromResult(item)}>{item.title}</p>
          )
        }) : 
        <div>No results</div>}
      </div>
    </div>
    )
}