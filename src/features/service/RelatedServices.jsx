"use client";
import React from "react";
import { servicecontent } from "./constants/servicecontent.jsx";
import SubHeadline from "@/components/elements/title/SubHeadline.jsx";
import ServiceBanner from "./ServiceBanner.jsx";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

const RelatedServices = ({ currentService }) => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const currentType = currentService.type;

  const relatedServices = servicecontent.slice(1).filter(
    (service) =>
      service.id !== currentService.id && // 現在のサービスを除外
      service.type.some((type) => currentType.includes(type)) // typeが一致するものをフィルタリング
  );

  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col")}>
      <SubHeadline text="Related Services" />
      <div className="related-services">
        {relatedServices.map((service) => (
          <ServiceBanner key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
