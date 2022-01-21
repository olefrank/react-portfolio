import TodoComponent from "../components/Todo";

export default function Todo() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div>
        <h2 className="text-center">Todo list</h2>
      </div>
      <div>
        <TodoComponent />
      </div>
    </div>
  );
}
