import styles from './SectionLabel.module.css';

/** 「02 — Introduction」のような小さな英字ラベル＋罫線 */
export default function SectionLabel({
  no,
  children,
  tone = 'ink',
  className,
}: {
  no?: string;
  children: React.ReactNode;
  tone?: 'ink' | 'paper';
  className?: string;
}) {
  return (
    <p className={`${styles.label} ${styles[tone]} ${className ?? ''}`}>
      {no && <span className={styles.no}>{no}</span>}
      <span className={styles.rule} aria-hidden="true" />
      <span className={styles.text}>{children}</span>
    </p>
  );
}
