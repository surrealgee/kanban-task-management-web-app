import styled from "styled-components";

function Button({ text, type, primary, danger, onClick }) {
  let bgColor;
  let color = "#fff";

  if (danger) {
    bgColor = "#EA5555";
  } else if (primary) {
    bgColor = "#635FC7";
  } else {
    bgColor = "rgba(99, 95, 199, 0.1)";
    color = "#635FC7";
  }

  return (
    <StyledBtn bgColor={bgColor} color={color} type={type} onClick={onClick}>
      {text}
    </StyledBtn>
  );
}

const StyledBtn = styled.button`
  width: 100%;
  font-family: "Plus Jakarta Sans";
  line-height: 1.77;
  text-align: center;
  display: block;
  font-weight: 700;
  border: none;
  padding: 0.6em 6.6em;
  border-radius: 20px;
  margin: 2em auto;
  font-size: 0.75rem;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  cursor: pointer;
`;

export default Button;
