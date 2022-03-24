import React from "react";
import AppContextProvider from "./app-context";

const Providers = ({ children }) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export default Providers;
