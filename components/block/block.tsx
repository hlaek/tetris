import React from 'react';
import styles from './block.module.scss'

interface BlockProps {
    blockColor: BlockColor;
    gridBlocks?: boolean;
}

export enum BlockColor {
    purple = 'purple',
    pink = 'pink', 
    blue = 'blue', 
    green = 'green', 
    orange = 'orange', 
    white = 'white'
}

const Block = ({ blockColor, gridBlocks }: BlockProps) => {
    return (
        <div className={`${styles.block} ${gridBlocks && styles.gridBlocks}`} style={{backgroundColor: `${blockColor}`}}></div>
    )
}

export default Block;