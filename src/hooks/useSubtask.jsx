import { useContext } from "react";
import { Context } from "./Context";
import useApp from "./useApp";
import { nanoid } from "nanoid";

function useSubtask() {
  function addSubtask(setData) {
    const newSubtask = { title: "", id: nanoid(), isCompleted: false };

    setData((prevData) => {
      return {
        ...prevData,
        subtasks: [...prevData.subtasks, newSubtask],
      };
    });
  }

  function removeSubTask(e, data, setData) {
    const { parentNode } = e.target;

    const updatedSubtasks = data.subtasks.filter(
      (element) => element.id !== parentNode.id
    );

    setData((prevData) => {
      return { ...prevData, subtasks: updatedSubtasks };
    });
  }

  function handleSubtaskChange(e, data, setData) {
    const { value, parentNode } = e.target;

    const updatedSubtasks = data.subtasks.map((element) =>
      element.id === parentNode.id ? { ...element, title: value } : element
    );

    setData((prevData) => {
      return { ...prevData, subtasks: updatedSubtasks };
    });
  }

  return { addSubtask, removeSubTask, handleSubtaskChange };
}

export default useSubtask;
