import Navbar from './components/Navbar';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { createContext, useState} from "react";
import './App.css';

export const AppContext = createContext();

function App() {
  const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
  ];
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0});

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ attempt: currAttempt.attempt, letterPos: currAttempt.letterPos + 1});
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;
    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0});
  };

  return (
    <div className="App">
      <Navbar />
      <div className="game">
        <AppContext.Provider value={{
          board,
          setBoard,
          onSelectLetter,
          onEnter,
          onDelete,
          currAttempt,
          setCurrAttempt
        }}>
        <Board />
        <Keyboard />
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
