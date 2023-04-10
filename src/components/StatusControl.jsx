import styled from "styled-components";
import { Context } from "../hooks/Context";
import { useContext } from "react";

function StatusControl() {
  const { boards } = useContext(Context);
  const [activeBoard] = boards.filter((element) => element.isActive);

  const columns = activeBoard.columns.map((element) => {
    return (
      <option key={element.id} value={element.name}>
        {element.name.toUpperCase()}
      </option>
    );
  });

  return (
    <StyledStatus>
      <h3>Current Status</h3>
      <select name="" id="">
        {columns}
      </select>
    </StyledStatus>
  );
}

const StyledStatus = styled.div`
  select {
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    background: none;
    padding: 0.5em;
  }
`;

export default StatusControl;
