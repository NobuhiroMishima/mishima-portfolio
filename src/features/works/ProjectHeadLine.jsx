import Headline from "@/components/elements/title/Headline";

function ProjectHeadLine({ title, subtitle, tag }) {
  return (
    <>
      <Headline title={title} subtitle={subtitle} />
      <p className="text-xs text-taggreen">
        {tag.map((keyword) => `#${keyword} `)}
      </p>
    </>
  );
}

export default ProjectHeadLine;
