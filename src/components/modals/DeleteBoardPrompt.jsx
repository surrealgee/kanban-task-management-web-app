import styled from "styled-components";
import Button from "../utils/Button";
import ModalBackDrop from "./ModalBackDrop";
import { useContext } from "react";
import { Context } from "../../hooks/Context";
import useApp from "../../hooks/useApp";
import useBoard from "../../hooks/useBoard";

function DeleteBoardPrompt() {
  const { boards } = useContext(Context);
  const [activeBoard] = boards.filter((element) => element.isActive);
  const { unmountModal } = useApp();
  const { deleteBoard } = useBoard();
  return (
    <ModalBackDrop>
      <StyledTaskForm
        onSubmit={(e) => {
          deleteBoard(e), unmountModal();
        }}
      >
        <h2>Delete this Board?</h2>
        <p>
          Are you sure you want to delete <strong>{activeBoard.name} </strong>
          board? This action will remove all columns and tasks and cannot be
          reversed.
        </p>
        <Button text="Delete" danger />
        <Button text="Cancel" type="button" onClick={() => unmountModal()} />
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

export default DeleteBoardPrompt;
