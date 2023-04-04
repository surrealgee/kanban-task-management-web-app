import styled from "styled-components";
import Column from "./Column";
import { useContext } from "react";
import { Context } from "../hooks/Context";

function Board() {
  const { boards } = useContext(Context);
  const [activeBoard] = boards.filter((element) => element.isActive);

  const columnsList = activeBoard.columns.map((element) => (
    <Column
      key={element.id}
      id={element.id}
      name={element.name}
      tasks={element.tasks}
    />
  ));

  return <StyledBoard>{columnsList}</StyledBoard>;
}

const StyledBoard = styled.main`
  min-height: 90vh;
  padding: 0 1em;
  display: flex;
  gap: 1.5em;
  overflow-x: auto;
`;

export default Board;
