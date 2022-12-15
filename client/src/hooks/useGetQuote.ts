import { useState } from "react";

import { API } from "../api/QuoteApi";

interface IQuote {
  text: string;
  author: string | null;
  difficulty: string;
  _id: string;
}

export const useGetQuote = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getQuote = async (difficulty: string): Promise<IQuote> => {
    setLoading(true);

    const { data } = await API.post("/api/quote/getQuote", { difficulty });

    setLoading(false);

    return data;
  };

  return { loading, getQuote };
};
