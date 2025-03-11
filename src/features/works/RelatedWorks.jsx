"use client";
import SubHeadline from "@/components/elements/title/SubHeadline";
import WorksCard from "@/features/works/WorksCard";
import { projects } from "@/features/works/constants/projects";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";

function RelatedWorks({ currentProjectId, currentCategories }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  const relatedProjects = projects.filter(
    (p) =>
      p.id !== currentProjectId &&
      p.category.some((cat) => currentCategories.includes(cat))
  );

  return (
    <div ref={elementRef} className={appearUp(isVisible, "flex flex-col")}>
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
