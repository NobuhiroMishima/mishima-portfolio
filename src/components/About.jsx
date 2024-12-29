import React from "react";
import Backtitle from "./elements/title/Backtitle";
import Headline from "./elements/title/Headline";
import PageTransitionButton from "./elements/button/PageTransitionButton";
import CategoryBadge from "./elements/badge/CategoryBadge";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { appearLeft } from "./utils/appear";

function About() {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 mt-24">
      <div className="max-w-6xl mx-auto bg-contentgray">
        <div className="flex flex-col items-center">
          <Backtitle
            color={"black"}
            text={"ABOUT"}
            className="-tracking-widest bg-gradient-to-r from-green-700 bg-[length:100%_20px] bg-center bg-no-repeat"
          />
          <Headline subtitle={"私のこだわり"} />
        </div>
        <div className="flex flex-col md:flex-row justify-between p-10 gap-8 xl:gap-20">
          <div className="max-md:flex max-md:justify-center">
            <img
              src="./assets/aboutImage.jpg"
              alt="フィギュアの画像"
              width={256}
              height={302}
              className="h-[302px] object-cover max-md:rounded-full max-md:h-[256px]"
            />
          </div>
          <div className="flex flex-col w-full gap-6">
            <div
              ref={elementRef}
              className={appearLeft(isVisible, "flex justify-center")}
            >
              <h4 className="text-xl lg:text-2xl">
                UXで価値を創造。
                <strong className="font-bold text-strongred">
                  ユーザー目線
                </strong>
                で
                <br />
                社会課題を解決するクリエイター
              </h4>
            </div>
            <div
              ref={elementRef}
              className={appearLeft(isVisible)}
              style={{ transitionDelay: "100ms" }}
            >
              <CategoryBadge text={"full-stack creator"} />
              <div className="flex gap-8 font-bold text-xl">
                <h5>Creator Name</h5>
                <p>mishima</p>
              </div>
            </div>
            <div
              ref={elementRef}
              className={appearLeft(isVisible)}
              style={{ transitionDelay: "200ms" }}
            >
              <p>
                “
                <strong className="font-bold text-strongred">
                  ユーザー体験を向上させること
                </strong>
                ”をモットーに、Webサイトやデジタルプロダクトに関わるさまざまな課題を解決してきたmishimaです。
                <br />
                ユーザー体験を大切にしながら
                <strong className="font-bold text-strongred">
                  機能性・デザイン・品質
                </strong>
                を高めることを目指して活動しています。
              </p>
            </div>
            <div
              ref={elementRef}
              className={appearLeft(isVisible, "flex justify-end")}
              style={{ transitionDelay: "100ms" }}
            >
              <PageTransitionButton
                page={"about"}
                textcolor={"white"}
                bgcolor={"black"}
                text={"もっと詳しく"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
