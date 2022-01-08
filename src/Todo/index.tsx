import { ChangeEvent, useRef, useState } from "react";

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

export default function Todos() {
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

  function onDone(id: number) {
    setTasks((prev) =>
      // mark clicked task as done
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  const numTasksDone = tasks.filter((task) => task.done).length;

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Add todo</h1>
        <div>
          <input
            autoFocus
            ref={inputRef}
            value={todo.value}
            onChange={onChangeTodo}
          />
          <button onClick={onAddTodo}>Add</button>
        </div>
      </div>
      <div>
        <ul>
          <h1 className="text-3xl font-bold underline">Tasks</h1>
          {tasks ? (
            <>
              <p>{`Total todos: ${tasks.length}, done: ${numTasksDone}`}</p>
              {tasks.map((task) => (
                <li
                  aria-label={task.value}
                  key={task.id}
                  onClick={() => onDone(task.id)}
                  className={task.done ? "line-through" : undefined}
                >
                  {task.value}
                </li>
              ))}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
}
