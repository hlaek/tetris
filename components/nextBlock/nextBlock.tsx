import React from 'react'
import Block, { BlockColor } from '../block/block'

// Draws the "next" block view showing the next block to drop
const NextBlock = () => {

    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
    // Map the block to the grid
    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <Block key={`${row}${col}`} blockColor={BlockColor.pink}/>
        })
    })

    return (
        <div className="nextBlock">
            {grid}
        </div>
    )
}

export default NextBlock;