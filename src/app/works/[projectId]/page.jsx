import PageTransitionButton from "@/components/elements/button/PageTransitionButton";
import SubHeadline from "@/components/elements/title/SubHeadline";
import { projects } from "@/features/works/constants/projects";
import ProjectHeadLine from "@/features/works/ProjectHeadLine";
import Image from "next/image";
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
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <ProjectHeadLine
            title={project.name}
            subtitle={project.description}
            tag={project.tag}
          />
        </div>
        <div className="flex flex-col gap-14 mb-40">
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col md:flex-row gap-x-28 gap-y-5 items-start md:items-center">
            <h4 className="w-24 font-bold text-2xl">制作概要</h4>
            <p className="flex-1">{project.overview}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-x-28 gap-y-5 items-start md:items-center">
            <h4 className="w-24 font-bold text-2xl">制作内容</h4>
            <p className="flex-1">{project.content}</p>
          </div>
          <div className="flex flex-col gap-14">
            <h4 className="w-24 font-bold text-2xl">制作画像</h4>
            <Image
              src={project.detailImage}
              alt=""
              width={740}
              height={1200}
              className="m-auto"
            />
          </div>
        </div>
        <div>
          <SubHeadline text="Related Works" />
        </div>
        <div className="flex justify-center">
          <PageTransitionButton
            page={"works"}
            textcolor={"black"}
            bgcolor={"white"}
            text={"一覧に戻る"}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetail;
