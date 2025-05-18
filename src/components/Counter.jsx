import { useState, Fragment } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  function handleIncrementCount() {
    setCount(count + 1);
  }
  function handleDecrementCount() {
    setCount(count - 1);
  }

  return (
    <>
      <h2 className="m-10 text-3xl font-semibold">Welcome React</h2>
      <div className="m-5 p-6 bg-slate-200 rounded w-[400px]">
        <h1 className="text-2xl font-medium">Count: {count}</h1>
        <button
          className="p-3 bg-slate-400 mt-3"
          onClick={handleIncrementCount}
        >
          Increment Count
        </button>
        <button
          className="p-3 bg-slate-400 mt-3 ml-2"
          onClick={handleDecrementCount}
        >
          Decrement Count
        </button>
      </div>
    </>
  );
}

export default Counter;
