import { ChangeEvent, useRef, useState } from "react";
import Button from "../Button";

type Todo = {
  id: number;
  value: string;
  done: boolean;
};

const initialTodo: Todo = {
  id: 1,
  value: "",
  done: false,
};

export default function TodoComponent() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const idRef = useRef(initialTodo.id);
  const inputRef = useRef<HTMLInputElement>(null);

  function onChangeTodo(e: ChangeEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setTodo((prev) => ({ ...prev, value }));
  }

  function onAddTodo() {
    // add todo
    setTasks((prev) => [...prev, todo]);

    // increment id
    idRef.current += 1;

    // reset current todo
    setTodo({ ...initialTodo, id: idRef.current });

    // focus input again
    inputRef.current?.focus();
  }

  function onDone(e: ChangeEvent) {
    const taskId = e.currentTarget.id;

    setTasks((prev) =>
      // mark clicked task as done
      prev.map((task) =>
        task.id === Number(taskId) ? { ...task, done: !task.done } : task
      )
    );
  }

  const numTasksDone = tasks.filter((task) => task.done).length;

  return (
    <div>
      <div>
        <div className="flex gap-4">
          <input
            className="p-2 placeholder:text-slate-400"
            autoFocus
            ref={inputRef}
            value={todo.value}
            onChange={onChangeTodo}
            placeholder="Buy groceries..."
          />
          <Button onClick={onAddTodo}>Add</Button>
        </div>
      </div>
      <div>
        {tasks ? (
          <>
            <h3 className="mb-0">Tasks</h3>
            <div className="text-gray-500 italic">{`Total todos: ${tasks.length}, done: ${numTasksDone}`}</div>
            <div role="list" className="mt-4">
              {tasks.map((task) => (
                <div key={task.id} className="mb-3 " role="listitem">
                  <input
                    id={String(task.id)}
                    type="checkbox"
                    checked={task.done}
                    onChange={onDone}
                  />
                  <label className="ml-3 " htmlFor={String(task.id)}>
                    {task.value}
                  </label>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
