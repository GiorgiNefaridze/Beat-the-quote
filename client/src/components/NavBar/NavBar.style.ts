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

  button {
    padding: 6px 10px;
    border-radius: 8px;
    font-weight: bold;

    &:hover {
      background-color: #adadad;
    }
  }

  span {
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
