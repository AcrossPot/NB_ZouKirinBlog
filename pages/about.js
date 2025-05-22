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
import eyecatch from 'images/about.png'



// ページごとのカスタマイズ用
import BlueFrame from  'components/blue-frame'

// 画像のディレクトリ指定
import zou from 'images/zoukirin.jpg'
import zouBack from 'images/zoukirin-back.jpg'

//================================================================================

//-----------------------------------------------------------------
// // イメージローダーを変更したのでコメントアウトする　
// ↑動かなくなるので実装しない。
// //import eyecatch from 'images/about.png'
// // イメージローダー変更の代わり
// const eyecatch = {
//   src: 'https://images.microcms-assets.io/assets/f74dc956003c4565a8ab3ed700c6435f/c909f38809424e11a72cf8d8e005a6da/about.png',
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
                pageTitle="ゾウキリンのBlog" 
                pageDesc="ゾウキリンのひみつのへや"
                
                // OGP画像設定
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}

            />

            {/* タイトルバナー欄 */}
            <Hero title="ゾウキリンのひみつのへや" subtitle="" />
            
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

            

            <Accordion heading="あなたはだあれ？">
                <p style={{ fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329' }}>ゾウキリンだぞう！</p>
            </Accordion>
            <figure className={{ width: '255px', display: 'inline-block' ,textAlign: 'center'   }}>
                <Image 
                src={ zou }
                alt=""
                // レスポンシブimageコード生成を指定
                // layout="responsive"
                // justify-content="ceter"
                // モニターサイズに合わせて適切なものを選択させる
                // sizes="255px"
                // sizes="(min-width: 255px) 255px, 100vw"
                // 画像優先読み込みさせる
                priority
                // 画像をブラー表示
                placeholder="blur"
                style={{ border: 'none' }}
                  />
            </figure>
            
            <TwoColumn>
                
                {/* メインコンテンツ */}
                <TwoColumnMain>
                    <PostBody>
                        
                        <h2>ゾウキリンって？</h2>
                        <p><ruby>雑木林<rt>ぞうきばやし</rt></ruby>ぞうきばやしとせせらぎを<ruby>大切<rt>たいせつ</rt></ruby>にしてる<ruby>新座市<rt>にいざし</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいます。<br />
                            ゾウキリンは、ゾウみたいだけど、<ruby>体<rt>からだ</rt></ruby>のもようがキリンに<ruby>似<rt>に</rt></ruby>てるフシギな<ruby>生物<rt>せいぶつ</rt></ruby>です。<br />
                            <br />
                            "<ruby>雑木林<rt>ぞうきばやし</rt></ruby>"をまちがえて"ゾウキリン"って<ruby>読<rt>よ</rt></ruby>んでしまい、<br />
                            「<span style={{ fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329'}}>こりゃオイラのまちだ！！</span>」とやって<ruby>来<rt>き</rt></ruby>ました。<br />
                            <br />
                            そして、いごこちがよくてそのまま<ruby>住<rt>す</rt></ruby>みついています。<br />
                            </p>                        
                                                
                        <h2>ゾウキリンのひみつ</h2>
                        <Accordion heading="ひみつ１　たんじょうびは？">
                            <p>「<ruby>誕生日<rt>たんじょうび</rt></ruby>は2<ruby>月<rt>がつ</rt></ruby>13<ruby>日<rt>にち</rt></ruby>！」<br />
                                    <span style={{ fontFamily: '"Yomogi", cursive',fontWeight: 'bold',fontSize: '1.4em',color: '#6A5329'}}>
                                        ゾウキリンの<ruby>誕生日<rt>たんじょうび</rt></ruby>は、なんと、<ruby>偶然<rt>ぐうぜん</rt></ruby>にも「213（にいざ）」の<ruby>日<rt>ひ</rt></ruby>なんだぞう。<br />
                                        みんなでお<ruby>祝<rt>いわ</rt></ruby>いしてほしいな。<br />
                                    </span>
                            </p>
                        </Accordion>
                        <Accordion heading="ひみつ２　ゾウキリンのせなかに…！？">
                            <p><ruby>実<rt>じつ</rt></ruby>は、ゾウキリンの<ruby>背中<rt>せなか</rt></ruby>のもようにはハートマークがかくれています。<br />
                                このハートマークにタッチすると<ruby>幸<rt>しあわ</rt></ruby>せになれるというウワサもあるから、<br />
                                <ruby>見<rt>み</rt></ruby>かけたらやさしくタッチしてみてね！<br />
                                もうひとつ、「<ruby>新座<rt>にいざ</rt></ruby>」をアルファベットにした「N、I、I、Z、A」の<ruby>文字<rt>もじ</rt></ruby>も、<br />
                                もようの<ruby>中<rt>なか</rt></ruby>にかくれています。<br />
                                これからも<ruby>少<rt>すこ</rt></ruby>しずつひみつがわかるかもしれません。<br />
                            </p>
                        </Accordion>

                        <figure className={{ width: '255px', display: 'inline-block' ,textAlign: 'center'   }}>
                            <Image 
                                src={ zouBack }
                                alt=""
                                // レスポンシブimageコード生成を指定
                                // layout="responsive"
                                // justify-content="ceter"
                                // モニターサイズに合わせて適切なものを選択させる
                                // sizes="255px"
                                // sizes="(min-width: 255px) 255px, 100vw"
                                // 画像優先読み込みさせる
                                priority
                                // 画像をブラー表示
                                placeholder="blur"
                                style={{ border: 'none' }}
                            />
                        </figure>
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