import { useState, createContext } from "react";
import boardsData from "../data";

const Context = createContext();

function ContextProvider({ children }) {
  const [boards, setBoards] = useState(boardsData);
  const [showSelector, setShowSelector] = useState(false);

  function selectBoard(e) {
    let id;
    if (e.target.id) {
      id = e.target.id;
    } else {
      id = e.target.parentNode.id;
    }

    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id === id) {
          return {
            ...board,
            isActive: true,
          };
        } else {
          return {
            ...board,
            isActive: false,
          };
        }
      })
    );

    setShowSelector(false);
  }

  return (
    <Context.Provider
      value={{ boards, selectBoard, showSelector, setShowSelector }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
