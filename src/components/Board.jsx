import styled from "styled-components";
import Column from "./Column";
import useData from "../hooks/useData";

function Board() {
  const { boardsData } = useData();
  const { boards } = boardsData;

  const columnsList = boards[0].columns.map((element) => (
    <Column name={element.name} tasks={element.tasks} />
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
