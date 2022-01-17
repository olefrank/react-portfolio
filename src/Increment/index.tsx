import IncrementComponent from "../components/Increment";

export default function Increment() {
  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-8 flex flex-col items-center justify-start px-4">
        <IncrementComponent />
      </div>
      <div className="col-span-4 px-4">
        <h1>Increment</h1>
        <h3>Description</h3>
        <p>Make a button that increments an integer when clicked</p>

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
