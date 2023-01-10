import React, { useState } from "react";
import styles from "../styles/checkBox.module.scss";

export default function CheckBox(props) {
    const [checked, setChecked] = useState(props.checked)
    return props.disabled ? (
        <div className={styles.box}>
            <div className={styles.container_disabled}></div>
            <div className={styles.text}>{props.text}</div>
        </div>
    ) : checked === true ? (
        <div className={styles.box}>
            <div className={styles.container_checked}>
                <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 10L0 5.19231L1.4 3.84615L5 7.30769L12.6 0L14 1.34615L5 10Z"
                        fill="#EEEEEE"
                    />
                </svg>
            </div>
            <div className={styles.text}>{props.text}</div>
        </div>
    ) : (
        <div className={styles.box}>
            <div className={styles.container}></div>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
}
