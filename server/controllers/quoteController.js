import Quotes from "../models/Quotes.js";
import User from "../models/User.js";

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

export const saveQuote = async (req, res) => {
  try {
    const { quote, email, userName } = req.body;

    const user = await User.findOne({ email, userName });

    await User.updateOne(
      { _id: user._id },
      {
        $set: {
          quotes: [...user.quotes, quote],
          score: user.score + quote?.point,
        },
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
