import React, { useState, useEffect } from "react";

import { useGetRandomQoute } from "../../helper/getRandomQuote";
import { useNavigate } from "react-router-dom";

import { DifficultyContext } from "../../context/DifficultyContext";

import { GamePageWrapper } from "./GamePage.style";

const GamePage: React.FC = () => {
  const [quote, setQuote] = useState<string[]>([]);
  const [writtenQuote, setWrittenQuote] = useState<string[]>([]);

  const { difficulty } = DifficultyContext();
  const { getRandomQuote } = useGetRandomQoute();
  const navigate = useNavigate();

  useEffect(() => {
    if (difficulty) {
      (async () => {
        const randomQuote = await getRandomQuote(difficulty);
        setQuote(randomQuote);
      })();

      return;
    }
    navigate("/");
  }, []);

  onkeydown = async (e: any) => {
    const { key } = e;

    if (quote && key === quote[0]) {
      setWrittenQuote([...writtenQuote, quote[0]]);
      setQuote(quote.slice(1));

      const difficultyLevel = localStorage.getItem("difficulty");

      if (quote.length === 1 && difficultyLevel) {
        const randomQuote = await getRandomQuote(difficultyLevel);
        setWrittenQuote([]);
        setQuote(randomQuote);
        return;
      }
    }
  };

  return (
    <GamePageWrapper>
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
    </GamePageWrapper>
  );
};

export default GamePage;
