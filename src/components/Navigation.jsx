// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { Menu, X, Globe } from 'lucide-react';

export function Navigation({
  currentPage = 'home',
  onNavigate,
  onLanguageChange,
  currentLang = 'zh'
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 更新导航菜单配置
  const navigationItems = [{
    id: 'ecosyn',
    label: currentLang === 'zh' ? 'ECOSYN' : 'ECOSYN',
    href: '#hero'
  }, {
    id: 'solutions',
    label: currentLang === 'zh' ? '解决方案' : 'Solutions',
    href: '/solutions',
    isExternal: true
  }, {
    id: 'services',
    label: currentLang === 'zh' ? '服务' : 'Services',
    href: '/services',
    isExternal: true
  }, {
    id: 'about',
    label: currentLang === 'zh' ? '关于我们' : 'About Us',
    href: '/about',
    isExternal: true
  }];

  // 处理滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 处理导航点击
  const handleNavClick = item => {
    if (item.isExternal) {
      onNavigate?.(item.id);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  // 简化的语言切换处理
  const handleLanguageToggle = () => {
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    onLanguageChange?.(newLang);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
      {/* Desktop Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavClick(navigationItems[0])} className="text-2xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              HILLSEA
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map(item => <button key={item.id} onClick={() => handleNavClick(item)} className={`text-sm font-medium transition-colors duration-200 hover:text-[#0D7E9C] ${currentPage === item.id ? 'text-[#0D7E9C]' : 'text-gray-700'}`}>
                {item.label}
              </button>)}
          </div>

          {/* Desktop Language Toggle - 更简洁的设计 */}
          <div className="hidden md:flex items-center">
            <button onClick={handleLanguageToggle} className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 hover:from-[#0D7E9C]/20 hover:to-[#01847E]/20 text-[#0D7E9C] transition-all duration-300 border border-[#0D7E9C]/20 hover:border-[#0D7E9C]/40">
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[#0D7E9C] transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map(item => <button key={item.id} onClick={() => handleNavClick(item)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-[#0D7E9C] hover:bg-gray-50 ${currentPage === item.id ? 'text-[#0D7E9C] bg-gray-50' : 'text-gray-700'}`}>
                  {item.label}
                </button>)}
              
              {/* Mobile Language Toggle - 更简洁的设计 */}
              <div className="px-3 py-2 border-t border-gray-200 mt-2 pt-4">
                <button onClick={handleLanguageToggle} className="flex items-center space-x-3 w-full px-4 py-3 bg-gradient-to-r from-[#0D7E9C]/10 to-[#01847E]/10 hover:from-[#0D7E9C]/20 hover:to-[#01847E]/20 text-[#0D7E9C] rounded-lg transition-all duration-300 border border-[#0D7E9C]/20 hover:border-[#0D7E9C]/40">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">
                    {currentLang === 'zh' ? 'English' : '中文'}
                  </span>
                </button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
}