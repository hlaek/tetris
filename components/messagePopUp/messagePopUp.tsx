import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/state";
import styles from "./messagePopUp.module.scss";

// Displays a message
const MessagePopup: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const isRunning = useContext(AppContext).state.isRunning;
  const isGameOver = useContext(AppContext).state.gameOver;

  useEffect(() => {
    setShowMessage(!isRunning || isGameOver);
  }, [isRunning, isGameOver]);

  const message = isGameOver ? "GAME OVER!" : "Game Paused";

  return (
    <div className={`${styles.messagePopup} ${!showMessage && styles.hidden}`}>
      <h1>{message}</h1>
    </div>
  );
};

export default MessagePopup;
