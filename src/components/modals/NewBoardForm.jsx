import { useState } from "react";
import styled from "styled-components";
import Input from "../utils/Input";
import SubtaskInput from "../utils/SubtaskInput";
import Button from "../utils/Button";
import ModalBackDrop from "./ModalBackDrop";

import { Context } from "../../hooks/Context";
import { useContext } from "react";
import { nanoid } from "nanoid";

function NewBoardForm() {
  const { createBoard } = useContext(Context);

  const [newBoardData, setNewBoardData] = useState({
    name: "",
    isActive: false,
    id: nanoid(),
    columns: [],
  });

  console.log(newBoardData);

  function handleNewBoardChange(e) {
    const { name, value } = e.target;
    setNewBoardData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <ModalBackDrop onClick={null}>
      <StyledTaskForm onSubmit={(e) => createBoard(e, newBoardData)}>
        <h2>Add New Board</h2>
        <Input
          label="Board Name"
          onChange={handleNewBoardChange}
          value={newBoardData}
        />
        <div>
          <h3>Board Columns</h3>
          <SubtaskInput />
          <SubtaskInput />
          <Button text="+ Add New Column" type="button" />
        </div>
        <Button text="Create New Board" primary />
      </StyledTaskForm>
    </ModalBackDrop>
  );
}

const StyledTaskForm = styled.form`
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

export default NewBoardForm;
