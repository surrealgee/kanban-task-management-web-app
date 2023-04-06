import { useState, createContext } from "react";
import boardsData from "../data";

const Context = createContext();

function ContextProvider({ children }) {
  const [boards, setBoards] = useState(boardsData);
  const [shown, setShown] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <Context.Provider
      value={{
        boards,
        setBoards,
        modal,
        setModal,
        shown,
        setShown,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
