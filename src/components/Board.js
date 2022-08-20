import React from "react";
import BoardLetter from './BoardLetter';

function Board() {
  return (
    <div className="board">
      <div className="row">
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
      </div>
      <div className="row">
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
      </div>
      <div className="row">
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
      </div>
      <div className="row">
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
      </div>
      <div className="row">
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
      </div>
      <div className="row">
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
        <BoardLetter />
      </div>
    </div>
  )
}

export default Board;
