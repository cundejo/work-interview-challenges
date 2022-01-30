import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);

  return (
    <div>
      <p>Current value is: {value}</p>
      <input type="button" onClick={increment} value="+1" />
      <input type="button" onClick={decrement} value="-1" />
    </div>
  );
};

export default Counter;
