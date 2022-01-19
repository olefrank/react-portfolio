import TodoComponent from "../components/Todo";

export default function Todo() {
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <div>
        <h2 className="text-center">Todo list</h2>
        {/* <h4>Description</h4>
        <p>Make a Todo component to add and view todo tasks</p>
        <h4>Use cases</h4>
        <ul className="text-base">
          <li>Existing tasks are shown in a list</li>
          <li>New tasks can be added to the list</li>
          <li>Tasks can be marked as done</li>
          <li>Show total number of tasks and number of done tasks</li>
        </ul> */}
      </div>
      <div>
        <TodoComponent />
      </div>
    </div>
  );
}
