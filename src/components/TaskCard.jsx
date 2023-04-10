import styled from "styled-components";

function TaskCard({ title, subtasks, id, onClick }) {
  const completed = subtasks.filter((element) => element.isCompleted);

  return (
    <StyledTaskCard className="task" id={id} onClick={onClick}>
      <h3>{title}</h3>
      <p>
        {completed.length} of {subtasks.length} subtasks
      </p>
    </StyledTaskCard>
  );
}

const StyledTaskCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.2);
  border-radius: 8px;
  padding: 1.5em 1em;

  h3 {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.9375rem;
    color: #000112;
    margin: 0;
  }

  p {
    font-family: "Plus Jakarta Sans";
    font-weight: 700;
    font-size: 0.75rem;
    color: #828fa3;
  }
`;

export default TaskCard;
