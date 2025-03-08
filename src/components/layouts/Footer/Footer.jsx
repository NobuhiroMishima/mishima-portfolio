"use client";

import { useRef, useState } from "react";
import { MenuLinks } from "../Header/constants/menuLinks";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import emailjs from "@emailjs/browser";

function Footer() {
  const name = useRef();
  const email = useRef();
  const emailConfirmation = useRef();
  const message = useRef();
  const form = useRef();

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    emailConfirmation: "",
    message: "",
  });

  const validateInputs = () => {
    const newErrors = {};
    if (!name.current.value) {
      newErrors.name = "名前を入力してください。";
    }
    if (!email.current.value || !/\S+@\S+\.\S+/.test(email.current.value)) {
      newErrors.email = "有効なメールアドレスを入力してください。";
    }
    if (!emailConfirmation.current.value || email.current.value !== emailConfirmation.current.value) {
      newErrors.emailConfirmation = "メールアドレスが一致しません。";
    }
    if (!message.current.value) {
      newErrors.message = "お問い合わせ内容を入力してください。";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // フロントエンドでのバリデーション
    if (!validateInputs()) return;

    // サーバーサイドでの最終バリデーション
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          emailConfirmation: emailConfirmation.current.value,
          message: message.current.value,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        setErrors(data.errors);
        return;
      }

      // バリデーションが成功した場合、email.jsを使用してメールを送信
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ).then(
        () => {
          form.current.reset();
          console.log("SUCCESS!");
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } catch (error) {
      console.log("FAILED...", error);
    }
  };

  return (
    <footer className="bg-footerblack">
      <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 pt-16 relative">
        <div className="max-w-6xl mx-auto">
          {/* <div className="flex flex-col items-start mb-6">
            <h2 className="text-2xl font-medium text-white">関連サイト</h2>
          </div> */}
          <div className="flex flex-col gap-12 mb-10">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
              <div>
                <Image
                  src={"/assets/footer/banner-1.png"}
                  alt=""
                  width={272}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src={"/assets/footer/banner-2.png"}
                  alt=""
                  width={272}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src={"/assets/footer/banner-3.png"}
                  alt=""
                  width={272}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src={"/assets/footer/banner-4.png"}
                  alt=""
                  width={272}
                  height={100}
                />
              </div>
            </div> */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-32">
              <div className="flex flex-col gap-4 order-2 md:order-1">
                <Link href={"/"}>
                  <Image
                    src={"/assets/footer/logo-sm.svg"}
                    alt=""
                    width={200}
                    height={30}
                  />
                </Link>
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
                <Link
                  href="https://x.com/haganemental21"
                  className="w-6 cursor-pointer text-white text-2xl"
                  target="_blank"
                >
                  <FaSquareXTwitter />
                </Link>
              </div>
              <div className="flex flex-col gap-6 w-full order-1 md:order-2">
                <p className="text-white text-center">
                  お仕事のご依頼、お問い合わせはこちらからお願いいたします。
                  <br />
                  3日以内にご返信いたします。
                </p>
                <form ref={form} onSubmit={sendEmail} noValidate>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="name" className="text-white">
                      お名前
                    </label>
                    <div className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] flex flex-col gap-2">
                      <input
                        type="text"
                        id="name"
                        placeholder="山田 太郎"
                        name="name"
                        ref={name}
                        className=" text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                      />
                      {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="email" className="text-white">
                      メールアドレス
                    </label>
                    <div className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] flex flex-col gap-2">
                      <input
                        type="email"
                        id="email"
                        placeholder="example@example.com"
                        name="email"
                        ref={email}
                        className="text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                      />
                      {errors.email && (
                        <p className="text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="emailConfirmation" className="text-white">
                      メールアドレス
                      <br />
                      （確認用）
                    </label>
                    <div className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] flex flex-col gap-2">
                      <input
                        type="email"
                        id="emailConfirmation"
                        placeholder="確認のためもう一度入力してください"
                        name="emailConfirmation"
                        ref={emailConfirmation}
                        className="text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                      />
                      {errors.emailConfirmation && (
                        <p className="text-red-500">
                          {errors.emailConfirmation}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mb-4">
                    <label htmlFor="message" className="text-white">
                      お問い合わせ内容
                    </label>
                    <div className="flex-1 w-full lg:max-w-[400px] xl:max-w-[600px] flex flex-col gap-2">
                      <textarea
                        id="message"
                        placeholder="お問い合わせの内容を具体的にご記入ください"
                        name="message"
                        rows={"7"}
                        ref={message}
                        className="text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight"
                      />
                      {errors.message && (
                        <p className="text-red-500">{errors.message}</p>
                      )}
                    </div>
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
            <p className="text-white text-sm text-center p-5">
              &copy; 2025 mishima All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
