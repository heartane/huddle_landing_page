import styled from "styled-components/macro";

export const StyledBox = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  margin: 150px auto;
  padding: 50px;
  width: 55%;
  position: relative;
  margin-bottom: -80px;

  h2 {
    margin: 10px 0 30px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 90%;
    padding: 40px 10px;
    h2 {
      font-size: 23px;
    }
  }
`;
