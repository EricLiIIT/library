import { useState } from "react";

export default function SearchLibrary(props) {
  const [title, setTitle] = useState("");

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
        <button onClick={search}>Search</button>
      </form>
    </div>
    )
}