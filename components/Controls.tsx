import React, {MouseEvent} from 'react';
import { moveDown, moveLeft, moveRight, rotate } from '../actions';
// import gameReducer from '../'

export default function Controls() {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    switch (e.id) {
      case id === "left":
        return moveLeft(e);

      case id === "right":
        return moveRight(e);

      case id === "rotate":
        return rotate(e);

      case id === "down":
        return moveDown(e);
    }
  };

    return (
        <div className="controls">
            {/* left */}
            <button className="control-button" id="left" onClick={(handleMouseEvent) => {

            }}>Left</button>

            {/* right */}
            <button className="control-button" id="right" onClick={(handleMouseEvent) => {

            }}>Right</button>

            {/* rotate */}
            <button className="control-button" id="rotate" onClick={(handleMouseEvent) => {

            }}>Rotate</button>

            {/* down */}
            <button className="control-button" id="down" onClick={(handleMouseEvent) => {

            }}>Down</button>

        </div>
    )
}