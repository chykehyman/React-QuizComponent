import React from 'react';

const QuizEnd = ({ resetClickHandler }) => {

    const handleResetClick = () => {
        resetClickHandler();
    }

    return ( 
        <div className="reset-container">
            <p>Thanks for playing!</p>
            <a onClick={handleResetClick} href=''>Reset Quiz</a>
        </div>
    );
}
 
export default QuizEnd;