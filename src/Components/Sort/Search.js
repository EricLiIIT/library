import { useState, useEffect } from "react";
import { getBookData } from "../../Services/GetBookData";
import "./Search.css"

export default function SearchLibrary(props) {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   console.log(props.searchResults)
  // }, [props.searchResults])

  function search(event, title) {
    event.preventDefault()
    getBookData(title).then((response) => {
      let books = response.docs
      let res = []
      console.log(books)
      for (const book in books) {
        console.log(`in for loop: ${books[book].title}`)
        res.push(books[book].title)
      }
      setResults(res)
    }).catch((error) => {
      console.log(`Error while getting books from API in "Search.js": ${error}`)
      // If error is throw, display that there are no results
      setError(true);
    })
  }

  function handleInput(event) {
    search(event, event.target.value)
    setTitle(event.target.value)
  }

  return (
    <div className="search">
      <form>
        <label htmlFor="title">Title:</label>
        <input 
          type="search"
          name="title"
          id="title"
          value={title}
          onChange={handleInput} 
          />
        <button onClick={search} id="search">Search</button>
      </form>
      <div className="search-results">
        {!error ? results.map((item, index) => {
          return (
          <p key={`${item}_${index}`}>{item}</p>
          )
        }) : 
        <div>No results</div>}
      </div>
    </div>
    )
}