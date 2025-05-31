import { createContext } from "react";

export const InfoContext = createContext(null);

export const InfoProvider = ({ children }) => {
  const myinfo = {
    name: "Muhammad Razaaullah",
    email: "abc@gmail.com",
    phone: 8875847589,
  };
  return (
    <InfoContext.Provider value={{ myinfo }}>{children}</InfoContext.Provider>
  );
};
