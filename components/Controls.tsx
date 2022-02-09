import React, {ButtonHTMLAttributes, MouseEvent, useContext, useReducer} from 'react';
import { ActionType, moveDown, moveLeft, moveRight, rotate } from '../actions';
import gameReducer from '../reducers';
import { AppContext } from '../context/state';


export default function Controls() {
  const { dispatch } = useContext(AppContext);

  const handleSubmitEvent = (eventTargetValue: MouseEvent) => {
    dispatch({type: eventTargetValue.currentTarget.id})
  }

  return (
    <div className="controls">
      {/* left */}
      <button className="control-button" id={ActionType.MOVE_LEFT} onClick={handleSubmitEvent}>Left</button>

      {/* right */}
      <button className="control-button" id={ActionType.MOVE_RIGHT} onClick={handleSubmitEvent}>Right</button>

      {/* rotate */}
      <button className="control-button" id={ActionType.ROTATE} onClick={handleSubmitEvent}>Rotate</button>

      {/* down */}
      <button className="control-button" id={ActionType.MOVE_DOWN} onClick={handleSubmitEvent}>Down</button>
    </div>
  )
}