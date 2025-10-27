// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { CompanyIntro } from '@/components/CompanyIntro';
import { TimelineSection } from '@/components/TimelineSection';
import { TeamSection } from '@/components/TeamSection';
import { CorporateCulture } from '@/components/CorporateCulture';
export default function About(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [currentLang, setCurrentLang] = useState('zh');
  const texts = {
    zh: {
      hero: {
        title: '关于我们',
        subtitle: 'HILLSEA 专注于为公路、矿山、港口等高能耗场景提供整体新能源解决方案'
      },
      contact: {
        title: '联系我们',
        subtitle: '获取专业的新能源解决方案咨询',
        success: '感谢您的联系，我们的顾问将在24小时内回复。'
      }
    },
    en: {
      hero: {
        title: 'About Us',
        subtitle: 'HILLSEA focuses on integrated new energy solutions for high-consumption scenarios including highways, mines, and ports'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get professional new energy solution consultation',
        success: 'Thank you for contacting us. Our consultant will respond within 24 hours.'
      }
    }
  };
  const t = texts[currentLang];
  const handleNavigate = page => {
    $w.utils.navigateTo({
      pageId: page,
      params: {}
    });
  };
  const handleLanguageChange = lang => {
    setCurrentLang(lang);
    toast({
      title: lang === 'zh' ? '语言已切换' : 'Language changed',
      description: lang === 'zh' ? '已切换到中文' : 'Switched to English'
    });
  };
  const handleContactSubmit = data => {
    toast({
      title: currentLang === 'zh' ? '提交成功' : 'Submit Success',
      description: t.contact.success
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <Navigation currentPage="about" onNavigate={handleNavigate} onLanguageChange={handleLanguageChange} currentLang={currentLang} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Company Introduction & Mission */}
      <CompanyIntro currentLang={currentLang} />

      {/* Timeline */}
      <TimelineSection currentLang={currentLang} />

      {/* Team Section */}
      <TeamSection currentLang={currentLang} />

      {/* Corporate Culture */}
      <CorporateCulture currentLang={currentLang} />

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </div>
          <ContactForm currentLang={currentLang} onSubmit={handleContactSubmit} />
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>;
}