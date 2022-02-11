import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Block from "../components/block/block";
import NextBlock from "../components/nextBlock/nextBlock";
import React, { useContext, useEffect, useRef } from "react";
import { AppContext, AppContextWrapper } from "../context/state";
import ScoreBoard from "../components/scoreBoard/scoreBoard";
import Controls from "../components/controls/controls";
import { shapes } from "../utils/helpers";
import MessagePopup from "../components/messagePopUp/messagePopUp";
import { ActionType } from "../actions/actions";

// Represents a 10 x 18 grid of grid squares
const GridBoard: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { grid, shape, rotation, x, y, isRunning, speed } = state;

  const block = shapes[shape][rotation];
  const blockColor = shape;

  const requestRef = useRef<number>(0);
  const lastUpdateTimeRef = useRef<number>(0);
  const progressTimeRef = useRef<number>(0);

  //
  const update = (time: number) => {
    requestRef.current = requestAnimationFrame(update);
    if (!isRunning) {
      return;
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > speed) {
      dispatch({ type: ActionType.MOVE_DOWN });
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  // map rows
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x;
      const blockY = row - y;
      let color = square;
      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }
      //Generate a unique key for every block
      const k = row * grid[0].length + col;
      //Generate a grid square
      return <Block key={k} color={color} />;
    });
  });

  // The components generated in makeGrid are rendered in div.gridBoard
  return <div className={styles.gridBoard}>{gridSquares}</div>;
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
        <MessagePopup />
        <Controls />
      </div>
    </AppContextWrapper>
  );
}
