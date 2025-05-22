// 記事のヘッダーコンポーネント用
import styles from 'styles/post-header.module.css'
import ConvertDate from 'components/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export default function PostHeader({ title, subtitle, publish = '' }) {
    return (
        // /blog/scheduleのレイアウト
        <div className={styles.stack}>
            {/* サブタイトル */}
            <p className={ styles.subtitle}>{subtitle}</p>
            
            {/* タイトル */}
            <h1 className={ styles.title}>{title}</h1>

            {publish && (
                <div className={styles.publish}>
                    {/* 時計アイコン */}
                    <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
                    {/* 日付 */}
                    <ConvertDate dateISO={publish} />
                    </div>
            )}
        </div>
    )
}