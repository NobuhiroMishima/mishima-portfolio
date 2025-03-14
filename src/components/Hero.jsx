"use client";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiWantedly } from "react-icons/si";
import { loadSlim } from "@tsparticles/slim";
import { appearRight, appearUp } from "./utils/appear";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import Link from "next/link";

function Hero() {
  const [init, setInit] = useState(false);
  const { elementRef, isVisible } = useIntersectionObserver();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          value: 40,
        },
        opacity: {
          value: 0.5, // 初期の透明度は0
          animation: {
            enable: true,
            speed: 5, // 透明度が変化する速さ
            opacity_min: 0.1, // 最小透明度
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0, max: 10 }, // 粒子の大きさをランダムに設定
          animation: {
            enable: true, // アニメーションを有効化
            speed: 1, // アニメーション速度
            minimumValue: 0,
            sync: false,
          },
        },
        life: {
          duration: {
            sync: false, // 同じタイミングで全粒子が消えるのを防ぐ
            value: { min: 10, max: 20 }, // 粒子が存在する時間（秒単位）の範囲
          },
          count: 0, // 粒子が再生成される回数。0は無限
          delay: {
            value: { min: 0, max: 2 }, // 発生の遅延時間
          },
        },
      },
    }),
    []
  );

  // tsParticles.load("particles", {
  //   particles: {
  //     number: {
  //       value: 100,
  //     },
  //     color: {
  //       value: "#48F2E3",
  //     },
  //     move: {
  //       enable: true,
  //       speed: 0.5,
  //     },
  //   },
  // });

  return (
    <section className="bg-heroblack h-[480px] lg:h-[100vh] relative">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          ...options,
          fullScreen: {
            enable: false, // これでposition: fixedを無効化
          },
        }}
        className="absolute inset-0 size-full z-0"
      />
      <div className="relative z-5 w-full h-full text-white">
        <div ref={elementRef} className={appearUp(isVisible, "absolute top-24 lg:top-60 left-5 xs:left-10 md:left-16 lg:left-auto md:right-40 xl:right-60 text-3xl lg:text-4xl xl:text-5xl !leading-[3rem] lg:!leading-[5rem]")}>
          アイデアを形に、
          <br />
          デザインを機能に、
          <br />
          未来を創る
        </div>
        <div className="absolute bottom-5 lg:bottom-20 left-5 xs:left-10 md:left-16 lg:left-40 flex flex-col gap-5">
          <div className={appearRight(isVisible)} style={{ transitionDelay: "1000ms" }}>
            <h1 className="text-2xl lg:text-4xl">mishima</h1>
            <p className="text-lg lg:text-xl">This is a web creator's portfolio site.</p>
          </div>
          <div>
            <div className={appearRight(isVisible, "flex flex-row gap-2 items-center")} style={{ transitionDelay: "1100ms" }}>
              <MdEmail />
              <span className="text-darkblue pb-1 text-md lg:text-lg">
                nobuhiro.mishima@outlook.com
              </span>
            </div>
            <div className={appearRight(isVisible, "flex flex-colitems-center gap-4 mb-3")} style={{ transitionDelay: "1200ms" }}>
              <Link
                href="https://github.com/NobuhiroMishima"
                className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
                target="_blank"
              >
                <AiFillGithub />
              </Link>
              <Link
                href="https://www.linkedin.com/in/%E6%9A%A2%E6%B4%8B-%E4%B8%89%E5%B3%B6-6543ba356/"
                className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
              <Link
                href="https://www.wantedly.com/id/nobuhiro_mishima"
                className="bg-darkblue p-2 rounded-full cursor-pointer hover:bg-darkblue/75 text-white"
                target="_blank"
              >
                <SiWantedly />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="relative z-5 py-60 px-20 md:px-40 xl:p-60 text-white flex flex-col lg:flex-row gap-10 justify-between">
        <div>
          <h1 className="text-5xl">mishima</h1>
          <p className="text-xl">This is a web creator's portfolio site</p>
        </div>
        <div className="text-white text-2xl lg:text-3xl xl:text-4xl leading-relaxed ">
          アイデアを形に、
          <br />
          デザインを機能に、
          <br />
          未来を創る
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
