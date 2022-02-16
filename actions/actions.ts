export enum ActionType {
  PAUSE = "PAUSE", // Pause the game
  RESUME = "RESUME", // Resume a paused game
  MOVE_LEFT = "MOVE_LEFT", // Move piece left
  MOVE_RIGHT = "MOVE_RIGHT", // Move piece right
  ROTATE = "ROTATE", // Rotate piece
  MOVE_DOWN = "MOVE_DOWN", // Move piece down
  GAME_OVER = "GAME_OVER", // The game is over
  RESTART = "RESTART", // Start a new game
  DROP = "DROP"
}

export type Action =
  | { type: ActionType.PAUSE }
  | { type: ActionType.RESUME }
  | { type: ActionType.MOVE_LEFT }
  | { type: ActionType.MOVE_RIGHT }
  | { type: ActionType.ROTATE }
  | { type: ActionType.MOVE_DOWN }
  | { type: ActionType.GAME_OVER }
  | { type: ActionType.RESTART }
  | { type: ActionType.DROP};
