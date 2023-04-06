import styled from "styled-components";

function Input({ label, onChange, value }) {
  return (
    <StyledInput>
      <label className="input">{label}</label>
      <input
        type="text"
        placeholder="e. g. Take coffee break"
        onChange={onChange}
        name="name"
        value={value}
      />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  margin-top: 1.5em;

  label.input {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    color: #828fa3;
  }

  input[type="text"] {
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    background: none;
    padding: 0.5em;
    margin-top: 0.5em;

    font-family: "Plus Jakarta Sans";
    font-weight: 500;
    font-size: 13px;
    line-height: 1.77;
    color: #000112;
  }
`;

export default Input;
