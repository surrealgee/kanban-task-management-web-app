import { useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <StyledApp>
      <Header />
      <Board />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
`;

export default App;
