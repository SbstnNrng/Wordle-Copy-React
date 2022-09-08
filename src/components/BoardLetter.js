import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";

function BoardLetter({letterPos, attemptVal}) {
  const { board, correctWord, currAttempt, setDisabledLetters} = useContext(AppContext);
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter.toLowerCase();
  const almost = !correct && letter !== "" && correctWord.includes(letter.toLowerCase());

  const letterState =
    currAttempt.attempt > attemptVal &&
    (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
      if (letter !== "" && !correct && !almost) {
        setDisabledLetters((prev) => [...prev, letter]);
      }
    }, [currAttempt.attempt])

  return <div className="boardletter" id={letterState}>{letter}</div>
}

export default BoardLetter;
