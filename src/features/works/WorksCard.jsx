import CategoryBadge from "@/components/elements/badge/CategoryBadge";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appear } from "@/components/utils/appear";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";

function WorksCard({ id, name, description, githubUrl, topicImage, category, tag }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <Link href={`/works/${id}`} ref={elementRef} className={appear(isVisible)}>
      <div className="w-80 min-h-[360px] bg-contentgray p-4 flex flex-col items-center rounded-lg duration-500 shadow-md hover:shadow-card-md hover:translate-y-[-2px]">
        <img
          src={topicImage}
          alt={`${name} Image`}
          width={280}
          height={144}
          className="h-[144px] object-cover rounded-xl my-2 text-center"
        />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start gap-2">
            <h4 className="font-bold flex-1">{name}</h4>
            <CategoryBadge text={category} />
          </div>
          <div>
            <p>{description}</p>
            <p className="text-xs text-taggreen">
              {tag.map((keyword) => `#${keyword} `)}
            </p>
          </div>
          <div className="flex">
            {category === "Development" ? (
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
            ) : (
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
      </div>
    </Link>
  );
}

export default WorksCard;
