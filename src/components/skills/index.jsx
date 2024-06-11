import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Software from "../../assets/software.svg";
import ReactIcon from "../../assets/react-icon.svg";
import Wordpress from "../../assets/wordpress-icon.svg";
import { animateWithGsap } from "../../utils/animations";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = ({ setSelectedPage }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        translateX: "-200vh",
      },
      {
        translateX: "0",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    animateWithGsap("#expertise-title");
  }, []);
  return (
    <motion.div onViewportEnter={() => setSelectedPage("skills")}>
      <section
        id="skills"
        className="mx-auto w-5/6 flex min-h-full flex-col justify-between items-center py-20"
        ref={triggerRef}
      >
        <div className="mb-10">
          <h2
            id="expertise-title"
            className="font-poppins text-[75px] font-bold drop-shadow-md"
          >
            My Expertise
          </h2>
        </div>
        {/* <div className="flex justify-between items-center"> */}
        <div ref={sectionRef} className="grid grid-cols-3 items-stretch">
          {/* software development */}
          <div className="border border-white px-7 py-10">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={Software}
                alt="software"
                className="w-[40px] h-[40px]"
              />
              <h3 className="font-poppins text-[26px] font-semibold">
                Software Dev
              </h3>
            </div>

            <div>
              <p className="text-[16px] font-roboto pl-9">
                Experienced in both functional and OOP: React, JavaScript, HTML,
                CSS.
              </p>
            </div>
          </div>
          {/* Frontend dev */}
          <div className="border border-white px-7 py-10">
            <div className="flex items-center gap-3 mb-5">
              <img src={ReactIcon} alt="react" className="w-[40px] h-[40px]" />
              <h3 className="font-poppins text-[26px] font-semibold">
                Frontend Dev
              </h3>
            </div>

            <div>
              <p className="text-[16px] font-roboto pl-9">
                Passionate about UI/UX. Over 1+ year of development experience
                in HTML, CSS, JS, React and NextJS frameworks.
              </p>
            </div>
          </div>
          {/* wordpress dev */}
          <div className="border border-white px-7 py-10">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={Wordpress}
                className="w-[40px] h-[40px]"
                alt="wordpress"
              />
              <h3 className="font-poppins text-[26px] font-semibold">
                Wordpress Dev
              </h3>
            </div>

            <div>
              <p className="text-[16px] font-roboto pl-9">
                Skilled in developing responsive websites using Elementor and
                different plugins.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-expertiseBg w-3/5 h-[380px] opacity-20"></div>
      </section>
    </motion.div>
  );
};

export default Skills;
