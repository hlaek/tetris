import { ActionType, Action } from "../actions/actions";
import { StateInterface } from "../context/state";
import { nextRotation, canMoveTo, addBlockToGrid, checkRows, randomShape } from '../utils/helpers';
import { initialState } from '../context/state';

export const gameReducer = (state: StateInterface = initialState, action: Action) => {
  const { shape, grid, x, y, rotation, nextShape, score, isRunning } = state

  
  switch (action.type) {
    case ActionType.ROTATE:
      const newRotation = nextRotation(shape, rotation)
      if (canMoveTo(shape, grid, x, y, newRotation)) {
          return { ...state, rotation: newRotation }
      }
      return state;

    case ActionType.MOVE_RIGHT:
      if (canMoveTo(shape, grid, x + 1, y, rotation)) {
        return { ...state, x: x + 1 }
      }
      return state;

    case ActionType.MOVE_LEFT:
      if (canMoveTo(shape, grid, x - 1, y, rotation)) {
          return { ...state, x: x - 1 }
      }
      return state;

    case ActionType.MOVE_DOWN:
      // Get the next potential Y position
      const maybeY = y + 1
      // Check if the current block can move here
      if (canMoveTo(shape, grid, x, maybeY, rotation)) {
          // If so move the block
          return { ...state, y: maybeY }
      }
      // If not place the block
      const newGrid = addBlockToGrid(shape, grid, x, y, rotation)
      // reset some things to start a new shape/block
      const newState = initialState;
      newState.grid = newGrid
      newState.shape = nextShape
      newState.nextShape = randomShape()
      newState.score = score
      newState.isRunning = isRunning
      // TO-DO: come back to this to figure out what 0, 4, 0 means and leave comment
      if (!canMoveTo(nextShape, newGrid, 0, 4, 0)) {
        // Game Over
        console.log("Game Should be over...");
        newState.shape = 0;
        return { ...state, gameOver: true };
      }
      // Update the score based on if rows were completed or not
      newState.score = score + checkRows(newGrid)

      return newState

    case ActionType.RESUME:
      return state;

    case ActionType.PAUSE:
      return state;

    case ActionType.GAME_OVER:
      return state;

    case ActionType.RESTART:
      return state;

    default:
      return state;
  }
};

export default gameReducer;
