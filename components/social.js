// SNSリンクメニュー
import styles from 'styles/social.module.css'

// FontAwesomeコンポーネントのインポート
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Social( { iconSize = 'initial' }) {
    return (
        <ul className={styles.list} style={{ '--icon-size': iconSize }}>
            <li>
                <a href="https://x.com/">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <span className='sr-only'>X(旧Twitter)</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <span className='sr-only'>Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/">
                    <FontAwesomeIcon icon={faGithub} />
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
        </ul>
    )

}