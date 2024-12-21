import Headline from "@/components/elements/title/Headline";
import SubHeadline from "@/components/elements/title/SubHeadline";
import { projects } from "@/features/works/constants/projects";
import ProjectHeadLine from "@/features/works/ProjectHeadLine";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";

async function ProjectDetail({ params }) {
  const { projectId } = await params;

  const project = projects.find((project) => project.id == projectId);
  if (!project) {
    notFound();
  }

  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <ProjectHeadLine
            title={project.name}
            subtitle={project.description}
            tag={project.tag}
          />
        </div>
        <div className="flex flex-col gap-14 mb-40">
          <div>
            <img src={project.screenImage} alt={`${project.name} Image`} />
            <div>
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
          </div>
          <div className="flex gap-28 items-center">
            <h4 className="w-24 font-bold text-2xl">制作概要</h4>
            <p className="flex-1">{project.overview}</p>
          </div>
          <div className="flex gap-28 items-center">
            <h4 className="w-24 font-bold text-2xl">制作内容</h4>
            <p className="flex-1">{project.content}</p>
          </div>
          <div className="flex flex-col gap-14">
            <h4 className="w-24 font-bold text-2xl">制作画像</h4>
            <img src={project.detailImage} alt="" />
          </div>
        </div>
        <div>
          <SubHeadline text="Related Works" />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
