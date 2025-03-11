import PageTransitionButton from "@/components/elements/button/PageTransitionButton";
import { projects } from "@/features/works/constants/projects";
import ProjectHeadLine from "@/features/works/ProjectHeadLine";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedWorks from "@/features/works/RelatedWorks";
import WorksDetailContent from "@/features/works/WorksDetailContent";
import WorksMV from "@/features/works/WorksMV";
import WorksDetailImage from "@/features/works/WorksDetailImage";

async function page({ params }) {
  const { projectId } = await params;

  const project = projects.find((project) => project.id == projectId);
  if (!project) {
    notFound();
  }

  const currentCategories = project.category;

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
          <WorksMV project={project} />
          <WorksDetailContent title="制作概要" content={project.overview} />
          <WorksDetailContent title="制作内容" content={project.content} />
          <WorksDetailImage project={project} />
        </div>
        <div className="mb-20">
          <RelatedWorks
            currentProjectId={project.id}
            currentCategories={currentCategories}
          />
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

export default page;
