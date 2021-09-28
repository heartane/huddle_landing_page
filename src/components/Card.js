import { StyledCard } from "./styles/StyledCard";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <StyledCard id={id}>
      <div>
        <img src={`./images/${image}`} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </StyledCard>
  );
}
