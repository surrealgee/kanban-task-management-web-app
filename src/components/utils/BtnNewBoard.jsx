import styled from "styled-components";
import IconBoard from "../../assets/icon-board.svg";
import IconBoardBlue from "../../assets/icon-board-blue.svg";

function BtnNewBoard({ onClick }) {
  return (
    <StyledBtn onClick={onClick}>
      <img src={IconBoardBlue} alt="" />
      <p>+ Create New Board</p>
    </StyledBtn>
  );
}

const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  gap: 0.75em;
  width: 90%;
  border-radius: 0px 100px 100px 0px;
  color: #635fc7;
  cursor: pointer;
  background: none;
  border: none;

  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.6;
  }
`;

export default BtnNewBoard;
