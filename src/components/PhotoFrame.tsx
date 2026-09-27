import Image from 'next/image';
import type { Ratio } from '@/content/images';
import styles from './PhotoFrame.module.css';

export type PhotoFrameProps = {
  src: string;
  alt: string;
  label: string;
  ratio: Ratio;
  /** 画像が public/ に存在するか（Photo が判定して渡す） */
  available: boolean;
  sizes: string;
  priority?: boolean;
  position?: string;
  className?: string;
  /** スマートフォン時だけ比率を変える場合 */
  ratioSp?: Ratio;
  /** 仮ラベルを枠の上側に表示 */
  labelTop?: boolean;
};

/**
 * 写真枠。画像があれば next/image で表示し、無ければ仮ラベル付きの枠を表示します。
 * クライアントコンポーネントからも使えるよう、ファイル判定は行いません（→ Photo）。
 */
export default function PhotoFrame({
  src,
  alt,
  label,
  ratio,
  ratioSp,
  available,
  sizes,
  priority,
  position,
  className,
  labelTop,
}: PhotoFrameProps) {
  const style = {
    '--ratio': ratio.replace('/', ' / '),
    '--ratio-sp': (ratioSp ?? ratio).replace('/', ' / '),
  } as React.CSSProperties;

  return (
    <div className={`${styles.frame} ${labelTop ? styles.labelTop : ''} ${className ?? ''}`} style={style}>
      {available ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.img}
          style={position ? { objectPosition: position } : undefined}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={`${alt}（写真準備中）`}>
          <span className={styles.corner} aria-hidden="true" />
          <span className={styles.label} aria-hidden="true">
            {label}
          </span>
          <span className={`${styles.ratio} ${styles.ratioSp}`} aria-hidden="true">
            {(ratioSp ?? ratio).replace('/', ' : ')}
          </span>
          <span className={`${styles.ratio} ${styles.ratioPc}`} aria-hidden="true">
            {ratio.replace('/', ' : ')}
          </span>
        </div>
      )}
    </div>
  );
}
