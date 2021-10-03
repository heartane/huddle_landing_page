import { Button } from "./styles/Button";
import { StyledBox } from "./styles/StyledBox";

export default function Box() {
  return (
    <StyledBox>
      <div>
        <h2>Ready To Build Your Community?</h2>
        <Button bg="hsl(322, 100%, 66%)" color="#fff" padding="20px 70px">
          Get Started For Free
        </Button>
      </div>
    </StyledBox>
  );
}
