// ページネーション用
// 前の記事、次の記事ボタンを作れるようにデータを取得する

// allSlugs　全記事。タイトルtitle　スラッグslugを含む配列情報
// currentSlug 現在の記事スラッグ
export function prevNextPost(allSlugs, currentSlug) {
    // lengthで全記事の要素数を取得する
    const numberOfPosts = allSlugs.length

    // findIndex()メソッドで全記事中、currentSlugとslugが一致する記事番号をindexに代入
    const index = allSlugs.findIndex(
        ({ slug }) => slug === currentSlug,
    )
    
    // prevPostに前の記事データをセット。ただし、最初と最後の記事だった場合は空の値を入れる。
    const prevPost =
        index + 1 === numberOfPosts ? 
            { title: '', slug: '' } : allSlugs[index + 1]

    // nextPostに次の記事データをセット。ただし、最初と最後の記事だった場合は空の値を入れる。
    const nextPost = 
        index === 0 ?
            { title: '', slug: '' } : allSlugs[index - 1]

    return [prevPost, nextPost]
}