import styled from "styled-components";

function ModalBackDrop({ children }) {
  return <StyledModalBackDrop>{children}</StyledModalBackDrop>;
}

const StyledModalBackDrop = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export default ModalBackDrop;
