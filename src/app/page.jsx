"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Works from "@/components/Works";
import { projects } from "@/features/works/constants/projects";

function Home() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    setWorks(projects.slice(0, 5));
  }, []);
  return (
    <>
      <Hero />
      <Works works={works} />
      <About />
      <Service />
    </>
  );
}

export default Home