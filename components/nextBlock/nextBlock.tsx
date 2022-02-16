import React, { useContext, useEffect } from "react";
import Block from "../block/block";
import styles from "./nextBlock.module.scss";
import { shapes } from "../../utils/helpers";
import { AppContext } from "../../context/state";
import { userInfo } from "os";

// Draws the "next" block view showing the next block to drop
const NextBlock = () => {
  const { state } = useContext(AppContext);

  const nextShape = state.nextShape; // = randomShape
  const box = shapes[nextShape][0]; // Get the first rotation

  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    let color = 0;

    return rowArray.map((square, col) => {
      color = square !== 0 ? nextShape : square;

      return <Block key={`${row}${col}`} color={color} />;
    });
  });

  return <div className={styles.nextBlock}>{grid}</div>;
};

export default NextBlock;
