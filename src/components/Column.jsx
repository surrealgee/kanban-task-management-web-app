import styled from "styled-components";
import TaskCard from "./TaskCard";
import { nanoid } from "nanoid";
import useApp from "../hooks/useApp";
import useTask from "../hooks/useTask";

function Column({ name, tasks, id }) {
  const { mountModal } = useApp();
  const { selectTask } = useTask();

  const taskList = tasks.map((element) => {
    const id = nanoid();
    return (
      <TaskCard
        key={id}
        id={id}
        title={element.title}
        subtasks={element.subtasks}
        onClick={(e) => {
          selectTask(e), mountModal("viewTask");
        }}
      />
    );
  });

  return (
    <StyledColumn id={id}>
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
