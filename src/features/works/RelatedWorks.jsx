import SubHeadline from "@/components/elements/title/SubHeadline";
import WorksCard from "@/features/works/WorksCard";
import { projects } from "@/features/works/constants/projects";

function RelatedWorks({ currentProjectId, currentCategories }) {
  const relatedProjects = projects.filter(
    (p) =>
      p.id !== currentProjectId &&
      p.category.some((cat) => currentCategories.includes(cat))
  );

  return (
    <div>
      <SubHeadline text="Related Works" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 place-items-center">
        {relatedProjects.map((relatedProject) => (
          <WorksCard
            key={relatedProject.id}
            id={relatedProject.id}
            name={relatedProject.name}
            description={relatedProject.description}
            githubUrl={relatedProject.githubUrl}
            topicImage={relatedProject.topicImage}
            category={relatedProject.category}
            tag={relatedProject.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedWorks;
