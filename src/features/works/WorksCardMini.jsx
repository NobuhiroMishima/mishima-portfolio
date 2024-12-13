import React from "react";

function WorksCardMini({ name, image, description, tag }) {
  return (
    <div className="w-[280px] min-h-[280px] bg-contentgray p-4 flex flex-col items-center rounded-lg">
      <img
        src={image}
        alt={`${name} Image`}
        width={256}
        height={144}
        className="h-[144px] object-cover rounded-xl my-2 text-center"
      />
      <div>
        <p>{description}</p>
        <p className="text-xs text-taggreen">
          {tag.map((keyword) => `#${keyword} `)}
        </p>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-2 bg-amber-600"></div> */}
    </div>
  );
}

export default WorksCardMini;
