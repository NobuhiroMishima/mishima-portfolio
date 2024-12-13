import Headline from "@/components/elements/title/Headline";
import React from "react";

function page() {
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline title={"Works"} subtitle={"これまでの実績"} />
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p>
            個人から法人まで多様なジャンルの実績を紹介します。<br />
            ※クライアントとの契約上、一部の名称を変更しているほか、公開していない制作物もございます。
            </p>
          </div>
          <div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default page;
