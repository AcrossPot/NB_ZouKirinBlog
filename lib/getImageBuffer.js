//　★重要★

// 修正ファイル
// 引用元
// https://zenn.dev/kadotchi/articles/4f5b1cfe90c048

import path from "node:path";
import fs from "node:fs/promises";

export async function getImageBuffer(src) {
  // ローカルの画像の場合はパスにpublicを付与
  if (src.startsWith('http')) {
    const res = await fetch(src)
    return await Buffer.from(await res.arrayBuffer())
  } else {
    return await fs.readFile(path.join("./public", src));
  }
};






//================================================================================
// ※使用する際は以下を対象ファイルに記載する

// //-----------------------------------------------------------------
// // ブラー処理
// import { getPlaiceholder } from 'plaiceholder'
// // ローカルの代替アイキャッチ画像
// import { eyecatchLocal } from 'lib/constants'
// //★以下追記１行：ブラー処理不具合対応
// import { getImageBuffer } from 'lib/getImageBuffer'
// //-----------------------------------------------------------------


// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//         const imageBuffer = await getImageBuffer(post.eyecatch.url)
//         const { base64 } = await getPlaiceholder(imageBuffer)
//         // ※★追記：ブラー処理不具合対応、上記２行を代わりに実行
//         // この行は動かさないメモ⇛const { base64 } = await getPlaiceholder(post.eyecatch.url)この行は動かさないメモ
//         post.eyecatch.blurDataURL = base64
// //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//================================================================================