import styled from "styled-components";
import TaskCard from "./TaskCard";
import { nanoid } from "nanoid";

function Column({ name, tasks }) {
  const taskList = tasks.map((element) => (
    <TaskCard
      key={nanoid()}
      title={element.title}
      subtasks={element.subtasks}
    />
  ));

  return (
    <StyledColumn>
      <h2>
        {name.toUpperCase()} ({tasks.length})
      </h2>
      <div className="tasks-grid">{taskList}</div>
    </StyledColumn>
  );
}

const StyledColumn = styled.div`
  margin-top: 1.5em;

  h2 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    letter-spacing: 2.4px;
    color: #828fa3;
    position: relative;
    padding-left: 2em;
  }

  h2::before {
    content: "";
    background: #49c4e5;
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    left: 3px;
    top: 0;
  }

  .tasks-grid {
    margin-top: 1.5em;
    display: grid;
    grid-template-columns: 280px;
    grid-auto-rows: 88px;
    gap: 1.25em;
  }
`;

export default Column;
