import { useState } from "react";
import stylesFB from "./Feedback.module.css"



const Feedback = ({goodIncr, neutrIncr, badIncr, totalFeedBack, positive}) => {
    if (totalFeedBack=== 0) {
        return (<h2 className={`${stylesFB.h2}`}>No feedback yet</h2>)
    };
    return (
        <div>
            <ul>
                <li>Good: {goodIncr}</li>
            </ul>
            <ul>
                <li>Neutral: {neutrIncr}</li>
            </ul>
            <ul>
                <li>Bad: {badIncr}</li>
            </ul>
            <ul>
                <li>Total: {totalFeedBack}</li>
            </ul>
            <ul>
                <li>Positive: {positive}%</li>
            </ul>
        </div>
    )
    
};

export default Feedback;