import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { appearLeft } from "@/components/utils/appear";

function SkillCard({ skill }) {
  const { elementRef, isVisible } = useIntersectionObserver();
  return (
    <div
      ref={elementRef}
      className={appearLeft(
        isVisible,
        "flex gap-x-4 w-full sm:w-[360px] xl:w-[458px] bg-contentgray p-2 rounded-lg"
      )}
    >
      <div>{skill.image}</div>
      <div className="flex flex-col w-full gap-1">
        <div className="flex flex-row justify-between">
          <h5 className="text-lg font-bold">{skill.name}</h5>
          <div>
            {Array.from({ length: 5 }, (_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                style={{
                  color: i < skill.star ? "#ffd233" : "#e4dccb",
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm">{skill.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
