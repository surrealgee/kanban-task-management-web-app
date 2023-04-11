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
    console.log(name);
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

  function createTask(e, data, setData) {
    e.preventDefault();
  }

  return { createTask, handleNameChange, handleStatusChange };
}

export default useTask;
