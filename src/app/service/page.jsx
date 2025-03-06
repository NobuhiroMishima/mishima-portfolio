"use client";

import { useEffect, useState } from "react";
import Headline from "@/components/elements/title/Headline";
import { servicecontent } from "@/features/service/constants/servicecontent";
import ServiceFilter from "@/features/service/ServiceFilter";
import Link from "next/link";

function page() {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filterd, setFilterd] = useState([]);

  useEffect(() => {
    setServices(servicecontent.slice(1));
    setFilterd(servicecontent.slice(1));
  }, []);

  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline title="Service" subtitle="サービス" />
        </div>
        <div className="flex flex-col gap-10">
          <div>
            <p>
              人気のサービス内容になります。お仕事のご依頼・ご相談の際にはページ最下部のお問い合わせからお願いいたします。
              <br />
              ※サービスの詳細は各バナーをご確認ください。
              <br />
              ※下記サービス以外のご相談につきましてもお気軽にご連絡ください。
            </p>
          </div>
          <div className="flex justify-center">
            <Link href={`/service/${servicecontent[0].id}`}>
              <img
                src={servicecontent[0].cardimage}
                alt={`${servicecontent[0].name} Image`}
                height={144}
                className="object-contain shadow-lg duration-500 hover:opacity-80 hover:bg-gray-100"
              />
            </Link>
          </div>
          <div className="flex justify-between">
            <div className="mr-5">
              <ServiceFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                services={services}
                setFilterd={setFilterd}
              />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col lg:flex-row flex-wrap justify-between max-w-[840px] gap-4">
                {filterd.map((service, index) => (
                  <Link key={index} href={`/service/${service.id}`}>
                    <img
                      src={service.cardimage}
                      alt={`${service.name} Imagae`}
                      height={144}
                      className="h-36 object-contain shadow-lg duration-500 hover:opacity-80 hover:bg-gray-100 hover:rounded-md"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
