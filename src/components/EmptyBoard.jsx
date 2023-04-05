import styled from "styled-components";
import BtnAddColumn from "./utils/BtnAddColumn";

function EmptyBoard() {
  return (
    <StyledBoard>
      <p>This board is empty. Create a new column to get started.</p>
      <BtnAddColumn />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  padding: 13em 1em 0;
  text-align: center;

  p {
    padding: 0 1em;
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: #828fa3;
  }
`;

export default EmptyBoard;
