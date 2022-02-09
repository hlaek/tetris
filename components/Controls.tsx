import React, {ButtonHTMLAttributes, MouseEvent, useContext, useReducer} from 'react';
import { ActionType, moveDown, moveLeft, moveRight, rotate } from '../actions';
import { AppContext } from '../context/state';

export default function Controls() {
  const { dispatch } = useContext(AppContext);

  const handleSubmitEvent = (eventTargetValue: MouseEvent) => {
    dispatch({type: eventTargetValue.currentTarget.id})
  }

  return (
    <div className="controls">
      {/* left */}
      <button className="control__button" id={ActionType.MOVE_LEFT} onClick={handleSubmitEvent}>Left</button>

      {/* rotate */}
      <button className="control__button" id={ActionType.ROTATE} onClick={handleSubmitEvent}>Rotate</button>

      {/* right */}
      <button className="control__button" id={ActionType.MOVE_RIGHT} onClick={handleSubmitEvent}>Right</button>

      {/* down */}
      <button className="control__button" id={ActionType.MOVE_DOWN} onClick={handleSubmitEvent}>Down</button>
    </div>
  )
}
