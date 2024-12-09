import React from "react";

function WorksCardMini({ name, image, description, tag }) {
  return (
    <div className="w-64">
      <img
        src={image}
        alt={`${name} Image`}
        width={256}
        height={144}
        className="h-[144px] object-cover rounded-xl mb-2"
      />
      <p>{description}</p>
      <p className="text-xs text-taggreen">{tag.map((keyword) => `#${keyword} `)}</p>
    </div>
  );
}

export default WorksCardMini;
