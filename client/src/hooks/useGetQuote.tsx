import { useState } from "react";

import { API } from "../api/QuoteApi";

interface IDifficulty {
  difficulty: string;
}

export const useGetQuote = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getQuote = async (difficulty: IDifficulty) => {
    setLoading(true);
    const { data } = await API.post("/api/quote/getQuote", { difficulty });

    setLoading(false);

    return data;
  };

  return { loading, getQuote };
};
