import styled from "styled-components";
import Column from "./Column";
import { useContext } from "react";
import { Context } from "../hooks/Context";
import EmptyBoard from "./EmptyBoard";

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

  console.log(columnsList);

  return (
    <StyledBoard>
      {columnsList.length > 0 ? columnsList : <EmptyBoard />}
    </StyledBoard>
  );
}

const StyledBoard = styled.main`
  background: #f4f7fd;
  min-height: 90vh;
  padding: 0 1em;
  display: flex;
  gap: 1.5em;
  overflow-x: auto;
`;

export default Board;
