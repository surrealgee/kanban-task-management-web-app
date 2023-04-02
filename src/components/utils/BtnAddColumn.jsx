import styled from "styled-components";

function BtnAddColumn() {
  return <StyledBtn>+ Add New Column</StyledBtn>;
}

const StyledBtn = styled.button`
  border: none;
  background: #635fc7;
  border-radius: 24px;
  font-family: "Plus Jakarta Sans";
  font-weight: 700;
  font-size: 0.93.75rem;
  color: #ffffff;
  padding: 1em 1.125em;
`;

export default BtnAddColumn;
