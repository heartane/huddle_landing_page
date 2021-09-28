import styled from "styled-components/macro";

export const Flex = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: ${({ alignItems }) => alignItems || "center"};
  & > div,
  & > ul {
    flex: 1;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    margin-top: 40px;
    white-space: pre-wrap;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    margin: 50px 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
