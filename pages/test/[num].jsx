import React, { useEffect, useState } from "react";
import { getTest } from "../api/hello";

import Question from "../../components/Question";
import Timer from "../../components/timer";

import styles from "../../styles/test.module.scss";

let answers = [];
let test = [1, 2, 3];

export default function Test({ data }) {
    const [test, setTest] = useState(data);
    const [currentCheckedAnswer, setCurrentCheckedAnswer] = useState("");
    const [answer, setAnswer] = useState("");
    const [complete, setComplete] = useState(false);

    //console.log(data);

    useEffect(() => {
        if (answer != "") {
            answers.push(answer);
            console.log(answers);
        }
    }, [answer]);
    useEffect(() => {
        if (complete != false) {
            console.log(complete);
        }
    }, [complete]);

    const listItems = test.map((item) => {
        item;
    });

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
                    <div>{listItems}</div>
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
