import styled from "styled-components";
import BoardSelector from "../BoardSelector";
import BtnNewBoard from "../utils/BtnNewBoard";
import ThemeSelector from "../utils/ThemeSelector";

import useData from "../../hooks/useData";

function SelectBoardModal() {
  const { boardsData } = useData();
  const { boards } = boardsData;

  const boardsList = boards.map((element) => (
    <BoardSelector name={element.name} />
  ));

  return (
    <StyledBackdrop>
      <StyledModal>
        <h3>All Boards ({boards.length})</h3>
        <div>{boardsList}</div>
        <BtnNewBoard />
        <ThemeSelector />
      </StyledModal>
    </StyledBackdrop>
  );
}

const StyledBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: calc(100vh - 64px);
  position: absolute;
  top: 64px;
`;

const StyledModal = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  position: fixed;
  width: 70%;
  height: 322px;
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: 0 auto;

  h3 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.4px;
    color: #828fa3;
    margin: 1em 1.5em;
    text-transform: uppercase;
  }
`;

export default SelectBoardModal;
