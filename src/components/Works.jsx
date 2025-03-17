import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import WorksCardMini from "@/features/works/WorksCardMini";
import Headline from "./elements/title/Headline";
import PageTransitionButton from "./elements/button/PageTransitionButton";
import "swiper/css";
import "swiper/css/navigation";
import "../app/sliders.css";
import Backtitle from "./elements/title/Backtitle";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { appearUp } from "./utils/appear";

function Works({ works }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="px-28 max-lg:px-16 max-md:px-10 max-xs:px-5 py-4 mt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Headline title="Works" subtitle="これまでの実績" />
        </div>
        <div
          ref={elementRef}
          className={appearUp(isVisible, "relative mb-6")}
        >
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            navigation={{ prevEl: "#button_prev", nextEl: "#button_next" }}
            breakpoints={{
              1280: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 2,
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
              <SwiperSlide key={index} className="p-4">
                <WorksCardMini
                  id={work.id}
                  name={work.name}
                  topicImage={work.topicImage}
                  description={work.description}
                  tag={work.tag}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id="button_prev"
            className="swiper-button-prev max-md:hidden"
          ></div>
          <div
            id="button_next"
            className="swiper-button-next max-md:hidden"
          ></div>
        </div>
        <div className="flex justify-center">
          <PageTransitionButton
            page={"works"}
            textcolor={"black"}
            bgcolor={"white"}
            text={"一覧から探す"}
          />
        </div>
      </div>
      <div className="absolute top-[-44px] left-28 z-[-10]">
        <Backtitle color={"#E3E3E3"} text={"WORKS"} />
      </div>
    </section>
  );
}

export default Works;
