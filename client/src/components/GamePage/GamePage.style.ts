import styled from "styled-components";

export const GamePageWrapper = styled.div`
  width: 100%;
  height: 92vh;
  background-color: #222222;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 40% 0;
  text-align: center;
  padding: 10rem;
  position: relative;

  button {
    position: absolute;
    left: 2%;
    bottom: 5%;
    padding: 8px 10px;
    border-radius: 8px;
    font-weight: bold;
    border: none;
    outline: none;

    &:hover {
      background-color: #adadad;
    }
  }
`;
