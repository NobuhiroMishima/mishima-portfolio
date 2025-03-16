import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import Link from "next/link";
import React from "react";
import Image from "next/image";
function WorksCardMini({ id, name, topicImage, description, tag }) {
  return (
    <Link
      href={`/works/${id}`}
      className="relative w-[280px] min-h-[300px] bg-contentgray flex flex-col items-center rounded-lg duration-1000 shadow-md hover:shadow-card-md"
    >
      <div className="p-4 duration-500 hover:scale-105">
        <div className="relative w-full h-[144px] my-2 overflow-hidden rounded-xl">
          <Image
            src={topicImage}
            alt={`${name} Image`}
            width={248}
            height={144}
            className="object-cover text-center"
          />
        </div>
        <div>
          <p>{description}</p>
          <p className="text-xs text-taggreen">
            {tag.map((keyword) => `#${keyword} `)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default WorksCardMini;
