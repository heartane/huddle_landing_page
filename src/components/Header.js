import contents from "../contents/contents";
import { Button } from "./styles/Button";
import { Image, Logo, Nav, StyledHeader } from "./styles/StyledHeader.js";
import { Container } from "./styles/utils/Container";
import { Flex } from "./styles/utils/Flex";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="Logo" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>{contents.header.title}</h1>
            <p>{contents.header.text}</p>
            <Button bg="hsl(322, 100%, 66%)" color="#fff" padding="20px 70px">
              Get Started For Free
            </Button>
          </div>
          <Image src={`./images/${contents.header.image}`} alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
