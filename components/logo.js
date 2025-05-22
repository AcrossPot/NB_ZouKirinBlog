// ナビゲーションメニュー、フッター文字の「タイトル文字」リンク用

import Link from "next/link";
import styles from "styles/logo.module.css";

export default function Logo({ boxOn = false }) {
  return (
    <Link href="/">
      {/* boxOn属性の有無で文字スタイルを変更する */}
      <a className={boxOn ? styles.box : styles.basic}>ゾウキリンの<ruby>Blog<rt>ぶろぐ</rt></ruby></a>
    </Link>
  );
}
