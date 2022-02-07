import React from "react";
import styles from "./block.module.scss";

interface BlockProps {
  color: number; //index of shape
}

const Block = ({ color }: BlockProps) => {
  return <div className={`${styles.block} color-${color}`}></div>;
};

export default Block;
