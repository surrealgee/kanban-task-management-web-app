import { useState, useContext } from "react";
import styled from "styled-components";
import { Context } from "./hooks/Context";

import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const { modal } = useContext(Context);
  return (
    <StyledApp>
      <Header />
      <Board />
      {modal && modal}
    </StyledApp>
  );
}

const StyledApp = styled.div`
  min-height: 100vh;
  position: relative;
`;

export default App;
