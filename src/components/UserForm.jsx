import { useState } from "react";

function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handlePass(e) {
    console.log(e);
    setPassword(e.target.value);
  }

  return (
    <div className="m-5 p-6 bg-slate-200 rounded w-[400px]">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-3xl font-medium mb-3">User Login</h1>
        <input
          type="text"
          placeholder="Enter username"
          className="p-3 border-2 border-slate-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password"
          className="p-3 border-2 border-slate-300 mt-2"
          value={password}
          onChange={handlePass}
        />
        <button className="px-8 block py-3 rounded bg-indigo-600 text-slate-100 mt-3">
          Login
        </button>
        <br />
        <p>Username: {username}</p>
        <p>Password: {password}</p>
      </form>
    </div>
  );
}

export default UserForm;
