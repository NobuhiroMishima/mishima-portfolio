"use client";
import CategoryBadge from "@/components/elements/badge/CategoryBadge";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appear } from "@/components/utils/appear";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import Image from "next/image";
function WorksCard({
  id,
  name,
  description,
  githubUrl,
  topicImage,
  category,
  tag,
}) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <Link href={`/works/${id}`} ref={elementRef} className={appear(isVisible)}>
      <div className="w-[312px] min-h-[360px] bg-contentgray p-4 flex flex-col items-start justify-between rounded-lg duration-500 shadow-md hover:shadow-card-md hover:translate-y-[-2px]">
        <div className="w-[280px]">
          <Image
            src={topicImage}
            alt={`${name} Image`}
            width={280}
            height={144}
            className="h-[144px] object-cover rounded-xl my-2 text-center"
          />
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col items-start gap-2">
              <div>
                <h4 className="font-bold">{name}</h4>
                <div className="flex gap-1">
                  {category.map((category, index) => (
                    <CategoryBadge key={index} text={category} />
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>{description}</p>
                <p className="text-xs text-taggreen">
                  {tag.map((keyword) => `#${keyword} `)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 w-[280px]">
          {category.includes("Development") && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(githubUrl, "_blank");
              }}
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <AiFillGithub />
            </button>
          )}
          {category.includes("Design") && (
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(githubUrl, "_blank");
              }}
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <FaFigma />
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}

export default WorksCard;
