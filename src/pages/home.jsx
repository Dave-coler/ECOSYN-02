// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, Zap, Shield, Battery, Truck, Factory, Ship, Calendar, TrendingUp, CheckCircle, BarChart3, Cpu, Activity, Sparkles, Gauge, Settings, Power, Database, Wifi, Star, Package, Wrench, MapPin, Route, ZapIcon } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ROICalculator } from '@/components/ROICalculator';
export default function Home(props) {
  const {
    $w
  } = props;
  const {
    toast
  } = useToast();
  const [currentLang, setCurrentLang] = useState('zh');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const texts = {
    zh: {
      hero: {
        title: 'ECOSYN：为公路长距运输重塑低碳未来',
        subtitle: '全球首个为长距离公路列车量身定制的智能电驱产品。即插即用，立减80%燃料成本，零改装即可上路。',
        highlights: ['≥80% 燃料成本立减', '2400 kWh 超长续航', '0% 现有车队改装需求'],
        cta1: '立即计算 ROI',
        cta2: '预约技术演示'
      },
      coreValues: {
        title: 'ECOSYN 架构：由数据和电驱动主导的变革',
        subtitle: '以成本削减、智能兼容与安全稳定三大核心优势，定义下一代新能源公路列车的标准。',
        advantages: [{
          title: '成本削减引擎',
          subtitle: '燃油效益飞跃80%+',
          description: 'ECOSYN的纯电动驱动单元主动承担公路列车大部分牵引负荷，将柴油消耗从根本上削减。凭借2400 kWh的最大容量，实现更低OPEX和更高的盈利边际。',
          features: ['主动承担80%+牵引负荷', '2400 kWh超大容量', '降低OPEX运营成本', '提升盈利边际'],
          highlight: 'AI优化的能量管理系统(VIS)最大化制动能量回收效率',
          icon: TrendingUp,
          primaryColor: '#0D7E9C',
          secondaryColor: '#01847E',
          chartData: {
            before: 100,
            after: 20,
            label: '燃料消耗对比'
          }
        }, {
          title: '智能兼容，零门槛集成',
          subtitle: '革命性即插即用技术',
          description: '我们的智能感应系统(VIS)实现毫秒级响应，与任何主流牵引车实现完美兼容。消除昂贵的定制化改装和漫长的停机时间——加挂即走。',
          features: ['毫秒级响应速度', '完美兼容主流牵引车', '零定制化改装', '加挂即走'],
          highlight: 'VIS(Versatile Integration System)智能传感器实现精准扭矩控制与功能分配',
          icon: Zap,
          primaryColor: '#0D7E9C',
          secondaryColor: '#01847E',
          techSpecs: ['响应时间: <10ms', '兼容车型: 95%+', '安装时间: <30分钟']
        }, {
          title: '增强安全与稳定性',
          subtitle: '智能电子稳定系统',
          description: 'ECOSYN集成EASR(电子防滑系统)和IESS(智能电子车身稳定系统)，实时横摆阻尼控制，消除挂车摇摆和弯道侧翻风险，全面提升车辆安全和轮胎寿命。',
          features: ['EASR电子防滑系统', 'IESS智能车身稳定', '实时横摆阻尼控制', '提升轮胎寿命'],
          highlight: 'EDC(Electronic Differential Controller)提供全方位安全防护',
          icon: Shield,
          primaryColor: '#0D7E9C',
          secondaryColor: '#01847E',
          safetyMetrics: ['侧翻风险降低85%', '轮胎寿命延长40%', '制动距离缩短25%']
        }]
      },
      technology: {
        title: '技术的力量：四大系统协同定义公路长途运输新能源标准',
        subtitle: '从智能识别到分布式驱动，每一处设计都源自对极限工况的理解。',
        systems: [{
          name: 'VIS',
          title: '智能集成控制',
          subtitle: 'Versatile Integration System',
          features: ['智能感知系统', '驾驶意图识别', '实时扭矩动态分配', '状态监测和故障处理'],
          highlight: '让传统柴油车头与电驱挂车实现毫秒级协同。',
          icon: Wifi,
          image: '/images/vis-system.jpg'
        }, {
          name: 'EDC',
          title: '电差速控制',
          subtitle: 'Electronic Differential Controller',
          features: ['EASR 防滑控制', 'IESS 车身稳定系统', 'MEDS 多轴差速控制', 'IRBS 智能制动能量回收'],
          highlight: '实时动态分配扭矩，让安全性与能效并行。',
          icon: Settings,
          image: '/images/edc-system.jpg'
        }, {
          name: 'DDS',
          title: '分布式驱动系统',
          subtitle: 'Distributed Driveaxle System',
          features: ['双电驱桥 / 三电驱桥配置', '峰值扭矩 80,000–120,000 Nm', '峰值功率 700–1050 kW', '制动能量回收，大幅降低燃油消耗'],
          highlight: '多电驱桥布局，澎湃动力输出，助力重载高效爬坡。',
          icon: Power,
          image: '/images/dds-system.jpg'
        }, {
          name: 'ESS',
          title: '动力储能系统',
          subtitle: 'Energy Storage System',
          features: ['配置选项：800 kWh / 1600 kWh / 2400 kWh', '模块化储能架构，兼容快换方案', '能量密度提升45%', '电池循环寿命>8年'],
          highlight: 'Drop-and-Hook 快速更换模式，无需等待充电，终结续航焦虑。',
          icon: Battery,
          image: '/images/ess-system.jpg'
        }]
      },
      specifications: {
        title: '产品参数',
        subtitle: '选择适合您工作强度需求的ECOSYN产品配置',
        products: [{
          name: 'EcoSyn One',
          tagline: '较低工作强度场景解决方案',
          specs: {
            drive: '双电驱桥',
            battery: '800 kWh',
            torque: '80,000 Nm',
            power: '700 kW',
            vis: '标配',
            edc: '选配'
          },
          features: ['适合中短途运输', '性价比最优', '快速安装', '基础智能控制'],
          recommended: false,
          image: '/images/ecosyn-one.jpg'
        }, {
          name: 'EcoSyn Pro',
          tagline: '一般工作强度场景解决方案',
          specs: {
            drive: '双电驱桥',
            battery: '1600 kWh',
            torque: '80,000 Nm',
            power: '700 kW',
            vis: '标配',
            edc: '标配'
          },
          features: ['适合长途重载', '平衡性能与成本', '全功能智能控制', '增强安全系统'],
          recommended: false,
          image: '/images/ecosyn-pro.jpg'
        }, {
          name: 'EcoSyn Max',
          tagline: '高工作强度场景解决方案',
          specs: {
            drive: '三电驱桥',
            battery: '2400 kWh',
            torque: '120,000 Nm',
            power: '1050 kW',
            vis: '标配',
            edc: '标配'
          },
          features: ['超长续航能力', '极限重载性能', '顶级安全配置', '智能预测维护'],
          recommended: false,
          image: '/images/ecosyn-max.jpg'
        }]
      },
      applications: {
        title: '应用场景',
        subtitle: '让能源转型发生在每一公里',
        scenarios: [{
          title: '公路列车场景',
          subtitle: '长距离重载运输的绿色革命',
          description: '在长距离高载运输中，ECOSYN 以纯电分布式电驱承担主牵引力，有效削减柴油消耗 80% 以上。为物流企业带来显著的成本节约和环境效益。',
          benefits: ['80% 燃料削减', '提升运营效率', '增加利润空间'],
          icon: Truck,
          backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310a?w=1200&h=600&fit=crop',
          stats: {
            fuel: '80%',
            efficiency: '40%',
            range: '2400kWh'
          }
        }, {
          title: '电能配送场景',
          subtitle: '绿色能源的智能运输网络',
          description: 'ECOSYN 支持绿色能源的灵活运输，将风电、光伏或富余电能从电厂送往负载边缘。构建清洁能源的高效配送体系，助力碳中和目标实现。',
          benefits: ['绿色能源运输', '离网解决方案', '灵活配送'],
          icon: Battery,
          backgroundImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
          stats: {
            capacity: '2400kWh',
            flexibility: '95%',
            emission: '0%'
          }
        }]
      },
      journey: {
        title: '产品发展历程',
        milestones: [{
          year: '2022',
          event: 'ECOSYN 1.0 交付美国市场'
        }, {
          year: '2023',
          event: 'ECOSYN 1.5 完成开发迭代'
        }, {
          year: '2024',
          event: 'ECOSYN 1.0 完成10万公里路试'
        }, {
          year: '2025',
          event: 'ECOSYN 2.0 完成平台产品开发'
        }]
      },
      cta: {
        title: 'HILLSEA：高能耗场景新能源科技先驱',
        subtitle: '专注于为公路、矿山、港口等高能耗场景提供整体新能源解决方案',
        mission: '加速高能耗场景向可持续能源转型',
        goal: '帮助客户实现 ESG 合规与零排放目标',
        button: '联系我们'
      }
    },
    en: {
      hero: {
        title: 'ECOSYN: Redefining low-carbon long-haul transport',
        subtitle: 'The world\'s first intelligent electric drive system designed for long-distance road trains — plug & play, 80% fuel savings, zero modification required.',
        highlights: ['≥80% Fuel Cost Reduction', 'Up to 2400 kWh Range', '0% Retrofit Required'],
        cta1: 'Calculate ROI Now',
        cta2: 'Schedule Demo'
      },
      coreValues: {
        title: 'ECOSYN Architecture: A revolution driven by data and electric power',
        subtitle: 'Cost reduction, smart compatibility, and enhanced stability — defining the next standard for electric road trains.',
        advantages: [{
          title: 'Cost Reduction Engine',
          subtitle: 'Fuel efficiency leap 80%+',
          description: 'ECOSYN\'s pure electric drive unit actively handles most of the road train\'s traction load, fundamentally reducing diesel consumption. With 2400 kWh maximum capacity, achieve lower OPEX and higher profit margins.',
          features: ['Actively handles 80%+ traction load', '2400 kWh ultra-large capacity', 'Reduces OPEX costs', 'Increases profit margins'],
          highlight: 'AI-optimized energy management system (VIS) maximizes regenerative braking efficiency',
          icon: TrendingUp,
          primaryColor: '#0D7E9C',
          secondaryColor: '#01847E',
          chartData: {
            before: 100,
            after: 20,
            label: 'Fuel Consumption Comparison'
          }
        }, {
          title: 'Smart Compatibility, Zero-Barrier Integration',
          subtitle: 'Revolutionary plug & play technology',
          description: 'Our Versatile Integration System (VIS) enables millisecond response and perfect compatibility with any mainstream tractor. Eliminates expensive custom modifications and long downtime — hook and go.',
          features: ['Millisecond response speed', 'Perfect compatibility with mainstream tractors', 'Zero custom modification', 'Hook and go'],
          highlight: 'VIS (Versatile Integration System) smart sensors enable precise torque control and function distribution',
          icon: Zap,
          primaryColor: '#0D7E9C',
          secondaryColor: '#01847E',
          techSpecs: ['Response Time: <10ms', 'Compatible Models: 95%+', 'Installation Time: <30min']
        }, {
          title: 'Enhanced Safety & Stability',
          subtitle: 'Intelligent electronic stability system',
          description: 'ECOSYN integrates EASR and IESS for real-time yaw damping control, eliminating trailer swing and rollover risks, comprehensively improving vehicle safety and tire life.',
          features: ['EASR electronic anti-slip system', 'IESS intelligent body stability', 'Real-time yaw damping control', 'Extends tire life'],
          highlight: 'EDC (Electronic Differential Controller) provides comprehensive safety protection',
          icon: Shield,
          primaryColor: '#0D7E9C',
          secondaryColor: '#01847E',
          safetyMetrics: ['85% reduction in rollover risk', '40% extension in tire life', '25% reduction in braking distance']
        }]
      },
      technology: {
        title: 'The Power of Technology: Four Systems Collaboratively Defining New Energy Standards for Long-Haul Transport',
        subtitle: 'From intelligent recognition to distributed drive, every design originates from understanding extreme operating conditions.',
        systems: [{
          name: 'VIS',
          title: 'Versatile Integration System',
          subtitle: 'Intelligent Integration Control',
          features: ['Intelligent sensing system', 'Driving intent recognition', 'Real-time dynamic torque distribution', 'Condition monitoring and fault handling'],
          highlight: 'Enabling millisecond-level collaboration between traditional diesel tractors and electric drive trailers.',
          icon: Wifi,
          image: '/images/vis-system.jpg'
        }, {
          name: 'EDC',
          title: 'Electronic Differential Controller',
          subtitle: 'Electronic Differential Control',
          features: ['EASR anti-slip control', 'IESS body stability system', 'MEDS multi-axle differential control', 'IRBS intelligent regenerative braking'],
          highlight: 'Real-time dynamic torque distribution, enabling parallel safety and efficiency.',
          icon: Settings,
          image: '/images/edc-system.jpg'
        }, {
          name: 'DDS',
          title: 'Distributed Driveaxle System',
          subtitle: 'Distributed Drive System',
          features: ['Dual/triple electric drive axle configuration', 'Peak torque 80,000–120,000 Nm', 'Peak power 700–1050 kW', 'Regenerative braking, significantly reducing fuel consumption'],
          highlight: 'Multi-drive axle layout, powerful output, assisting heavy-load efficient climbing.',
          icon: Power,
          image: '/images/dds-system.jpg'
        }, {
          name: 'ESS',
          title: 'Energy Storage System',
          subtitle: 'Power Storage System',
          features: ['Configuration options: 800 kWh / 1600 kWh / 2400 kWh', 'Modular storage architecture, compatible with quick swap solutions', '45% increase in energy density', 'Battery cycle life >8 years'],
          highlight: 'Drop-and-Hook quick replacement mode, no waiting for charging, ending range anxiety.',
          icon: Battery,
          image: '/images/ess-system.jpg'
        }]
      },
      specifications: {
        title: 'Specifications',
        subtitle: 'Choose the ECOSYN product configuration that suits your work intensity needs',
        products: [{
          name: 'EcoSyn One',
          tagline: 'Low Work Intensity Scenario Solution',
          specs: {
            drive: 'Dual electric drive axle',
            battery: '800 kWh',
            torque: '80,000 Nm',
            power: '700 kW',
            vis: 'Standard',
            edc: 'Optional'
          },
          features: ['Suitable for medium-short haul', 'Best cost performance', 'Quick installation', 'Basic intelligent control'],
          recommended: false,
          image: '/images/ecosyn-one.jpg'
        }, {
          name: 'EcoSyn Pro',
          tagline: 'Moderate Work Intensity Scenario Solution',
          specs: {
            drive: 'Dual electric drive axle',
            battery: '1600 kWh',
            torque: '80,000 Nm',
            power: '700 kW',
            vis: 'Standard',
            edc: 'Standard'
          },
          features: ['Suitable for long-haul heavy load', 'Balanced performance and cost', 'Full-function intelligent control', 'Enhanced safety system'],
          recommended: false,
          image: '/images/ecosyn-pro.jpg'
        }, {
          name: 'EcoSyn Max',
          tagline: 'High Work Intensity Scenario Solution',
          specs: {
            drive: 'Triple electric drive axle',
            battery: '2400 kWh',
            torque: '120,000 Nm',
            power: '1050 kW',
            vis: 'Standard',
            edc: 'Standard'
          },
          features: ['Ultra-long range capability', 'Extreme heavy-load performance', 'Top-level safety configuration', 'Intelligent predictive maintenance'],
          recommended: false,
          image: '/images/ecosyn-max.jpg'
        }]
      },
      applications: {
        title: 'Applications',
        subtitle: 'Making energy transition happen every kilometer',
        scenarios: [{
          title: 'Road Train Scenario',
          subtitle: 'Green Revolution in Long-Distance Heavy Transport',
          description: 'In long-distance heavy-haul transport, ECOSYN\'s fully electric distributed drive handles primary traction, reducing diesel consumption by over 80%. Bringing significant cost savings and environmental benefits to logistics companies.',
          benefits: ['80% fuel reduction', 'improved operational efficiency', 'increased profitability'],
          icon: Truck,
          backgroundImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310a?w=1200&h=600&fit=crop',
          stats: {
            fuel: '80%',
            efficiency: '40%',
            range: '2400kWh'
          }
        }, {
          title: 'Energy Delivery Scenario',
          subtitle: 'Intelligent Transport Network for Green Energy',
          description: 'ECOSYN supports flexible transportation of renewable energy — moving wind, solar, or surplus power from generation to the load edge. Building an efficient distribution system for clean energy, helping achieve carbon neutrality goals.',
          benefits: ['renewable energy transport', 'off-grid solutions', 'flexible delivery'],
          icon: Battery,
          backgroundImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=600&fit=crop',
          stats: {
            capacity: '2400kWh',
            flexibility: '95%',
            emission: '0%'
          }
        }]
      },
      journey: {
        title: 'Product Journey',
        milestones: [{
          year: '2022',
          event: 'ECOSYN 1.0 delivered to the U.S. market'
        }, {
          year: '2023',
          event: 'ECOSYN 1.5 development iteration completed'
        }, {
          year: '2024',
          event: 'ECOSYN 1.0 completed 100,000 km road tests'
        }, {
          year: '2025',
          event: 'ECOSYN 2.0 platform product development completed'
        }]
      },
      cta: {
        title: 'HILLSEA: Pioneer in new energy technology for high-consumption scenarios',
        subtitle: 'Focusing on integrated new energy solutions for highways, mines, ports and other high-consumption scenarios',
        mission: 'Accelerating the transition to sustainable energy in high-consumption scenarios',
        goal: 'Helping clients achieve ESG compliance and zero-emission goals',
        button: 'Contact Us'
      }
    }
  };
  const t = texts[currentLang];
  const handleNavigate = page => {
    if (page === 'home' || page === 'ecosyn') {
      // 滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      $w.utils.navigateTo({
        pageId: page,
        params: {}
      });
    }
  };
  const handleLanguageChange = lang => {
    setCurrentLang(lang);
    toast({
      title: lang === 'zh' ? '语言已切换' : 'Language changed',
      description: lang === 'zh' ? '已切换到中文' : 'Switched to English'
    });
  };
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleProductSelect = productName => {
    setSelectedProduct(productName);
    toast({
      title: currentLang === 'zh' ? '产品选择' : 'Product Selection',
      description: `${productName} ${currentLang === 'zh' ? '已选择' : 'selected'}`
    });
  };
  // 处理预约技术演示按钮点击
  const handleScheduleDemo = () => {
    const subject = encodeURIComponent(currentLang === 'zh' ? 'ECOSYN技术演示预约' : 'ECOSYN Technical Demo Request');
    const body = encodeURIComponent(currentLang === 'zh' ? '请描述您的运营场景、设备需求或者其他可以帮助我们判断您需求的信息' : 'Please describe your operating scenarios, equipment requirements, or other information that can help us understand your needs');
    window.location.href = `mailto:sales@hill-sea.com?subject=${subject}&body=${body}`;
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'coreValues', 'technology', 'specifications', 'applications', 'journey', 'roi', 'cta'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <Navigation currentPage="home" onNavigate={handleNavigate} onLanguageChange={handleLanguageChange} currentLang={currentLang} />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
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
      </section>

      {/* Core Values Section - Enhanced with Website Consistent Colors */}
      <section id="coreValues" className="py-20 bg-white relative overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/5 via-transparent to-[#01847E]/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0D7E9C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#01847E]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.coreValues.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.coreValues.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.coreValues.advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return <div key={index} className="group relative h-full">
                  {/* 3D effect with multiple shadows and transforms */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/20 to-[#01847E]/20 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500 group-hover:scale-105" />
                  
                  {/* Main card with frosted glass effect */}
                  <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 overflow-hidden">
                    
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/5 via-white/50 to-[#01847E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Header with consistent brand colors */}
                    <div className="relative p-6 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      
                      <div className="relative flex items-center justify-between mb-4">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Sparkles className="w-5 h-5 text-white/80" />
                          <div className="text-2xl font-bold">{index + 1}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{advantage.title}</h3>
                      <p className="text-white/90 font-medium flex items-center">
                        <Gauge className="w-4 h-4 mr-2" />
                        {advantage.subtitle}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="relative p-6">
                      <p className="text-gray-700 mb-6 leading-relaxed">{advantage.description}</p>

                      {/* Features List */}
                      <div className="space-y-3 mb-6">
                        {advantage.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center group/item">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0D7E9C] to-[#01847E] flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{feature}</span>
                          </div>)}
                      </div>

                      {/* Special Content based on advantage type */}
                      {advantage.chartData && <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 shadow-inner">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-gray-600">{advantage.chartData.label}</span>
                            <BarChart3 className="w-4 h-4 text-[#0D7E9C]" />
                          </div>
                          <div className="flex items-end space-x-2 h-20">
                            <div className="flex-1 bg-gradient-to-t from-red-400 to-red-300 rounded-t relative overflow-hidden group" style={{
                        height: '100%'
                      }}>
                              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent" />
                              <div className="text-center text-xs font-bold text-red-700 pt-1 relative z-10">{advantage.chartData.before}%</div>
                            </div>
                            <div className="flex-1 bg-gradient-to-t from-green-400 to-green-300 rounded-t relative overflow-hidden group" style={{
                        height: '20%'
                      }}>
                              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent" />
                              <div className="text-center text-xs font-bold text-green-700 pt-1 relative z-10">{advantage.chartData.after}%</div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-2 text-xs text-gray-500">
                            <span>使用前</span>
                            <span>使用后</span>
                          </div>
                        </div>}

                      {advantage.techSpecs && <div className="space-y-2">
                          {advantage.techSpecs.map((spec, specIndex) => <div key={specIndex} className="flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-100 hover:border-[#0D7E9C]/30 transition-colors">
                              <div className="flex items-center">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 flex items-center justify-center mr-3">
                                  <Cpu className="w-4 h-4 text-[#0D7E9C]" />
                                </div>
                                <span className="text-sm text-gray-700">{spec.split(':')[0]}</span>
                              </div>
                              <span className="text-sm font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent">{spec.split(':')[1]}</span>
                            </div>)}
                        </div>}

                      {advantage.safetyMetrics && <div className="grid grid-cols-1 gap-2">
                          {advantage.safetyMetrics.map((metric, metricIndex) => <div key={metricIndex} className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-100 hover:border-[#0D7E9C]/30 transition-colors">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 flex items-center justify-center mr-3">
                                <Activity className="w-4 h-4 text-[#0D7E9C]" />
                              </div>
                              <span className="text-sm text-gray-700">{metric}</span>
                            </div>)}
                        </div>}

                      {/* Highlight with brand gradient */}
                      <div className="mt-6 p-4 bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 rounded-xl border border-[#0D7E9C]/20 backdrop-blur-sm">
                        <div className="flex items-start">
                          <Sparkles className="w-5 h-5 text-[#0D7E9C] mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">{advantage.highlight}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Technology Section - Enhanced with New Design */}
      <section id="technology" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D7E9C]/3 via-transparent to-[#01847E]/3" />
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#0D7E9C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#01847E]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.technology.title}</h2>
            <h3 className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-medium">{t.technology.subtitle}</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.technology.systems.map((system, index) => {
            const Icon = system.icon;
            return <div key={index} className="group relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/15 to-[#01847E]/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  {/* Main card with unique design */}
                  <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 overflow-hidden border border-white/50">
                    
                    {/* Top decorative gradient */}
                    <div className="h-2 bg-gradient-to-r from-[#0D7E9C] via-[#01847E] to-[#0D7E9C]" />
                    
                    {/* System header with icon */}
                    <div className="relative p-8 pb-6">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                            <div className="relative p-4 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-2xl text-white">
                              <Icon className="w-8 h-8" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="text-3xl font-bold text-gray-900 mb-1">{system.name}</div>
                            <div className="text-lg font-semibold text-[#0D7E9C]">{system.title}</div>
                            <div className="text-sm text-gray-500 mt-1">{system.subtitle}</div>
                          </div>
                        </div>
                        
                        {/* System number */}
                        <div className="text-4xl font-bold text-gray-200 group-hover:text-[#0D7E9C]/20 transition-colors">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Product image placeholder */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/5 to-[#01847E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 mx-auto mb-3 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                              <Database className="w-10 h-10 text-[#0D7E9C]" />
                            </div>
                            <p className="text-sm text-gray-500 font-medium">零部件产品图</p>
                            <p className="text-xs text-gray-400 mt-1">{system.name} System</p>
                          </div>
                        </div>
                        {/* Corner decorations */}
                        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#0D7E9C]/20 rounded-tr-lg" />
                        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#01847E]/20 rounded-bl-lg" />
                      </div>

                      {/* Features list */}
                      <div className="space-y-3">
                        {system.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center group/feature">
                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-[#0D7E9C] to-[#01847E] mr-3 group-hover/feature:scale-150 transition-transform" />
                            <span className="text-gray-700 group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                          </div>)}
                      </div>
                    </div>

                    {/* Bottom highlight section */}
                    <div className="relative px-8 pb-8">
                      <div className="bg-gradient-to-r from-[#0D7E9C]/8 to-[#01847E]/8 rounded-2xl p-4 border border-[#0D7E9C]/10">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0D7E9C]/20 to-[#01847E]/20 flex items-center justify-center mr-3 mt-0.5">
                            <Sparkles className="w-3 h-3 text-[#0D7E9C]" />
                          </div>
                          <p className="text-sm font-medium text-gray-800 leading-relaxed">{system.highlight}</p>
                        </div>
                      </div>
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D7E9C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Specifications Section - Enhanced with New Design */}
      <section id="specifications" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D7E9C]/3 via-transparent to-[#01847E]/3" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#0D7E9C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#01847E]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.specifications.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.specifications.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.specifications.products.map((product, index) => {
            const isSelected = selectedProduct === product.name;
            return <div key={index} className={`group relative ${isSelected ? 'scale-105' : ''} transition-all duration-500`}>
                  {/* Selection glow effect */}
                  {isSelected && <div className="absolute -inset-1 bg-gradient-to-r from-[#0D7E9C]/30 to-[#01847E]/30 rounded-3xl blur-xl animate-pulse" />}
                  
                  {/* Main card */}
                  <div onClick={() => handleProductSelect(product.name)} className={`relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border-2 cursor-pointer ${isSelected ? 'border-[#0D7E9C]' : 'border-white/50'}`}>
                    
                    {/* Top gradient bar */}
                    <div className={`h-1 ${isSelected ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gradient-to-r from-gray-300 to-gray-400'} transition-all duration-300`} />
                    
                    {/* Product header */}
                    <div className="relative p-8 pb-6">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-sm text-gray-600 font-medium mb-3">{product.tagline}</p>
                        </div>
                        
                        {/* Product number */}
                        <div className={`text-3xl font-bold ${isSelected ? 'text-[#0D7E9C]/30' : 'text-gray-200'} transition-colors`}>
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* Product image placeholder */}
                      <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-6 overflow-hidden group">
                        <div className={`absolute inset-0 ${isSelected ? 'bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10' : 'bg-gradient-to-br from-gray-100/50 to-gray-200/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className={`w-24 h-24 mx-auto mb-4 ${isSelected ? 'bg-[#0D7E9C]/10' : 'bg-white/80'} backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border-2 ${isSelected ? 'border-[#0D7E9C]/20' : 'border-gray-200'}`}>
                              <Package className={`w-12 h-12 ${isSelected ? 'text-[#0D7E9C]' : 'text-gray-400'}`} />
                            </div>
                            <p className="text-sm text-gray-500 font-medium">{product.name}</p>
                            <p className="text-xs text-gray-400 mt-1">Product Image</p>
                          </div>
                        </div>
                        {/* Corner decorations */}
                        <div className={`absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 ${isSelected ? 'border-[#0D7E9C]/30' : 'border-gray-300'} rounded-tr-lg`} />
                        <div className={`absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 ${isSelected ? 'border-[#01847E]/30' : 'border-gray-300'} rounded-bl-lg`} />
                      </div>

                      {/* Specifications grid */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#0D7E9C]/5 border border-[#0D7E9C]/20' : 'bg-gray-50 border border-gray-200'}`}>
                          <div className="flex items-center mb-1">
                            <Wrench className={`w-4 h-4 mr-2 ${isSelected ? 'text-[#0D7E9C]' : 'text-gray-500'}`} />
                            <span className="text-xs text-gray-500">{currentLang === 'zh' ? '驱动系统' : 'Drive'}</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{product.specs.drive}</div>
                        </div>
                        
                        <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#0D7E9C]/5 border border-[#0D7E9C]/20' : 'bg-gray-50 border border-gray-200'}`}>
                          <div className="flex items-center mb-1">
                            <Battery className={`w-4 h-4 mr-2 ${isSelected ? 'text-[#0D7E9C]' : 'text-gray-500'}`} />
                            <span className="text-xs text-gray-500">{currentLang === 'zh' ? '电池容量' : 'Battery'}</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{product.specs.battery}</div>
                        </div>
                        
                        <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#0D7E9C]/5 border border-[#0D7E9C]/20' : 'bg-gray-50 border border-gray-200'}`}>
                          <div className="flex items-center mb-1">
                            <Gauge className={`w-4 h-4 mr-2 ${isSelected ? 'text-[#0D7E9C]' : 'text-gray-500'}`} />
                            <span className="text-xs text-gray-500">{currentLang === 'zh' ? '峰值扭矩' : 'Torque'}</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{product.specs.torque}</div>
                        </div>
                        
                        <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#0D7E9C]/5 border border-[#0D7E9C]/20' : 'bg-gray-50 border border-gray-200'}`}>
                          <div className="flex items-center mb-1">
                            <Power className={`w-4 h-4 mr-2 ${isSelected ? 'text-[#0D7E9C]' : 'text-gray-500'}`} />
                            <span className="text-xs text-gray-500">{currentLang === 'zh' ? '峰值功率' : 'Power'}</span>
                          </div>
                          <div className="text-sm font-semibold text-gray-900">{product.specs.power}</div>
                        </div>
                      </div>

                      {/* Features list */}
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full ${isSelected ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gray-300'} flex items-center justify-center mr-3`}>
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>)}
                      </div>

                      {/* System status */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${product.specs.vis === (currentLang === 'zh' ? '标配' : 'Standard') ? 'bg-green-500' : 'bg-gray-300'}`} />
                          <span className="text-xs text-gray-600">VIS: {product.specs.vis}</span>
                        </div>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${product.specs.edc === (currentLang === 'zh' ? '标配' : 'Standard') ? 'bg-green-500' : 'bg-gray-300'}`} />
                          <span className="text-xs text-gray-600">EDC: {product.specs.edc}</span>
                        </div>
                      </div>
                    </div>

                    {/* Selection indicator */}
                    {isSelected && <div className="absolute top-4 right-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      </div>}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D7E9C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>
                </div>;
          })}
          </div>

          {/* Selection summary */}
          {selectedProduct && <div className="mt-12 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 rounded-full px-6 py-3 border border-[#0D7E9C]/20">
                <Package className="w-5 h-5 text-[#0D7E9C] mr-2" />
                <span className="text-gray-800 font-medium">
                  {currentLang === 'zh' ? '已选择' : 'Selected'}: {selectedProduct}
                </span>
              </div>
            </div>}
        </div>
      </section>

      {/* Applications Section - Enhanced with Large Background Images */}
      <section id="applications" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D7E9C]/3 via-transparent to-[#01847E]/3" />
        <div className="absolute top-10 left-10 w-96 h-96 bg-[#0D7E9C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#01847E]/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.applications.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.applications.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.applications.scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return <div key={index} className="group relative h-[600px] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img src={scenario.backgroundImage} alt={scenario.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0D7E9C]/20 via-transparent to-[#01847E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between text-white">
                    {/* Top content */}
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl mr-4 border border-white/30">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold mb-1">{scenario.title}</h3>
                          <p className="text-lg text-white/80">{scenario.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                        {scenario.description}
                      </p>
                    </div>

                    {/* Middle stats */}
                    <div className="my-8">
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(scenario.stats).map(([key, value], statIndex) => <div key={statIndex} className="text-center">
                            <div className="text-3xl font-bold text-white mb-1">{value}</div>
                            <div className="text-sm text-white/70 capitalize">
                              {key === 'fuel' ? currentLang === 'zh' ? '燃料削减' : 'Fuel Reduction' : key === 'efficiency' ? currentLang === 'zh' ? '效率提升' : 'Efficiency' : key === 'range' ? currentLang === 'zh' ? '续航里程' : 'Range' : key === 'capacity' ? currentLang === 'zh' ? '电池容量' : 'Capacity' : key === 'flexibility' ? currentLang === 'zh' ? '灵活性' : 'Flexibility' : key === 'emission' ? currentLang === 'zh' ? '零排放' : 'Zero Emission' : key}
                            </div>
                          </div>)}
                      </div>
                    </div>

                    {/* Bottom benefits */}
                    <div>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {scenario.benefits.map((benefit, benefitIndex) => <div key={benefitIndex} className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                            <span className="text-sm font-medium text-white">{benefit}</span>
                          </div>)}
                      </div>
                      
                      {/* CTA Button */}
                      <button className="group/btn flex items-center px-6 py-3 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <span>{currentLang === 'zh' ? '了解更多' : 'Learn More'}</span>
                        <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-2xl" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }} />)}
                  </div>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.journey.title}</h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0D7E9C] to-[#01847E]"></div>
            {t.journey.milestones.map((milestone, index) => <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold text-[#0D7E9C] mb-2">{milestone.year}</div>
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0D7E9C] rounded-full border-4 border-white"></div>
              </div>)}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator currentLang={currentLang} />
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t.cta.subtitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t.cta.mission}</h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">{t.cta.goal}</h3>
            </div>
          </div>
          <Button className="bg-white text-[#0D7E9C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300" onClick={() => $w.utils.navigateTo({
          pageId: 'about',
          params: {}
        })}>
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>;
}