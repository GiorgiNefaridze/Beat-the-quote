import React, { useState, useEffect } from "react";

import { useGetQuote } from "../../hooks/useGetQuote";
import { useNavigate } from "react-router-dom";

import { DifficultyContext } from "../../context/DifficultyContext";

import { GamePageWrapper } from "./GamePage.style";

const GamePage: React.FC = () => {
  const [quote, setQuote] = useState<string[]>([]);
  const [writtenQuote, setWrittenQuote] = useState<string[]>([]);

  const { difficulty } = DifficultyContext();
  const { getQuote, loading } = useGetQuote();
  const navigate = useNavigate();

  useEffect(() => {
    let letterOfQuote = [];
    if (difficulty) {
      (async () => {
        const { text, author } = await getQuote(difficulty);
        for (let i = 0; i < text.length; i++) {
          letterOfQuote.push(text[i]);
        }

        setQuote(letterOfQuote);
      })();

      return;
    }
    navigate("/");
  }, []);

  onkeydown = (e: any) => {
    const { key } = e;

    if (quote && key === quote[0]) {
      setWrittenQuote([...writtenQuote, quote[0]]);
      setQuote(quote.slice(1));

      if (quote.length === 1) {
        
        return;
      }
    }
  };

  return (
    <GamePageWrapper>
      <q style={{ display: "flex" }}>
        {writtenQuote?.map((letter) => (
          <h1 style={{ background: "green", whiteSpace: "pre" }}>{letter}</h1>
        ))}
        {quote?.map((letter) => (
          <h1 style={{ whiteSpace: "pre" }}>{letter}</h1>
        ))}
      </q>
    </GamePageWrapper>
  );
};

export default GamePage;
