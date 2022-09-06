import React, { useContext } from "react";
import { AppContext } from "../App";

function BoardLetter({letterPos, attemptVal}) {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  return (
    <div className="boardletter">
      {letter}
    </div>
  )
}

export default BoardLetter;
