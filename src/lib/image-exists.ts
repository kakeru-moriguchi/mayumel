import fs from 'node:fs';
import path from 'node:path';

const cache = new Map<string, boolean>();

/**
 * public/ 配下に画像ファイルが存在するかをビルド時に判定します。
 * 存在すれば実写真、無ければ写真枠（プレースホルダー）を表示します。
 */
export function imageExists(src: string): boolean {
  if (/^https?:\/\//.test(src)) return true;
  const hit = cache.get(src);
  if (hit !== undefined) return hit;
  const exists = fs.existsSync(path.join(process.cwd(), 'public', src));
  cache.set(src, exists);
  return exists;
}
