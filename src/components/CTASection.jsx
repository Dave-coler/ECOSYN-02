// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { ArrowRight } from 'lucide-react';

export function CTASection({
  t,
  currentLang,
  handleNavigate
}) {
  return <section id="cta" className="py-20 bg-gradient-to-br from-[#0D7E9C] to-[#01847E] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="particles-container">
          {[...Array(30)].map((_, i) => <div key={i} className="particle absolute w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }} />)}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">{t.cta.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">{currentLang === 'zh' ? '使命' : 'Mission'}</h3>
              <p className="text-white/80">{t.cta.mission}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">{currentLang === 'zh' ? '目标' : 'Goal'}</h3>
              <p className="text-white/80">{t.cta.goal}</p>
            </div>
          </div>
          
          <Button onClick={() => handleNavigate('about')} className="bg-white text-[#0D7E9C] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
}