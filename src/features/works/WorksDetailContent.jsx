"use client";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

function WorksDetailContent({ title, content }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col md:flex-row gap-x-28 gap-y-5 items-start md:items-center")}>
      <h4 className="w-24 font-bold text-2xl">{title}</h4>
      <p className="flex-1">{content}</p>
    </div>
  );
}

export default WorksDetailContent;
