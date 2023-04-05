import { useState, createContext } from "react";
import boardsData from "../data";
import SelectBoardModal from "../components/modals/SelectBoardModal";
import NewBoardForm from "../components/modals/NewBoardForm";

const Context = createContext();

function ContextProvider({ children }) {
  const [boards, setBoards] = useState(boardsData);
  const [shown, setShown] = useState(false);
  const [modal, setModal] = useState(false);

  function mountModal(target) {
    if (target === "boardSelector") {
      setModal(<SelectBoardModal />);
      setShown(true);
    } else if (target === "newBoard") {
      setModal(<NewBoardForm />);
    }
  }

  function unmountModal() {
    setModal(false);
    setShown(false);
  }

  function createBoard(e, newBoard) {
    e.preventDefault();

    setBoards((prevBoards) => {
      return [...prevBoards, newBoard];
    });

    console.log(newBoard);
    unmountModal();
  }

  function deleteBoard() {
    const [activeBoard] = boards.filter((element) => element.isActive);

    const remainingBoards = boards.filter(
      (element) => element.id !== activeBoard.id
    );

    const updatedBoards = remainingBoards.map((element, index) => {
      return index < 1 ? { ...element, isActive: true } : element;
    });

    setBoards(updatedBoards);
  }

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

    unmountModal();
  }

  return (
    <Context.Provider
      value={{
        boards,
        selectBoard,
        modal,
        mountModal,
        unmountModal,
        shown,
        createBoard,
        deleteBoard,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
