import TodoComponent from "../components/Todo";

export default function Todo() {
  return (
    <div className="grid grid-cols-2 gap-8 divide-x">
      <div className="flex flex-col items-center justify-start">
        <TodoComponent />
      </div>
      <div className="pl-8">
        <h1>Todo</h1>
        <h3>Description</h3>
        <p>Make a Todo component to add and view todo tasks</p>

        <h3>Use cases</h3>
        <ul>
          <li>Existing tasks are shown in a list</li>
          <li>New tasks can be added to the list</li>
          <li>Tasks can be marked as done</li>
          <li>Show total number of tasks and number of done tasks</li>
        </ul>
      </div>
    </div>
  );
}
