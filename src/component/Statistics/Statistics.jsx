import React from 'react'

const Statistics = ({good, neutral,bad,total,positive}) => {
    return (
        <>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{ total}</p>
        <p>Positive feedback:{ positive}%</p>
        </>
        
    );
}

export default Statistics;