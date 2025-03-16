"use client";
import { serviceoption } from "@/features/service/constants/serviceoption";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";
import Image from "next/image";
function ServiceDetailOption({ plan }) {
    const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col gap-14")}>
      <h4 className="w-full font-bold text-2xl">
        本プラン限定！料金ご負担なしの3つのサービス
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 place-items-center">
        {plan.freeoption.map((opt, index) => {
          const option = serviceoption.find((so) => so.name === opt);
          return (
            <div key={index} className="flip-card w-80 h-80">
              <div className="flip-inner relative w-full h-full">
                <div className="flip-face bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="text-white w-40 h-40 mx-auto rounded-full flex items-center justify-center">
                      <Image src={option.image} alt="" width={120} height={120} />
                    </div>
                    <h4 className="text-xl font-bold mb-12">{option.name}</h4>
                    <span className="block h-1 w-40 mx-auto bg-taggreen"></span>
                  </div>
                </div>
                <div className="flip-face back-face bg-gray-200 border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed text-center">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceDetailOption;
