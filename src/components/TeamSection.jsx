// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { useToast } from '@/components/ui';
// @ts-ignore;
import { Users, Award, Target, Lightbulb, Mail, Phone, MapPin } from 'lucide-react';

export function TeamSection({
  currentLang = 'zh'
}) {
  const {
    toast
  } = useToast();
  const texts = {
    zh: {
      title: '核心团队',
      subtitle: '经验丰富的专业团队，致力于新能源技术创新',
      members: {
        leader: {
          name: '周道武',
          title: '创始人 & CEO',
          description: '拥有20年新能源行业经验，曾在多家知名企业担任技术总监，专注于电驱动系统和储能技术的研发与创新。',
          avatar: '',
          // 预留头像位置
          specialties: ['战略规划', '技术创新', '团队管理', '商业模式'],
          contact: {
            email: 'zhou.daowu@hillsea.com',
            phone: '+86 138 0000 0000',
            location: '深圳总部'
          }
        },
        others: [{
          name: '李明',
          title: 'CTO',
          description: '电驱动系统专家，拥有15年研发经验，主导多个大型新能源项目的技术实施。',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
          specialties: ['电驱动技术', '系统集成', '产品研发']
        }, {
          name: '王芳',
          title: 'CFO',
          description: '财务管理专家，擅长新能源项目的投资分析和风险控制，为公司发展提供坚实的财务支持。',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
          specialties: ['财务规划', '投资分析', '风险控制']
        }, {
          name: '张强',
          title: 'COO',
          description: '运营管理专家，拥有丰富的项目实施经验，确保公司各项业务高效运转。',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
          specialties: ['项目管理', '运营优化', '团队协作']
        }, {
          name: '刘洋',
          title: '研发总监',
          description: '储能技术专家，专注于高能量密度电池系统的研发，拥有多项技术专利。',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
          specialties: ['储能技术', '电池系统', '专利研发']
        }, {
          name: '陈静',
          title: '市场总监',
          description: '市场营销专家，深谙新能源市场发展趋势，为公司产品推广和市场拓展提供战略支持。',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
          specialties: ['市场策略', '品牌推广', '客户关系']
        }]
      }
    },
    en: {
      title: 'Core Team',
      subtitle: 'Experienced professional team dedicated to new energy technology innovation',
      members: {
        leader: {
          name: 'Zhou Daowu',
          title: 'Founder & CEO',
          description: 'With 20 years of experience in the new energy industry, has served as technical director in several well-known enterprises, focusing on R&D and innovation of electric drive systems and energy storage technologies.',
          avatar: '',
          // 预留头像位置
          specialties: ['Strategic Planning', 'Technical Innovation', 'Team Management', 'Business Model'],
          contact: {
            email: 'zhou.daowu@hillsea.com',
            phone: '+86 138 0000 0000',
            location: 'Shenzhen HQ'
          }
        },
        others: [{
          name: 'Li Ming',
          title: 'CTO',
          description: 'Electric drive system expert with 15 years of R&D experience, leading the technical implementation of multiple large-scale new energy projects.',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
          specialties: ['Electric Drive Technology', 'System Integration', 'Product R&D']
        }, {
          name: 'Wang Fang',
          title: 'CFO',
          description: 'Financial management expert specializing in investment analysis and risk control for new energy projects, providing solid financial support for company development.',
          avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
          specialties: ['Financial Planning', 'Investment Analysis', 'Risk Control']
        }, {
          name: 'Zhang Qiang',
          title: 'COO',
          description: 'Operations management expert with rich project implementation experience, ensuring efficient operation of all company businesses.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
          specialties: ['Project Management', 'Operations Optimization', 'Team Collaboration']
        }, {
          name: 'Liu Yang',
          title: 'R&D Director',
          description: 'Energy storage technology expert focusing on R&D of high-energy-density battery systems, holding multiple technical patents.',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
          specialties: ['Energy Storage Technology', 'Battery Systems', 'Patent R&D']
        }, {
          name: 'Chen Jing',
          title: 'Marketing Director',
          description: 'Marketing expert with deep understanding of new energy market trends, providing strategic support for product promotion and market expansion.',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
          specialties: ['Market Strategy', 'Brand Promotion', 'Customer Relations']
        }]
      }
    }
  };
  const t = texts[currentLang];
  const handleContactMember = (memberName, contactType) => {
    toast({
      title: currentLang === 'zh' ? '联系信息' : 'Contact Information',
      description: `${memberName} - ${contactType}`
    });
  };
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* 创始人单独展示 */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              {/* 发光效果 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0D7E9C]/20 to-[#01847E]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* 主要卡片 */}
              <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden border-2 border-[#0D7E9C]/20">
                
                {/* 顶部装饰条 */}
                <div className="h-2 bg-gradient-to-r from-[#0D7E9C] to-[#01847E]" />
                
                <div className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* 头像区域 */}
                    <div className="lg:col-span-1">
                      <div className="relative">
                        {/* 头像占位符 */}
                        <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10 border-2 border-dashed border-[#0D7E9C]/30 flex items-center justify-center">
                          <div className="text-center">
                            <Users className="w-16 h-16 text-[#0D7E9C]/50 mx-auto mb-2" />
                            <p className="text-sm text-[#0D7E9C]/50 font-medium">{currentLang === 'zh' ? '头像照片' : 'Photo'}</p>
                          </div>
                        </div>
                        
                        {/* 装饰圆环 */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* 信息区域 */}
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{t.members.leader.name}</h3>
                        <p className="text-xl text-[#0D7E9C] font-semibold mb-4">{t.members.leader.title}</p>
                        <p className="text-gray-700 leading-relaxed text-lg">{t.members.leader.description}</p>
                      </div>

                      {/* 专业领域 */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">{currentLang === 'zh' ? '专业领域' : 'Expertise'}</h4>
                        <div className="flex flex-wrap gap-2">
                          {t.members.leader.specialties.map((specialty, index) => <span key={index} className="px-4 py-2 bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 text-[#0D7E9C] rounded-full text-sm font-medium border border-[#0D7E9C]/20">
                              {specialty}
                            </span>)}
                        </div>
                      </div>

                      {/* 联系方式 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button onClick={() => handleContactMember(t.members.leader.name, 'Email')} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-[#0D7E9C]/5 transition-colors group">
                          <Mail className="w-5 h-5 text-[#0D7E9C] mr-3 group-hover:scale-110 transition-transform" />
                          <div className="text-left">
                            <p className="text-xs text-gray-500">{currentLang === 'zh' ? '邮箱' : 'Email'}</p>
                            <p className="text-sm text-gray-900 font-medium truncate">{t.members.leader.contact.email}</p>
                          </div>
                        </button>
                        
                        <button onClick={() => handleContactMember(t.members.leader.name, 'Phone')} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-[#0D7E9C]/5 transition-colors group">
                          <Phone className="w-5 h-5 text-[#0D7E9C] mr-3 group-hover:scale-110 transition-transform" />
                          <div className="text-left">
                            <p className="text-xs text-gray-500">{currentLang === 'zh' ? '电话' : 'Phone'}</p>
                            <p className="text-sm text-gray-900 font-medium">{t.members.leader.contact.phone}</p>
                          </div>
                        </button>
                        
                        <button onClick={() => handleContactMember(t.members.leader.name, 'Location')} className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-[#0D7E9C]/5 transition-colors group">
                          <MapPin className="w-5 h-5 text-[#0D7E9C] mr-3 group-hover:scale-110 transition-transform" />
                          <div className="text-left">
                            <p className="text-xs text-gray-500">{currentLang === 'zh' ? '地址' : 'Location'}</p>
                            <p className="text-sm text-gray-900 font-medium">{t.members.leader.contact.location}</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 其他团队成员 */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentLang === 'zh' ? '核心成员' : 'Core Members'}</h3>
            <p className="text-gray-600">{currentLang === 'zh' ? '专业的技术与管理团队' : 'Professional technical and management team'}</p>
          </div>

          {/* Desktop: 3列网格 */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {t.members.others.map((member, index) => <div key={index} className="group relative">
                {/* 悬停发光效果 */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* 成员卡片 */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-white/50">
                  <div className="p-6">
                    {/* 头像 */}
                    <div className="relative mb-4">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-white shadow-lg">
                        <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      
                      {/* 在线状态指示器 */}
                      <div className="absolute bottom-0 right-1/3 w-6 h-6 bg-green-500 border-3 border-white rounded-full" />
                    </div>

                    {/* 基本信息 */}
                    <div className="text-center mb-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-[#0D7E9C] font-semibold text-sm mb-3">{member.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                    </div>

                    {/* 专业领域 */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {member.specialties.map((specialty, specialtyIndex) => <span key={specialtyIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                            {specialty}
                          </span>)}
                      </div>
                    </div>

                    {/* 联系按钮 */}
                    <button onClick={() => handleContactMember(member.name, 'Contact')} className="w-full py-2 bg-gradient-to-r from-[#0D7E9C]/5 to-[#01847E]/5 text-[#0D7E9C] rounded-lg font-medium text-sm hover:from-[#0D7E9C]/10 hover:to-[#01847E]/10 transition-all duration-300 border border-[#0D7E9C]/20">
                      {currentLang === 'zh' ? '联系' : 'Contact'}
                    </button>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Mobile: 横向滚动 */}
          <div className="lg:hidden">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
              {t.members.others.map((member, index) => <div key={index} className="flex-none w-72 group relative">
                  {/* 悬停发光效果 */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* 成员卡片 */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-white/50">
                    <div className="p-6">
                      {/* 头像 */}
                      <div className="relative mb-4">
                        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-3 border-white shadow-lg">
                          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        
                        {/* 在线状态指示器 */}
                        <div className="absolute bottom-0 right-1/3 w-5 h-5 bg-green-500 border-3 border-white rounded-full" />
                      </div>

                      {/* 基本信息 */}
                      <div className="text-center mb-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                        <p className="text-[#0D7E9C] font-semibold text-sm mb-2">{member.title}</p>
                        <p className="text-gray-600 text-xs leading-relaxed">{member.description}</p>
                      </div>

                      {/* 专业领域 */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.specialties.map((specialty, specialtyIndex) => <span key={specialtyIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                              {specialty}
                            </span>)}
                        </div>
                      </div>

                      {/* 联系按钮 */}
                      <button onClick={() => handleContactMember(member.name, 'Contact')} className="w-full py-2 bg-gradient-to-r from-[#0D7E9C]/5 to-[#01847E]/5 text-[#0D7E9C] rounded-lg font-medium text-sm hover:from-[#0D7E9C]/10 hover:to-[#01847E]/10 transition-all duration-300 border border-[#0D7E9C]/20">
                        {currentLang === 'zh' ? '联系' : 'Contact'}
                      </button>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}