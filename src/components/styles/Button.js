import styled from "styled-components/macro";

export const Button = styled.button`
  border-radius: 50px;
  border: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: ${({ padding }) => padding || "10px 40px"};
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.8;
    transform: scale(0.98);
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
    font-size: 18px;
  }
`;
