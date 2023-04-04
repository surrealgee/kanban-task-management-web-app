import styled from "styled-components";
import IconBoard from "../assets/icon-board.svg";
import IconBoardWhite from "../assets/icon-board-white.svg";

function BoardSelector({ name, selected, id, onClick }) {
  return (
    <StyledSelector selected={selected} id={id} onClick={onClick}>
      <img src={selected ? IconBoardWhite : IconBoard} alt="" />
      <p>{name}</p>
    </StyledSelector>
  );
}

const StyledSelector = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  gap: 0.75em;
  width: 90%;
  background-color: ${({ selected }) => (selected ? "#635FC7" : "none")};
  border-radius: 0px 100px 100px 0px;
  color: ${({ selected }) => (selected ? "#FFFFFF" : "#828FA3")};

  p {
    font-family: "Plus Jakarta Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
  }
`;

export default BoardSelector;
