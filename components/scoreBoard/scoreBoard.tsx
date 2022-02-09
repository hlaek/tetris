import React from "react";
import styles from "./scoreBoard.module.scss";

interface ScoreBoardProps {
  score?: number;
  level?: number;
}
//const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
const ScoreBoard = ({ score, level }: ScoreBoardProps): JSX.Element => {
  return (
    <div className={styles.scoreBoard}>
      <div>Score: {score}</div>
      <div>Level: {level}</div>
      <button className={styles.scoreBoard__button} onClick={(e) => {}}>
        Play
      </button>
      <button className={styles.scoreBoard__button} onClick={(e) => {}}>
        Restart
      </button>
    </div>
  );
};

export default ScoreBoard;
