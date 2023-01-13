import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";

const tests = [
    { name: "Первый тест", id: 0 },
    { name: "Второй тест", id: 1 },
];

export default function Home() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Тут будут тесты</h1>
            {tests.map((test, index) => (
                <p key={index}>
                    <a onClick={() => router.push(`test/${test.id}`)}>
                        {test.name}
                    </a>
                </p>
            ))}
        </div>
    );
}
