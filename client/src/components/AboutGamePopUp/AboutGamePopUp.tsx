import React, { useEffect, useRef } from "react";

import { PopUp, Close, FAC, Description, Levels } from "./AboutGamePopUp.style";

interface Props {
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  startRef: React.MutableRefObject<HTMLButtonElement | null>;
}

const AboutGamePopUp: React.FC<Props> = ({ setShowPopUp, startRef }) => {
  const popUpRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLHeadingElement | null>(null);

  const handleOutsideClick = (e: any) => {
    const { target } = e;

    if (
      (target !== startRef.current && !popUpRef.current?.contains(target)) ||
      closeRef.current === target
    ) {
      setShowPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <PopUp ref={popUpRef}>
      <Close>
        <h1 title="close" ref={closeRef}>
          X
        </h1>
      </Close>
      <Description>
        The main idea of the game is to write as many quotes as possible and
        collect points, which will help you to be higher than ever in the
        dashboard.
      </Description>
      <Levels>
        <h3>Choose `LEVEL` and good luck.</h3>
        <div>
          <input type="radio" name="game_mode" id="easy" />
          <label htmlFor="easy">Easy</label>
        </div>
        <div>
          <input type="radio" name="game_mode" id="medium" />
          <label htmlFor="medium">Medium</label>
        </div>
        <div>
          <input type="radio" name="game_mode" id="hard" />
          <label htmlFor="hard">Hard</label>
        </div>
      </Levels>
      <FAC>
        Have some questions? Visit <p>FAQ</p>
      </FAC>
    </PopUp>
  );
};

export default AboutGamePopUp;
