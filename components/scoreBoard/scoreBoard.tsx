import React, { MouseEvent, useContext } from "react";
import { ActionType } from "../../actions/actions";
import { AppContext } from "../../context/state";
import styles from "./scoreBoard.module.scss";

const ScoreBoard = () => {
  const { state, dispatch } = useContext(AppContext);
  const { score, isRunning, gameOver } = state;

  const handleSubmitEvent = (eventTargetValue: MouseEvent) => {
    if (eventTargetValue.currentTarget?.id === ActionType.RESTART) {
      dispatch({type: eventTargetValue.currentTarget.id})
    } else {
      if (gameOver) { return }
          if (isRunning) {
              dispatch({type: ActionType.PAUSE})
          } else {
              dispatch({type: ActionType.RESUME})
          }
    }
    
  }

  return (
    <div className={styles.scoreBoard}>
      <div>Score: {score}</div>
      <div>Level: 1</div>
      <button id={ActionType.RESUME} className={styles.scoreBoard__button} onClick={handleSubmitEvent}>
      {isRunning ? 'Pause' : 'Play'}
      </button>
      <button id={ActionType.RESTART} className={styles.scoreBoard__button} onClick={handleSubmitEvent}>
        Restart
      </button>
    </div>
  );
};

export default ScoreBoard;
