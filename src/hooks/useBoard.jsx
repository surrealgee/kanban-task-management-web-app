import { useContext } from "react";
import { Context } from "./Context";
import useApp from "./useApp";

function useBoard() {
  const { boards, setBoards } = useContext(Context);
  const { unmountModal } = useApp();

  function editBoard(e, newData) {
    e.preventDefault();

    const updatedBoards = boards.map((element) => {
      return element.id === newData.id ? newData : element;
    });

    setBoards(updatedBoards);

    unmountModal();
  }

  function createBoard(e, newBoard) {
    e.preventDefault();

    setBoards((prevBoards) => {
      return [...prevBoards, newBoard];
    });

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

  function handleNameChange(e, setData) {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return { createBoard, deleteBoard, selectBoard, editBoard, handleNameChange };
}

export default useBoard;
