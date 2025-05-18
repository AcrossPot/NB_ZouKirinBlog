// 拡張子.jsのほうがよい？

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // アイキャッチ画像を外部サイトmicrocmsから取得する
  images: {

    // imgローダー入れると動かなくなるので未実装
    // loader: 'imgix',
    // path: '',

    domains: ['images.microcms-assets.io'],
  },
};

export default nextConfig;
