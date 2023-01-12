import React, { useEffect, useState } from "react";

export default function Timer(props) {
    const [timeRemain, setTimeRemain] = useState(props.time);

    const calcTime = () => {
        let minutes = Math.floor(timeRemain / 60);
        let seconds = timeRemain % 60;

        // switch ((minutes.toString().length, seconds.toString().length)) {
        //     case minutes.toString().length < 2: {
        //         return `0${minutes}:${seconds}`;
        //     }
        //     case seconds.toString().length < 2: {
        //         return `${minutes}:0${seconds}`;
        //     }
        //     case seconds.toString().length < 2 &&
        //         minutes.toString().length < 2: {
        //         return `0${minutes}:0${seconds}`;
        //     }
        //     default: {
        //         return `${minutes}:${seconds}`;
        //     }
        // }
        return `${minutes}:${seconds}`;
    };

    useEffect(() => {
        const tick = () => {
            setTimeRemain(timeRemain - 1);
        };
        if (timeRemain > 0) {
            setTimeout(tick, 1000);
        } else if (timeRemain === 0) {
            props.setComplete(true);
        }
    }, [timeRemain]);

    return <div>Времени осталось - {calcTime()}</div>;
}
