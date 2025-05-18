// 環境変数の値を読み込んで、microCMSからデータを取得するクライアント作成
// 使いまわししやすいように

import { createClient } from 'microcms-js-sdk'

export const client = createClient({
    // .env.localに設定した値
    serviceDomain: process.env.SERVICE_DOMAIN,
    apiKey: process.env.API_KEY,
})

//================================================================================
// 記事データslugを取得するgetPostBySlug()
export async function getPostBySlug(slug) {
    try {
        // 指定したスラッグ記事のデータを取得して返す
        const post = await client.get({
            endpoint: 'blogs',
            queries: { filters: `slug[equals]${slug}` },
        })
        return post.contents[0]

        // エラーの処理
    } catch (err) {
        console.log('~~ getPostBySlug ~~')
        console.log(err)
    }
}

//================================================================================
// 以下で全記事ページを取得する
// limitは取得する記事上限数　microCMSは5MBまで
export async function getAllSlugs(limit = 100) {
    try {
        const slugs = await client.get({
            endpoint: 'blogs',
            queries: { fields:'title,slug', orders: '-publishDate', limit: limit },            
        })
        return slugs.contents
    } catch (err) {
        console.log('~~ getAllSlugs ~~')
        console.log(err)
    }
}

//================================================================================
//以下で記事一覧を作成する
export async function getAllPosts(limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                fields: 'title,slug,eyecatch',
                orders: '-publishDate',
                limit: limit,
            },
        })
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPosts ~~')
        console.log(err)
    }
}

//================================================================================
//カテゴリーページ作成のためにmicroCMSからデータを取得する
export async function getAllCategories(limit = 100) {
    try {
        const categories = await client.get({
            endpoint: 'categories',
            queries: {
                fields: 'name,id,slug',
                limit: limit,
            },
        })
        return categories.contents
    } catch (err) {
        console.log('~~ getAllCategories ~~')
        console.log(err)
    }
}

//================================================================================
//カテゴリーページに記事一覧を表示させる
// ※上記関数GetAllPosts()をコピペして手を加えたもの
export async function getAllPostsByCategory(catID,limit = 100) {
    try {
        const posts = await client.get({
            endpoint: 'blogs',
            queries: {
                // 取得した記事一覧のうち、変数catIDとcategoriesと一致するもの、でフィルターをかける。完全一致
                filters: `categories[contains]${catID}`,
                
                fields: 'title,slug,eyecatch',
                orders: '-publishDate',
                limit: limit,
            },
        })
        return posts.contents
    } catch (err) {
        console.log('~~ getAllPostsByCategory ~~')
        console.log(err)
    }
}