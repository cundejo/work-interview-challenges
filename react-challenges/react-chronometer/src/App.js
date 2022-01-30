import React, {useEffect, useRef, useState} from 'react';

const useInterval = (callback, delay) => {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  })

  useEffect(() => {
    if(delay){
      const intervalId = setInterval(() => callbackRef.current(), delay)
      return () => clearInterval(intervalId);
    }
  },[delay])
}

function App() {
  const [count, setCount]=useState(0);
  const [delay, setDelay]=useState(null);

  useInterval(() => setCount(count + 1), delay);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setDelay(!delay ? 1000 : null)}>{!delay ? 'START' : 'PAUSE'}</button>
      <button onClick={() => setCount(0)}>RESTART</button>
    </>
  );
}

export default App;
