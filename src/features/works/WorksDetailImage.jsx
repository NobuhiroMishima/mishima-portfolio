"use client";
import Image from "next/image";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

function WorksDetailImage({ project }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col gap-14")}>
      <h4 className="w-24 font-bold text-2xl">制作画像</h4>
      <Image
        src={project.detailImage}
        alt=""
        width={740}
        height={1200}
        className="m-auto"
      />
    </div>
  );
}

export default WorksDetailImage;
