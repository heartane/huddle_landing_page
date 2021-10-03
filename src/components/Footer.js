import SocialIcons from "./SocialIcons";
import { Attribution, StyledFooter } from "./styles/StyledFooter";
import { Container } from "./styles/utils/Container";
import { Flex } from "./styles/utils/Flex";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <a href="#">
          <img src="./images/logo_white.svg" alt="logo" width="200px" />
        </a>
        <Flex alignItems="flex-start">
          <ul>
            <li>
              <img src="./images/icon-location.svg" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              <img src="./images/icon-phone.svg" />
              +1-543-123-4567
            </li>
            <li>
              <img src="./images/icon-email.svg" />
              example@huddle.com
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              {" "}
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <SocialIcons />
        </Flex>
        <p> &copy; Copyright 2018 Huddle. All rights reserved.</p>
        <Attribution>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/heartane?tab=repositories">Rami</a>.
        </Attribution>
      </Container>
    </StyledFooter>
  );
}
