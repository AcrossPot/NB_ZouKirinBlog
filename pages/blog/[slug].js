// 変更箇所有、引用元A
// https://zenn.dev/kadotchi/articles/4f5b1cfe90c048

// 非同期処理
// 非同期処理でAPIキーを読み込む。
// api.js記載関数getPostByslug() 記事データを取得する
import { getPostBySlug , getAllSlugs} from 'lib/api';
import { extractText } from 'lib/extract-text'

//前後の記事タイトルを取得する関数
import {prevNextPost } from 'lib/prev-next-post'

import Meta from 'components/meta'
import Container from 'components/container'
import PostHeader from 'components/post-header';
import PostBody from 'components/post-body'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from 'components/two-column'
import ConvertBody from 'components/convert-body'
import PostCategories from 'components/post-categories'

//ページネーション(前の記事、次の記事へ)
import Pagination from 'components/pagination'

import Image from 'next/image'
// アイキャッチ画像のブラー処理
import {getPlaiceholder } from 'plaiceholder'
// 変更箇所、引用元A-1
import { getImageBuffer } from 'lib/getImageBuffer'

// アイキャッチ画像の代替
import { eyecatchLocal } from 'lib/constants'

//--------------------------------------------------------------




//--------------------------------------------------------------
// Schedule取得したデータのなかから記事のtitleを表示する。
// Containerでは横幅を調整する
export default function Post( {
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
    prevPost,
    nextPost,
}) {
    return (
    <Container>
        <Meta
            pageTitle={title}
            pageDesc={description}
            pageImg={eyecatch.url}
            pageImgW={eyecatch.width}
            pageImgH={eyecatch.height}
        />

        <article>
            {/* 記事タイトル */}
            <PostHeader title={title} subtitle="Blog Article" publish={publish} />

            {/* アイキャッチ画像 */}
            <figure>
                <Image
                    // keyの行を追加することで、ページごとに異なるコンポーネント認識をしてもらい、ブラー表示を可にする
                    key={eyecatch.url}
                    src={eyecatch.url}
                    alt=""
                    layout="responsive"
                    width={eyecatch.width}
                    height={eyecatch.width}
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}
                />
            </figure>

            {/* 本文（そのままではhtmlも表示される) */}
            <TwoColumn>
                {/* 左カラム本文の表示 */}
                <TwoColumnMain>
                    <PostBody>
                        {/* 下記に変換してDOMDOMバーガーにする */}
                        <ConvertBody contentHTML={content} />
                    </PostBody>
                </TwoColumnMain>

                {/* 右カラム */}
                <TwoColumnSidebar>
                    <PostCategories categories={categories} />
                </TwoColumnSidebar>

            </TwoColumn>

            {/* 前の記事へ　次の記事へ */}
            <Pagination 
                prevText={prevPost.title}
                prevUrl={`/blog/${prevPost.slug}`}
                nextText={nextPost.title}
                nextUrl={`/blog/${nextPost.slug}`}
            />

        </article>
    </Container>
    )
}

//--------------------------------------------------------------
export async function getStaticPaths() {
    // fallback:falseで全記事をスラッグ関数に指定 > (5)とblockin指定で最初の５記事を取得に変更

    const allSlugs = await getAllSlugs(5)

    return {
        // 全記事URL生成。全記事スラッグ関数をmapで展開
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: 'blocking',
    }
}


//--------------------------------------------------------------
// asyncをつけて宣言をすると非同期関数を定義することが出来る。
// 返り値は非同期のPromiseオブジェクトとなる
// スラッグがscheduleの記事データを取得するように指定する
export async function getStaticProps(context) {

    // ====================================
    // const resPromise = client.get({
    //     // エンドポイント、microCMSから持ってくる。
    //     // 左カラム、コンテンツ(API)の対象プロジェクト名＞右端の「API設定」＞基本情報内の「エンドポイント」
    //     // テキストボックス内のみをコピペすること。URLフルで入れると動かない。エラーになる。
    //     endpoint: 'blogs',
    // })
    // try {
    //     const res = await resPromise
    //     console.log(res)
    // } catch (err) {
    //     console.log(err)
    // }
    // ====================================

    const slug = context.params.slug

    const post = await getPostBySlug(slug)
    //記事のないURLに接続した際の、500 Internal Server Error を404エラーに変える。
    if (!post) {
        //postが無い。TRUE　以下で404エラー扱いとする
        return { notFound: true }
    } else {
        //postが存在する

        const description = extractText(post.content)

        const eyecatch = post.eyecatch ?? eyecatchLocal

        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ブラー処理用
        // 変更箇所、引用元A-2,3,4
        const imageBuffer = await getImageBuffer(eyecatch.url)
        const { base64 } = await getPlaiceholder(imageBuffer)
        eyecatch.blurDataURL = base64
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

        // 前後記事タイトルを取り出す宣言
        const allSlugs = await getAllSlugs()
        const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

        return {
            props:{ 
                title: post.title,
                publish: post.publishDate,
                content: post.content,
                eyecatch: eyecatch,
                categories: post.categories,
                description: description,
                prevPost: prevPost,
                nextPost: nextPost,
            },
        }
    }

}
