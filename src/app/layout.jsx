import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "mishima's portfolio | Webクリエイター",
  description:
    "Webクリエイターとして、Webサイトやデジタルプロダクトの課題解決に取り組む三島（mishima）のポートフォリオです。プランニング、デザイン、開発を通じて、ユーザー体験の向上に貢献します。",
  keywords: [
    "ポートフォリオ",
    "Webクリエイター",
    "Webサイト",
    "デジタルプロダクト",
    "プランニング",
    "デザイン",
    "開発",
    "フリーランス",
    "制作事例",
    "mishimaworks",
  ],
  generator: "Next.js",
  applicationName: "mishimaworks",
  authors: [
    {
      name: "Nobuhito Mishima",
      url: "https://mishimaworks.jp",
    },
  ],
  creator: "Nobuhito Mishima",
  publisher: "Nobuhito Mishima",
  referrer: "origin",
  robots: "index, follow, max-image-preview:large",
  alternates: {
    canonical: "https://mishimaworks.jp",
  },
  openGraph: {
    title: "mishima's portfolio | Webクリエイター",
    description:
      "Webサイトやデジタルプロダクトの課題解決を行うmishimaのポートフォリオ。",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "mishimaのポートフォリオサイト | プランニング・デザイン・開発の実績",
        type: "image/jpeg",
      },
    ], //OGP画像
  },
  icons: {
    icon: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    site: "@haganemental21",
    creator: "@haganemental21",
    title: "mishima's portfolio | Webクリエイター",
    description:
      "Webサイトやデジタルプロダクトの課題解決を行うmishimaのポートフォリオ。",
    images: [
      {
        url: "/images/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "mishimaのポートフォリオサイト | プランニング・デザイン・開発の実績",
        type: "image/jpeg",
      },
    ], //OGP画像
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-maingray`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
