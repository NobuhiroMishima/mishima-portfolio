"use client";

import { useRef } from "react";
import { MenuLinks } from "../Header/constants/menuLinks";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  const name = useRef();
  const email = useRef();
  const emailConfirmation = useRef();
  const message = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm("service_ti8fgfg", "template_nu6i0ed", form.current, {
    //     publicKey: "5uZHSseF4UjD3H080",
    //   })
    //   .then(
    //     () => {
    //       form.current.reset()
    //       console.log("SUCCESS!");
    //     },
    //     (error) => {
    //       console.log("FAILED...", error.text);
    //     }
    //   );
  };

  return (
    <footer className="bg-footerblack">
      <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 pt-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-6">
            <h2 className="text-2xl font-medium text-white">関連サイト</h2>
          </div>
          <div className="flex flex-col gap-12 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
              <div>
                <img src="./assets/footer/banner-1.png" alt="" width={272} />
              </div>
              <div>
                <img src="./assets/footer/banner-2.png" alt="" width={272} />
              </div>
              <div>
                <img src="./assets/footer/banner-3.png" alt="" width={272} />
              </div>
              <div>
                <img src="./assets/footer/banner-4.png" alt="" width={272} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 md:gap-32">
              <div className="flex flex-col gap-4 order-2 md:order-1">
                <img src="./assets/footer/logo-sm.svg" alt="" width={200} />
                <ul className="flex flex-col gap-2">
                  {MenuLinks.map((item) =>
                    item === "Home" ? (
                      <li key={item} className="text-sm text-white">
                        <Link href={`/`}>{item}</Link>
                      </li>
                    ) : (
                      <li key={item} className="text-sm text-white">
                        <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                      </li>
                    )
                  )}
                </ul>
                <a
                  href=""
                  className="w-6 cursor-pointer text-white text-2xl"
                  target="_blank"
                >
                  <FaSquareXTwitter />
                </a>
              </div>
              <div className="flex flex-col gap-6 w-full order-1 md:order-2">
                <p className="text-white text-center">
                  お仕事のご依頼、お問い合わせはこちらからお願いいたします。
                  <br />
                  3日以内にご返信いたします。
                </p>
                <form onSubmit={sendEmail}>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="name" className="text-white">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="山田 太郎"
                      name="name"
                      ref={name}
                      className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="email" className="text-white">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="example@example.com"
                      name="email"
                      ref={email}
                      className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="emailConfirmation" className="text-white">
                      メールアドレス<br />（確認用）
                    </label>
                    <input
                      type="email"
                      id="emailConfirmation"
                      placeholder="確認のためもう一度入力してください"
                      name="email"
                      ref={emailConfirmation}
                      className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="message" className="text-white">
                      お問い合わせ内容
                    </label>
                    <textarea
                      id="message"
                      placeholder="例: お問い合わせの内容を具体的にご記入ください"
                      name="message"
                      rows={"7"}
                      ref={message}
                      className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-white font-medium w-full md:w-auto py-2 px-36 rounded hover:shadow-lg hover:bg-darkblue/75"
                    >
                      送信
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <p className="text-white text-sm text-center p-5">&copy; 2025 mishima All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
