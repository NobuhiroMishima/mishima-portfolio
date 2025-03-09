import { projects } from "@/features/works/constants/projects";

export async function generateMetadata({ params }) {
  const { projectId } = await params;
  const project = projects.find((project) => project.id == projectId);
  return {
    title: `${project.name} | mishima's portfolio`,
    description: `${project.description}${project.overview}`,
  };
}

function WorksDetailLayout({ children }) {
  return <main className="mt-[62px] lg:mt-[82px]">{children}</main>;
}

export default WorksDetailLayout;
