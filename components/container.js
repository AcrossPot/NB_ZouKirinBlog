// 横幅指定するためのもの。
// Container　で囲ったものを指定とする
/* header.jsとfooter.jsに渡す設定 　⇐　★container.js　⇐　container.module.css(横幅指定)*/
/* index.js about.js blog/index.jsにも渡す */

import styles from 'styles/container.module.css'


export default function Container({ children, large = false }) {
    return (
        // 三項演算子　large属性が記載されている ? TRUE処理　：　FALSE処理
        <div className={large ? styles.large : styles.default}>
            { children }
        </div>
    )
}