import { useState } from "react";
import Button from "../Button";

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
      <h2 className="m-0 mb-6 font-normal">Value: {value}</h2>
      <div className="flex gap-2">
        <Button onClick={onIncrement}>
          <span className="font-light">Increment</span>
        </Button>
        <Button onClick={onReset}>
          <span className="font-light">Reset</span>
        </Button>
      </div>
    </div>
  );
}
