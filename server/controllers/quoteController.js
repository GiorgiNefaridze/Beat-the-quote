import Quotes from "../models/Quotes.js";

export const getQuote = async (req, res) => {
  try {
    const { difficulty } = req.body;

    const quotesLength = await Quotes.find({ difficulty }).count();
    const randomQuote = await Quotes.find({ difficulty })
      .limit(1)
      .skip(Math.random() * quotesLength);

    res.status(200).json(randomQuote[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
