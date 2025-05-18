// メタデータ関連を格納する場所

export const siteMeta = {
    siteTitle: "サイトタイトル",
    siteDesc: "サイトのサブタイトル",
    siteURL: "https://サイトURL",
    siteLang: "ja",
    siteLocale: "ja_JP",
    siteType: "website",
    siteIcon: "/favicon.png",
}

// microCMS側にアイキャッチ画像が入っていなかった場合Propsエラーになってしまうので
// 代替画像をここで設定する
// export const eyecatchLocal = {
//     url: '/eyecatch.jpg', // public ディレクトリに配置した場合
//     width: 1920,
//     height: 1280,
// }
export const eyecatchLocal = {

  // // イメージローダーを変更したのでmicroCMSにアップしたものを使う
  // url: 'https://images.microcms-assets.io/assets/f74dc956003c4565a8ab3ed700c6435f/dca119666f124398bc5094c9f2600c39/eyecatch.jpg',
  // 上記動かなくなるので実装しない

  url: '/eyecatch.jpg', // public ディレクトリからの相対 URL
  width: 1920,
  height: 1280,
};