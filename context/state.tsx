// src/context/state.js
import React, { useReducer, useState } from "react";
import { createContext, useContext } from "react";
import gameReducer from "../reducers";
import { gridDefault, randomShape } from "../utils";

export type StateInterface = {
  grid: number[] | number[][]; //(Array) nested array describing the game board
  shape: number; //Int) index of current shape block controlled by player
  rotation: number; //(Int) rotation index of the current shape block
  x: number; //(Int) horizontal position of the current shape block on the game board
  y: number; //(Int) vertical position of the current shape block
  nextShape: number; //(Int) index of the next shape to play
  isRunning: boolean; //(Bool) true when game is running, false when paused
  score: number; //(Int) number of points scored
  speed: number; //(Int) speed of falling blocks
  gameOver: boolean; //(Bool) true when game is over
};

const initialState: StateInterface = {
  // Create an empty grid
  grid: gridDefault(),
  // Get a new random shape
  shape: randomShape(),
  // set rotation of the shape to 0
  rotation: 0,
  // set the 'x' position of the shape to 5 and y to -4, which puts the shape in the center of the grid, above the top
  x: 5,
  y: -4,
  // set the index of the next shape to a new random shape
  nextShape: randomShape(),
  // Tell the game that it's currently running
  isRunning: true,
  // Set the score to 0
  score: 0,
  // Set the default speed
  speed: 1000,
  // Game isn't over yet
  gameOver: false,
};

export const AppContext = createContext<{
  state: StateInterface;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppContextWrapper: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
