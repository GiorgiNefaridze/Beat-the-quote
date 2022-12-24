import styled from "styled-components";

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;

export const FAC = styled.span`
  color: black;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0 5px;

  p {
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Description = styled.div`
  color: black;
  font-size: 18px;
`;

export const Levels = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  gap: 5px 0;

  h3 {
    color: black;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0 8px;
    cursor: pointer;

    label {
      color: black;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

export const StartBtn = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  font-weight: bold;
  letter-spacing: 1px;
  color: black;
  border: none;
  outline: none;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #eae9e9;
  }
`;

export const AboutGame = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 0 10%;
`;

export const PopUp = styled.div`
  width: 40%;
  height: 45%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
  background-color: white;
  border-radius: 15px;
  font-family: "Roboto";
  box-shadow: 0px 0px 0px 1000000px rgba(0, 0, 0, 0.8);
`;
