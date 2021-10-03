import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/StyledSocialIcons";

export default function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/">
          <FaInstagram />
        </a>
      </li>
    </StyledSocialIcons>
  );
}
