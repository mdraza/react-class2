import React from "react";
import CompB from "./CompB";

const CompA = () => {
  return (
    <div className="my-5 text-2xl">
      Component A
      <CompB />
    </div>
  );
};

export default CompA;
