import { React, useState } from "react";
import { BiTrashAlt, BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

export default function Book(props) {
  function handleDelete() {
    props.handleDelete();
  }

  const [readStatus, setReadStatus] = useState(props.book.read)
  return (
    <div className={props.view === "row" ? "row" : "card"}>
      <div className="title">{props.book.title}</div>
      <div className="author">By: {props.book.author}</div>
      <div className="pages">{props.book.pages} pages</div>
      <div className="checkbox">
        <p>Read?</p>
        {(readStatus) ? 
        <BiCheckboxChecked size="25" onClick={() => setReadStatus(!readStatus)}/> : 
        <BiCheckbox size="25" onClick={() => setReadStatus(!readStatus)}/>
        }
      </div>
      <div className="trash">
        <BiTrashAlt onClick={handleDelete} />
      </div>
    </div>
  );
}