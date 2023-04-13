import styled from "styled-components";
import StatusControl from "../StatusControl";
import Input from "../utils/Input";
import TextArea from "../utils/TextArea";
import SubtaskInput from "../utils/SubtaskInput";
import Button from "../utils/Button";
import ModalBackDrop from "./ModalBackDrop";

import { useState } from "react";

import { nanoid } from "nanoid";
import useTask from "../../hooks/useTask";
import useSubtask from "../../hooks/useSubtask";
import useBoard from "../../hooks/useBoard";

function NewTaskForm() {
  const { setBoards } = useBoard();
  const { createTask, handleNameChange, handleStatusChange } = useTask();
  const { addSubtask, removeSubTask, handleSubtaskChange } = useSubtask();

  const [newTaskData, setNewTaskData] = useState({
    title: "",
    id: nanoid(),
    description: "",
    status: "",
    subtasks: [],
  });

  const subtasks = newTaskData.subtasks.map((element) => {
    return (
      <SubtaskInput
        key={element.id}
        id={element.id}
        value={element.title}
        onChange={(e) => handleSubtaskChange(e, newTaskData, setNewTaskData)}
        onClick={(e) => removeSubTask(e, newTaskData, setNewTaskData)}
      />
    );
  });

  // console.log(newTaskData);

  return (
    <ModalBackDrop>
      <StyledTaskForm onSubmit={(e) => createTask(e, newTaskData)}>
        <h2>Add New Task</h2>
        <Input
          label="Title"
          name="title"
          onChange={(e) => handleNameChange(e, setNewTaskData)}
        />
        <TextArea
          name="description"
          onChange={(e) => handleNameChange(e, setNewTaskData)}
        />
        <div>
          <h3>Subtaks</h3>
          {subtasks}
          <Button
            text="+ Add New Subtask"
            type="button"
            onClick={() => addSubtask(setNewTaskData)}
          />
        </div>
        <StatusControl
          onChange={(e) => handleStatusChange(e, setNewTaskData)}
        />
        <Button text="Create Task" primary />
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
  height: 87vh;
  min-height: 550px;
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

export default NewTaskForm;
