import React from 'react'
import { v4 as uuidv4 } from 'uuid' 

 function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <>
            {options.map(option => (<button type="button" name={ option} onClick={onLeaveFeedback} key={ uuidv4()}>{option}</button>  ))}
              
        </>
    )
}

export default FeedbackOptions;