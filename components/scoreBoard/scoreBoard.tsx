import React from 'react'
import styles from './scoreBoard.module.scss'

interface ScoreBoardProps {
    score?: number;
    level?: number;
}
//const App = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
const ScoreBoard = ({score, level}: ScoreBoardProps): JSX.Element => {
    return (
        <div className="score-board">
            <div>Score: { score }</div>
            <div>Level: { level }</div>
            <button className="score-board-button" onClick={(e) => {
            }}>Play</button>
            <button className="score-board-button" onClick={(e) => {
            }}>Restart</button>
        </div>
    )
}

export default ScoreBoard;
