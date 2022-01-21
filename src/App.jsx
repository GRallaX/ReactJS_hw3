import "./App.css";
import React, { useReducer } from "react";
import { FirstForm } from "./RegForms/form";
import { initalState, reducer } from "./reducer";

export const InputContext = React.createContext();

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <InputContext.Provider value={{ state, dispatch }}>
      <div>
        <FirstForm />
      </div>
    </InputContext.Provider>
  );
};

export default Login;
