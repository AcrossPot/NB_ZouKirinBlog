// 本文レイアウト用
// PostBodyで受け取る

import styles from 'styles/post-body.module.css'

export default function PostBody ({ children }) {
    return (
        <div className={styles.stack}>
            { children }
        </div>
    )
}