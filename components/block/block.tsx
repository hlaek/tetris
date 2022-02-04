import React from 'react';
import styles from './block.module.scss'

interface BlockProps {
    blockColor: BlockColor;
    gridBlocks?: boolean;
}

export enum BlockColor {
    white = '--color-0',
    orange = '--color-1', 
    yellow = '--color-2', 
    purple = '--color-3',
    pink = '--color-4', 
    green = '--color-5', 
    blue = '--color-6', 
    red = '--color-7', 
}

const Block = ({ blockColor, gridBlocks }: BlockProps) => {
    return (
        <div className={`${styles.block} ${gridBlocks && styles.gridBlocks}`} style={{backgroundColor: `var(${blockColor})`}}></div>
    )
}

export default Block;