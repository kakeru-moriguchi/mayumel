import { works, type Work } from '@/content/works';
import { imageExists } from './image-exists';
import type { GalleryItem } from '@/components/sections/GalleryGrid';

/** 作品データに「写真があるか」を付与して返す（ビルド時） */
export function getWorks(filter?: (w: Work) => boolean): GalleryItem[] {
  return works.filter(filter ?? (() => true)).map((w) => ({ ...w, available: imageExists(w.src) }));
}
