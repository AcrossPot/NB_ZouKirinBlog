// 本文レイアウト用
// PostBodyで受け取る

import styles from 'styles/post-body.module.css'

export default function PostBody ({ children }) {
    return (
        // 日記本文
        <div className={styles.stack} style={{ fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329'}}>
            { children }
        </div>
    )
}