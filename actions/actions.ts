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

export type Action =
  | { type: ActionType.PAUSE }
  | { type: ActionType.RESUME }
  | { type: ActionType.MOVE_LEFT }
  | { type: ActionType.MOVE_RIGHT }
  | { type: ActionType.ROTATE }
  | { type: ActionType.MOVE_DOWN }
  | { type: ActionType.GAME_OVER }
  | { type: ActionType.RESTART };

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


// export default function ScoreBoard(props) {
//   const dispatch = useDispatch()
//   const game = useSelector((state) => state.game)
//   const { score, isRunning, gameOver } = game

//   return (
//       <div className="score-board">
//           <div>Score:{ score }</div>
//           <div>Level: 1</div>
//           <button className="score-board-button" onClick={(e) => {
//               if (gameOver) { return }
//               if (isRunning) {
//                   dispatch(pause())
//               } else {
//                   dispatch(resume())
//               }
//           }}>{isRunning ? 'Pause' : 'Play'}</button>
//           <button className="score-board-button" onClick={(e) => {
//               dispatch(restart())
//           }}>Restart</button>
//       </div>
//   )
// }