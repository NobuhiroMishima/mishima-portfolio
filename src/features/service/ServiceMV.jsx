"use client";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearRight } from "@/components/utils/appear";
import Image from "next/image";
function ServiceMV({ plan }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={appearRight(isVisible, "max-lg:order-2")}>
      <Image
        src={plan.mainimage}
        alt={`${plan.name} Image`}
        width={400}
        height={400}
      />
    </div>
  );
}

export default ServiceMV;
