export enum ActionType {
  PAUSE = "PAUSE", // Pause the game
  RESUME = "RESUME", // Resume a paused game
  MOVE_LEFT = "MOVE_LEFT", // Move piece left
  MOVE_RIGHT = "MOVE_RIGHT", // Move piece right
  ROTATE = "ROTATE", // Rotate piece
  MOVE_DOWN = "MOVE_DOWN", // Move piece down
  GAME_OVER = "GAME_OVER", // The game is over
  RESTART = "RESTART",
}

export const moveRight = () => {
  return { type: ActionType.MOVE_RIGHT };
};

export const moveLeft = () => {
  return { type: ActionType.MOVE_LEFT };
};

export const rotate = () => {
  return { type: ActionType.ROTATE };
};

export const moveDown = () => {
  return { type: ActionType.MOVE_DOWN };
};

export const pause = () => {
  return { type: ActionType.PAUSE };
};

export const resume = () => {
  return { type: ActionType.RESUME };
};

export const restart = () => {
  return { type: ActionType.RESTART };
};
