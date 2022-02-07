import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Block, { BlockColor } from "../components/block/block";
import NextBlock from "../components/nextBlock/nextBlock";
import React, { useState } from "react";
import { AppContextWrapper } from "../context/state";

// Represents a 10 x 18 grid of grid squares

const GridBoard: React.FC = () => {
  // generates an array of 18 rows, each containing 10 GridSquares.
  const grid: any[] = [];
  for (let row = 0; row < 18; row++) {
    grid.push([]);
    for (let col = 0; col < 10; col++) {
      grid[row].push(
        <Block key={`${col}${row}`} blockColor={BlockColor.white} gridBlocks />
      );
    }
  }

  // The components generated in makeGrid are rendered in div.grid-board
  return <div className={styles.gridBoard}>{grid}</div>;
};

// Represents a 6 x 10 grid of grid squares
const NextBlockGridBoard: React.FC = () => {
  // generates an array of 5 rows, each containing 10 GridSquares.
  const grid: any[] = [];
  for (let row = 0; row < 8; row++) {
    grid.push([]);
    for (let col = 0; col < 6; col++) {
      grid[row].push(
        <Block key={`${col}${row}`} blockColor={BlockColor.white} gridBlocks />
      );
    }
  }

  // The components generated in makeGrid are rendered in div.grid-board
  return <div className={styles.nextBlockGridBoard}>{grid}</div>;
};

export default function Home() {
  return (
    <AppContextWrapper>
      <div className={styles.container}>
        <Head></Head>
        <header className={styles.header}>
          <Block blockColor={BlockColor.green}></Block>
          <h2>Tetris</h2>
        </header>

        <main className={styles.main}>
          <GridBoard />
          <NextBlock />
        </main>
        <NextBlockGridBoard />
      </div>
    </AppContextWrapper>
  );
}
