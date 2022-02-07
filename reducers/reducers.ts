import { ActionType } from "../actions";

export const gameReducer = (state = {}, action: ActionType) => {
  switch (action) {
    case ActionType.ROTATE:
      return state;

    case ActionType.MOVE_RIGHT:
      return state;

    case ActionType.MOVE_LEFT:
      return state;

    case ActionType.MOVE_DOWN:
      return state;

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
