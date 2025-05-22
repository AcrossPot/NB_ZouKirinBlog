// ナビゲーションメニュー構成用

// ハンバーガーに使用する状態管理
import { useState } from 'react'


// next/linkでリンクを設定する。
import Link from "next/link";
// ナビゲーションメニューを一括スタイル指定するためにimportする
import styles from "styles/nav.module.css";

//================================================================================
export default function Nav() {
  
  // 変数名をnavIsOpen、それを更新するための関数をsetNavIsOpenとする
  // 現在の状態useStateの初期状態はfalse　ボタン非表示させるため。
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    // 現在のprevを否定する。True or Falseの値をsetNavIsOpenに返す
    setNavIsOpen((prev) => !prev)
  }

  // setNavIsOpenの現在のステータスをfalseに上書きする関数。
  //ページ推移後もメニューオープンの状態を維持してしまうので、ページ推移後にfalseステータスを与えてページを閉じさせる
  const closeNav = () => {
    setNavIsOpen(false)
  }
  

  return (
    <nav className={navIsOpen ? styles.open : styles.close} >
      {/* ハンバーガー展開中に画面スクロールをさせないようにする */}
      {navIsOpen && (
        <style jsx global> {`
            @media (max-width: 767px) {
                body {
                    overflow: hidden;
                    position: fixed;
                    width: 100%;
                }
            }
        `}</style>
      )}
      
      {/* ハンバーガーを作る */}
      <button 
        className={styles.btn} 
        // クリックでtoggleNav関数を動かす
        onClick={toggleNav}>
        
        {/* ハンバーガーをスタイルで表示させる。 */}
        <span className={styles.bar}></span>
        <span className='sr-only'>MENU</span>
      </button>

      {/* ulタグ内をimportスタイルで一括レイアウト指定する。 styles.list*/}
      <ul className={styles.list}>
        <li>
          <Link href="/">
            {/* 別ページに飛ぶ前にcloseNavでメニューを閉じるステータスを付与 */}
            <a onClick={closeNav}>トップページ</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a onClick={closeNav}>ゾウキリンのひみつのへや</a>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <a onClick={closeNav}>たびにっき</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
