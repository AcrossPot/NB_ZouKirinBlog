// metaデータ管理用

import Head from 'next/head'

//URLを追加できる
import { useRouter } from 'next/router'

//メタデータをインポート、サイト説明
import { siteMeta } from 'lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

// 汎用OGP画像
// pageImgにした画像が無い場合、siteImgにする
import siteImg from 'images/ogp.jpg'

export default function Meta( { pageTitle, pageDesc ,pageImg, pageImgW, pageImgH }) {
    //ページのタイトルが未設定の場合サイト名を代入して使えるようにする
    const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
    //ページの説明 ?? サイトの説明 NULL合体演算子
    const desc = pageDesc ?? siteDesc

    //ページのURLの取得
    const router = useRouter()
    const url = `${siteUrl}${router.asPath}`

    // OGP画像
    // pageImgにした画像が無い場合、siteImgにする
    const img = pageImg || siteImg.src
    const imgW = pageImgW || siteImg.width
    const imgH = pageImgH || siteImg.height
    const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />

            {/* ページの説明、サイトの説明 */}
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            {/* ページURLを記載 */}
            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />

            {/* サイト名siteTitle */}
            <meta property="og:site_name" content={siteTitle} />
            {/* コンテンツの種類siteType */}
            <meta property="og:type" content={siteType} />
            {/* ロケールsiteLocale */}
            <meta property="og:locale" content={siteLocale} />
            {/* アイコン */}
            <link rel="icon" href={siteIcon} />
            <link rel="apple-touch-icon" href={siteIcon} />
            {/* OGP画像の設定 */}
            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />

        </Head>
    )
}