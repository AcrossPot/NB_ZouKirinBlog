//ブログの記事一覧ページ用

// 記事データの取得
import { getAllPosts } from 'lib/api'

// metaデータを持ってくる
import Meta from 'components/meta'

/* index.js about.js blog/index.jsにも渡す *//* header.jsとfooter.jsに渡す設定 　⇐　★container.js　⇐　container.module.css(横幅指定)*/
import Container from 'components/container'

import Hero from 'components/hero'

// 全ての記事データの取得
import Posts from 'components/posts'

//-----------------------------------------------------------------
// ブラー処理
import { getPlaiceholder } from 'plaiceholder'
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'
//★ブラー処理不具合対応
import { getImageBuffer } from 'lib/getImageBuffer'
//-----------------------------------------------------------------

//================================================================
export default function Blog({ posts }) {
    return(
        <Container>
            <Meta pageTitle="たびにっき" />

            <Hero title="たびにっき" subtitle="たくさんおでかけしたぞう" />

            {/* 全ての記事 */}
            <Posts posts={posts} />
        </Container>
    )
}

//================================================================
// インポートしたgetAllPosts()で全ての記事データを取得。
// 取得したデータは　posts　に入れて、
// propsとしてblogコンポーネント（ページコンポーネント）に渡す

export async function getStaticProps() {
    const posts = await getAllPosts()

    for (const post of posts) {
        if(!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        const imageBuffer = await getImageBuffer(post.eyecatch.url)
        const { base64 } = await getPlaiceholder(imageBuffer)
        // ※★追記：ブラー処理不具合対応、上記２行を代わりに実行
        // const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    }

    return {
        props: {
            posts: posts,
        },
    }
}