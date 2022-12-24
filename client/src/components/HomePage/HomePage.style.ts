import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15% 0px;
  background-color: #222222;
`;

export const Button = styled.button`
  padding: 15px 18px;
  background-color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
  outline: none;
  color: black;

  &:hover {
    background-color: #adadad;
  }
`;
