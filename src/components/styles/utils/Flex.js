import styled from "styled-components/macro";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  & > div,
  & > ul {
    flex: 1;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    white-space: pre-wrap;
  }
  p {
    font-weight: 400;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
