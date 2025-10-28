// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Users, Award, Target, Lightbulb } from 'lucide-react';

export function TeamSection({
  currentLang = 'zh'
}) {
  const teamData = {
    zh: {
      title: '核心团队',
      subtitle: '经验丰富的专业团队，致力于新能源技术创新',
      members: [{
        name: '周道武',
        position: '创始人 & CEO',
        description: '拥有10+年新能源行业经验，专注于电驱动系统和储能技术的研发与创新。曾担任航天氢能总工程师&产品总监、博雷顿 (01333.HK)联合创始人&技术副总裁等。',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        expertise: ['电驱动系统', '储能技术', '产品研发', '技术创新']
      }, {
        name: '李明',
        position: '联合创始人 & CTO',
        description: '专注于智能控制系统和AI算法研发，拥有丰富的工业自动化经验。曾在多家知名新能源企业担任技术负责人。',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        expertise: ['智能控制', 'AI算法', '工业自动化', '系统集成']
      }, {
        name: '王芳',
        position: '联合创始人 & COO',
        description: '在新能源项目运营和管理方面拥有丰富经验，擅长大型项目的落地实施和团队管理。',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
        expertise: ['项目管理', '运营管理', '团队建设', '业务拓展']
      }, {
        name: '张强',
        position: '研发总监',
        description: '专注于电池技术和储能系统研发，拥有多项技术专利和丰富的产品开发经验。',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        expertise: ['电池技术', '储能系统', '产品开发', '技术创新']
      }],
      values: {
        title: '团队价值观',
        items: [{
          icon: 'Target',
          title: '创新驱动',
          description: '持续技术创新，引领行业发展'
        }, {
          icon: 'Users',
          title: '团队协作',
          description: '跨部门协作，共同创造价值'
        }, {
          icon: 'Award',
          title: '品质至上',
          description: '严格质量标准，确保产品可靠性'
        }, {
          icon: 'Lightbulb',
          title: '客户导向',
          description: '以客户需求为中心，提供定制化解决方案'
        }]
      }
    },
    en: {
      title: 'Core Team',
      subtitle: 'Experienced professional team dedicated to new energy technology innovation',
      members: [{
        name: 'Zhou Daowu',
        position: 'Founder & CEO',
        description: 'With 10+ years of experience in the new energy industry, focusing on R&D and innovation of electric drive systems and energy storage technology. Previously served as Chief Engineer & Product Director at Aerospace Hydrogen Energy, Co-founder & Technical Vice President at Boretton (01333.HK).',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        expertise: ['Electric Drive Systems', 'Energy Storage Technology', 'Product R&D', 'Technical Innovation']
      }, {
        name: 'Li Ming',
        position: 'Co-founder & CTO',
        description: 'Focusing on intelligent control systems and AI algorithm R&D, with rich experience in industrial automation. Previously served as technical lead in several well-known new energy companies.',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        expertise: ['Intelligent Control', 'AI Algorithms', 'Industrial Automation', 'System Integration']
      }, {
        name: 'Wang Fang',
        position: 'Co-founder & COO',
        description: 'Rich experience in new energy project operation and management, skilled in large-scale project implementation and team management.',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
        expertise: ['Project Management', 'Operations Management', 'Team Building', 'Business Development']
      }, {
        name: 'Zhang Qiang',
        position: 'R&D Director',
        description: 'Focusing on battery technology and energy storage system R&D, with multiple technical patents and rich product development experience.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        expertise: ['Battery Technology', 'Energy Storage Systems', 'Product Development', 'Technical Innovation']
      }],
      values: {
        title: 'Team Values',
        items: [{
          icon: 'Target',
          title: 'Innovation Driven',
          description: 'Continuous technological innovation, leading industry development'
        }, {
          icon: 'Users',
          title: 'Team Collaboration',
          description: 'Cross-departmental collaboration, creating value together'
        }, {
          icon: 'Award',
          title: 'Quality First',
          description: 'Strict quality standards, ensuring product reliability'
        }, {
          icon: 'Lightbulb',
          title: 'Customer Oriented',
          description: 'Customer-centric approach, providing customized solutions'
        }]
      }
    }
  };
  const t = teamData[currentLang];
  const getIcon = iconName => {
    switch (iconName) {
      case 'Users':
        return Users;
      case 'Award':
        return Award;
      case 'Target':
        return Target;
      case 'Lightbulb':
        return Lightbulb;
      default:
        return Users;
    }
  };
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {t.members.map((member, index) => <div key={index} className="group">
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-[#0D7E9C] mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-[#0D7E9C]/10 text-[#0D7E9C] text-xs rounded-full font-medium">
                        {skill}
                      </span>)}
                  </div>
                </div>
              </div>
            </div>)}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t.values.title}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.items.map((value, index) => {
            const IconComponent = getIcon(value.icon);
            return <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-[#0D7E9C]/20 group-hover:to-[#01847E]/20 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-[#0D7E9C]" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>;
          })}
          </div>
        </div>
      </div>
    </section>;
}