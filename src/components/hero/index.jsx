import { useState, useEffect } from "react";
import ReactLogo from "../../assets/react.svg";
import Js from "../../assets/javascript.svg";
import Wordpress from "../../assets/wordpress.svg";
import Css from "../../assets/css.svg";

import { MouseParallax } from "react-just-parallax";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animationInterval, setAnimationInterval] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      "#text",
      {
        ease: "power1.inOut",
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 2.5,
        stagger: 0.1,
      }
    );
  }, []);

  useEffect(() => {
    const h1Element = document.querySelector(".title");

    if (h1Element) {
      let iteration = 0;

      const interval = setInterval(() => {
        h1Element.innerText = h1Element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return h1Element.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= h1Element.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 100);

      setAnimationInterval(interval);
    }

    // Clean up the interval on component unmount
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-[80vh] mt-[80px] flex justify-center items-center"
    >
      <div className="overflow-hidden">
        <h2
          data-value="RAVINDRA"
          className="title text-[50px] sm:text-[100px] lg:text-[150px] text-center font-poppins font-bold text-white drop-shadow-md tracking-[0.15em] mb-3 sm:mb-0"
        >
          RAVINDRA
        </h2>
        <p
          id="text"
          className="text-[30px] font-mono font-bold text-center tracking-[0.15em]"
        >
          FRONT END WEB DEVELOPER
        </p>

        <div>
          <div className="absolute left-20">
            <MouseParallax>
              <img
                src={ReactLogo}
                alt="react"
                className="text-white fill-white w-20 h-auto opacity-30"
              />
            </MouseParallax>
          </div>
          <div className="absolute top-40 left-10">
            <MouseParallax>
              <img
                src={Js}
                alt="javascript"
                className="text-white fill-white w-20 h-auto opacity-30"
              />
            </MouseParallax>
          </div>
          <div className="absolute top-40 right-10">
            <MouseParallax>
              <img
                src={Wordpress}
                alt="wordpress"
                className="text-white fill-white w-20 h-auto opacity-30"
              />
            </MouseParallax>
          </div>
          <div className="absolute bottom-40 right-20">
            <MouseParallax>
              <img
                src={Css}
                alt="css"
                className="text-white fill-white w-20 h-auto opacity-30"
              />
            </MouseParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
