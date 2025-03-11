"use client";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

function WorksMV({ project }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col items-center")}>
      <Image
        src={project.screenImage}
        alt={`${project.name} Image`}
        width={800}
        height={500}
        priority
      />
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center gap-4"
      >
        <p>{project.url}</p>
        <FaExternalLinkAlt />
      </Link>
    </div>
  );
}

export default WorksMV;
