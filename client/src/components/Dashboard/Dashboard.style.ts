import styled from "styled-components";

interface IProps {
  display?: string;
  owner?: boolean;
  visibility?: boolean;
}

export const DashboardWrapeper = styled.div`
  width: 30%;
  height: 50%;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 1px 1px 8px wheat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px 0;
`;

export const AvatarWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
`;

export const UserImage = styled.img<IProps | HTMLElement>`
  width: 45px !important;
  height: 40px !important;
  display: ${({ display }) => display};
  position: absolute;
  left: 0px;
  top: -5px;
`;

export const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px 0;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: initial;
    padding: 5px 8px;

    div {
      display: flex;
      justify-content: initial;
      flex-direction: initial;
      gap: 0 10px;
    }

    img {
      width: 30px;
      width: 30px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const User = styled.div<IProps | HTMLElement>`
  display: ${({ visibility }) =>
    visibility ? "flex!important" : "none!important"};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: initial;
  padding: 5px 8px;
  background-color: ${({ owner }) =>
    owner ? "rgba(225, 225, 225, 0.4)" : "rgba(225, 225, 225, 0.1)"};
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(225, 225, 225, 0.3);
  }
`;
