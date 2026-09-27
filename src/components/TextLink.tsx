import Link from 'next/link';
import styles from './TextLink.module.css';

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

/** 下線と矢印だけの控えめなリンク */
export default function TextLink({ href, children, external, className }: Props) {
  const content = (
    <>
      <span className={styles.text}>{children}</span>
      <span className={styles.arrow} aria-hidden="true" />
    </>
  );
  if (external) {
    return (
      <a href={href} className={`${styles.link} ${className ?? ''}`} target="_blank" rel="noopener noreferrer">
        {content}
        <span className="sr-only">（新しいタブで開きます）</span>
      </a>
    );
  }
  return (
    <Link href={href} className={`${styles.link} ${className ?? ''}`}>
      {content}
    </Link>
  );
}
