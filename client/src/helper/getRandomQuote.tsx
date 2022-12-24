import { UseGetQuote } from "../hooks/useGetQuote";

interface IProps {
  quote: {
    _id: string;
    text: string;
    author: string | null;
    difficulty: string;
    point: number;
  };
  letterOfQuote: string[];
}

export const useGetRandomQoute = () => {
  const { getQuote } = UseGetQuote();

  const getRandomQuote = async (difficulty: string): Promise<IProps> => {
    let letterOfQuote = [];

    const quote = await getQuote(difficulty);
    for (let i = 0; i < quote?.text.length; i++) {
      letterOfQuote.push(quote?.text[i]);
    }

    return { quote, letterOfQuote };
  };

  return { getRandomQuote };
};
