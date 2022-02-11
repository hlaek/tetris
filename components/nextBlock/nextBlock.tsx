import React, { useContext } from "react";
import Block from "../block/block";
import styles from "./nextBlock.module.scss";
import { shapes } from "../../utils/helpers";
import { AppContext } from "../../context/state";

// Draws the "next" block view showing the next block to drop
const NextBlock = () => {
  const { state } = useContext(AppContext);

  const nextShape = state.nextShape;
  console.log(nextShape);
  const box = shapes[nextShape][0]; // Get the first rotation

  // Map the block to the grid
  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      const color = square !== 0 ? nextShape : square;

      return <Block key={`${row}${col}`} color={color} />;
    });
  });

  return <div className={styles.nextBlock}>{grid}</div>;
};

export default NextBlock;
