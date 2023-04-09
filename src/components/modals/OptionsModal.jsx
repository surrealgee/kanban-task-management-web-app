import styled from "styled-components";
import useApp from "../../hooks/useApp";

function OptionsModal() {
  const { mountModal } = useApp();
  return (
    <StyledModal>
      <button className="btn edit" onClick={() => mountModal("editBoard")}>
        Edit Board
      </button>
      <button className="btn delete" onClick={() => mountModal("deleteBoard")}>
        Delete Board
      </button>
    </StyledModal>
  );
}

const StyledModal = styled.div`
  width: 192px;
  height: 94px;
  top: 75px;
  left: 175px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;

  .btn {
    text-align: left;
    border: none;
    background: none;
    font-family: "Plus Jakarta Sans";
    font-weight: 500;
    font-size: 0.8125rem;
    color: #828fa3;
  }

  .delete {
    color: #ea5555;
  }
`;

export default OptionsModal;
