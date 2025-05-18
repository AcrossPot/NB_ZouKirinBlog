// アバウトページ

// メタデータ用
import Meta from 'components/meta'

/* index.js about.js blog/index.jsにも渡す *//* header.jsとfooter.jsに渡す設定 　⇐　★container.js　⇐　container.module.css(横幅指定)*/
import Container from 'components/container'

import Hero from "components/hero";

/* ★About.js ⇐ post-body.js ⇐ post-body.module.css */
import PostBody from 'components/post-body'

/* コンタクト情報表示 ⇐ contact.js ⇐ ★contact.module.css */
import Contact from 'components/contact'

// もとが、１ファイルで複数コンポーネントを包容しているので、export defaultの、defaultを外している。
// そのため、名指しでインポートし、カッコでくくる
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'

// アコーディオン
import Accordion from 'components/accordion'

import Image from 'next/image'
import eyecatch from 'images/about.jpg'

// ページごとのカスタマイズ用
import BlueFrame from  'components/blue-frame'

//================================================================================

//-----------------------------------------------------------------
// // イメージローダーを変更したのでコメントアウトする　
// ↑動かなくなるので実装しない。
// //import eyecatch from 'images/about.jpg'
// // イメージローダー変更の代わり
// const eyecatch = {
//   src: 'https://images.microcms-assets.io/assets/f74dc956003c4565a8ab3ed700c6435f/c909f38809424e11a72cf8d8e005a6da/about.jpg',
//   height: 960,
//   width: 1920,
//   blurDataURL: 'data:image/jpeg;base64,',
// }
// ↑動かなくなるので実装しない
//-----------------------------------------------------------------


//================================================================================
export default function About() {
    return(
        <Container>
            {/* metaデータ欄 */}
            <Meta 
                pageTitle="ページタイトル" 
                pageDesc="ページサブタイトル"
                
                // OGP画像設定
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}

            />

            {/* タイトルバナー欄 */}
            <Hero title="About" subtitle="アバウトページサブタイトル" />
            
            {/* 画像をfigureでくくる */}
            <figure>
                <Image 
                src={ eyecatch } 
                alt=""
                // レスポンシブimageコード生成を指定
                layout="responsive"
                // モニターサイズに合わせて適切なものを選択させる
                sizes="(min-width: 1152px) 1152px, 100vw"
                // 画像優先読み込みさせる
                priority
                // 画像をブラー表示
                placeholder="blur"
                  />
            </figure>
            
            <TwoColumn>
                {/* メインコンテンツ */}
                <TwoColumnMain>
                    <PostBody>
                        <p>Aboutページ本文</p>
                        <h2>AboutページH2見出し</h2>
                        <p>本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
                            本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
                            本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文
                        </p>

                        <h2>FAQ</h2>                        
                        <Accordion heading="この文章について">
                            <p>h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                            </p>
                        </Accordion>
                        <Accordion heading="この文章について">
                            <p>h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                            </p>
                        </Accordion>
                        <Accordion heading="この文章について">
                            <p>h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                                h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章h3文章
                            </p>
                        </Accordion>
                    </PostBody>
                </TwoColumnMain>
                
                {/* サイドバーの項目 */}
                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>

        </Container>
    )
}


//================================================================================
// 個別ページレイアウト用関数を動かす
About.getLayout = function getLayout(page) {
    return <BlueFrame>{page}</BlueFrame>
}
//================================================================================