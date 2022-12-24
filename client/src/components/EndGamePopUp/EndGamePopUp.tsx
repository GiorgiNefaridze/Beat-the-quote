import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { IQuoteDetails } from "../GamePage/GamePage";

import { EndGame, Close, Content, Details } from "./EndGamePopUp.style";

interface IProps {
  quoteDetail: IQuoteDetails;
}

const EndGamePopUp: React.FC<IProps> = ({ quoteDetail }) => {
  const endGamePopUpRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<SVGSVGElement | null>(null);

  const navigate = useNavigate();

  const handleOutSideClick = (e: any) => {
    const { target } = e;

    if (
      !endGamePopUpRef?.current?.contains(target) ||
      closeRef?.current?.contains(target)
    ) {
      navigate("/");
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);

  return (
    <EndGame ref={endGamePopUpRef}>
      <Close ref={closeRef} />
      <Content>
        <h2>Time's up</h2>
        <Details>
          <q>{quoteDetail?.text}</q>
          {quoteDetail?.author && <span>--- {quoteDetail.author}</span>}
        </Details>
        <button onClick={() => navigate("/")}>Go Back</button>
      </Content>
    </EndGame>
  );
};

export default EndGamePopUp;
