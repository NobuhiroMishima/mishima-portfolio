"use client";

import Headline from "@/components/elements/title/Headline";
import React from "react";
import { skills } from "@/features/about/constants/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function page() {
  return (
    // <div className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 relative">
    <div>
      <div>
        {/* <div className="max-w-6xl mx-auto"> */}
        <div className="flex flex-col items-start mb-12">
          <Headline title={"About"} subtitle={"私のこだわり"} />
        </div>
        <section>
          <div>
            <h4>Profile</h4>
          </div>
        </section>
        <section>
          <div>
            <h4>Profile</h4>
          </div>
        </section>
        <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <h4 className="text-2xl font-bold mb-5">Skills</h4>
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
