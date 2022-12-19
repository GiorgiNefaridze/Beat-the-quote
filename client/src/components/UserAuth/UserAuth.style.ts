import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 50%;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 10000000px rgba(0, 0, 0, 0.4);
  background-color: red;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px 0;
  z-index: 90;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px 0;

    input {
      display: block;
      height: 45px;
      padding: 5px 10px;
      color: black;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
`;
