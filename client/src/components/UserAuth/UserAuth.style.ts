import styled from "styled-components";

interface IProps {
  status: boolean;
}

export const LoginWrapper = styled.div<IProps | HTMLElement>`
  width: 35%;
  height: ${({ status }) => (status ? "65%" : "45%")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  box-shadow: 0px 0px 0px 10000000px rgba(0, 0, 0, 0.8);
  background-color: #c8c8c8;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px 0;
  z-index: 90;
`;

export const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`;
