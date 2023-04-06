import styled from "styled-components";
import ControlledInput from "../utils/ControlledInput";
import SubtaskInput from "../utils/SubtaskInput";
import Button from "../utils/Button";
import ModalBackDrop from "./ModalBackDrop";

import { useState, useContext, useEffect } from "react";
import { Context } from "../../hooks/Context";
import useBoard from "../../hooks/useBoard";
import useColumn from "../../hooks/useColumn";

function EditBoardForm() {
  const [targetBoard, setTargetBoard] = useState("");

  const { boards } = useContext(Context);
  const [activeBoard] = boards.filter((element) => element.isActive);

  const { editBoard, handleNameChange } = useBoard();
  const { addColumn, handleColumnChange, removeColumn } = useColumn();

  let columns = null;

  if (targetBoard) {
    columns = targetBoard.columns.map((element) => {
      return (
        <SubtaskInput
          key={element.id}
          id={element.id}
          value={element.name}
          onChange={(e) => handleColumnChange(e, targetBoard, setTargetBoard)}
          onClick={(e) => removeColumn(e, targetBoard, setTargetBoard)}
        />
      );
    });
  }

  useEffect(() => {
    console.log("Effect Ran");
    const target = { ...activeBoard };
    setTargetBoard(target);
  }, [boards]);

  return (
    <ModalBackDrop>
      <StyledBoardForm onSubmit={(e) => editBoard(e, targetBoard)}>
        <h2>Edit Board</h2>
        <ControlledInput
          label="Board Name"
          value={targetBoard.name}
          onChange={(e) => handleNameChange(e, setTargetBoard)}
        />
        <div>
          <h3>Board Columns</h3>
          {columns && columns}
          <Button
            text="+ Add New Column"
            type="button"
            onClick={() => addColumn(setTargetBoard)}
          />
        </div>
        <Button text="Save changes" primary />
      </StyledBoardForm>
    </ModalBackDrop>
  );
}

const StyledBoardForm = styled.form`
  background: #fff;
  padding: 1.5em;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  height: 30vh;
  min-height: 415px;
  border-radius: 6px;

  .title-container {
    display: flex;
    align-items: center;
  }

  h2 {
    font-family: "Plus Jakarta Sans";
    font-size: 1.125rem;
    line-height: 1.3;
    color: #000112;
    margin: 0;
  }

  p {
    font-family: "Plus Jakarta Sans";
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.77;
    color: #828fa3;
    margin-top: 2em;
  }

  h3 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 15px;
    color: #828fa3;
    margin-top: 1.5em;
  }

  .subtask {
    display: flex;
    gap: 1em;
    padding: 1em 0.5em;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    flex-basis: 16px;
    margin: 0;
  }

  label {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 15px;
    color: #000112;
    flex-basis: 80%;
  }

  input:checked + label {
    text-decoration-line: line-through;
    color: #000112;
    opacity: 0.5;
  }
`;

export default EditBoardForm;
