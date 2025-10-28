// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { ArrowRight } from 'lucide-react';

export function HeroSection({
  t,
  scrollToSection,
  handleScheduleDemo
}) {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10" />
      <div className="absolute inset-0">
        <div className="particles-container">
          {[...Array(50)].map((_, i) => <div key={i} className="particle absolute w-1 h-1 bg-[#0D7E9C]/30 rounded-full animate-pulse" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }} />)}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 增加主标题的段前间距 */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight pt-16 md:pt-24 lg:pt-32">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {t.hero.highlights.map((highlight, index) => <div key={index} className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20">
              <div className="text-2xl font-bold text-[#0D7E9C]">{highlight}</div>
            </div>)}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => scrollToSection('roi')} className="bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
            {t.hero.cta1}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" onClick={handleScheduleDemo} className="border-2 border-[#0D7E9C] text-[#0D7E9C] px-8 py-4 rounded-lg font-semibold hover:bg-[#0D7E9C] hover:text-white transition-all duration-300">
            {t.hero.cta2}
          </Button>
        </div>
      </div>
    </section>;
}