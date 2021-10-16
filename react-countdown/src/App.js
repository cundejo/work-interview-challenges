import React, { Fragment, useEffect, useState } from 'react';

const getSeconds=(inputMin, inputSec)=>60*Number(inputMin)+Number(inputSec);

const Clock = ({totalOfSeconds})=> {
  if(totalOfSeconds<0) return '00:00'
  const minutes = String(Math.floor(totalOfSeconds / 60)).padStart(2, '0');
  const seconds = String(totalOfSeconds % 60).padStart(2, '0');

  return (
    <Fragment>
      {minutes}:{seconds}
    </Fragment>
  )

}

function App() {
  const [countdownState, setCountdownState] = useState('STOPPED');
  const [seconds, setSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);

  useEffect(()=> {
    if(countdownState !== 'STARTED') return;

    if(seconds === 0){
      setCountdownState('STOPPED');
      return;
    }

    setTimeout(()=>{
      setSeconds(prev => prev - 1);
    }, 1000);

  }, [seconds, countdownState])

  const handleStart = () =>{
    if(countdownState === 'STARTED') {
      setSeconds(getSeconds(inputMinutes, inputSeconds))
      return;
    }
    if(countdownState !== 'STOPPED') return;
    setCountdownState('STARTED');
    setSeconds(getSeconds(inputMinutes, inputSeconds))
  }

  const handleReset = () =>{
    setCountdownState('STOPPED');
    setSeconds(0);
    setInputMinutes(0);
    setInputSeconds(0);
  }

  const handlePause = () =>{
    setCountdownState(prev=> prev === 'PAUSE' ? 'STARTED' : 'PAUSE');
  }


  return (
    <Fragment>
      <label>
        <input type="number" value={inputMinutes} onChange={(e)=>{setInputMinutes(e.target.value)}} />
        Minutes
      </label>
      <label>
        <input type="number" value={inputSeconds} onChange={(e)=>setInputSeconds(e.target.value)} />
        Seconds
      </label>

      <button onClick={handleStart}>START</button>
      <button onClick={handlePause}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>

      <h1 data-testid="running-clock">
        <Clock totalOfSeconds={seconds} />
      </h1>
    </Fragment>
  );
}

export default App;
