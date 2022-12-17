import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: red;
  gap: 0 10px;
  padding: 30px 50px;
  background-color: #222222;

  input {
    display: none;
  }

  span {
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }
`;
