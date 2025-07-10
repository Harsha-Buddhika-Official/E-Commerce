import HeroSlider from "./HeroSlider";
import { heroSlides } from "./data";

export default function Slides({ 
  currentSlide, 
  setCurrentSlide,
}) {
  return (
    <section className="relative">
      <HeroSlider 
        slides={heroSlides} 
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" />
    </section>
  );
}