import { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Board from "./components/Board";
import SelectBoardModal from "./components/modals/SelectBoardModal";

function App() {
  return (
    <StyledApp>
      <Header />
      <Board />
      <SelectBoardModal />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default App;
