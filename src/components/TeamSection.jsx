// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Users, Award } from 'lucide-react';

export function TeamSection({
  currentLang
}) {
  const texts = {
    zh: {
      title: '核心团队',
      members: [{
        name: '周道武',
        position: 'CEO & 创始人',
        bio: '上海交通大学机械与动力工程学院能源研究院硕士。10+年新能源行业经验，曾任航天氢能总工程师与博雷顿（01333.HK）联合创始人/技术副总裁。'
      }, {
        name: '杨林 教授',
        position: '首席科学家',
        bio: '上海交通大学汽车电子技术研究所所长，中国能源学会常务理事。长期从事车辆控制与智能化研究，主持多项国家级课题。'
      }, {
        name: '李刚',
        position: '首席顾问',
        bio: '15+年产业投融资经验，曾任远东宏信、平安国际融资租赁高管，精通新能源项目金融结构与资本运作。'
      }, {
        name: '董悦航',
        position: 'CTO',
        bio: '上海交通大学机械与动力工程学院博士，15+年整车与动力系统研发经验，曾任吉利汽车动力集成开发部新能源总工。'
      }, {
        name: '蓝天',
        position: 'CFO',
        bio: '澳洲迪肯大学硕士，10+年券商投行与私募基金经验，擅长融资与风险控制。'
      }]
    },
    en: {
      title: 'Core Team',
      members: [{
        name: 'Zhou Dave',
        position: 'CEO & Founder',
        bio: 'M.S. in Energy Engineering, Shanghai Jiao Tong University. 10+ years in new energy; former Chief Engineer at Aerospace Hydrogen Energy and Co-Founder & VP Technology at Breton（01333.HK).'
      }, {
        name: 'Prof. Yang Lin',
        position: 'Chief Scientist',
        bio: 'Director of the Automotive Electronics Institute at SJTU and Executive Council Member of the China Energy Society. Longstanding researcher in vehicle control and intelligence; PI on multiple national projects.'
      }, {
        name: 'Li Gang',
        position: 'Chief Advisor',
        bio: '15+ years in industrial investment and financing; former executive at Far East Horizon and Ping An International Leasing. Expert in project finance and capital strategies for new energy.'
      }, {
        name: 'Dong Yuehang',
        position: 'CTO',
        bio: 'Ph.D. in Mechanical & Power Engineering from SJTU. 15+ years in vehicle and powertrain R&D; former Chief Engineer of New Energy Power Integration at Geely.'
      }, {
        name: 'Lan Tian',
        position: 'CFO',
        bio: 'M.S. from Deakin University, Australia. 10+ years in investment banking and private equity; specializes in financing and risk management.'
      }]
    }
  };
  const t = texts[currentLang];
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-[#0D7E9C]" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.members.map((member, index) => <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] rounded-full mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-[#0D7E9C] font-medium">{member.position}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>)}
        </div>
      </div>
    </section>;
}