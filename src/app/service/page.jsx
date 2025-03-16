"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Headline from "@/components/elements/title/Headline";
import { servicecontent } from "@/features/service/constants/servicecontent";
import ServiceFilter from "@/features/service/ServiceFilter";
import Link from "next/link";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";
import ServiceBanner from "@/features/service/ServiceBanner";
import Image from "next/image";

function ServicePageContent() {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filterd, setFilterd] = useState([]);
  const { elementRef, isVisible } = useIntersectionObserver();
  const searchParams = useSearchParams();

  useEffect(() => {
    setServices(servicecontent.slice(1));
    setFilterd(servicecontent.slice(1));
  }, []);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
      const filtered = servicecontent
        .slice(1)
        .filter((service) => service.type === category);
      setFilterd(filtered);
    }
  }, [searchParams]);

  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline title="Service" subtitle="サービス" />
        </div>
        <div
          ref={elementRef}
          className={appearUp(isVisible, "flex flex-col gap-10")}
        >
          <div>
            <p>
              人気のサービス内容になります。お仕事のご依頼・ご相談の際にはページ最下部のお問い合わせからお願いいたします。
              <br />
              ※サービスの詳細は各バナーをご確認ください。
              <br />
              ※下記サービス以外のご相談につきましてもお気軽にご連絡ください。
            </p>
          </div>
          <div className="max-md:hidden flex justify-center">
            <Link href={`/service/${servicecontent[0].id}`}>
              <Image
                src={servicecontent[0].cardimage}
                alt={`${servicecontent[0].name} Image`}
                height={144}
                width={1152}
                className="object-contain shadow-lg duration-500 rounded-lg hover:opacity-80 hover:bg-gray-100"
              />
            </Link>
          </div>
          <div className="flex gap-y-10 lg:flex-row flex-col justify-between">
            <div className="mr-16">
              <ServiceFilter
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                services={services}
                setFilterd={setFilterd}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-5 md:place-items-center">
              {filterd.map((service, index) => (
                <ServiceBanner key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicePageContent />
    </Suspense>
  );
}

export default Page;
