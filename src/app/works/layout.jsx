export const metadata = {
  title: "Works | mishima's portfolio",
  description: "三島（mishima）が手掛けたWebサイトやWebアプリの実績をご紹介します。企業サイトやECサイトのリニューアルから、デジタルプロダクトの設計・開発まで、課題解決に向けた制作事例を掲載しています。",
};

function worksLayout({ children }) {
  return (
    <main className="mt-[62px] lg:mt-[82px]">{children}</main>
)
}

export default worksLayout