import React from 'react';
import { heroSlides } from "../Components/data";

export default function Slides({ 
  currentSlide, 
  setCurrentSlide,
}) {
  return (
    <section className="relative">
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full ${slide.bgColor} flex items-center justify-center relative`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 px-4 text-center text-white">
                <div className="mb-4 text-6xl md:text-8xl animate-pulse">{slide.image}</div>
                <h1 className="mb-4 text-3xl font-bold md:text-5xl">{slide.title}</h1>
                <p className="mb-2 text-xl font-medium md:text-2xl">{slide.subtitle}</p>
                <p className="mb-8 text-lg opacity-90">{slide.description}</p>
                <button className="px-8 py-3 font-semibold text-gray-900 transition-colors transform bg-white rounded-xl hover:bg-gray-100 hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Controls */}
        <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-500' : 'bg-blue-300/60'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-white/80" />
    </section>
  );
}