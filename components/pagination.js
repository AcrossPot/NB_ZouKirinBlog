// ページネーション　＜前の記事へ　次の記事へ＞　ボタン制御

import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination ({
    // これらの属性のリンクのテキストとURLをうけとる。未指定は空のまま
    prevText = '',
    prevUrl = '',
    nextText = '',
    nextUrl = '',
})  {
    return (
        <ul className={styles.flexContainer}>
            
            {/* 前ページへ戻るの処理 */}
            {prevText && prevUrl && (
                <li className={styles.prev}>
                    <Link href={prevUrl}>
                        <a className={styles.iconText}>
                            <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
                            <span>{prevText}</span>
                        </a>
                    </Link>
                </li>
            )}

            {/* 次のページへ進むの処理 */}
            {nextText && nextUrl && (
                <li className={styles.next}>
                    <Link href={nextUrl}>
                        <a className={styles.iconText}>
                            <span>{nextText}</span>
                            <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
                        </a>
                    </Link>
                </li>
            )}
            
        </ul>
    )
}