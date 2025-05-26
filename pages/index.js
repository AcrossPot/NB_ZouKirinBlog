
// 記事データの取得
import { getAllPosts } from 'lib/api'
// metaデータを持ってくる
import Meta from 'components/meta'

/* index.js about.js blog/index.jsにも渡す *//* header.jsとfooter.jsに渡す設定 　⇐　★container.js　⇐　container.module.css(横幅指定)*/
import Container from 'components/container'

import Hero from "components/hero";
// 全ての記事データの取得
import Posts from 'components/posts'

import Pagination from 'components/pagination'

// ブラー処理
import { getPlaiceholder } from 'plaiceholder'
//ブラー処理不具合対応
import { getImageBuffer } from 'lib/getImageBuffer'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'



//================================================================
//imageOn属性が存在すると、TRUEになる。
export default function Home({ posts }) {
    return(
        <Container>
            <Meta />
            <Hero title="ゾウキリンのBlog" subtitle="埼玉県新座市のゆるきゃら非公式紹介ブログ" imageOn />

                                    
            
            <Posts posts={posts} />
            <Pagination nextUrl="/blog" nextText="もっとみる" />
        </Container>
    )
}




//================================================================
// インポートしたgetAllPosts()で全ての記事データを取得。
// 取得したデータは　posts　に入れて、
// propsとしてblogコンポーネント（ページコンポーネント）に渡す

export async function getStaticProps() {

    //臨時確認用で追加
    console.log(process.env.SERVICE_DOMAIN)//V確認で追加１
    console.log(process.env.API_KEY)//V確認で追加２



    // トップページに最新記事を(4)記事表示させる
    const posts = await getAllPosts(4)

    for (const post of posts) {
        if(!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }

        const imageBuffer = await getImageBuffer(post.eyecatch.url)
        const { base64 } = await getPlaiceholder(imageBuffer)
        // ※ブラー処理不具合対応、上記２行を代わりに実行
        // const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    return {
        props: {
            posts: posts,
        },
    }
}