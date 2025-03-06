import React from "react";
import { servicecontent } from "./constants/servicecontent.jsx";
import SubHeadline from "@/components/elements/title/SubHeadline.jsx";
import Link from "next/link.js";

const RelatedServices = ({ currentService }) => {
  const currentType = currentService.type;

  const relatedServices = servicecontent.slice(1).filter(
    (service) =>
      service.id !== currentService.id && // 現在のサービスを除外
      service.type.some((type) => currentType.includes(type)) // typeが一致するものをフィルタリング
  );

  return (
    <div>
      <SubHeadline text="Related Services" />
      <div className="related-services">
        {relatedServices.map((service) => (
          <Link key={service.id} href={`/service/${service.id}`}>
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
  );
};

export default RelatedServices;
