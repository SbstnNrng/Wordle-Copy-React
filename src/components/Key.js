import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({keyVal}) {
  const {
    onDelete,
    onEnter,
    onSelectLetter
  } = useContext(AppContext);

  const selectInput = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  }

  return (
    <div className="key" onClick={selectInput}>
      { keyVal }
    </div>
  )
}

export default Key;
