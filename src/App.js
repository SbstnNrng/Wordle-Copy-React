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

  return (
    <div className="App">
      <AppContext.Provider value={{ 
        board,
        setBoard,
        onSelectLetter,
        currAttempt,
        setCurrAttempt
      }}>
      <Navbar />
      <Board />
      <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
