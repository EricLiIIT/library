import { useState, useEffect } from "react";
import "./Search.css"

export default function SearchLibrary(props) {
  const [title, setTitle] = useState("");
  const [results, setResults] = useState();

  // useEffect(() => {
  //   console.log("Hello")
  // }, [title])

  function search(event) {
    props.searchBook(event, title);
  }

  function handleInput(event) {
    setTitle(event.target.value)
  }

  return (
    <div className="search">
      <form onSubmit={search}>
        <label htmlFor="title">Title:</label>
        <input 
          type="search"
          name="title"
          id="title"
          value={title}
          onChange={handleInput} 
          />
        <button id="search" onClick={search}>Search</button>
      </form>
        <div className="search-results">
        {props.searchResults.map((item, index) => {
          return (
          <p key={`${item}_${index}`}>{item}</p>
          )
        })}
      </div>
    </div>
    )
}