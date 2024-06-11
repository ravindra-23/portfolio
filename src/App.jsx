import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Work from "./components/work";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-primary">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Hero setSelectedPage={setSelectedPage} />

      <Skills setSelectedPage={setSelectedPage} />

      <Work />
    </div>
  );
}

export default App;
