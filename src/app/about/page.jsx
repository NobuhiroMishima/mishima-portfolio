"use client";

import Headline from "@/components/elements/title/Headline";
import React from "react";
import { skills } from "@/features/about/constants/skills";
import CategoryBadge from "@/components/elements/badge/CategoryBadge";
import SubHeadline from "@/components/elements/title/SubHeadline";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import Image from "next/image";
import {
  appear,
  appearLeft,
  appearRight,
  appearUp,
} from "@/components/utils/appear";
import SkillCard from "@/features/about/SkillCard";

function Page() {
  const { elementRef: ref1, isVisible: isVisible1 } = useIntersectionObserver();
  const { elementRef: ref2, isVisible: isVisible2 } = useIntersectionObserver();
  const { elementRef: ref3, isVisible: isVisible3 } = useIntersectionObserver();
  const { elementRef: ref4, isVisible: isVisible4 } = useIntersectionObserver();
  return (
    <div className="pb-24">
      <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 pt-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-12">
            <Headline title="About" subtitle="私のこだわり" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-20 sm:gap-y-28 md:gap-y-24">
        <section ref={ref1} className={appearRight(isVisible1, "relative")}>
          <div className="absolute top-0 left-0 bg-contentgray rounded-tr-lg rounded-br-lg w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-64px)] lg:w-[calc(100%*0.82)] lg:h-[500px] h-[600px] sm:h-[520px] md:h-[460px] z-[-10]"></div>
          <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 lg:py-16 py-12">
            <div className="max-w-6xl mx-auto flex flex-wrap flex-row justify-center md:justify-between gap-x-10 lg:gap-x-16 pr-5 sm:pr-10 md:pr-32 lg:pr-36">
              <div className="w-full">
                <SubHeadline text="Profile" />
              </div>
              <div className="flex-1 max-md:order-3">
                <div className="flex gap-5 items-center mb-4">
                  <p className="inline-block font-bold text-lg lg:text-xl">
                    mishima
                  </p>
                  <CategoryBadge text={"Web Creator"} />
                </div>
                <div className="min-w-60">
                  <p>
                    1996年、広島県生まれ。筑波大学大学院にて情報工学を専攻し、修了。
                    <br />
                    HR系SaaSプロダクト事業で3年間カスタマーサクセスを経験後、Webディレクター兼PdMへとキャリアチェンジ。
                    副業ではデザインやエンジニアリングの領域をカバーしながら、Webクリエイターとして企画からデザイン・コーディングまで一貫して手掛けています。
                  </p>
                </div>
              </div>
              <div className="flex max-md:order-2 px-10 sm:px-36 md:px-0 mb-4">
                <Image
                  src="/assets/profile.png"
                  alt="プロフィール画像"
                  width={400}
                  height={400}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-[300px] rounded-full lg:h-[300px] lg:rounded-none object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section ref={ref2} className={appearLeft(isVisible2, "relative")}>
          <div className="absolute top-0 right-0 bg-contentgray rounded-tl-lg rounded-bl-lg  w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-64px)] lg:w-[calc(100%*0.82)] lg:h-[500px] h-[600px] sm:h-[520px] md:h-[460px] z-[-10]"></div>
          <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 lg:py-16 py-12">
            <div className="max-w-6xl mx-auto flex flex-wrap flex-row justify-center md:justify-between gap-x-10 lg:gap-x-16 pl-5 sm:pl-10 md:pl-32 lg:pl-40">
              <div className="w-full">
                <SubHeadline text="Why Create?" />
              </div>
              <div className="flex max-md:order-2 px-10 sm:px-36 md:px-0 mb-4">
                <Image
                  src="/assets/create.png"
                  alt="クリエイトアイコン"
                  width={400}
                  height={400}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-[300px] rounded-full lg:h-[300px] lg:rounded-none object-contain"
                />
              </div>
              <div className="flex-1 max-md:order-3">
                <div className="mb-4 font-bold text-lg lg:text-xl">
                  <h5>UXで価値を創造</h5>
                </div>
                <div className="min-w-60">
                  <p>
                    これまでWebサイトやデジタルプロダクトに関わるさまざまな課題をアクセス解析や基幹データ分析、ユーザーインタビューやABテストと組み合わせながら解決してきました。
                    <br />
                    ユーザー行動の裏側にある心理やインサイトまで深く理解し本質的な課題を突き止め、UX向上につながるサイトを作成しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 relative">
          <div className="max-w-6xl mx-auto">
            <div ref={ref3} className={appearUp(isVisible3, "mb-10")}>
              <SubHeadline text="Skills" />
              <p>
                企画、デザイン・設計から実装まで幅広くスキルセットを保有しています。（2025年3月現在）
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-16 justify-between lg:items-start">
              <div
                ref={ref4}
                className={appear(isVisible4, "max-w-[560px] lg:max-w-[560px]")}
              >
                <Image src="/assets/chart.png" alt="" width={560} height={560} />
                <p>
                  ※現在は、本業でPdM業務を担当し、副業でエンジニアリング業務を行っています。
                </p>
              </div>
              <div className="flex flex-row lg:flex-col flex-wrap gap-y-6 justify-around">
                {skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                  // <div
                  //   key={index}
                  //   ref={ref5} className={appearLeft(isVisible5, "flex gap-x-4 w-full sm:w-[360px] xl:w-[458px] bg-contentgray p-2 rounded-lg")}
                  // >
                  //   <div>{skill.image}</div>
                  //   <div className="flex flex-col w-full gap-1">
                  //     <div className="flex flex-row justify-between">
                  //       <h5 className="text-lg font-bold">{skill.name}</h5>
                  //       <div>
                  //         {Array.from({ length: 5 }, (_, i) => (
                  //           <FontAwesomeIcon
                  //             key={i}
                  //             icon={faStar}
                  //             style={{
                  //               color: i < skill.star ? "#ffd233" : "#e4dccb",
                  //             }}
                  //           />
                  //         ))}
                  //       </div>
                  //     </div>
                  //     <div>
                  //       <p className="text-sm">{skill.description}</p>
                  //     </div>
                  //   </div>
                  // </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
