import React, { useContext } from "react";
import { InfoContext } from "../context/InfoContext";

const CompC = () => {
  const info = useContext(InfoContext);
  console.log(info);
  return (
    <div className="my-5">
      <h1 className="text-2xl font-medium">Component C</h1>
      <div className=" bg-slate-200 p-5">
        <h2>Name: {info.myinfo.name}</h2>
        <p>Email: {info.myinfo.email}</p>
        <p>Phone: {info.myinfo.phone}</p>
      </div>
    </div>
  );
};

export default CompC;
