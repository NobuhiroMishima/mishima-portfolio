import PageTransitionButton from "@/components/elements/button/PageTransitionButton";
import Headline from "@/components/elements/title/Headline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function notFound() {
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 mt-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline
            title="ページが見つかりません。"
            subtitle="誠に申し訳ございませんが、アクセスいただいたURLが見つかりません。"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-x-40 justify-around">
          <div>
            <Image src={"/assets/404.png"} alt="" width={400} height={400} />
          </div>
          <div className="bg-contentgray p-10 text-center">
            <p className="mb-10">
              HOMEから再度アクセスいただくか、少し時間を空けてお試しください。
            </p>
            <PageTransitionButton
              page={""}
              textcolor={"white"}
              bgcolor={"black"}
              text={"HOMEから探す"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default notFound;
