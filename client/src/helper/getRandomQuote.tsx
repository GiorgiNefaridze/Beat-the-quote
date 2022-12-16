import { UseGetQuote } from "../hooks/useGetQuote";

export const useGetRandomQoute = () => {
  const { getQuote } = UseGetQuote();

  const getRandomQuote = async (difficulty: string): Promise<string[]> => {
    let letterOfQuote = [];

    const { text, author } = await getQuote(difficulty);
    for (let i = 0; i < text.length; i++) {
      letterOfQuote.push(text[i]);
    }

    return letterOfQuote;
  };

  return { getRandomQuote };
};
