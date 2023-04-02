import styled from "styled-components";
import lightIcon from "../../assets/icon-light-theme.svg";
import darkIcon from "../../assets/icon-dark-theme.svg";

function ThemeSelector() {
  return (
    <StyleSelector>
      <img src={lightIcon} alt="" />
      <div className="toggler">
        <input type="checkbox" name="" id="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
      <img src={darkIcon} alt="" />
    </StyleSelector>
  );
}

const StyleSelector = styled.div`
  width: 90%;
  margin: 1em auto;
  background: #f4f7fd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5em;
  padding: 1em;

  .toggler {
    position: relative;
    width: 40px;
    height: 20px;
  }

  label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 20px;
    border-radius: 12px;
    background: #635fc7;
    cursor: pointer;
    padding: 5px;
  }

  label::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    background-color: #fff;
    position: absolute;
    transition: 0.2s;
    top: 2.5px;
  }

  input {
    opacity: 0;
    border: none;
    outline: none;
  }

  input:checked + label::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin-left: 17px;
    transition: 0.2s;
  }
`;

export default ThemeSelector;
