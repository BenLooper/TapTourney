import './App.css';
import { useState, useEffect } from 'react'

function App() {
  let [presses, setPresses] = useState(0)
  let [gameOn, setGameOn] = useState(false)

  useEffect(() => {
    console.log(presses);
  }, [gameOn])

  const handleClick = () => {
    setPresses(presses+=1)
  }

  const startGame = () =>{
    setGameOn(true);
    setTimeout(() => {
      setGameOn(false)
    }, 10000)
  }

  return (
    <div>
      <button onClick={startGame}>Start Game</button>
      <button disabled={gameOn ? false:true} onClick={handleClick}>Press</button>
    </div>
  );
}

export default App;
