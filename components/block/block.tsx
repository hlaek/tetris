import React from 'react';
import styles from './block.module.scss'

interface BlockProps {
    blockColor: BlockColor;
    noShadow?: boolean;
}

export enum BlockColor {
    purple = 'purple',
    pink = 'pink', 
    blue = 'blue', 
    green = 'green', 
    orange = 'orange', 
    white = 'white'
}

const Block = ({ blockColor, noShadow }: BlockProps) => {
    return (
        <div className={`${styles.block} ${noShadow && styles.noShadow}`} style={{backgroundColor: `${blockColor}`}}></div>
    )
}

export default Block;