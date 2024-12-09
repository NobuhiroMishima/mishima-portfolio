"use client";

import { useEffect, useState } from "react";
import WorksCardMini from "./WorksCardMini";
import { projects } from "@/constants/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../app/sliders.css";

function Works() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    setWorks(projects.slice(0, 5));
  }, []);
  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-[40px] leading-10 font-medium">Works</h2>
          <h3>これまでの実績</h3>
        </div>
        <div className="relative mb-6">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            navigation={{ prevEl: "#button_prev", nextEl: "#button_next" }}
            breakpoints={{
              1280: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {works.map((work, index) => (
              <SwiperSlide key={index}>
                <WorksCardMini
                  name={work.name}
                  image={work.image}
                  description={work.description}
                  tag={work.tag}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div id="button_prev" className="swiper-button-prev max-md:hidden"></div>
          <div id="button_next" className="swiper-button-next max-md:hidden"></div>
        </div>
        <div className="flex justify-center">
          <button className="bg-white text-black px-5 py-2 border-2 border-black hover:bg-black hover:text-white drop-shadow-2xl text-sm">
            一覧から探す
          </button>
        </div>
      </div>
    </section>
  );
}

export default Works;
