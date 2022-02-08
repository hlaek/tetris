import React, {MouseEvent} from 'react';
import { moveDown, moveLeft, moveRight, rotate } from '../actions';

interface ControlsProps {
  id?: string;
}

export default function Controls() {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>, id: ControlsProps) => {
    e.preventDefault();

    switch (id) {
      case "left":
        return moveLeft();

      case "right":
        return moveRight();

      case "rotate":
        return rotate();

      case "down":
        return moveDown();
    }
  };

  return (
    <div className="controls">
      {/* left */}
      <button className="control-button" id="left" onClick={(handleMouseEvent())}>Left</button>

      {/* right */}
      <button className="control-button" id="right" onClick={(handleMouseEvent())}>Right</button>

      {/* rotate */}
      <button className="control-button" id="rotate" onClick={(handleMouseEvent())}>Rotate</button>

      {/* down */}
      <button className="control-button" id="down" onClick={(handleMouseEvent())}>Down</button>
    </div>
  )
}