import styled from "styled-components";
import Button from "./Button";

function DeleteTaskPrompt() {
  return (
    <StyledTaskForm>
      <h2>Delete this Task?</h2>
      <p>
        Are you sure you want to delete the ‘Build settings UI’ task and its
        subtasks? This action cannot be reversed.
      </p>
      <Button text="Delete" danger />
      <Button text="Cancel" />
    </StyledTaskForm>
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
  min-height: 285px;
  border-radius: 6px;

  h2 {
    font-family: "Plus Jakarta Sans";
    font-size: 1.125rem;
    line-height: 1.3;
    color: #ea5555;
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
`;

export default DeleteTaskPrompt;
