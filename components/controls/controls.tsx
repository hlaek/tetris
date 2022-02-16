import React, { MouseEvent, useContext, useEffect } from "react";
import { ActionType } from "../../actions/actions";
import { AppContext } from "../../context/state";
import styles from "./controls.module.scss";

export const Controls: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const isRunning = useContext(AppContext).state.isRunning;
  const gameOver = useContext(AppContext).state.gameOver;

  //control click events
  const handleSubmitEvent = (eventTargetValue: MouseEvent) => {
    dispatch({ type: eventTargetValue.currentTarget.id });
  };

  //create reusable button component
  interface ControlButtonProps {
    id: ActionType;
    buttonText: string;
  }

  const ControlButton: React.FC<ControlButtonProps> = ({ id, buttonText }) => {
    return (
      <button
        className={`${styles.controls__button}`}
        id={id}
        onClick={handleSubmitEvent}
        disabled={!isRunning || gameOver}
      >
        {buttonText}
      </button>
    );
  };

  //control keyboard events
  const handleKeyPress = (event: KeyboardEvent) => {
    switch (event.key) {
      // left
      case "Left": // IE/Edge specific value
      case "a":
      case "ArrowLeft":
        dispatch({ type: ActionType.MOVE_LEFT });
        break;
      // up
      case "Up": // IE/Edge specific value
      case "w":
      case "ArrowUp":
        dispatch({ type: ActionType.ROTATE });
        break;
      //right
      case "Right": // IE/Edge specific value
      case "d":
      case "ArrowRight":
        dispatch({ type: ActionType.MOVE_RIGHT });
        break;
      // down
      case "Down": // IE/Edge specific value
      case "s":
      case "ArrowDown":
        dispatch({ type: ActionType.MOVE_DOWN });
        break;
      // drop the piece straight down
      case " ":
        dispatch({ type: ActionType.DROP });
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={styles.controls}>
      {/* left */}
      <ControlButton id={ActionType.MOVE_LEFT} buttonText="Left" />


      {/* rotate */}
      <ControlButton id={ActionType.ROTATE} buttonText="Rotate" />

      {/* right */}
      <ControlButton id={ActionType.MOVE_RIGHT} buttonText="Right" />

      {/* down */}
      <ControlButton id={ActionType.MOVE_DOWN} buttonText="Down" />
    </div>
  );
};

export default Controls;
