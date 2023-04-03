import { useState } from "react";
import useData from "./hooks/useData";
import styled from "styled-components";

import Header from "./components/Header";
import Board from "./components/Board";
import SelectBoardModal from "./components/modals/SelectBoardModal";

function App() {
  // const { boards } = useData();
  return (
    <StyledApp>
      <Header />
      <Board />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default App;
