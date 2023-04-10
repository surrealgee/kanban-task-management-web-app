import styled from "styled-components";

function TextArea({ name, onChange }) {
  return (
    <StyledTextArea>
      <label className="textarea">Description</label>
      <textarea name={name} onChange={onChange}></textarea>
    </StyledTextArea>
  );
}

const StyledTextArea = styled.div`
  margin-top: 1.5em;

  label.textarea {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    color: #828fa3;
  }

  textarea {
    width: 100%;
    height: 135px;
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

export default TextArea;
