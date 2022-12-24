import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Timer from "../Timer/Timer";
import EndGamePopUp from "../EndGamePopUp/EndGamePopUp";

import { useCompleteQuote } from "../../hooks/useCompleteQuote";
import { useGetRandomQoute } from "../../helper/getRandomQuote";

import { DifficultyContext } from "../../context/DifficultyContext";
import { UserContext } from "../../context/UserContext";

import { GamePageWrapper } from "./GamePage.style";

export interface IQuoteDetails {
  _id: string;
  text: string;
  author: string | null;
  difficulty: string;
  point: number;
}

const GamePage: React.FC = () => {
  const [quoteDetail, setQuoteDetail] = useState<IQuoteDetails>(
    {} as IQuoteDetails
  );
  const [quote, setQuote] = useState<string[]>([]);
  const [writtenQuote, setWrittenQuote] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(60);
  const [endGame, setEndGame] = useState<boolean>(false);

  const { difficulty } = DifficultyContext();
  const { getRandomQuote } = useGetRandomQoute();
  const { completeQuote } = useCompleteQuote();
  const { user } = UserContext();
  const navigate = useNavigate();

  useEffect(() => {
    let allowToFetch = true;

    if (difficulty && allowToFetch) {
      (async () => {
        const randomQuote = await getRandomQuote(difficulty);
        setQuoteDetail(randomQuote?.quote);
        setQuote(randomQuote?.letterOfQuote);
      })();

      return;
    }
    navigate("/");

    return () => {
      allowToFetch = false;
    };
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setEndGame(true);
      return;
    }
  }, [timer]);

  onkeydown = async (e: any) => {
    const { key } = e;

    if (quote && key === quote[0] && !endGame) {
      setWrittenQuote([...writtenQuote, quote[0]]);
      setQuote(quote.slice(1));

      const difficultyLevel = localStorage.getItem("difficulty");

      if (quote.length === 1 && difficultyLevel) {
        const randomQuote = await getRandomQuote(difficultyLevel);
        setWrittenQuote([]);
        setQuoteDetail(randomQuote?.quote);
        setQuote(randomQuote?.letterOfQuote);

        await completeQuote(quoteDetail, user?.email, user?.userName);
        return;
      }
    }
  };

  const goBack = () => {
    navigate("/");
  };

  return (
    <GamePageWrapper>
      <Timer timer={timer} setTimer={setTimer} />
      <q style={{ display: "flex" }}>
        {writtenQuote?.map((letter, idx) => (
          <h1 key={idx} style={{ background: "green", whiteSpace: "pre" }}>
            {letter}
          </h1>
        ))}
        {quote?.map((letter, idx) => (
          <h1 key={idx} style={{ whiteSpace: "pre" }}>
            {letter}
          </h1>
        ))}
      </q>

      <button onClick={goBack}>Go back</button>

      {endGame && <EndGamePopUp quoteDetail={quoteDetail} />}
    </GamePageWrapper>
  );
};

export default GamePage;
