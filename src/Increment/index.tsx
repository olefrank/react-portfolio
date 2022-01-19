import IncrementComponent from "../components/Increment";

export default function Increment() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div>
        <h2 className="text-center">Increment</h2>
        {/* <h4>Description</h4>
        <p>Make a button that increments an integer when clicked</p>
        <h4>Use cases</h4>
        <ul className="text-base">
          <li>Counter should start out with value '0'</li>
          <li>User should be able to increment counter by 1</li>
          <li>User should be able to reset counter to '0'</li>
        </ul> */}
      </div>
      <div>
        <IncrementComponent />
      </div>
    </div>
  );
}
