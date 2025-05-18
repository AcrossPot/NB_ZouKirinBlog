//全ページ共通ヘッダー・フッダー
import Header from "components/header";
import Footer from "components/footer";

{
  /* childrenをindexのmainを引数とする */
}
export default function Layout({ children }) {
  return (
    <>
      <Header />

      {/* childrenをindexのmainを引数とする */}
      <main>{children}</main>

      <Footer />
    </>
  );
}
