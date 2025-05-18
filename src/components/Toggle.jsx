import { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div
      className={`m-5 p-6 rounded w-[400px] ${
        toggle ? "bg-green-400" : "bg-red-400"
      }`}
    >
      <h1 className="text-3xl font-bold mb-2">{toggle ? "ON" : "OFF"}</h1>
      <button
        onClick={handleToggle}
        className="px-5 py-3 text-slate-50 rounded bg-indigo-500"
      >
        Switch to {toggle ? "OFF" : "ON"} Mode
      </button>
    </div>
  );
}

export default Toggle;
