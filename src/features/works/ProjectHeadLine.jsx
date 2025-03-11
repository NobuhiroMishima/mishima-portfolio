"use client";
import Headline from "@/components/elements/title/Headline";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearDown } from "@/components/utils/appear";

function ProjectHeadLine({ title, subtitle, tag }) {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <>
      <Headline title={title} subtitle={subtitle} />
      <p ref={elementRef} className={appearDown(isVisible, "text-xs text-taggreen")}>
        {tag.map((keyword) => `#${keyword} `)}
      </p>
    </>
  );
}

export default ProjectHeadLine;
