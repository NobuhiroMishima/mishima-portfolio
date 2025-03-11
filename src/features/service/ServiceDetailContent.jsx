"use client";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

function ServiceDetailContent({ plan }) {
    const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col md:flex-row gap-x-28 gap-y-5 items-start")}>
      <h4 className="w-24 font-bold text-2xl">基本料金</h4>
      <div className="flex flex-col gap-y-3">
        <p className="flex-1 text-2xl">{`${plan.minprice.toLocaleString()}円～（料金はサイトによって変動します。）`}</p>
        <div>
          {plan.pricesupport.map((sentence, index) => (
            <p key={index}>{`・${sentence}`}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailContent;
