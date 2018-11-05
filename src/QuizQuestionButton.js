import React from 'react';

const QuizQuestionButton = ({ clickHandler, button_text }) => {

    const handleClick = () => {
        clickHandler(button_text);
    }

    return ( 
        <li>
            <button onClick={handleClick}>
                <span className="button-value">{button_text}</span>
            </button>
        </li>
    );
}
 
export default QuizQuestionButton;
