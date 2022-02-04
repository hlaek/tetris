import React from 'react'
import styles from './scoreBoard.module.scss'

// interface ScoreBoardProps {
//     props: {
//         score?: number;
//         level?: number;
//     };
// }
// TO-DO: replace any type with interface/better typing
const ScoreBoard = (
    props: any,
) => {

    return (
        <div className="score-board" {...props}>
            <div>Score: { props.score }</div>
            <div>Level: { props.level }</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Play</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}

export default ScoreBoard;
