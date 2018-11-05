import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json')

class Quiz extends Component {
    state = { 
        quiz_position: 1
    }

    showNextQuestion = () => {
        this.setState(state => ({
            quiz_position: state.quiz_position + 1
        }));
    }

    handleResetClick = () => {
        this.setState(() => ({
            quiz_position: 1
        }));
    }

    render() { 
        const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length;
        return ( 
            <div>
                {isQuizEnd 
                    ?
                    <QuizEnd resetClickHandler={this.handleResetClick}/>
                    :
                    <div className="QuizQuestion">
                        <QuizQuestion 
                            quiz_question={quizData.quiz_questions[this.state.quiz_position -1]} 
                            showNextQuestionHandler={this.showNextQuestion}/>
                    </div>
                }
            </div>
         );
    }
}
 
export default Quiz;
