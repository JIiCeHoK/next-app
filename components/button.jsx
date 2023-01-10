import React from "react";
import styles from "../styles/button.module.scss";

export default function Button(props) {
    return props.disable ? (
        <div className={styles.container_disable}>{props.text}</div>
    ) : (
        <div className={styles.container}>{props.text}</div>
    );
}
