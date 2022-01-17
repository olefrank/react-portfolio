import TodoComponent from "../components/Todo";

export default function Todo() {
  return (
    <div className="grid grid-cols-12 divide-x">
      <div className="col-span-8 flex flex-col items-center justify-start px-4">
        <TodoComponent />
      </div>
      <div className="col-span-4 px-4">
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
