/* ★header.jsとfooter.jsに渡す設定 　⇐　★container.js　⇐　container.module.css(横幅指定)*/
import Container from "components/container";

import Logo from "components/logo";
import Nav from "components/nav";

// ★header.js ⇐ header.modules(クラス.flexContainer宣言) ⇐ utils.modules(レイアウト)
import styles from "styles/header.module.css";


export default function Header() {
  return (
    <header>
        {/* large属性 有で文字を最大化 */}
        <Container large>
            {/* // ココ ⇐ header.modules(クラス.flexContainer宣言) ⇐ utils.modules(レイアウト) */}
            <div className={styles.flexContainer}>
                <Logo boxOn />
                <Nav />
            </div>
        </Container>
    </header>
  );
}
