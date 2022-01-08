import { useState } from "react";

export default function Increment() {
  const [value, setValue] = useState(0);

  // handle click on Increment
  function onIncrement() {
    setValue((prev) => prev + 1);
  }

  // handle click on Reset
  function onReset() {
    setValue(0);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Value: {value}</h1>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}
