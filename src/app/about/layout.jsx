export const metadata = {
  title: "About | mishima's portfolio",
  description:
    "三島（mishima）のプロフィールをご紹介します。カスタマーサクセスを経験後、Webディレクター兼プランナーとしてデジタルプロダクトに関わりながら、Webサイトのデザインや開発まで幅広く対応。課題解決を重視した制作を行っています。",
};
function aboutLayout({ children }) {
  return <main className="mt-[62px] lg:mt-[82px]">{children}</main>;
}

export default aboutLayout;
