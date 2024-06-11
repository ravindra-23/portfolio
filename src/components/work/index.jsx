import { useEffect, useState } from "react";

import { projects } from "./projects";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";

const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Web Apps", value: "web apps" },
  { id: 3, name: "Websites", value: "websites" },
  { id: 4, name: "Wordpress", value: "wordpress" },
];

const Work = () => {
  const [filterImages, setFilterImages] = useState(null);

  useEffect(() => {
    setFilterImages(projects);
  }, []);

  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = projects.filter(
      (project) => project.value === btnType
    );
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(projects);
  };

  useGSAP(() => {
    animateWithGsap("#work-title");
  }, []);

  return (
    <section
      id="work"
      className="mx-auto w-5/6 flex min-h-full flex-col items-center py-20"
    >
      <div className="mb-8">
        <h2
          id="work-title"
          className="font-poppins text-[75px] font-bold drop-shadow-md"
        >
          My Work
        </h2>
        <div className=" w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>

      <div className="mt-4 flex flex-wrap gap-10">
        {btns.map((btn) => {
          return (
            <button
              key={btn.id}
              value={btn.value}
              className="font-poppins text-[16px] hover:text-accent focus:text-accent"
              onClick={handleClick}
            >
              {btn.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3">
          {filterImages &&
            filterImages.map((filterImage) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  key={filterImage.id}
                  className="mb-12"
                >
                  <motion.img
                    src={filterImage.image}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <h2 className="font-poppins text-[20px] font-bold mt-5">
                    {filterImage.title}
                  </h2>
                  <p className="mt-2 mb-6 text-[14px]">
                    Tech Stack: {filterImage.tech}
                  </p>
                  <button>
                    <a
                      href={filterImage.url}
                      target="_blank"
                      className="py-2 px-5 bg-white rounded-md text-primary hover:bg-accent font-poppins font-bold"
                    >
                      Preview
                    </a>
                  </button>
                </motion.div>
              );
            })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Work;
