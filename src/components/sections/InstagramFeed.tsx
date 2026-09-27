/**
 * Instagram 投稿の表示枠（将来用）。
 *
 * 現在は投稿データを持たないため何も表示しません。
 * Instagram Graph API 等で投稿を取得できるようになったら、
 * `posts` に { id, permalink, imageUrl, caption } の配列を渡してください。
 * （next.config.ts の images.remotePatterns に画像ホストの追加が必要です）
 */
import Image from 'next/image';
import styles from './Instagram.module.css';

export type InstagramPost = {
  id: string;
  permalink: string;
  imageUrl: string;
  caption?: string;
};

export default function InstagramFeed({ posts = [], className }: { posts?: InstagramPost[]; className?: string }) {
  if (posts.length === 0) return null;
  return (
    <ul className={`${styles.feedList} ${className ?? ''}`}>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>
          <a href={post.permalink} target="_blank" rel="noopener noreferrer">
            <Image src={post.imageUrl} alt={post.caption?.slice(0, 60) ?? 'Instagram の投稿'} fill sizes="20vw" />
          </a>
        </li>
      ))}
    </ul>
  );
}
