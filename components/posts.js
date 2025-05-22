//  /blog 記事一覧 作成用
//gridContainerでレイアウト調整を行う

import styles from 'styles/posts.module.css'
import Link from 'next/link'

// アイキャッチ画像の追加
import Image from 'next/image'

export default function Posts({ posts }) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <figure>
                                {/* 記事一覧ページの画像 */}
                                <Image 
                                    src={eyecatch.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    width={eyecatch.width}
                                    height={eyecatch.height}
                                    sizes="(min-width: 1152px) 576px, 50vw"
                                    placeholder="blur"
                                    blurDataURL={eyecatch.blurDataURL}
                                />
                            </figure>
                            {/* 記事一覧ページのタイトル */}
                            <h2 style={{ fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329' }}>{title}</h2>
                        </a>
                    </Link>
                </article>
            ))}

        </div>
    )
}