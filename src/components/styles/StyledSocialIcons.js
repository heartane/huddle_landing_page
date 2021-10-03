import styled from "styled-components/macro";

export const StyledSocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;

  li {
    list-style: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
    &:hover {
      color: hsl(322, 100%, 66%);
      border-color: hsl(322, 100%, 66%);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-self: center;
    margin: 40px 0 10px 0;
  }
`;
