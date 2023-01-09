import { API } from "../api/BaseUrl";

interface IQuote {
  _id: string;
  text: string;
  author: string | null;
  difficulty: string;
  point: number;
}

interface IProps {
  (quote: IQuote, userName: string): void;
}

export const useCompleteQuote = () => {
  const completeQuote: IProps = async (quote, userName) => {
    await API.post("/api/quote/saveQuote", {
      quote,
      userName,
    });
  };

  return { completeQuote };
};
