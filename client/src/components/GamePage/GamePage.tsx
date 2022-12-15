import React, { useState, useEffect } from "react";

import { useGetQuote } from "../../hooks/useGetQuote";
import { useNavigate } from "react-router-dom";

import { DifficultyContext } from "../../context/DifficultyContext";

import { GamePageWrapper } from "./GamePage.style";

const GamePage: React.FC = () => {
  const [quote, setQuote] = useState<string>("");

  const { difficulty } = DifficultyContext();
  const { getQuote, loading } = useGetQuote();
  const navigate = useNavigate();

  useEffect(() => {
    if (difficulty) {
      (async () => {
        const { text, author } = await getQuote(difficulty);
        setQuote(text);
      })();

      return;
    }
    navigate("/");
  }, []);

  return (
    <GamePageWrapper>
      <h1>
        <q>{quote}</q>
      </h1>
    </GamePageWrapper>
  );
};

export default GamePage;
