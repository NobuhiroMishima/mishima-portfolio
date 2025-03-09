export const metadata = {
  title: "Service | mishima's portfolio",
  description:
    "三島（mishima）が提供するWebサイトやデジタルプロダクトのプランニング、デザイン、開発サービスをご紹介します。スポット依頼から長期のコンサルティングまで、課題解決に向けた最適な提案を行います。",
};

function serviceLayout({ children }) {
  return <main className="mt-[62px] lg:mt-[82px]">{children}</main>;
}

export default serviceLayout;
