import styled from "styled-components/macro";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 170px 0 60px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: 100px;

    &:first-of-type {
      margin-left: 0;
      margin-bottom: 40px;
    }

    &:last-of-type {
      margin-left: 0;
    }
  }

  ul li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;

    img {
      margin-top: 5px;
      margin-right: 20px;
    }

    a {
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    text-align: right;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      text-align: left;
      margin-left: 0;
    }
    p {
      text-align: center;
    }
  }
`;

export const Attribution = styled.p`
  font-size: 11px;
  text-align: center;
  a {
    color: hsl(228, 45%, 44%);
    &:hover {
      color: yellowgreen;
    }
  }
`;
