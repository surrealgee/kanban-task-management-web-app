import styled from "styled-components";
import Column from "./Column";

function Board() {
  return (
    <StyledBoard>
      <Column />
      <Column />
      <Column />
    </StyledBoard>
  );
}

const StyledBoard = styled.main`
  min-height: 90vh;
  padding: 0 1em;
  display: flex;
  gap: 1.5em;
  overflow-x: scroll;
`;

export default Board;
