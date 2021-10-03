import styled from "styled-components/macro";

export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  padding: 30px 0;

  & > div,
  & > ul {
    flex: 1;
  }

  h1 {
    font-weight: 600;
    margin-top: 40px;
    white-space: pre-wrap;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    margin: 30px 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 30px 10px;

    h1 {
      font-size: 32px;
      margin-top: 0px;
    }
  }
`;
