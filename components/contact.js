/* コンタクト情報表示 ⇐ contact.js ⇐ ★contact.module.css */
import styles from 'styles/contact.module.css'
import Social from 'components/social'

export default function Contact() {
    return (
        <div className={styles.stack}>
            <h3 className={styles.heading}
                style={{fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329' }}
            >おてがみ</h3>
            <address>zoukirin@niiza.otegami..jpp</address>
            <h3 className={styles.heading}
                style={{fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329' }}
            >えすえぬえす</h3>
            <Social iconSize="30px" />
        </div>
    )
}