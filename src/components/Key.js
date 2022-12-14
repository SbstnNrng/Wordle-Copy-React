import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({keyVal, disabled}) {
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
    <div className="key" onClick={selectInput} id={ disabled && "disabled"}>
      { keyVal }
    </div>
  )
}

export default Key;
