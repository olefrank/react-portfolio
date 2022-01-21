import IncrementComponent from "../components/Increment";

export default function Increment() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div>
        <h2 className="text-center">Increment</h2>
      </div>
      <div>
        <IncrementComponent />
      </div>
    </div>
  );
}
