import React from "react";
import { useState } from "react";
import "./Sort.css";

export default function Sort(props) {
  const [view, setView] = useState();

  function getView(event) {
    props.setView(event.target.value);
  }

  function sort(event) {
    props.sort(event.target.value);
  }
  return (
    <div className="sort">
      <form>
        <select name="sort" id="sort" onChange={sort}>
          <option value="Read">Read</option>
          <option value="Unread">Unread</option>
          <option value="Page Count">Pages</option>
        </select>
        <select name="view" id="view" onChange={getView}>
          <option value="row">Row</option>
          <option value="card">Card</option>
        </select>
      </form>
    </div>
  );
}
