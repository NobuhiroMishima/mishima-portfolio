"use client";
import { appearLeft } from "@/components/utils/appear";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";

function ServiceTitle({ plan }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={elementRef}
      className={appearLeft(
        isVisible,
        "flex flex-col items-center flex-1 gap-6 max-lg:order-1"
      )}
    >
      <h5 className="relative w-[300px] sm:w-[480px] sm:h-[88px] px-4 sm:px-12 pt-8 pb-6 text-2xl border border-black before:absolute before:top-2 before:left-2 before:w-[300px] before:sm:w-[480px] before:h-[88px] before:bg-boxblue before:-z-10">
        {plan.name}
      </h5>
      <div>
        <p style={{ whiteSpace: "pre-line" }}>{plan.plandescription}</p>
      </div>
    </div>
  );
}

export default ServiceTitle;
