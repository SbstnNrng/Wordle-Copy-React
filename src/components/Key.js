import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({keyVal}) {
  const {
    onSelectLetter
  } = useContext(AppContext);

  const selectLetter = () => {
      onSelectLetter(keyVal);
  }

  return (
    <div className="key" onClick={selectLetter}>
      { keyVal }
    </div>
  )
}

export default Key;
