import { useContext } from "react";
import { Context } from "./Context";
import useApp from "./useApp";

import { nanoid } from "nanoid";

function useColumn() {
  const { boards, setBoards } = useContext(Context);
  const { unmountModal } = useApp();

  function addColumn(setData) {
    const newColumn = { name: "", id: nanoid(), tasks: [] };

    setData((prevData) => {
      return {
        ...prevData,
        columns: [...prevData.columns, newColumn],
      };
    });
  }

  function handleColumnChange(e, data, setData) {
    const { value, parentNode } = e.target;

    const updatedColumns = data.columns.map((element) =>
      element.id === parentNode.id
        ? { ...element, name: value.toLowerCase() }
        : element
    );

    setData((prevData) => {
      return { ...prevData, columns: updatedColumns };
    });
  }

  function removeColumn(e, data, setData) {
    const { parentNode } = e.target;

    const updatedColumns = data.columns.filter(
      (element) => element.id !== parentNode.id
    );

    setData((prevData) => {
      return { ...prevData, columns: updatedColumns };
    });
  }

  return { addColumn, handleColumnChange, removeColumn };
}

export default useColumn;
