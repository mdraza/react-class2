import React from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import UserForm from "./components/UserForm";
import HookUseEffect from "./components/HookUseEffect";
import Todo from "./components/Todo";
import Counter2 from "./components/Counter2";

function App() {
  // const name = "Muhammad Razaaullah";
  const myinfo = {
    name: "Muhammad Razaaullah",
    email: "abc@gmail.com",
    phone: 8875847589,
  };
  return (
    <div>
      {/* <Info info={myinfo} />
      <Student>
        <h1>Name: Latif</h1>
        <p>Email: latif@gmail.com</p>
      </Student>
      <Counter />
      <Toggle />
      <UserForm /> */}
      {/* <HookUseEffect /> */}
      {/* <h1>Count: 0</h1>
      <Counter2 /> */}
      <Todo />
    </div>
  );
}

function Info({ info }) {
  console.log(info);
  const { name, email, phone } = info;
  return (
    <div className="m-5 p-6 bg-slate-200 rounded w-[300px]">
      <h1 className="font-medium">Name: {name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

function Student({ children }) {
  return (
    <div className="m-5 p-6 bg-slate-300 rounded w-[300px]">{children}</div>
  );
}

export default App;
