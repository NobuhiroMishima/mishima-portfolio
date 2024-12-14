import CategoryBadge from "@/components/elements/badge/CategoryBadge";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";

function WorksCard({ name, description, githubUrl, image, category, tag }) {
  return (
    <div className="w-80 min-h-[360px] bg-contentgray p-4 flex flex-col items-center rounded-lg">
      <img
        src={image}
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
            <a href="" className="text-2xl">
              <AiFillGithub />
            </a>
          ) : (
            <a href="" className="text-2xl">
              <FaFigma />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default WorksCard;
