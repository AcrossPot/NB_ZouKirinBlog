// propsで各ページに反映させる
//title　h1ページタイトル、subtitle　サブタイトル、imageOn　画像表示させるフラグ
//受取済の箱にスタイル設定classNameをする。
//倫理属性：imageOn属性が存在すると、TRUEになる。記述無しでF

import styles from "styles/hero.module.css";

// バナー画像をインポート
import Image from 'next/image'
import pot from 'images/topimg.png'
//================================================================================

//-----------------------------------------------------------------
// // イメージローダーを変更したのでコメントアウトする
// ↑動かなくなるので未実装とする
// // import pot from 'images/topimg.png'
// // イメージローダー変更の代わり
// const pot = {
//   src: 'https://images.microcms-assets.io/assets/f74dc956003c4565a8ab3ed700c6435f/b4800f006d7b4d869f9fdbfbb822488e/topimg.png',
//   height: 1300,
//   width: 1500,
//   blurDataURL: 'data:image/jpeg;base64,',
// }
// ↑動かなくなるので未実装とする
//-----------------------------------------------------------------

//================================================================================
export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      {/* トップページ以外ではFalse（画像を表示させない） */}
        {imageOn && (
            // 親要素のスタイルを上書きするクラスstyles.imageを指定
            <figure className={styles.image}>
                <Image 
                src={pot} 
                alt="" 
                layout="responsive"
                sizes="(min-width: 1152px) 576px, (min-width:768px) 50vw, 100vw"
                priority
                placeholder="blur"
                 />
            </figure>
        )}
    </div>
  );
}