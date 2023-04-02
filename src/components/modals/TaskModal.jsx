import styled from "styled-components";

import iconVerticalEllipsis from "../assets/icon-vertical-ellipsis.svg";

function TaskModal() {
  return (
    <StyledTaskModal>
      <div className="title-container">
        <h2>
          Research pricing points of various competitors and trial different
          business models
        </h2>
        <img src={iconVerticalEllipsis} alt="three vertical dots" />
      </div>
      <p>
        We know what we're planning to build for version one. Now we need to
        finalise the first pricing model we'll use. Keep iterating the subtasks
        until we have a coherent proposition.
      </p>
      <div className="subtaks-container">
        <h3>Subtaks (2 of 3)</h3>
        <div className="subtask">
          <input type="checkbox" />
          <label htmlFor="#">
            Research competitor pricing and business models
          </label>
        </div>
        <div className="subtask">
          <input type="checkbox" />
          <label htmlFor="#">
            Outline a business model that works for our solution
          </label>
        </div>
        <div className="subtask">
          <input type="checkbox" />
          <label htmlFor="#">
            Outline a business model that works for our solution
          </label>
        </div>
        <div className="status-container">
          <h3>Current Status</h3>
          <select name="" id="">
            <option value="">Doing</option>
          </select>
        </div>
      </div>
    </StyledTaskModal>
  );
}

const StyledTaskModal = styled.div`
  background: #fff;
  padding: 1.5em;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 90%;
  height: 50vh;
  min-height: 550px;
  border-radius: 6px;

  .title-container {
    display: flex;
    align-items: center;
  }

  h2 {
    font-family: "Plus Jakarta Sans";
    font-size: 1.125rem;
    line-height: 1.3;
    color: #000112;
    margin: 0;
  }

  p {
    font-family: "Plus Jakarta Sans";
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 1.77;
    color: #828fa3;
    margin-top: 2em;
  }

  h3 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 15px;
    color: #828fa3;
  }

  .subtask {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 1em 0.5em;
  }

  input {
    width: 16px;
    height: 16px;
    flex-basis: 16px;
    margin: 0;
  }

  .subtask label {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 15px;
    color: #000112;
    flex-basis: 80%;
  }

  input:checked + label {
    text-decoration-line: line-through;
    color: #000112;
    opacity: 0.5;
  }

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

export default TaskModal;
