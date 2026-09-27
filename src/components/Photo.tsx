import { images, type Ratio } from '@/content/images';
import { imageExists } from '@/lib/image-exists';
import PhotoFrame from './PhotoFrame';

type Props = {
  /** src/content/images.ts のキー */
  name: keyof typeof images;
  sizes: string;
  priority?: boolean;
  className?: string;
  /** 登録比率を上書きする場合 */
  ratio?: Ratio;
  ratioSp?: Ratio;
  labelTop?: boolean;
};

/** 登録済みの写真を表示（サーバーコンポーネント） */
export default function Photo({ name, sizes, priority, className, ratio, ratioSp, labelTop }: Props) {
  const entry = images[name];
  return (
    <PhotoFrame
      src={entry.src}
      alt={entry.alt}
      label={entry.label}
      ratio={ratio ?? entry.ratio}
      ratioSp={ratioSp}
      position={'position' in entry ? entry.position : undefined}
      available={imageExists(entry.src)}
      sizes={sizes}
      priority={priority}
      className={className}
      labelTop={labelTop}
    />
  );
}
