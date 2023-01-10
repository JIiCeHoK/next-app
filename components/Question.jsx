import React, { useState } from "react";

import styles from "../styles/qusetion.module.scss";

let answerId;

export default function Question(props) {
    const [currentQuestion, setCurrentQuestion] = useState(
        props.questions[0].id
    );

    function changeChecked() {
        answerId = event.target.id;
        props.setCurrentCheckedAnswer(answerId);
    }

    function nextQuestion() {
        setCurrentQuestion(currentQuestion + 1);
        props.setCurrentCheckedAnswer("");
        props.setAnswer(currentQuestion + "|" + answerId);
        answerId = null;
    }

    function completeTest() {
        props.setAnswer(currentQuestion + "|" + answerId);
        answerId = null;
        props.setComplete(true);
    }

    return (
        <>
            <div
                key={props.questions[currentQuestion].id}
                className={styles.container}
            >
                <h1>
                    Номер вопроса: {props.questions[currentQuestion].id + 1}
                </h1>
                <div className={styles.questionText}>
                    {props.questions[currentQuestion].questionText}
                </div>
                <form className={styles.answers}>
                    {props.questions[currentQuestion].answers.map((answer) => (
                        <div key={answer.answerId}>
                            <input
                                type="radio"
                                value={answer.answerText}
                                id={answer.answerId}
                                checked={
                                    props.currentCheckedAnswer ===
                                    answer.answerId.toString()
                                }
                                onChange={changeChecked}
                            ></input>
                            <label>{answer.answerText}</label>
                        </div>
                    ))}
                </form>
                <div className={styles.buttons}>
                    {currentQuestion === props.questions.length - 1 ? (
                        <div onClick={completeTest}>Закончить</div>
                    ) : (
                        <div onClick={nextQuestion}>Следующий вопрос</div>
                    )}
                </div>
            </div>
        </>
    );
}
