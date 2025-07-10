import React, { useState, useEffect } from 'react';

export default function HeroSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`h-full bg-gradient-to-br ${slide.bgColor} flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center text-white px-4">
              <div className="text-6xl md:text-8xl mb-4 animate-pulse">{slide.image}</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-2 font-medium">{slide.subtitle}</p>
              <p className="text-lg mb-8 opacity-90">{slide.description}</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide Controls */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}
