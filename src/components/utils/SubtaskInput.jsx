import styled from "styled-components";
import iconCross from "../../assets/icon-cross.svg";

function SubtaskInput({ id, value, onChange, onClick }) {
  return (
    <StyleSubtaskInput className="subtask-input" id={id}>
      <input
        type="text"
        placeholder="e. g. Make coffee"
        value={value}
        onChange={onChange}
      />
      <button onClick={onClick} type="button">
        <img src={iconCross} alt="an x icon" />
      </button>
    </StyleSubtaskInput>
  );
}

const StyleSubtaskInput = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  input {
    flex-basis: 90%;
    height: 40px;
    outline: none;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    background: none;
    padding: 0.5em;

    font-family: "Plus Jakarta Sans";
    font-weight: 500;
    font-size: 13px;
    line-height: 1.77;
    color: #000112;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    pointer-events: none;
  }
`;

export default SubtaskInput;
