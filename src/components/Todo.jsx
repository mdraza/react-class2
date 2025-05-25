import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const taskTodo = [
  {
    id: 1,
    task: "Reading Book",
    completed: true,
  },
  {
    id: 2,
    task: "Morning Exercise",
    completed: false,
  },
  {
    id: 3,
    task: "Cooking Food",
    completed: false,
  },
];

const Todo = () => {
  const [task, setTask] = useState(taskTodo);
  const [taskInput, setTaskInput] = useState("");

  const handleAdd = () => {
    const newTask = {
      id: new Date(),
      task: taskInput,
      completed: false,
    };
    setTask((task) => [...task, newTask]);
    setTaskInput("");
  };

  const handleDelete = (id) => {
    setTask((task) => task.filter((task) => task.id !== id));
  };

  const handleUpdate = (id) => {
    setTask((task) =>
      task.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input
          className="p-3 border-2 border-slate-200 w-[50%]"
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter your todo..."
        />
        <button onClick={handleAdd} className="px-6 py-3 bg-slate-200 ml-3">
          Add Todo
        </button>
      </form>

      <br />
      <div className="mt-5 w-[61%]">
        {task.map((task) => (
          <div className=" border-2 border-slate-200 p-3 flex justify-between">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleUpdate(task.id)}
            />
            <p
              className={`text-xl ${
                task.completed ? "line-through text-slate-400" : ""
              }`}
            >
              {task.task}
            </p>
            <button
              onClick={() => handleDelete(task.id)}
              className="px-4 py-2 bg-slate-300"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
