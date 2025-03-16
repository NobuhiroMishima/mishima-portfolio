"use client";

import { useEffect, useState } from "react";
import Headline from "@/components/elements/title/Headline";
import { projects } from "@/features/works/constants/projects";
import WorksCard from "@/features/works/WorksCard";
import WorksFilter from "@/features/works/WorksFilter";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import { appearUp } from "@/components/utils/appear";


function Page() {
  const [works, setWorks] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filterd, setFilterd] = useState([]);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    setWorks(projects);
    setFilterd(projects);
  }, []);
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-16 pb-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-12">
          <Headline title="Works" subtitle="これまでの実績" />
        </div>
        <div ref={elementRef} className={appearUp(isVisible, "flex flex-col gap-10")}>
          <div>
            <p>
              個人から法人まで多様なジャンルの実績を紹介します。
              <br />
              ※クライアントとの契約上、一部の名称を変更しているほか、公開していない制作物もございます。
            </p>
          </div>
          <div>
            <WorksFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} works={works} setFilterd={setFilterd} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10 place-items-center">
            {filterd.map((work, index) => (
              <WorksCard
                key={index}
                id={work.id}
                name={work.name}
                description={work.description}
                githubUrl={work.githubUrl}
                topicImage={work.topicImage}
                category={work.category}
                tag={work.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
