// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';
// @ts-ignore;
import { Truck, Mountain, Ship, TrendingDown, Battery, Factory, ArrowRight } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Solutions(props) {
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
        title: '绿色能源解决方案',
        subtitle: '为高能耗场景提供定制化的新能源转型方案'
      },
      solutions: [{
        title: '绿色公路运输方案',
        subtitle: '为公路重卡长途运输提供ECOSYN + Energy HUB整体解决方案',
        description: '实现20-40%的能源成本节约，通过智能电驱系统和能量管理优化，大幅提升运输效率',
        benefits: ['20-40%能源成本节约', '智能电驱系统', '能量管理优化', '运输效率提升'],
        icon: Truck,
        image: 'highway-transport'
      }, {
        title: '绿色矿山解决方案',
        subtitle: '提供电动矿卡、电动挖掘机、电动钻机及油改电服务',
        description: '节能20–60%，全面实现矿山设备电动化，降低运营成本和环境 impact',
        benefits: ['20-60%节能效果', '全面设备电动化', '降低运营成本', '减少环境 impact'],
        icon: Mountain,
        image: 'mining-solution'
      }, {
        title: '绿色港口解决方案',
        subtitle: '为码头拖车、龙门吊、岸边吊等提供纯电及混合动力方案',
        description: '提升能效20–60%，实现港口物流的全面电动化和智能化升级',
        benefits: ['20-60%能效提升', '港口物流电动化', '智能化升级', '绿色港口建设'],
        icon: Ship,
        image: 'port-solution'
      }],
      cta: {
        title: '获取定制化解决方案',
        subtitle: '我们的专业团队为您提供最适合的新能源转型方案',
        button: '咨询解决方案'
      }
    },
    en: {
      hero: {
        title: 'Green Energy Solutions',
        subtitle: 'Providing customized new energy transition solutions for high-consumption scenarios'
      },
      solutions: [{
        title: 'Green Highway Transport',
        subtitle: 'An integrated ECOSYN + Energy HUB solution for long-haul freight',
        description: 'Achieving 20–40% reduction in total energy costs through intelligent electric drive systems and energy management optimization',
        benefits: ['20-40% energy cost reduction', 'Intelligent electric drive', 'Energy management optimization', 'Transport efficiency improvement'],
        icon: Truck,
        image: 'highway-transport'
      }, {
        title: 'Green Mining Solutions',
        subtitle: 'Full electrification for mining equipment — including e-trucks, drills, and excavators',
        description: 'Cutting energy consumption by 20–60%, achieving comprehensive electrification of mining equipment',
        benefits: ['20-60% energy savings', 'Full equipment electrification', 'Reduced operating costs', 'Environmental impact reduction'],
        icon: Mountain,
        image: 'mining-solution'
      }, {
        title: 'Green Port Solutions',
        subtitle: 'Comprehensive electrification for port logistics — yard tractors, RTGs, and quay cranes',
        description: 'Improving efficiency by 20–60%, achieving comprehensive electrification and intelligent upgrading of port logistics',
        benefits: ['20-60% efficiency improvement', 'Port logistics electrification', 'Intelligent upgrading', 'Green port construction'],
        icon: Ship,
        image: 'port-solution'
      }],
      cta: {
        title: 'Get Customized Solutions',
        subtitle: 'Our professional team provides the most suitable new energy transition solutions for you',
        button: 'Consult Solutions'
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
  const handleConsultSolution = () => {
    toast({
      title: currentLang === 'zh' ? '咨询解决方案' : 'Consult Solutions',
      description: currentLang === 'zh' ? '我们的解决方案专家将尽快与您联系' : 'Our solution experts will contact you soon'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <Navigation currentPage="solutions" onNavigate={handleNavigate} onLanguageChange={handleLanguageChange} currentLang={currentLang} />

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

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.solutions.map((solution, index) => {
            const Icon = solution.icon;
            return <div key={index} className="group">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                    {/* Image Header */}
                    <div className="h-48 bg-gradient-to-br from-[#0D7E9C]/20 to-[#01847E]/20 flex items-center justify-center">
                      <div className="p-6 bg-white/90 backdrop-blur rounded-full">
                        <Icon className="w-16 h-16 text-[#0D7E9C]" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                      <p className="text-lg text-gray-600 mb-4">{solution.subtitle}</p>
                      <p className="text-gray-700 mb-6">{solution.description}</p>
                      
                      {/* Benefits */}
                      <div className="space-y-2 mb-6">
                        {solution.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="flex items-center">
                            <TrendingDown className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </div>)}
                      </div>
                      
                      <Button onClick={handleConsultSolution} className="w-full bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                        {currentLang === 'zh' ? '了解详情' : 'Learn More'}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8">{t.cta.subtitle}</p>
          <Button onClick={handleConsultSolution} className="bg-white text-[#0D7E9C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>;
}