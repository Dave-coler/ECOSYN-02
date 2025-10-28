// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { useToast, Button } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Battery, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [selectedSolution, setSelectedSolution] = useState(null);
  const texts = {
    zh: {
      hero: {
        title: '智能解决方案',
        subtitle: '为高能耗场景提供定制化的新能源解决方案',
        description: '基于先进的电驱动技术和智能控制系统，我们为公路运输、能源配送等场景提供高效、可靠的新能源解决方案。'
      },
      solutions: [{
        id: 'ecosyn',
        title: 'ECOSYN 电驱系统',
        subtitle: '长距离公路列车的电动化革命',
        description: '全球首个为长距离公路列车量身定制的智能电驱产品，即插即用，立减80%燃料成本。',
        features: ['80% 燃料成本削减', '2400 kWh 超长续航', '零改装需求', '智能兼容系统'],
        icon: 'Zap',
        color: '#0D7E9C',
        stats: {
          fuel: '80%',
          range: '2400kWh',
          efficiency: '40%'
        }
      }, {
        id: 'energy-storage',
        title: '智能储能系统',
        subtitle: '灵活高效的能源管理方案',
        description: '模块化储能架构，支持快速更换，为各种应用场景提供可靠的能源保障。',
        features: ['模块化设计', '快速更换', '高能量密度', '长循环寿命'],
        icon: 'Battery',
        color: '#01847E',
        stats: {
          capacity: '2400kWh',
          flexibility: '95%',
          lifespan: '8+年'
        }
      }, {
        id: 'flexible-charging',
        title: '柔性超充系统',
        subtitle: 'MW级大功率快速补能解决方案',
        description: '直流液冷，全柔性分配架构，支持光储直连，为大电量电池系统实现快速补能。',
        features: ['MW级超充', '全柔性分配', '全液冷', '适应多种充电标准'],
        icon: 'Zap',
        color: '#0D7E9C',
        stats: {
          power: '2400kW',
          efficiency: '96%',
          flexibility: '100%'
        }
      }, {
        id: 'smart-control',
        title: '智能控制系统',
        subtitle: 'AI驱动的能源优化管理',
        description: '先进的智能感应系统和AI算法，实现能源的智能分配和优化管理。',
        features: ['AI优化算法', '实时监控', '预测维护', '智能调度'],
        icon: 'TrendingUp',
        color: '#0D7E9C',
        stats: {
          efficiency: '35%',
          uptime: '99.5%',
          maintenance: '50%'
        }
      }],
      applications: {
        title: '应用场景',
        subtitle: '多场景适配，全方位覆盖',
        scenarios: [{
          title: '公路列车运输',
          description: '长距离重载运输的绿色革命',
          icon: 'Truck',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310a?w=800&h=400&fit=crop'
        }, {
          title: '能源配送网络',
          description: '绿色能源的智能运输',
          icon: 'Battery',
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
        }, {
          title: '港口物流',
          description: '港口作业的电动化升级',
          icon: 'Shield',
          image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=400&fit=crop'
        }, {
          title: '矿山运输',
          description: '重型装备的绿色转型',
          icon: 'TrendingUp',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop'
        }]
      },
      cta: {
        title: '定制化解决方案',
        subtitle: '根据您的具体需求，我们提供量身定制的新能源解决方案',
        button: '联系我们'
      }
    },
    en: {
      hero: {
        title: 'Intelligent Solutions',
        subtitle: 'Customized new energy solutions for high-consumption scenarios',
        description: 'Based on advanced electric drive technology and intelligent control systems, we provide efficient and reliable new energy solutions for road transport, energy distribution and other scenarios.'
      },
      solutions: [{
        id: 'ecosyn',
        title: 'ECOSYN Electric Drive System',
        subtitle: 'Electric revolution for long-distance road trains',
        description: 'The world\'s first intelligent electric drive product tailored for long-distance road trains — plug & play, 80% fuel cost reduction.',
        features: ['80% fuel cost reduction', 'Up to 2400 kWh range', 'Zero modification required', 'Smart compatibility system'],
        icon: 'Zap',
        color: '#0D7E9C',
        stats: {
          fuel: '80%',
          range: '2400kWh',
          efficiency: '40%'
        }
      }, {
        id: 'energy-storage',
        title: 'Smart Energy Storage System',
        subtitle: 'Flexible and efficient energy management solution',
        description: 'Modular storage architecture with quick swap support, providing reliable energy security for various application scenarios.',
        features: ['Modular design', 'Quick swap', 'High energy density', 'Long cycle life'],
        icon: 'Battery',
        color: '#01847E',
        stats: {
          capacity: '2400kWh',
          flexibility: '95%',
          lifespan: '8+ years'
        }
      }, {
        id: 'flexible-charging',
        title: 'Flexible Ultra-Fast Charging System',
        subtitle: 'MW-level high-power rapid energy replenishment solution',
        description: 'DC liquid cooling, fully flexible distribution architecture, supports direct PV-storage connection, achieving rapid energy replenishment for large-capacity battery systems.',
        features: ['MW-level ultra-fast charging', 'Fully flexible distribution', 'Full liquid cooling', 'Adaptable to multiple charging standards'],
        icon: 'Zap',
        color: '#0D7E9C',
        stats: {
          power: '2400kW',
          efficiency: '96%',
          flexibility: '100%'
        }
      }, {
        id: 'smart-control',
        title: 'Intelligent Control System',
        subtitle: 'AI-driven energy optimization management',
        description: 'Advanced intelligent sensing systems and AI algorithms for intelligent energy distribution and optimization management.',
        features: ['AI optimization algorithms', 'Real-time monitoring', 'Predictive maintenance', 'Smart scheduling'],
        icon: 'TrendingUp',
        color: '#0D7E9C',
        stats: {
          efficiency: '35%',
          uptime: '99.5%',
          maintenance: '50%'
        }
      }],
      applications: {
        title: 'Applications',
        subtitle: 'Multi-scenario adaptation, comprehensive coverage',
        scenarios: [{
          title: 'Road Train Transport',
          description: 'Green revolution in long-distance heavy transport',
          icon: 'Truck',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310a?w=800&h=400&fit=crop'
        }, {
          title: 'Energy Distribution Network',
          description: 'Intelligent transport of green energy',
          icon: 'Battery',
          image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
        }, {
          title: 'Port Logistics',
          description: 'Electrification upgrade of port operations',
          icon: 'Shield',
          image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=400&fit=crop'
        }, {
          title: 'Mining Transport',
          description: 'Green transformation of heavy equipment',
          icon: 'TrendingUp',
          image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop'
        }]
      },
      cta: {
        title: 'Customized Solutions',
        subtitle: 'We provide tailored new energy solutions based on your specific needs',
        button: 'Contact Us'
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
  const handleSolutionSelect = solutionId => {
    setSelectedSolution(solutionId);
    const solution = t.solutions.find(s => s.id === solutionId);
    toast({
      title: currentLang === 'zh' ? '解决方案选择' : 'Solution Selected',
      description: solution.title
    });
  };

  // 横向滚动控制
  const scrollContainer = (containerId, direction) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 320;
      if (direction === 'left') {
        container.scrollBy({
          left: -scrollAmount,
          behavior: 'smooth'
        });
      } else {
        container.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <Navigation currentPage="solutions" onNavigate={handleNavigate} onLanguageChange={handleLanguageChange} currentLang={currentLang} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10" />
        <div className="absolute inset-0">
          <div className="particles-container">
            {[...Array(30)].map((_, i) => <div key={i} className="particle absolute w-1 h-1 bg-[#0D7E9C]/30 rounded-full animate-pulse" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />)}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 增加主标题的段前间距 */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight pt-16 md:pt-24 lg:pt-32">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t.hero.subtitle}
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{currentLang === 'zh' ? '核心解决方案' : 'Core Solutions'}</h2>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {t.solutions.map((solution, index) => {
            const IconComponent = solution.icon === 'Zap' ? Zap : solution.icon === 'Battery' ? Battery : solution.icon === 'TrendingUp' ? TrendingUp : Shield;
            return <div key={solution.id} className={`group relative cursor-pointer transition-all duration-500 ${selectedSolution === solution.id ? 'scale-105' : ''}`} onClick={() => handleSolutionSelect(solution.id)}>
                  {/* Selection glow effect */}
                  {selectedSolution === solution.id && <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/30 to-[#01847E]/30 rounded-3xl blur-xl animate-pulse" />}
                  
                  {/* Main card */}
                  <div className={`relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border-2 ${selectedSolution === solution.id ? 'border-[#0D7E9C]' : 'border-white/50'}`}>
                    
                    {/* Top gradient bar */}
                    <div className={`h-1 ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gradient-to-r from-gray-300 to-gray-400'} transition-all duration-300`} />
                    
                    {/* Solution header */}
                    <div className="relative p-8 pb-6">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                          <p className="text-sm text-gray-600 font-medium mb-3">{solution.subtitle}</p>
                        </div>
                        
                        {/* Solution number */}
                        <div className={`text-3xl font-bold ${selectedSolution === solution.id ? 'text-[#0D7E9C]/30' : 'text-gray-200'} transition-colors`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 rounded-2xl ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10' : 'bg-gray-100'} transition-all duration-300`}>
                          <IconComponent className={`w-12 h-12 ${selectedSolution === solution.id ? 'text-[#0D7E9C]' : 'text-gray-400'} transition-colors`} />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>

                      {/* Features list */}
                      <div className="space-y-2 mb-6">
                        {solution.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gray-300'} mr-3`} />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>)}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(solution.stats).map(([key, value]) => <div key={key} className={`text-center p-3 rounded-xl ${selectedSolution === solution.id ? 'bg-[#0D7E9C]/5 border border-[#0D7E9C]/20' : 'bg-gray-50 border border-gray-200'} transition-all duration-300`}>
                            <div className={`text-lg font-bold ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent' : 'text-gray-600'} transition-colors`}>{value}</div>
                            <div className="text-xs text-gray-500 mt-1 capitalize">{key}</div>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Mobile: Horizontal Scroll Layout */}
          <div className="lg:hidden">
            {/* Scroll Controls */}
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => scrollContainer('solutions-scroll', 'left')} className="p-2 rounded-full bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 hover:from-[#0D7E9C]/20 hover:to-[#01847E]/20 text-[#0D7E9C] transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-500 font-medium">{currentLang === 'zh' ? '左右滑动查看更多' : 'Swipe to see more'}</span>
              <button onClick={() => scrollContainer('solutions-scroll', 'right')} className="p-2 rounded-full bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 hover:from-[#0D7E9C]/20 hover:to-[#01847E]/20 text-[#0D7E9C] transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div id="solutions-scroll" className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: {
              display: 'none'
            }
          }}>
              {t.solutions.map((solution, index) => {
              const IconComponent = solution.icon === 'Zap' ? Zap : solution.icon === 'Battery' ? Battery : solution.icon === 'TrendingUp' ? TrendingUp : Shield;
              return <div key={solution.id} className={`group relative flex-none w-80 cursor-pointer transition-all duration-500 ${selectedSolution === solution.id ? 'scale-105' : ''}`} onClick={() => handleSolutionSelect(solution.id)}>
                    {/* Selection glow effect */}
                    {selectedSolution === solution.id && <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/30 to-[#01847E]/30 rounded-3xl blur-xl animate-pulse" />}
                    
                    {/* Main card */}
                    <div className={`relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border-2 ${selectedSolution === solution.id ? 'border-[#0D7E9C]' : 'border-white/50'}`}>
                      
                      {/* Top gradient bar */}
                      <div className={`h-1 ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gradient-to-r from-gray-300 to-gray-400'} transition-all duration-300`} />
                      
                      {/* Solution header */}
                      <div className="relative p-6 pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{solution.title}</h3>
                            <p className="text-xs text-gray-600 font-medium mb-2">{solution.subtitle}</p>
                          </div>
                          
                          {/* Solution number */}
                          <div className={`text-2xl font-bold ${selectedSolution === solution.id ? 'text-[#0D7E9C]/30' : 'text-gray-200'} transition-colors`}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="flex justify-center mb-4">
                          <div className={`p-3 rounded-2xl ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10' : 'bg-gray-100'} transition-all duration-300`}>
                            <IconComponent className={`w-10 h-10 ${selectedSolution === solution.id ? 'text-[#0D7E9C]' : 'text-gray-400'} transition-colors`} />
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 mb-4 leading-relaxed text-sm">{solution.description}</p>

                        {/* Features list */}
                        <div className="space-y-1 mb-4">
                          {solution.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center">
                              <div className={`w-1.5 h-1.5 rounded-full ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gray-300'} mr-2`} />
                              <span className="text-xs text-gray-700">{feature}</span>
                            </div>)}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-1">
                          {Object.entries(solution.stats).map(([key, value]) => <div key={key} className={`text-center p-2 rounded-lg ${selectedSolution === solution.id ? 'bg-[#0D7E9C]/5 border border-[#0D7E9C]/20' : 'bg-gray-50 border border-gray-200'} transition-all duration-300`}>
                              <div className={`text-sm font-bold ${selectedSolution === solution.id ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent' : 'text-gray-600'} transition-colors`}>{value}</div>
                              <div className="text-xs text-gray-500 mt-1 capitalize">{key}</div>
                            </div>)}
                        </div>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.applications.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.applications.subtitle}</p>
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
            {t.applications.scenarios.map((scenario, index) => {
            const IconComponent = scenario.icon === 'Truck' ? Truck : scenario.icon === 'Battery' ? Battery : scenario.icon === 'Shield' ? Shield : TrendingUp;
            return <div key={index} className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/15 to-[#01847E]/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Main card */}
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border border-white/50">
                    
                    {/* Background image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0">
                        <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      </div>
                      
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="text-white">
                          <div className="flex items-center mb-2">
                            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mr-3">
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold mb-1">{scenario.title}</h3>
                              <p className="text-white/90 font-medium text-sm">{scenario.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Mobile: Horizontal Scroll Layout */}
          <div className="lg:hidden">
            {/* Scroll Controls */}
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => scrollContainer('applications-scroll', 'left')} className="p-2 rounded-full bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 hover:from-[#0D7E9C]/20 hover:to-[#01847E]/20 text-[#0D7E9C] transition-all duration-300">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-500 font-medium">{currentLang === 'zh' ? '左右滑动查看更多' : 'Swipe to see more'}</span>
              <button onClick={() => scrollContainer('applications-scroll', 'right')} className="p-2 rounded-full bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 hover:from-[#0D7E9C]/20 hover:to-[#01847E]/20 text-[#0D7E9C] transition-all duration-300">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Horizontal Scroll Container */}
            <div id="applications-scroll" className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: {
              display: 'none'
            }
          }}>
              {t.applications.scenarios.map((scenario, index) => {
              const IconComponent = scenario.icon === 'Truck' ? Truck : scenario.icon === 'Battery' ? Battery : scenario.icon === 'Shield' ? Shield : TrendingUp;
              return <div key={index} className="group relative flex-none w-80">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/15 to-[#01847E]/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    
                    {/* Main card */}
                    <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border border-white/50">
                      
                      {/* Background image */}
                      <div className="relative h-40 overflow-hidden">
                        <div className="absolute inset-0">
                          <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>
                        
                        {/* Content overlay */}
                        <div className="absolute inset-0 flex items-end p-4">
                          <div className="text-white">
                            <div className="flex items-center mb-2">
                              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mr-2">
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <h3 className="text-lg font-bold mb-1">{scenario.title}</h3>
                                <p className="text-white/90 font-medium text-xs">{scenario.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D7E9C] to-[#01847E] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => <div key={i} className="particle absolute w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{
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
            
            <Button onClick={() => handleNavigate('about')} className="bg-white text-[#0D7E9C] px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">
              {t.cta.button}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>;
}