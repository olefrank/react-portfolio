import { useState } from "react";
import Button from "../components/Button";

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
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-sm border border-gray-400 flex flex-col items-center justify-center">
        <h1 className="m-0 mb-6 font-normal">Value: {value}</h1>
        <div className="flex gap-2">
          <Button onClick={onIncrement}>
            <span className="font-light">Increment</span>
          </Button>
          <Button onClick={onReset}>
            <span className="font-light">Reset</span>
          </Button>
        </div>
      </div>
      <div>
        <h1>Increment</h1>
        <h3>Description</h3>
        <p>Make a button that increments an integer when clicked.</p>

        <h3>Use cases</h3>
        <ul>
          <li>Counter should start out with value '0'</li>
          <li>User should be able to increment counter by 1</li>
          <li>User should be able to reset counter to '0'</li>
        </ul>
      </div>
    </div>
  );
}
