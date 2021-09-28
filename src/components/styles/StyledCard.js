import styled from "styled-components/macro";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px 100px;
  flex-direction: ${({ id }) => (id % 2 ? "row-reverse" : "row")};

  div {
    &:first-of-type {
      padding: ${({ id }) => (id % 2 ? "0 0 0 150px" : "0 100px 0 20px")};
      @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 0;
        margin-bottom: 40px;
      }
    }
  }

  img {
    width: 90%;
  }

  h2 {
    font-family: "Poppins", sans-serif;
  }

  p {
    color: hsl(208, 11%, 55%);
  }

  &:first-of-type {
    margin-top: 150px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      margin-top: 70px;
    }
  }
  &:last-of-type {
    margin-bottom: 300px;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    padding: 60px;
  }
`;
