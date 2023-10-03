import React from "react";
import { useState } from "react";
import "./Sort.css";

export default function Sort(props) {
  const [rowView, setRowView] = useState(true);

  function getView() {
    if (!rowView) {
      setRowView(!rowView)
      props.setView("row");
    } else if(rowView) {
      setRowView(!rowView)
      props.setView("card")
    }
  }

  function sort(event) {
    props.sort(event.target.value);
  }

  return (
    <div className="sort toolbar">
      <div className="sort">
        <p>Sort By:</p>
        <form>
          <select name="sort" id="sort" onChange={sort}>
            <option value="Read">Read</option>
            <option value="Unread">Unread</option>
            <option value="Page Count">Pages</option>
          </select>
        </form>
      </div>
      <div className="view">
        {(rowView) ? 
          <button onClick={() => {
            getView(setRowView(rowView))
          }}>Card</button> :
          <button onClick={() => {
            getView(setRowView(rowView))
          }}>Row</button>
        }
      </div>
    </div>
  );
}
