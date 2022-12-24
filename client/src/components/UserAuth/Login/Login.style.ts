import styled from "styled-components";

export const LoginForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
`;

export const LoginFormComponent = styled.div`
  margin: auto;
  width: 70%;
  height: 75px;
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  font-family: "Roboto";

  label {
    font-size: 17px;
  }

  input {
    display: block !important;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 17px;
    cursor: pointer;
  }

  button {
    border: none;
    outline: none;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 1px;

    &:hover {
      background-color: #d9d9d9;
    }
  }
`;

export const ErrorDiv = styled.div`
  width: 70%;
  height: 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-family: "Roboto";
  color: red;
`;
