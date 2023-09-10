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
    console.log(`Title in search ftn (Search.js) ${title}`)
    setResults([])
    getBookData(title).then((response) => {
      console.log(response.docs)
      // let res = []
      // for (let i = 0; i <= 5; i++) {
      //   res.push(response.docs[i].title)
      // }
      // console.log(`First 5 books ${results}`)
      // setResults(res)
    }).catch((error) => {
      console.log(`Error while getting books from API in "Search.js": ${error}`)
      // If error is throw, display that there are no results
      setError(true);
    })
  }

  // function search(event) {
  //   props.searchBook(event, title);
  // }

  function handleInput(event) {
    search(event, event.target.value)
    setTitle(event.target.value)
    console.log(`Title: ${event.target.value}`)
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