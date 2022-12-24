import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

export const EndGame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  height: 35%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-end;
  background-color: #8b8b8b;
  border-radius: 10px;
  box-shadow: 0px 0px 0px 1000000px rgba(0, 0, 0, 0.8);
  z-index: 90;
`;

export const Close = styled(CloseIcon)`
  position: initial !important;
  cursor: pointer;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  button {
    position: initial !important;
    width: fit-content;
    padding: 5px 10px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  span {
    align-self: flex-end;
  }
`;
