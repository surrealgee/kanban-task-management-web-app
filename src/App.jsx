import { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Board from "./components/Board";
import TaskModal from "./components/TaskModal";
import ModalBackDrop from "./components/ModalBackDrop";

function App() {
  return (
    <StyledApp>
      <Header />
      <Board />
      <ModalBackDrop>
        <TaskModal />
      </ModalBackDrop>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default App;
