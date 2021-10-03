import styled from "styled-components/macro";

export const StyledHeader = styled.header`
  background: url("./images/bg-hero-desktop.svg")
    ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background: url("./images/bg-hero-mobile.svg")
      ${({ theme }) => theme.colors.header};
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Logo = styled.img`
  width: 160px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 555px;
  margin-left: 50px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 60px 0 0;
  }
`;
