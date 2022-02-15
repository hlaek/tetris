import { ActionType, Action } from "../actions/actions";
import { StateInterface } from "../context/state";
import {
  nextRotation,
  canMoveTo,
  addBlockToGrid,
  checkRows,
  randomShape,
} from "../utils/helpers";
import { initialState } from "../context/state";

export const gameReducer = (
  state: StateInterface = initialState(),
  action: Action
) => {
  const {
    shape,
    grid,
    x,
    y,
    rotation,
    nextShape,
    score,
    isRunning,
    speed,
    level,
  } = state;

  const placeBlockCheckScore = (y: number): StateInterface => {
    // If not place the block
    // (this returns an object with a grid and gameover bool)
    const obj = addBlockToGrid(shape, grid, x, y, rotation);
    const newGrid = obj.grid;
    const gameOver = obj.gameOver;

    if (gameOver) {
      // Game Over
      const newState = { ...state };
      newState.shape = 0;
      newState.grid = newGrid;
      return { ...state, gameOver: true };
    }

    // reset somethings to start a new shape/block
    const newState = initialState();
    newState.grid = newGrid;
    newState.shape = nextShape;
    newState.nextShape = randomShape();
    newState.score = score;
    newState.isRunning = isRunning;

    // Score increases decrease interval
    newState.score = score + checkRows(newGrid);
    newState.level = newState.score >= level * 100 ? level + 1 : level;
    newState.speed = newState.level > level ? speed - 200 : speed;

    return newState;
  };

  // handle actions
  switch (action.type) {
    case ActionType.ROTATE:
      const newRotation = nextRotation(shape, rotation);
      if (canMoveTo(shape, grid, x, y, newRotation)) {
        return { ...state, rotation: newRotation };
      }
      return state;

    case ActionType.MOVE_RIGHT:
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 };
      }
      return state;

    case ActionType.MOVE_LEFT:
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
        return { ...state, x: x - 1 };
      }
      return state;

    case ActionType.DROP:
      // Get the next potential Y position
      let dropY = y + 18;
      
      while (!canMoveTo(shape, grid, x, dropY, rotation)) {
        // continue reducing the y from 22 to 0
        for(dropY; dropY >= -4; dropY--) {
          if (canMoveTo(shape, grid, x, dropY, rotation)) {
            return { ...state, y: dropY };
          } 
        }
      }
      // return state;

    case ActionType.MOVE_DOWN:
      // Get the next potential Y position
      const maybeY = y + 1;

      // Check if the current block can move here
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
        // If so move down don't place the block
        return { ...state, y: maybeY };
      }
      return placeBlockCheckScore(y);
      
    case ActionType.RESUME:
      return { ...state, isRunning: true };

    case ActionType.PAUSE:
      return { ...state, isRunning: false };

    case ActionType.GAME_OVER:
      return state;

    case ActionType.RESTART:
      return initialState();

    default:
      return initialState();
  }
};

export default gameReducer;
