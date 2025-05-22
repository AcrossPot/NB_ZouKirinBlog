// 指定したスラッグのカテゴリページを作成する
import { getAllCategories,getAllPostsByCategory } from 'lib/api'
//メタデータ登録関数
import Meta from 'components/meta'

import Container from 'components/container'
import PostHeader from 'components/post-header'

import Posts from 'components/posts'

//-----------------------------------------------------------------
// ブラー処理
import { getPlaiceholder } from 'plaiceholder'
// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

//★以下追記１行：ブラー処理不具合対応
import { getImageBuffer } from 'lib/getImageBuffer'
//-----------------------------------------------------------------


//================================================================================
//３．　２getStaticProps(context)で取得したカテゴリー名を表示
export default function Category ({ name,posts }) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
            <PostHeader title={name} subtitle="たびにっき カテゴリー" />
            <Posts posts={posts} />
        </Container>
    )
}

//================================================================================
//１．　スラッグがtechnologyのカテゴリーページを生成するように指定
export async function getStaticPaths() {
    //全てのカテゴリーデータを取得して指定する
    const allCats = await getAllCategories()
    return {
        //この親が取得したデータはallCatsに入れられ、map()で各カテゴリーのスラッグをURLの形にかこうして使えるようにする
        paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    }
}

//================================================================================
//２．　１で指定したスラッグのカテゴリーのデータを取得するように指定
export async function getStaticProps(context) {
    const catSlug = context.params.slug

    const allCats = await getAllCategories()
    const cat = allCats.find(({ slug }) => slug === catSlug)

    // IDがcat.idのカテゴリーに属する全ての記事データを取得する
    const posts = await getAllPostsByCategory(cat.id)

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
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
            name: cat.name,
            posts: posts,
        },
    }
}
//-----------------------------------------------------------------
