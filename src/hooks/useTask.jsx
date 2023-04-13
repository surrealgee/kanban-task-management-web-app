import { useContext } from "react";
import { Context } from "./Context";
import useApp from "./useApp";
import { nanoid } from "nanoid";

function useTask() {
  const { boards, setBoards } = useContext(Context);
  const { unmountModal } = useApp();
  const [activeBoard] = boards.filter((element) => element.isActive);

  function handleNameChange(e, setData) {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleStatusChange(e, setData) {
    const { name, value } = e.target;

    setData((prevData) => {
      return {
        ...prevData,
        [name]: value.toLowerCase(),
      };
    });
  }

  function createTask(e, data) {
    e.preventDefault();

    const updtatedColumns = activeBoard.columns.map((column) => {
      return column.name === data.status
        ? { ...column, tasks: [...column.tasks, data] }
        : column;
    });

    const updatedBoard = { ...activeBoard, columns: updtatedColumns };

    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        return board.id === updatedBoard.id ? { ...updatedBoard } : board;
      });
    });

    unmountModal();
  }

  return { createTask, handleNameChange, handleStatusChange };
}

export default useTask;
