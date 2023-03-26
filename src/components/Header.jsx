import styled from "styled-components";

import logoMobile from "../assets/logo-mobile.svg";
import iconChevronDown from "../assets/icon-chevron-down.svg";
import iconAddTask from "../assets/icon-add-task-mobile.svg";
import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";

function Header() {
  return (
    <StyledHeader>
      <img src={logoMobile} alt="kanban logo" />
      <div>
        <h2>Platform Launch</h2>
        <img src={iconChevronDown} alt="down arrow" />
      </div>
      <button>
        <img src={iconAddTask} alt="plus sign" />
      </button>
      <img src={iconVerticalEllipsis} alt="three vertical dots" />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.25em 1em;

  div {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-right: auto;
  }

  h2 {
    font-family: "Plus Jakarta Sans";
    font-size: 1.125rem;
    color: #000112;
    margin: 0;
  }

  button {
    background: #635fc7;
    border-radius: 24px;
    border: none;
    padding: 0.625em 1.125em;
    display: flex;
    align-items: center;
  }
`;

export default Header;
