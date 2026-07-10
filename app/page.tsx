import Hero from "@/components/home/Hero";
import TutorialGrid from "@/components/home/TutorialGrid";
import LearningPath from "@/components/home/LearningPath";
import StatsSection from "@/components/home/StatsSection";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <TutorialGrid />

      <LearningPath />

      <StatsSection />

      <WhyChoose />

      <Testimonials />

      <FAQ />

      <Newsletter />

      <Footer />
    </>
  );
}