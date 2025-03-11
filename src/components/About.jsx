import React from "react";
import Backtitle from "./elements/title/Backtitle";
import Headline from "./elements/title/Headline";
import PageTransitionButton from "./elements/button/PageTransitionButton";
import CategoryBadge from "./elements/badge/CategoryBadge";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { appearLeft, appearRight } from "./utils/appear";

function About() {
  const { elementRef: ref1, isVisible: isVisible1 } = useIntersectionObserver();
  const { elementRef: ref2, isVisible: isVisible2 } = useIntersectionObserver();
  const { elementRef: ref3, isVisible: isVisible3 } = useIntersectionObserver();
  const { elementRef: ref4, isVisible: isVisible4 } = useIntersectionObserver();
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 mt-24">
      <div className="max-w-6xl mx-auto bg-contentgray">
        <div className="max-md:hidden flex flex-col items-center">
          <Backtitle
            color={"black"}
            text={"ABOUT"}
            className="-tracking-widest bg-gradient-to-r from-green-700 bg-[length:100%_20px] bg-center bg-no-repeat"
          />
          <Headline subtitle="私のこだわり" />
        </div>
        <div className="md:hidden flex flex-col items-center pt-10">
          <Headline title="About" subtitle="私のこだわり" />
        </div>
        <div className="flex flex-col md:flex-row justify-between p-10 gap-8 xl:gap-20">
          <div ref={ref1} className={appearRight(isVisible1, "max-md:flex max-md:justify-center")}>
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
              ref={ref2}
              className={appearLeft(isVisible2, "flex justify-center")}
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
              ref={ref3}
              className={appearLeft(isVisible3, "flex gap-5 items-center")}
              style={{ transitionDelay: "100ms" }}
            >
              <p className="inline-block font-bold text-xl">mishima</p>
              <CategoryBadge text={"Web Creator"} />
            </div>
            <div
              ref={ref4}
              className={appearLeft(isVisible4)}
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
              className="flex justify-end"
              style={{ transitionDelay: "300ms" }}
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
