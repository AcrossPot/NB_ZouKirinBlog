// カスタムDocumentコンポーネント<html>にlangを設定

import { Html, Head, Main, NextScript } from 'next/document'

// lang属性を追加してja言語を指定する
import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

export default function Document() {
    return (
        <Html lang={siteLang}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}