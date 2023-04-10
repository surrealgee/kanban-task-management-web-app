import { useContext } from "react";
import { Context } from "./Context";
import useApp from "./useApp";
import { nanoid } from "nanoid";

function useTask() {
  const { boards } = useContext(Context);
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

  function selectTask(e) {
    let taskId;
    let columnId;

    if (e.target.id) {
      taskId = e.target.id;
      columnId = e.target.parentNode.parentNode.id;
    } else {
      taskId = e.target.parentNode.id;
      columnId = e.target.parentNode.parentNode.parentNode.id;
    }

    const [targetColumn] = activeBoard.columns.filter(
      (element) => element.id === columnId
    );

    const [targetTask] = targetColumn.tasks.filter(
      (element) => element.id === taskId
    );

    console.log(targetColumn);
    console.log(taskId);
    console.log(targetTask);
  }

  return { selectTask, handleNameChange };
}

export default useTask;
