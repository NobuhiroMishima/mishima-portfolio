import React from "react";
import Headline from "./elements/title/Headline";
import Backtitle from "./elements/title/Backtitle";
import ServiceCard from "@/features/service/ServiceCard";

function Service({ servicemenu }) {
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 mt-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline title={"Service"} subtitle={"サービス"} />
        </div>
        <div className="mb-4">
          <p>
            現状のユーザー体験の課題発見や課題解決に向けた企画、デザイン・設計から実装まで、ワンストップで解決します。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 place-items-center">
          {servicemenu.map((menu, index) => (
            <ServiceCard key={index} menu={menu} />
          ))}
        </div>
      </div>
      <div className="absolute top-[-60px] right-28 z-[-10]">
        <Backtitle
          text={"SERVICE"}
          className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text text-transparent"
        />
      </div>
    </section>
  );
}

export default Service;
