import React, { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

import PointSystem from "./Points/Points";
import { DifficultyContext } from "../../context/DifficultyContext";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthPopUpContext";

import {
  PopUp,
  Close,
  FAC,
  Description,
  Levels,
  StartBtn,
  AboutGame,
} from "./AboutGamePopUp.style";

interface Props {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  startRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const AboutGamePopUp: React.FC<Props> = ({ setShowPopUp, startRef }) => {
  const [error, setError] = useState<boolean>(false);

  const popUpRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<SVGSVGElement | null>(null);

  const { difficulty, setDifficulty } = DifficultyContext();
  const { setShowPopUp: setShow } = AuthContext();
  const { user } = UserContext();
  const navigate = useNavigate();

  const handleOutsideClick = (e: any) => {
    const { target } = e;

    if (
      closeRef.current === target ||
      (target !== startRef.current && !popUpRef.current?.contains(target))
    ) {
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      setDifficulty("");
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleClick = (e: any) => {
    const { htmlFor } = e.target;
    setError(false);

    setDifficulty(htmlFor);
    localStorage.setItem("difficulty", htmlFor);
  };

  const startGame = () => {
    if (!user?.email) {
      setShowPopUp(false);
      setShow(true);
    }

    if (!difficulty) {
      setError(true);
      return;
    }

    navigate("/game");
  };

  return (
    <PopUp ref={popUpRef}>
      <Close>
        <CloseIcon ref={closeRef} titleAccess="close" />
      </Close>
      <AboutGame>
        <Description>
          The main idea of this game is to write as many quotes as possible and
          write quotes, which will help you to increase your scores in the
          leaderboard.
        </Description>
        <PointSystem />
      </AboutGame>
      <Levels>
        <h3>Choose LEVEL</h3>
        <div>
          <input type="radio" name="game_mode" id="easy" />
          <label onClick={handleClick} htmlFor="easy">
            Easy
          </label>
        </div>
        <div>
          <input type="radio" name="game_mode" id="medium" />
          <label onClick={handleClick} htmlFor="medium">
            Medium
          </label>
        </div>
        <div>
          <input type="radio" name="game_mode" id="hard" />
          <label onClick={handleClick} htmlFor="hard">
            Hard
          </label>
        </div>
        {error && (
          <span style={{ color: "red", fontSize: "18px" }}>
            Choose difficulty *it's required*
          </span>
        )}
      </Levels>
      <StartBtn title="Start game" onClick={startGame}>
        Start
      </StartBtn>
      <FAC>
        Have some questions? Visit <p>FAQ</p>
      </FAC>
    </PopUp>
  );
};

export default AboutGamePopUp;
