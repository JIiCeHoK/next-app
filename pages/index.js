import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h1>Тут будут тесты</h1>
            <p>
                <a onClick={() => router.push("test/0")}>
                    Перейти к первому тесту
                </a>
            </p>
            <p>
                <a onClick={() => router.push("test/1")}>
                    Перейти ко второму тесту
                </a>
            </p>
        </div>
    );
}
