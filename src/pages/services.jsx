// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';
// @ts-ignore;
import { Phone, Mail, Clock, Wrench, Users, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
export default function Services(props) {
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
        title: '全方位服务支持',
        subtitle: '从咨询到运维，我们提供全生命周期的专业服务'
      },
      services: {
        pre: {
          title: '售前服务',
          subtitle: '深度定制新能源方案',
          items: ['深度定制新能源方案', '技术可行性评估', '场景匹配分析', '方案设计优化']
        },
        during: {
          title: '售中服务',
          subtitle: '全程陪伴项目实施',
          items: ['咨询式销售', '金融服务支持', '安装与交付培训', '项目进度管理']
        },
        post: {
          title: '售后服务',
          subtitle: '365×24智能运维保障',
          items: ['365×24智能运维', '备件支持', '生命周期管理', '远程监控诊断'],
          commitment: {
            title: '服务承诺',
            items: ['4小时响应', '48小时完工', '72小时内备件到位']
          }
        }
      },
      cta: {
        title: '立即获取专业服务方案',
        subtitle: '我们的专业团队随时为您提供支持',
        button: '联系服务团队'
      }
    },
    en: {
      hero: {
        title: 'Comprehensive Service Support',
        subtitle: 'From consultation to operation, we provide professional services throughout the entire lifecycle'
      },
      services: {
        pre: {
          title: 'Pre-sale Services',
          subtitle: 'Deeply customized new energy solutions',
          items: ['Deeply customized new energy solutions', 'Technical feasibility assessment', 'Scenario matching analysis', 'Solution design optimization']
        },
        during: {
          title: 'During-sale Services',
          subtitle: 'Full accompaniment of project implementation',
          items: ['Consultative sales', 'Financing options', 'Installation and delivery training', 'Project progress management']
        },
        post: {
          title: 'After-sale Services',
          subtitle: '24/7 intelligent O&M support',
          items: ['24/7 intelligent O&M', 'Spare parts support', 'Lifecycle management', 'Remote monitoring and diagnosis'],
          commitment: {
            title: 'Service Commitments',
            items: ['4-hour response', '48-hour fix', 'Parts within 72 hours']
          }
        }
      },
      cta: {
        title: 'Get Professional Service Solutions Now',
        subtitle: 'Our professional team is ready to support you anytime',
        button: 'Contact Service Team'
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
  const handleContactService = () => {
    toast({
      title: currentLang === 'zh' ? '联系服务团队' : 'Contact Service Team',
      description: currentLang === 'zh' ? '我们的服务团队将尽快与您联系' : 'Our service team will contact you soon'
    });
  };
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <Navigation currentPage="services" onNavigate={handleNavigate} onLanguageChange={handleLanguageChange} currentLang={currentLang} />

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

      {/* Services Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Pre-sale Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <Wrench className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.services.pre.title}</h3>
                  <p className="text-gray-600">{t.services.pre.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {t.services.pre.items.map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>

            {/* During-sale Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.services.during.title}</h3>
                  <p className="text-gray-600">{t.services.during.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4">
                {t.services.during.items.map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
            </div>

            {/* After-sale Services */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-full mr-4">
                  <HeadphonesIcon className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{t.services.post.title}</h3>
                  <p className="text-gray-600">{t.services.post.subtitle}</p>
                </div>
              </div>
              <ul className="space-y-4 mb-6">
                {t.services.post.items.map((item, index) => <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>)}
              </ul>
              
              {/* Service Commitment */}
              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 mb-4">{t.services.post.commitment.title}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {t.services.post.commitment.items.map((item, index) => <div key={index} className="flex items-center bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 rounded-lg p-3">
                      <Clock className="w-5 h-5 text-[#0D7E9C] mr-3 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8">{t.cta.subtitle}</p>
          <Button onClick={handleContactService} className="bg-white text-[#0D7E9C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
            {t.cta.button}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>;
}