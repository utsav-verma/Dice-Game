import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import {useState} from "react";
import TotalScore from './components/TotalScore'


function App() {
  
  const  [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
    {isGameStarted ? <GamePlay/> : <StartGame
    toggle={toggleGamePlay}
    /> }
    </>
  );
}

export default App
