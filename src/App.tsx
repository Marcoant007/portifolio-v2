import { useTheme } from "./hooks/useTheme";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { ExperienceSection } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Stack } from "./components/sections/Stack";
import { Projects } from "./components/sections/Projects";
import { Badges } from "./components/sections/Badges";
import { Docs } from "./components/sections/Docs";
import { Videos } from "./components/sections/Videos";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">
        Pular para o conteúdo
      </a>

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <ExperienceSection />
        <Education />
        <Stack />
        <Projects />
        <Badges />
        <Docs />
        <Videos />
      </main>

      <Footer />
    </>
  );
}
