import React, {ButtonHTMLAttributes, MouseEvent, useContext, useReducer} from 'react';
import { ActionType, moveDown, moveLeft, moveRight, rotate } from '../actions/actions';
import { AppContext } from '../context/state';

export default function Controls() {
  const { dispatch } = useContext(AppContext);

  const isRunning = useContext(AppContext).state.isRunning;

  const handleSubmitEvent = (eventTargetValue: MouseEvent) => {
      dispatch({type: eventTargetValue.currentTarget.id})
  }
  
  return (
    <div className="controls">
      {/* left */}
      <button className="control__button" id={ActionType.MOVE_LEFT} onClick={handleSubmitEvent} disabled={!isRunning}>Left</button>

      {/* rotate */}
      <button className="control__button" id={ActionType.ROTATE} onClick={handleSubmitEvent} disabled={!isRunning}>Rotate</button>

      {/* right */}
      <button className="control__button" id={ActionType.MOVE_RIGHT} onClick={handleSubmitEvent} disabled={!isRunning}>Right</button>

      {/* down */}
      <button className="control__button" id={ActionType.MOVE_DOWN} onClick={handleSubmitEvent} disabled={!isRunning}>Down</button>
    </div>
  )
}
