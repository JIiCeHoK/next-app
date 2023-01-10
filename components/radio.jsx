import React from "react";
import styles from "../styles/radio.module.scss";

export default function Radio(props) {
    return props.disabled ? (
        <div className={styles.container_disabled}></div>
    ) : props.checked ? (
        <div className={styles.container_checked}>
            <div className={styles.container_checked_center}></div>
        </div>
    ) : (
        <div className={styles.container}></div>
    );
}
