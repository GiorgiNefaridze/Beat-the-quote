import Quotes from "../models/Quotes.js";

export const getQuote = async (req, res) => {
  const { difficulty } = req.body;

  try {
    const quotesLength = await Quotes.find({ difficulty }).count();
    const randomQuote = await Quotes.find({ difficulty })
      .limit(1)
      .skip(Math.random() * quotesLength);

    res.status(200).json(randomQuote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
