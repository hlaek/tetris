import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Block from "../components/block/block";
import NextBlock from "../components/nextBlock/nextBlock";
import React, { useContext } from "react";
import { AppContext, AppContextWrapper } from "../context/state";
import ScoreBoard from "../components/scoreBoard/scoreBoard";
import Controls from "../components/Controls";

// Represents a 10 x 18 grid of grid squares
const GridBoard: React.FC = () => {
  const game = useContext(AppContext).state;
  const { grid, shape, rotation, x, y, isRunning, speed } = game;

  // generates an array of 18 rows, each containing 10 GridSquares.
  const gridBoardArray: any[] = [];
  for (let row = 0; row < 18; row++) {
    gridBoardArray.push([]);
    for (let col = 0; col < 10; col++) {
      gridBoardArray[row].push(<Block key={`${col}${row}`} color={0} />);
    }
  }

  // The components generated in makeGrid are rendered in div.grid-board
  return <div className={styles.gridBoard}>{gridBoardArray}</div>;
};

// Actual component to display on index
export default function Home() {
  return (
    <AppContextWrapper>
      <div className={styles.container}>
        {/* <Head></Head> */}
        <header className={styles.container__header}>
          <h2>Tetris</h2>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
      </div>
    </AppContextWrapper>
  );
}
