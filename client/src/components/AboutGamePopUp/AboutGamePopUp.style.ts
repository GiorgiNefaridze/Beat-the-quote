import styled from "styled-components";

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  h1 {
    color: black;
    font-weight: bold;
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
  h3 {
    color: black;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0 6px;
    label {
      color: black;
      font-size: 16px;
    }
  }
`;

export const PopUp = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45%;
  height: 45%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 0px 1000000px rgba(0, 0, 0, 0.3);
`;
