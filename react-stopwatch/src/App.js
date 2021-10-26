import {useEffect, useReducer} from "react";

const getMinutesAndSeconds = (totalOfSeconds) => {
  const mins = String(parseInt(totalOfSeconds / 60)).padStart(2,'0');
  const secs = String(totalOfSeconds % 60).padStart(2,'0');
  return {mins, secs};
}

const initialState = {
  isRunning: false,
  seconds: 0,
  marks: [],
}

const reducer = (state, action) => {
  switch (action.type){
    case 'START':
      return {...state, isRunning: true};
    case 'STOP':
      return {...state, isRunning: false};
    case 'RESET':
      return {...initialState};
    case 'MARK':
      return {...state, marks: [...state.marks, state.seconds]};
    case 'TICK':
      return {...state, seconds: state.seconds + 1};
    default:
      throw new Error('Unhandled reducer action');
  }
}

const Timer = ({seconds}) => {
  const {mins, secs} = getMinutesAndSeconds(seconds);
  return <span>{mins}:{secs}</span>
}

const Marks = ({marks}) => {
  return (
    <ul>
      {marks.map((m, i) => <li key={i}><Timer seconds={m}/></li>)}
    </ul>
  );
}

const useStopwatch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(state.isRunning){
      const id = setInterval(() => dispatch({type: 'TICK'}), 1000);
      return () => clearInterval(id);
    }
  }, [state.isRunning])

  return [state, dispatch]
}

function App() {
  const [state, dispatch] = useStopwatch();

  return (
    <div>
      <Timer seconds={state.seconds} />
      <div>
        <button onClick={() => dispatch({type: 'START'})}>Start</button>
        <button onClick={() => dispatch({type: 'STOP'})}>Stop</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        <button onClick={() => dispatch({type: 'MARK'})}>Mark</button>
      </div>
      <Marks marks={state.marks} />
    </div>
  );
}

export default App;
