import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [animationInterval, setAnimationInterval] = useState(null);

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
      <div>
        <h2
          data-value="RAVINDRA"
          className="title text-[50px] sm:text-[100px] lg:text-[150px] text-center font-poppins font-bold text-white drop-shadow-md tracking-[0.15em] mb-3 sm:mb-0"
        >
          RAVINDRA
        </h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="text-[30px] font-mono font-bold text-center tracking-[0.15em]">
            FRONT END WEB DEVELOPER
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
