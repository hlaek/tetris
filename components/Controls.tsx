import React, {MouseEvent} from 'react';
// import gameReducer from '../'

export default function Controls() {

  // const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
    
  //   switch (button.id) {

  //   }
  // };

    return (
        <div className="controls">
            {/* left */}
            <button className="control-button" onClick={(handleMouseEvent) => {

            }}>Left</button>

            {/* right */}
            <button className="control-button" onClick={(handleMouseEvent) => {

            }}>Right</button>

            {/* rotate */}
            <button className="control-button" onClick={(handleMouseEvent) => {

            }}>Rotate</button>

            {/* down */}
            <button className="control-button" onClick={(handleMouseEvent) => {

            }}>Down</button>

        </div>
    )
}