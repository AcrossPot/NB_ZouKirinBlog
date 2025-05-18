// カテゴリーリスト用のコンポーネントファイル

import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="sr-only">Categories</span>
            </h3>
        
            <ul className={styles.list}>
                {categories.map(({ name, slug }) => (
                    // カテゴリリスト
                    <li key={slug}>
                        <Link href={`/blog/category/${slug}`}>
                            <a>{name}</a>
                        </Link>
                    </li>
                    // 返り値必要なmap()関数だが、アロー関数でreturnは省略されている
                ))}
            </ul>
        </div>
    )
}