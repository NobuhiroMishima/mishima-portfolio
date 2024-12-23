import Headline from "@/components/elements/title/Headline";
import { servicecontent } from "@/features/service/constants/servicecontent";
import Link from "next/link";

function page() {
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline title={"Service"} subtitle={"サービス"} />
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <p>
              サービス内容、料金表の一例になります。お仕事のご依頼・ご相談の際にはページ最下部のお問い合わせからお願いいたします。
              <br />
              ※下記の料金表は目安になります。規模や納期によって料金は変動いたします。
              <br />
              ※ご不明な点等ございましたらお気軽にご連絡ください。
            </p>
          </div>
          <div className="flex flex-wrap justify-around max-w-[1072px] gap-6">
            {servicecontent.map((content, index) => (
              <Link key={index} href={`/service/${content.id}`}>
                <img
                src={content.cardimage}
                alt={`${content.name} Image`}
                height={144}
                className="h-36 object-contain"
                />
              </Link>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default page;
