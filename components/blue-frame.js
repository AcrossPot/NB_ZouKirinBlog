// レイアウト用、ブルーフレーム

import styles from 'styles/blue-frame.module.css'
import Container from 'components/container'
import Link from 'next/link'

export default function BlueFrame({ children }) {
    return (
        <div className={styles.frame}>
            <Container>{children}</Container>

            <Link href="/blog">
                {/* 記事一覧ボタン */}
                <a className={styles.sideBtn}>Recent Blog Posts</a>
            </Link>
        </div>
    )
}