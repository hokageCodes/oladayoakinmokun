import AboutSection from "./sections/AboutSection";
import AwardsSection from "./sections/AwardsSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SpeakingSection from "./sections/SpeakingSection";
import TestimonialsSection from "./sections/TestitimonialSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SpeakingSection />
      <TestimonialsSection />
      <AwardsSection />
    </div>
  );
}
