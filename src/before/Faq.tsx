import styles from "./Faq.module.css";
export default function FrequentlyAskedQuestion({
  question,
  answer
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className={styles.faq}>
      <summary>{question}</summary>
      <div className={styles.answer}>{answer}</div>
    </details>
  );
}
