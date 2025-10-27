// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';
// @ts-ignore;
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

export function Navigation({
  currentPage,
  onNavigate,
  onLanguageChange,
  currentLang
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleLogoClick = () => {
    // 跳转到home页面首屏
    onNavigate('home');
  };
  const handleNavClick = page => {
    if (page === 'ecosyn') {
      // 点击ECOSYN跳转到home首屏
      onNavigate('home');
    } else {
      onNavigate(page);
    }
  };
  const navItems = [{
    key: 'ecosyn',
    label: currentLang === 'zh' ? 'ECOSYN' : 'ECOSYN'
  }, {
    key: 'solutions',
    label: currentLang === 'zh' ? '解决方案' : 'Solutions',
    submenu: currentLang === 'zh' ? ['公路运输', '矿山场景', '港口场景'] : ['Highway', 'Mining', 'Port']
  }, {
    key: 'services',
    label: currentLang === 'zh' ? '服务' : 'Service'
  }, {
    key: 'about',
    label: currentLang === 'zh' ? '关于我们' : 'About'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={handleLogoClick} className="text-2xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200">
              HILLSEA
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <div key={item.key} className="relative group">
                <button onClick={() => handleNavClick(item.key)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${currentPage === item.key || item.key === 'ecosyn' && currentPage === 'home' ? 'text-white bg-gradient-to-r from-[#0D7E9C] to-[#01847E] shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>
                  {item.label}
                  {item.submenu && <ChevronDown className="inline-block ml-1 w-4 h-4" />}
                </button>
                {item.submenu && <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-xl border border-gray-100">
                    {item.submenu.map((subItem, index) => <button key={index} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#0D7E9C] hover:to-[#01847E] hover:text-white transition-all duration-200 first:rounded-t-lg last:rounded-b-lg">
                      {subItem}
                    </button>)}
                  </div>}
              </div>)}
          </div>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative">
              <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
                <Globe className="w-4 h-4" />
                <span className="font-medium">{currentLang === 'zh' ? '中文' : 'EN'}</span>
              </button>
              {isLangDropdownOpen && <div className="absolute top-full right-0 mt-2 w-24 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                  <button onClick={() => {
                onLanguageChange('zh');
                setIsLangDropdownOpen(false);
              }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#0D7E9C] hover:to-[#01847E] hover:text-white transition-all duration-200">
                    中文
                  </button>
                  <button onClick={() => {
                onLanguageChange('en');
                setIsLangDropdownOpen(false);
              }} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#0D7E9C] hover:to-[#01847E] hover:text-white transition-all duration-200">
                    EN
                  </button>
                </div>}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200">
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            {navItems.map(item => <button key={item.key} onClick={() => {
          handleNavClick(item.key);
          setIsMobileMenuOpen(false);
        }} className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 ${currentPage === item.key || item.key === 'ecosyn' && currentPage === 'home' ? 'text-white bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'text-gray-700 hover:bg-gray-50'}`}>
              {item.label}
            </button>)}
          </div>}
      </div>
    </nav>;
}