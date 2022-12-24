import { useState } from "react";

import { API } from "../api/BaseUrl";

interface IQuote {
  _id: string;
  text: string;
  author: string | null;
  difficulty: string;
  point: number
}

export const UseGetQuote = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const getQuote = async (difficulty: string): Promise<IQuote> => {
    setLoading(true);

    const { data } = await API.post("/api/quote/getQuote", { difficulty });

    setLoading(false);

    return data;
  };

  return { loading, getQuote };
};
