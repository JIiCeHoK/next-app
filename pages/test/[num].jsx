import React, { useEffect, useState } from "react";
import { getTest } from "../api/hello";

import Question from "../../components/Question";
import Timer from "../../components/timer";

import styles from "../../styles/test.module.scss";

let answers = [];

export default function Test({ data }) {
    const [test, setTest] = useState(data);
    const [currentCheckedAnswer, setCurrentCheckedAnswer] = useState("");
    const [answer, setAnswer] = useState("");
    const [complete, setComplete] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (answer != "") {
            answers.push(answer);
            console.log(answers);
        }
    }, [answer]);
    useEffect(() => {
        if (complete != false) {
            let res = [];
            for (let index = 0; index < answers.length; index++) {
                console.log(answers[0], data.answers[0]);
                if (answers[index] === data.answers[index]) {
                    res.push("Верно");
                } else {
                    res.push("Неверно");
                }
            }
            setResults(res);
            res = [];
        }
    }, [complete]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>{test.title}</div>
            <a onClick={() => router.push("/")}>Вернуться назад</a>
            {!complete ? (
                <>
                    <Timer time={data.time} />
                    <Question
                        questions={test.questions}
                        currentCheckedAnswer={currentCheckedAnswer}
                        setCurrentCheckedAnswer={setCurrentCheckedAnswer}
                        answer={answer}
                        setAnswer={setAnswer}
                        setComplete={setComplete}
                    />
                </>
            ) : (
                <>
                    <div>Тест завершён</div>
                    {results.map((item) => item)}
                </>
            )}
        </div>
    );
}

export async function getServerSideProps(context) {
    const titleId = context.query.num;
    const data = await getTest(titleId);
    return {
        props: {
            data: JSON.parse(JSON.stringify(data)),
        },
    };
}
