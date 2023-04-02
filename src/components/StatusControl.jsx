import styled from "styled-components";

function StatusControl() {
  return (
    <StyledStatus>
      <h3>Current Status</h3>
      <select name="" id="">
        <option value="">Doing</option>
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
