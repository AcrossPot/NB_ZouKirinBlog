// import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// Appコンポーネントはページの初期化に使われるコンポーネントであり、親コンポーネント
//【Layout】Header、{Children(hero予定)}、footer


// Googleアナリティクス用にイベントリスナーの登録削除を行えるようにする
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import "styles/globals.css";
import Layout from "components/layout";

// スクリプト要素を最適化し、dangerouslySetInnerHTMLを使えるようにする
import Script from 'next/script'
// 全てのgtag名のついたオブジェクトをインポートする
import * as gtag from 'lib/gtag'

//インストール済のFont Awesomeのインポート
//グローバルスタイルとして反映させる
import '@fortawesome/fontawesome-svg-core/styles.css'
//SVGコアが個別にCSSに適用されないようにする
import { config, noAuto } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false



//================================================================================
function MyApp({ Component, pageProps }) {
    
    // Googleアナリティクス用にイベントリスナーの登録削除を行えるようにする
    const router = useRouter()
    useEffect( () => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    // app.jsのレイアウトをページごとにカスタマイズさせる
    const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
        {/* グローバルサイトタグをインストールする */}
        <Script
            strategy="afterInteractive"
            src={`http://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
        />
        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_MEASUREMENT_ID}');
                `,
            }}
        />

        <Layout>
            {getLayout(
                <Component {...pageProps} />
            )}
        </Layout>
    </>
  )
}

export default MyApp;
