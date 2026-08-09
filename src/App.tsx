import { useTheme } from "./hooks/useTheme";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { ExperienceSection } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Stack } from "./components/sections/Stack";
import { Projects } from "./components/sections/Projects";
import { Badges } from "./components/sections/Badges";
import { Videos } from "./components/sections/Videos";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useSmoothScroll();

  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>

      <Sidebar theme={theme} onToggleTheme={toggleTheme} />

      <div className="page-shell">
        <main id="main">
          <Hero />
          <About />
          <ExperienceSection />
          <Education />
          <Stack />
          <Projects />
          <Badges />
          {/* <Docs /> */}
          <Videos />
        </main>

        <Footer />
      </div>
    </>
  );
}
