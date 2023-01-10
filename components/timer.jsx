import React, { useEffect, useState } from "react";

export default function Timer({ time }) {
    const [t, setT] = useState(600);

    const calcTime = (time) => {
        let timeStr = (time).toString();
        
        if (time <= 0) {
            return `00:00`;
        }
        switch (timeStr.length) {
            case 1:
                return time <= 0 ? "00:00" : `00:0${timeStr}`;
            case 2:
                return time < 60 ? `00:${timeStr}` : `01:00`;
            default:
                return `${timeStr}`;
        }
    };

    useEffect(() => {
        const tick = () => {
            setT((el) => el - 1);
        };
        if (t > 0) {
            setTimeout(tick, 1000);
        } else onFinish();
    },[t]);

    return <div>Времени осталось - {calcTime(t)}</div>;
}
