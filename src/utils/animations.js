import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap = (target) => {
  gsap.fromTo(
    target,
    {
      ease: "power1.inOut",
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      delay: 0.2,
      stagger: 0.1,
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
      },
    }
  );
};
