// アコーディオン作成用

// 状態管理　開閉 useRefでアニメーション開閉用に「テキストの高さ」を取得する。
import { useState, useRef } from 'react'

import styles from 'styles/accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 下矢印アイコン
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { noAuto } from '@fortawesome/fontawesome-svg-core'

//================================================================================
// heading属性で見出し、children属性でテキストを受け取る
export default function Accordion ({ heading, children }) {
    // 状態管理state変数を宣言
    const [textIsOpen, setTextIsOpen] = useState(false)

    // ボタンのクリックで開閉のTRUE Falseを切り替える
    const toggleText = () => {
        setTextIsOpen((prev) => !prev)
    }
    //　useRefでアニメーション開閉用に「テキストの高さ」を取得する。
    const refText = useRef(null)

    return (
        // textIsOpenの値を見て開閉を切り替える
        <div className={textIsOpen ? styles.open : styles.close}>

            {/* 見出し用 */}
            <h3 className={styles.heading}>
                
                {/* ボタンクリックの度にTRUE Falseを切り替える状態関数を動かす */}
                <button onClick={toggleText}>
                    {heading}
                    <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
                </button>
            </h3>

            {/* 本文用　開閉アニメーション用div */}
            {/* scrollHeightで要素の高さを取得する */}
            <div 
                className={styles.text}
                ref={refText}
                style={{
                    '--text-height': refText.current ?
                    `${refText.current.scrollHeight}px` : '0px' ,
                }}
            >
                {/* テキストのスタイル調整用div */}
                <div className={styles.textInner}>{children}</div>
            </div>
        </div>
    )
}