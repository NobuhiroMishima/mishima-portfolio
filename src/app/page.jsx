"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Works from "@/components/Works";
import { projects } from "@/features/works/constants/projects";
import { servicemenu } from "@/features/service/constants/servicemenu";

function Home() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    setWorks(projects.slice(0, 6));
  }, []);
  return (
    <>
      <Hero />
      <Works works={works} />
      <About />
      <Service servicemenu={servicemenu} />
    </>
  );
}

export default Home