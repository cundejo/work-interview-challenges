import {useEffect, useState} from "react";
import './style.css'

const restartGameState = () => Array(9).fill(undefined);

/**
 * It will return which player won the game, or 'tie' if finished without winner.
 * In any other case will return undefined;
 * @returns {undefined|'tie'|'O'|'X'}
 */
const calculateStatus = (gameState) => {
  const [pos1,pos2,pos3,pos4,pos5,pos6,pos7,pos8,pos9] = gameState;

  if(pos1 && pos1===pos2 && pos2===pos3) return pos1;
  if(pos4 && pos4===pos5 && pos5===pos6) return pos4;
  if(pos7 && pos7===pos8 && pos8===pos9) return pos7;

  if(pos1 && pos1===pos4 && pos4===pos7) return pos1;
  if(pos2 && pos2===pos5 && pos5===pos8) return pos2;
  if(pos3 && pos3===pos6 && pos6===pos9) return pos3;

  if(pos1 && pos1===pos5 && pos5===pos9) return pos1;
  if(pos3 && pos3===pos5 && pos5===pos7) return pos3;

  if(gameState.every(v=>v)) return 'tie';

  return undefined;
}

function App() {
  const [gameState, setGameState] = useState(restartGameState());
  const [currentPlayer, setCurrentPlayer] = useState('O');
  const [gameWinner, setGameWinner] = useState(undefined);

  useEffect(()=>{
    setGameWinner(calculateStatus(gameState));
  }, [gameState])

  const handleBlockClick = (index) => {
    if(gameState[index] || gameWinner) return;

    setGameState(prev => {
      const newValues = [...prev];
      newValues[index] = currentPlayer;
      return newValues;

    })
    setCurrentPlayer(prev => prev === 'O' ? 'X' : 'O');
  }

  return (
    <div className="container">
      <div className="board">
        {gameState.map((value, index)=>(
          <div key={index} className="block" onClick={() => handleBlockClick(index)}>
            <span>
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="info">
        {!gameWinner && <p>Is {currentPlayer} turn.</p>}
        {gameWinner && (
          <>
            <p>Game finished, {gameWinner === 'tie' ? 'nobody won' : `${gameWinner} won!`}</p>
            <p><a href="#" onClick={()=>setGameState(restartGameState())}>Restart Game</a></p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
