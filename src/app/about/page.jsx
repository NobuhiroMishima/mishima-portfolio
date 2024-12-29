"use client";

import Headline from "@/components/elements/title/Headline";
import React from "react";
import { skills } from "@/features/about/constants/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CategoryBadge from "@/components/elements/badge/CategoryBadge";
import SubHeadline from "@/components/elements/title/SubHeadline";

function page() {
  return (
    <div className="pb-24">
      <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 pt-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-12">
            <Headline title={"About"} subtitle={"私のこだわり"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-14 sm:gap-y-24 md:gap-y-24">
        <section className="relative">
          <div className="absolute top-0 left-0 bg-contentgray rounded-tr-lg rounded-br-lg w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-64px)] lg:w-[calc(100%*0.82)] h-[640px] xs:h-[560px] sm:h-[544px] md:h-[500px] z-[-10]"></div>
          <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16">
            <div className="max-w-6xl mx-auto flex flex-wrap flex-row justify-center md:justify-between gap-x-10 lg:gap-x-16 pr-5 sm:pr-10 md:pr-32 lg:pr-36">
              <div className="w-full">
                <SubHeadline text="Profile" />
              </div>
              <div className="flex-1 max-md:order-3">
                <div className="mb-4">
                  <CategoryBadge text={"full-stack creator"} />
                  <div className="flex gap-8 font-bold text-lg lg:text-xl">
                    <h5>Creator Name</h5>
                    <p>mishima</p>
                  </div>
                </div>
                <div className="min-w-60">
                  <p>
                    1996年、広島県生まれ。筑波大学大学院にて情報工学を専攻し、修了。
                    <br />
                    HR系SaaSプロダクト事業で3年ほどカスタマーサクセスを経験後、Webディレクター兼プランナーへとキャリアチェンジ。
                    現在、副業としてデザインやエンジニアリングの領域をカバーしながら、企画からデザイン・コーディングまで幅広く手掛けるフルスタッククリエイターとして活動中。
                  </p>
                </div>
              </div>
              <div className="flex max-md:order-2 px-10 sm:px-36 md:px-0">
                <img
                  src="./assets/profile.png"
                  alt="プロフィール画像"
                  width={400}
                  height={400}
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-[300px] rounded-full lg:h-[300px] lg:rounded-none object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="relative">
          <div className="absolute top-0 right-0 bg-contentgray rounded-tl-lg rounded-bl-lg w-[calc(100%-20px)] sm:w-[calc(100%-40px)] md:w-[calc(100%-64px)] lg:w-[calc(100%*0.82)] h-[640px] xs:h-[560px] sm:h-[544px] md:h-[500px] z-[-10]"></div>
          <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16">
            <div className="max-w-6xl mx-auto flex flex-wrap flex-row justify-center md:justify-between gap-x-10 lg:gap-x-16 pl-5 sm:pl-10 md:pl-32 lg:pl-40">
              <div className="w-full">
                <SubHeadline text="Why Create?" />
              </div>
              <div className="flex max-md:order-2 px-10 sm:px-36 md:px-0">
                <img
                  src="./assets/create.png"
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
                    これまでWebサイトやデジタルプロダクトに関わるさまざまな課題をアクセス解析や基幹データ分析、ユーザーインタビューやユーザーテストと組み合わせながら解決してきました。
                    <br />
                    <br className="max-lg:hidden" />
                    「このページが見られている」「このボタンが押下されている」といったユーザー行動の裏側にある心理やインサイトまで深く理解し本質的な課題を突き止めることで、優れた機能やデザイン、品質を実現できるのです。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <SubHeadline text="Skills" />
              <p>
                企画、デザイン・設計から実装まで幅広くスキルセットを保有しています。（2024年9月30日現在）
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
              <div className="max-w-[458px] lg:max-w-[630px]">
                <img src="../../assets/chart.png" alt="" />
                <p>
                  ※現在は、本業で企画業務を担当し、副業でエンジニアリング業務を行っています。
                </p>
              </div>
              <div className="flex flex-row lg:flex-col flex-wrap gap-y-6 justify-around">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex gap-x-4 w-full sm:w-[360px] xl:w-[458px] bg-contentgray p-2 rounded-lg"
                  >
                    <div>{skill.image}</div>
                    <div className="flex flex-col w-full gap-1">
                      <div className="flex flex-row justify-between">
                        <h5 className="text-lg font-bold">{skill.name}</h5>
                        <div>
                          {Array.from({ length: 5 }, (_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              style={{
                                color: i < skill.star ? "#ffd233" : "#e4dccb",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
