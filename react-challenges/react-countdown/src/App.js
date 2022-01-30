import React, {Fragment, useEffect, useState} from 'react';

const CLOCK_STATE= {
  STOPPED: 'STOPPED',
  RUNNING: 'RUNNING',
}

const INITIAL_SECONDS = 0;

const getTotalOfSeconds = (mins, seconds) => Number(mins) * 60 + Number(seconds);

const getMinutesAndSeconds = (totalOfSeconds) => {
  const minutes = String(parseInt(totalOfSeconds / 60)).padStart(2,'0');
  const seconds = String(totalOfSeconds % 60).padStart(2,'0');
  return {minutes, seconds};
}

function useInput(initialValue){
  const [value, setValue] = useState(initialValue);
  return {value, onChange: (e)=> setValue(e.target.value), reset: (v)=>setValue(v)};
}

function useChronometer(initialSeconds){
  const [seconds, setSeconds] = useState(initialSeconds);
  const [state, setState] = useState(CLOCK_STATE.STOPPED);

  useEffect(() => {
    if(state === CLOCK_STATE.RUNNING){
      const intervalId = setInterval(()=>setSeconds(prev => prev - 1), 1000);
      return () => clearInterval(intervalId);
    }
  }, [state])

  return {seconds, setSeconds, state, setState };
}

function Clock({seconds}) {
  if(seconds <= 0 ) return <h1>00:00</h1>;

  const {minutes: mins, seconds: secs} = getMinutesAndSeconds(seconds);

  return <h1>
    {mins}:{secs}
  </h1>
}

function App() {
  const minutesInput = useInput(INITIAL_SECONDS);
  const secondsInput = useInput(INITIAL_SECONDS);
  const {seconds, setSeconds, state, setState} = useChronometer(INITIAL_SECONDS)

  const handleStart = () => {
    setSeconds(getTotalOfSeconds(minutesInput.value, secondsInput.value))
    setState(CLOCK_STATE.RUNNING);
  }

  const handleReset =()=>{
    minutesInput.reset(INITIAL_SECONDS);
    secondsInput.reset(INITIAL_SECONDS);
    setSeconds(INITIAL_SECONDS);
    setState(CLOCK_STATE.STOPPED);
  }

  return (
    <Fragment>
      <label>
        Minutes
        <input type="number" value={minutesInput.value} onChange={minutesInput.onChange} />
      </label>
      <label>
        Seconds
        <input type="number" value={secondsInput.value} onChange={secondsInput.onChange} />
      </label>
      <br/>
      <br/>
      <button onClick={handleStart}>START</button>
      <button onClick={()=> setState(state === CLOCK_STATE.STOPPED ? CLOCK_STATE.RUNNING : CLOCK_STATE.STOPPED)}>PAUSE / RESUME</button>
      <button onClick={handleReset}>RESET</button>

      <Clock seconds={seconds} />
    </Fragment>
  );
}

export default App;
