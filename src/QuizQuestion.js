import React, { Component } from 'react';

import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {

    state = {
        isCorrectAnswer: null
    }

    handleClick = (buttonText) => {
        if (buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setAppState(true);

            setTimeout(() => this.setAppState(null), 1500);
            
        } else {
            this.setAppState(false)
            setTimeout(() => this.setAppState(null), 1500);
        }
    }

    setAppState = (state) => {
        this.setState(() => ({
            isCorrectAnswer: state
        }));
    }

    showMessage = () => {
        if(this.state.isCorrectAnswer) {
            return <p className='alert-success'>Hurray, that is correct</p>
        }

        return <p className='alert-error'>Sorry, that's not right</p>
    }

    render() { 
        return ( 
            <main>
                <section className="instruction">
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => 
                            <QuizQuestionButton 
                                key={index} 
                                button_text={answer_option} 
                                clickHandler={this.handleClick}/>
                        )}
                    </ul>
                </section>
                { this.state.isCorrectAnswer !== null && this.showMessage()}
            </main>
         );
    }
}
 
export default QuizQuestion;
