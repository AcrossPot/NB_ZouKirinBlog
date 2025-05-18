/* ★header.jsとfooter.jsに渡す設定 　⇐　★container.js　⇐　container.module.css(横幅指定)*/
import Container from "components/container";

import Logo from "components/logo";

import Social from 'components/social'

// フッターの共通スタイル
import styles from "styles/footer.module.css";


export default function Footer() {
  return (
    // styles.wrapperには全体設定、背景色等を
    <footer className={styles.wrapper}>
        <Container>
            <div className={styles.flexContainer}>
                <Logo />
                <Social />
            </div>
        </Container>
    </footer>
  );
}
