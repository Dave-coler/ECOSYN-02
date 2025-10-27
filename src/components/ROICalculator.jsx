// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Button, useToast } from '@/components/ui';
// @ts-ignore;
import { ArrowRight, ArrowLeft, Truck, Fuel, Zap, MapPin, Calculator, Star, Check, Mail, ChevronRight, RotateCcw } from 'lucide-react';

export function ROICalculator({
  currentLang = 'zh'
}) {
  const {
    toast
  } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    annualMileage: 100000,
    fuelConsumption: 60,
    vehicleCount: 1,
    country: 'china',
    region: '',
    dieselPrice: 7.5,
    electricityPrice: 0.65
  });
  const [selectedProduct, setSelectedProduct] = useState('');
  const [cooperationType, setCooperationType] = useState('purchase');
  const [calculationResults, setCalculationResults] = useState(null);

  // 价格配置
  const priceConfig = {
    china: {
      currency: '元',
      dieselRange: [5, 12.5],
      dieselDefault: 7.5,
      electricityRange: [0, 1.4],
      electricityDefault: 0.65,
      products: {
        one: 1410000,
        pro: 2340000,
        max: 3340000
      }
    },
    usa: {
      currency: '$',
      dieselRange: [0.7, 1.75],
      dieselDefault: 1.0,
      electricityRange: [0, 0.2],
      electricityDefault: 0.08,
      products: {
        one: 370000,
        pro: 635000,
        max: 910000
      }
    },
    australia: {
      currency: 'A$',
      dieselRange: [1.0, 2.5],
      dieselDefault: 2.0,
      electricityRange: [0, 0.28],
      electricityDefault: 0.1,
      products: {
        one: 350000,
        pro: 570000,
        max: 800000
      }
    },
    canada: {
      currency: 'C$',
      dieselRange: [1.0, 2.5],
      dieselDefault: 1.7,
      electricityRange: [0, 0.28],
      electricityDefault: 0.08,
      products: {
        one: 350000,
        pro: 570000,
        max: 800000
      }
    }
  };

  // 地区数据
  const regionData = {
    china: {
      provinces: ['北京市', '上海市', '广东省', '江苏省', '浙江省', '山东省', '四川省', '湖北省'],
      cities: {
        '北京市': ['北京市'],
        '上海市': ['上海市'],
        '广东省': ['广州市', '深圳市', '东莞市', '佛山市'],
        '江苏省': ['南京市', '苏州市', '无锡市'],
        '浙江省': ['杭州市', '宁波市', '温州市']
      }
    },
    usa: {
      provinces: ['California', 'Texas', 'New York', 'Florida', 'Illinois'],
      cities: {
        'California': ['Los Angeles', 'San Francisco', 'San Diego'],
        'Texas': ['Houston', 'Dallas', 'Austin'],
        'New York': ['New York City', 'Buffalo', 'Rochester']
      }
    },
    australia: {
      provinces: ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'],
      cities: {
        'New South Wales': ['Sydney', 'Newcastle', 'Wollongong'],
        'Victoria': ['Melbourne', 'Geelong', 'Ballarat'],
        'Queensland': ['Brisbane', 'Gold Coast', 'Sunshine Coast']
      }
    },
    canada: {
      provinces: ['Ontario', 'Quebec', 'British Columbia', 'Alberta'],
      cities: {
        'Ontario': ['Toronto', 'Ottawa', 'Hamilton'],
        'Quebec': ['Montreal', 'Quebec City', 'Laval'],
        'British Columbia': ['Vancouver', 'Victoria', 'Surrey']
      }
    }
  };

  // 智能推荐逻辑
  const getRecommendedProduct = () => {
    const annualFuelConsumption = formData.annualMileage * formData.fuelConsumption / 100;
    if (annualFuelConsumption > 60000 && annualFuelConsumption <= 120000) {
      return 'one';
    } else if (annualFuelConsumption > 120000 && annualFuelConsumption <= 200000) {
      return 'pro';
    } else if (annualFuelConsumption > 200000 && annualFuelConsumption <= 300000) {
      return 'max';
    } else {
      return 'custom';
    }
  };

  // 计算投资回报
  const calculateROI = () => {
    const config = priceConfig[formData.country];
    const annualFuelCost = formData.annualMileage * formData.fuelConsumption / 100 * formData.dieselPrice * formData.vehicleCount;
    const annualElectricityCost = formData.annualMileage * formData.fuelConsumption / 100 * 4.5 * 0.8 * formData.electricityPrice * formData.vehicleCount;
    const annualSavings = annualFuelCost * 0.8 - annualElectricityCost;
    const co2Reduction = formData.annualMileage * formData.fuelConsumption / 100 * 2.68;
    let results = {
      annualFuelCost,
      annualElectricityCost,
      annualSavings,
      co2Reduction,
      currency: config.currency
    };
    if (cooperationType === 'purchase' && selectedProduct !== 'custom') {
      const totalInvestment = formData.vehicleCount * config.products[selectedProduct];
      const paybackPeriod = totalInvestment / annualSavings;
      results.totalInvestment = totalInvestment;
      results.paybackPeriod = paybackPeriod;
    } else if (cooperationType === 'lease') {
      results.minSavings = annualFuelCost * 0.05;
      results.maxSavings = annualFuelCost * 0.25;
    }
    return results;
  };

  // 处理下一步
  const handleNext = () => {
    if (currentStep === 1) {
      const recommended = getRecommendedProduct();
      setSelectedProduct(recommended);
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (selectedProduct === 'custom') {
        // 直接进入发邮件页面
        handleEmailContact();
      } else {
        const results = calculateROI();
        setCalculationResults(results);
        setCurrentStep(3);
      }
    }
  };

  // 处理上一步
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // 重新测算
  const handleRecalculate = () => {
    setCurrentStep(1);
    setSelectedProduct('');
    setCalculationResults(null);
  };

  // 处理国家变化
  const handleCountryChange = country => {
    const config = priceConfig[country];
    setFormData(prev => ({
      ...prev,
      country,
      dieselPrice: config.dieselDefault,
      electricityPrice: config.electricityDefault,
      region: ''
    }));
  };

  // 发送邮件
  const handleEmailContact = () => {
    const subject = encodeURIComponent('ECOSYN投资回报咨询');
    const body = encodeURIComponent(`
      运营参数：
      - 年行驶里程：${formData.annualMileage.toLocaleString()} km
      - 百公里油耗：${formData.fuelConsumption} L/100km
      - 车辆数量：${formData.vehicleCount}
      - 运行所在地：${formData.country}
      - 柴油价格：${formData.dieselPrice} ${priceConfig[formData.country].currency}/L
      - 平均电价：${formData.electricityPrice} ${priceConfig[formData.country].currency}/kWh
      
      选择产品：${selectedProduct === 'custom' ? '定制方案' : `EcoSyn ${selectedProduct.toUpperCase()}`}
      合作方式：${cooperationType === 'purchase' ? '购买' : '租赁'}
    `);
    window.location.href = `mailto:sales@hill-sea.com?subject=${subject}&body=${body}`;
  };

  // 更新表单数据
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const config = priceConfig[formData.country];
  const recommendedProduct = getRecommendedProduct();
  return <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#0D7E9C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#01847E]/10 rounded-full blur-3xl" />
        {[...Array(8)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-[#0D7E9C]/30 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`
      }} />)}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-4 sm:py-8">
        {/* Step Indicator */}
        <div className="flex justify-center mb-6 sm:mb-12">
          <div className="flex items-center space-x-2 sm:space-x-4">
            {[1, 2, 3].map(step => <React.Fragment key={step}>
                <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 text-xs sm:text-base ${currentStep >= step ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white shadow-lg' : 'bg-gray-200 text-gray-600'}`}>
                  {step}
                </div>
                {step < 3 && <div className={`w-12 sm:w-20 h-1 rounded-full transition-all duration-300 ${currentStep > step ? 'bg-gradient-to-r from-[#0D7E9C] to-[#01847E]' : 'bg-gray-300'}`} />}
              </React.Fragment>)}
          </div>
        </div>

        {/* Step 1: Basic Parameters */}
        {currentStep === 1 && <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/50">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                {currentLang === 'zh' ? '投资回报计算器' : 'ROI Calculator'}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {currentLang === 'zh' ? '请输入您的基本运营参数，我们将为您计算ECOSYN的投资回报' : 'Please enter your basic operating parameters, and we will calculate the ROI of ECOSYN for you'}
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Annual Mileage */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-base sm:text-lg font-semibold text-gray-800">
                  <span className="flex items-center">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0D7E9C]" />
                    {currentLang === 'zh' ? '年行驶里程' : 'Annual Mileage'}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent">
                    {formData.annualMileage.toLocaleString()} km
                  </span>
                </label>
                <div className="relative">
                  <input type="range" min="50000" max="300000" value={formData.annualMileage} step="10000" onChange={e => updateFormData('annualMileage', parseInt(e.target.value))} className="w-full h-2 sm:h-3 rounded-lg appearance-none cursor-pointer slider" style={{
                background: `linear-gradient(90deg, #0D7E9C 0%, #01847E ${(formData.annualMileage - 50000) / 250000 * 100}%, #e5e7eb ${(formData.annualMileage - 50000) / 250000 * 100}%, #e5e7eb 100%)`
              }} />
                  {/* Mobile-friendly value display */}
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                    <span>50,000 km</span>
                    <span>300,000 km</span>
                  </div>
                </div>
              </div>

              {/* Fuel Consumption */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-base sm:text-lg font-semibold text-gray-800">
                  <span className="flex items-center">
                    <Fuel className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0D7E9C]" />
                    {currentLang === 'zh' ? '百公里油耗' : 'Fuel Consumption'}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent">
                    {formData.fuelConsumption} L/100km
                  </span>
                </label>
                <div className="relative">
                  <input type="range" min="30" max="150" value={formData.fuelConsumption} step="5" onChange={e => updateFormData('fuelConsumption', parseInt(e.target.value))} className="w-full h-2 sm:h-3 rounded-lg appearance-none cursor-pointer slider" style={{
                background: `linear-gradient(90deg, #0D7E9C 0%, #01847E ${(formData.fuelConsumption - 30) / 120 * 100}%, #e5e7eb ${(formData.fuelConsumption - 30) / 120 * 100}%, #e5e7eb 100%)`
              }} />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                    <span>30 L/100km</span>
                    <span>150 L/100km</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Count */}
              <div className="space-y-3">
                <label className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0D7E9C]" />
                  {currentLang === 'zh' ? '车辆数量' : 'Vehicle Count'}
                </label>
                <input type="number" value={formData.vehicleCount} min="1" max="100" onChange={e => updateFormData('vehicleCount', parseInt(e.target.value))} className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-[#0D7E9C] focus:outline-none transition-colors text-sm sm:text-base" />
              </div>

              {/* Location */}
              <div className="space-y-3">
                <label className="text-base sm:text-lg font-semibold text-gray-800 flex items-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0D7E9C]" />
                  {currentLang === 'zh' ? '运行所在地' : 'Location'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <select value={formData.country} onChange={e => handleCountryChange(e.target.value)} className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-[#0D7E9C] focus:outline-none transition-colors text-sm sm:text-base">
                    <option value="china">{currentLang === 'zh' ? '中国' : 'China'}</option>
                    <option value="usa">{currentLang === 'zh' ? '美国' : 'USA'}</option>
                    <option value="australia">{currentLang === 'zh' ? '澳大利亚' : 'Australia'}</option>
                    <option value="canada">{currentLang === 'zh' ? '加拿大' : 'Canada'}</option>
                  </select>
                  <select value={formData.region} onChange={e => updateFormData('region', e.target.value)} className="px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-xl focus:border-[#0D7E9C] focus:outline-none transition-colors text-sm sm:text-base">
                    <option value="">{currentLang === 'zh' ? '选择地区' : 'Select Region'}</option>
                    {regionData[formData.country]?.provinces.map(province => <option key={province} value={province}>{province}</option>)}
                  </select>
                </div>
              </div>

              {/* Fuel Price */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-base sm:text-lg font-semibold text-gray-800">
                  <span className="flex items-center">
                    <Fuel className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0D7E9C]" />
                    {currentLang === 'zh' ? '柴油价格' : 'Diesel Price'}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent">
                    {formData.dieselPrice} {config.currency}/L
                  </span>
                </label>
                <div className="relative">
                  <input type="range" min={config.dieselRange[0]} max={config.dieselRange[1]} value={formData.dieselPrice} step="0.1" onChange={e => updateFormData('dieselPrice', parseFloat(e.target.value))} className="w-full h-2 sm:h-3 rounded-lg appearance-none cursor-pointer slider" style={{
                background: `linear-gradient(90deg, #0D7E9C 0%, #01847E ${(formData.dieselPrice - config.dieselRange[0]) / (config.dieselRange[1] - config.dieselRange[0]) * 100}%, #e5e7eb ${(formData.dieselPrice - config.dieselRange[0]) / (config.dieselRange[1] - config.dieselRange[0]) * 100}%, #e5e7eb 100%)`
              }} />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                    <span>{config.dieselRange[0]} {config.currency}/L</span>
                    <span>{config.dieselRange[1]} {config.currency}/L</span>
                  </div>
                </div>
              </div>

              {/* Electricity Price */}
              <div className="space-y-3">
                <label className="flex items-center justify-between text-base sm:text-lg font-semibold text-gray-800">
                  <span className="flex items-center">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0D7E9C]" />
                    {currentLang === 'zh' ? '平均电价' : 'Electricity Price'}
                  </span>
                  <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent">
                    {formData.electricityPrice} {config.currency}/kWh
                  </span>
                </label>
                <div className="relative">
                  <input type="range" min={config.electricityRange[0]} max={config.electricityRange[1]} value={formData.electricityPrice} step="0.05" onChange={e => updateFormData('electricityPrice', parseFloat(e.target.value))} className="w-full h-2 sm:h-3 rounded-lg appearance-none cursor-pointer slider" style={{
                background: `linear-gradient(90deg, #0D7E9C 0%, #01847E ${(formData.electricityPrice - config.electricityRange[0]) / (config.electricityRange[1] - config.electricityRange[0]) * 100}%, #e5e7eb ${(formData.electricityPrice - config.electricityRange[0]) / (config.electricityRange[1] - config.electricityRange[0]) * 100}%, #e5e7eb 100%)`
              }} />
                  <div className="flex justify-between text-xs sm:text-sm text-gray-500 mt-2">
                    <span>{config.electricityRange[0]} {config.currency}/kWh</span>
                    <span>{config.electricityRange[1]} {config.currency}/kWh</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 sm:mt-12">
              <Button onClick={handleNext} className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {currentLang === 'zh' ? '下一步' : 'Next'} <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>}

        {/* Step 2: Product Selection */}
        {currentStep === 2 && <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/50">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                {currentLang === 'zh' ? '选择ECOSYN产品' : 'Select ECOSYN Product'}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {currentLang === 'zh' ? '基于您的运营参数，我们为您推荐以下产品' : 'Based on your operating parameters, we recommend the following products'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* EcoSyn One */}
              <div className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${selectedProduct === 'one' ? 'ring-2 ring-[#0D7E9C]' : ''}`} onClick={() => setSelectedProduct('one')}>
                <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 h-full">
                  {recommendedProduct === 'one' && <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {currentLang === 'zh' ? '推荐' : 'Recommended'}
                      </span>
                    </div>}
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">EcoSyn One</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {currentLang === 'zh' ? '较低工作强度场景' : 'Low Work Intensity'}
                    </p>
                  </div>
                  {/* 移除价格显示 */}
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      {currentLang === 'zh' ? '双电驱桥' : 'Dual electric drive axle'}
                    </li>
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      800 kWh
                    </li>
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      80,000 Nm {currentLang === 'zh' ? '扭矩' : 'torque'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* EcoSyn Pro */}
              <div className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${selectedProduct === 'pro' ? 'ring-2 ring-[#0D7E9C]' : ''}`} onClick={() => setSelectedProduct('pro')}>
                <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 h-full">
                  {recommendedProduct === 'pro' && <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {currentLang === 'zh' ? '推荐' : 'Recommended'}
                      </span>
                    </div>}
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">EcoSyn Pro</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {currentLang === 'zh' ? '一般工作强度场景' : 'Moderate Work Intensity'}
                    </p>
                  </div>
                  {/* 移除价格显示 */}
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      {currentLang === 'zh' ? '双电驱桥' : 'Dual electric drive axle'}
                    </li>
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      1600 kWh
                    </li>
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      80,000 Nm {currentLang === 'zh' ? '扭矩' : 'torque'}
                    </li>
                  </ul>
                </div>
              </div>

              {/* EcoSyn Max */}
              <div className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${selectedProduct === 'max' ? 'ring-2 ring-[#0D7E9C]' : ''}`} onClick={() => setSelectedProduct('max')}>
                <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 h-full">
                  {recommendedProduct === 'max' && <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        {currentLang === 'zh' ? '推荐' : 'Recommended'}
                      </span>
                    </div>}
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">EcoSyn Max</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {currentLang === 'zh' ? '高工作强度场景' : 'High Work Intensity'}
                    </p>
                  </div>
                  {/* 移除价格显示 */}
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      {currentLang === 'zh' ? '三电驱桥' : 'Triple electric drive axle'}
                    </li>
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      2400 kWh
                    </li>
                    <li className="flex items-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                      120,000 Nm {currentLang === 'zh' ? '扭矩' : 'torque'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Custom Option */}
            {recommendedProduct === 'custom' && <div className="mb-6 sm:mb-8">
                <div className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${selectedProduct === 'custom' ? 'ring-2 ring-[#0D7E9C]' : ''}`} onClick={() => setSelectedProduct('custom')}>
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200">
                    <div className="text-center">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                        {currentLang === 'zh' ? '定制方案' : 'Custom Solution'}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 px-2">
                        {currentLang === 'zh' ? '基于您提供的参数我们不推荐您选择标准产品，我们可以提供定制化解决方案' : 'Based on your parameters, we do not recommend standard products. We can provide customized solutions'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>}

            {/* Cooperation Method */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                {currentLang === 'zh' ? '合作方式' : 'Cooperation Method'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <label className={`bg-white/90 backdrop-blur-xl rounded-xl p-3 sm:p-4 border-2 cursor-pointer transition-all duration-300 ${cooperationType === 'purchase' ? 'border-[#0D7E9C] bg-[#0D7E9C]/5' : 'border-gray-200 hover:border-[#0D7E9C]/50'}`}>
                  <input type="radio" name="cooperation" value="purchase" checked={cooperationType === 'purchase'} onChange={e => setCooperationType(e.target.value)} className="mr-3" />
                  <span className="font-semibold text-sm sm:text-base">
                    {currentLang === 'zh' ? '我要购买ECOSYN' : 'I want to purchase ECOSYN'}
                  </span>
                </label>
                <label className={`bg-white/90 backdrop-blur-xl rounded-xl p-3 sm:p-4 border-2 cursor-pointer transition-all duration-300 ${cooperationType === 'lease' ? 'border-[#0D7E9C] bg-[#0D7E9C]/5' : 'border-gray-200 hover:border-[#0D7E9C]/50'}`}>
                  <input type="radio" name="cooperation" value="lease" checked={cooperationType === 'lease'} onChange={e => setCooperationType(e.target.value)} className="mr-3" />
                  <span className="font-semibold text-sm sm:text-base">
                    {currentLang === 'zh' ? '我要租赁ECOSYN' : 'I want to lease ECOSYN'}
                  </span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Button variant="outline" onClick={handlePrevious} className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base">
                <ArrowLeft className="mr-2 w-4 h-4" />
                {currentLang === 'zh' ? '上一步' : 'Previous'}
              </Button>
              <Button onClick={handleNext} disabled={!selectedProduct} className="px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white rounded-xl font-semibold text-sm sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                {selectedProduct === 'custom' ? currentLang === 'zh' ? '获取定制化方案' : 'Get Custom Solution' : currentLang === 'zh' ? '分析投资回报' : 'Analyze ROI'} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>}

        {/* Step 3: Results */}
        {currentStep === 3 && calculationResults && <div className="bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl border border-white/50">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
                {currentLang === 'zh' ? '投资回报分析结果' : 'ROI Analysis Results'}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                {selectedProduct === 'custom' ? currentLang === 'zh' ? '基于您的定制化需求' : 'Based on your customization needs' : `${currentLang === 'zh' ? '基于您选择的' : 'Based on your selected'} EcoSyn ${selectedProduct.toUpperCase()} ${currentLang === 'zh' ? '和' : 'and'} ${cooperationType === 'purchase' ? currentLang === 'zh' ? '购买方式' : 'purchase method' : currentLang === 'zh' ? '租赁方式' : 'lease method'}`}
              </p>
            </div>

            {/* Results Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {cooperationType === 'purchase' && selectedProduct !== 'custom' ? <>
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent mb-2">
                      {(calculationResults.annualSavings / 10000).toFixed(1)}万元
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {currentLang === 'zh' ? '年节省总成本' : 'Annual Total Savings'}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent mb-2">
                      {calculationResults.paybackPeriod.toFixed(2)} {currentLang === 'zh' ? '年' : 'years'}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {currentLang === 'zh' ? '投资回收期' : 'Payback Period'}
                    </div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent mb-2">
                      {(calculationResults.totalInvestment / 10000).toFixed(0)}万元
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {currentLang === 'zh' ? '总投资' : 'Total Investment'}
                    </div>
                  </div>
                </> : <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200 sm:col-span-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent mb-2">
                    {(calculationResults.minSavings / 10000).toFixed(1)}万元 - {(calculationResults.maxSavings / 10000).toFixed(1)}万元
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 mb-2">
                    {currentLang === 'zh' ? '年节省成本范围' : 'Annual Savings Range'}
                  </div>
                  <div className="text-xs text-gray-500">
                    {currentLang === 'zh' ? '具体金额根据您实际使用场景信息可详细测算' : 'Specific amounts can be calculated in detail based on your actual usage scenarios'}
                  </div>
                </div>}
              <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-gray-200">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0D7E9C] to-[#01847E] bg-clip-text text-transparent mb-2">
                  {(calculationResults.co2Reduction / 1000).toFixed(2)} {currentLang === 'zh' ? '吨' : 'tons'}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {currentLang === 'zh' ? '年CO₂减排量' : 'Annual CO₂ Reduction'}
                </div>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="bg-white/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-lg border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {currentLang === 'zh' ? '详细计算' : 'Detailed Calculation'}
              </h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {currentLang === 'zh' ? '年燃油总成本：' : 'Annual Fuel Cost:'}
                  </span>
                  <span className="font-semibold">
                    {(calculationResults.annualFuelCost / 10000).toFixed(1)}万元
                  </span>
                </div>
                {cooperationType === 'purchase' && selectedProduct !== 'custom' && <div className="flex justify-between">
                    <span className="text-gray-600">
                      {currentLang === 'zh' ? '年充电总成本：' : 'Annual Electricity Cost:'}
                    </span>
                    <span className="font-semibold">
                      {(calculationResults.annualElectricityCost / 10000).toFixed(1)}万元
                    </span>
                  </div>}
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    {cooperationType === 'purchase' && selectedProduct !== 'custom' ? currentLang === 'zh' ? '年节省总成本：' : 'Annual Total Savings:' : currentLang === 'zh' ? '年节省成本范围：' : 'Annual Savings Range:'}
                  </span>
                  <span className="font-semibold text-green-600">
                    {cooperationType === 'lease' || selectedProduct === 'custom' ? `${(calculationResults.minSavings / 10000).toFixed(1)}万元 - ${(calculationResults.maxSavings / 10000).toFixed(1)}万元` : `${(calculationResults.annualSavings / 10000).toFixed(1)}万元`}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleRecalculate} variant="outline" className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm sm:text-base">
                <RotateCcw className="mr-2 w-4 h-4" />
                {currentLang === 'zh' ? '重新测算' : 'Recalculate'}
              </Button>
              <Button onClick={handleEmailContact} className="px-4 sm:px-8 py-2 sm:py-4 bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white rounded-xl font-semibold text-sm sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                {currentLang === 'zh' ? '获取完整规格书及定制化财务分析' : 'Get Full Specifications & Customized Financial Analysis'} <Mail className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>}

        {/* Disclaimer */}
        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 max-w-3xl mx-auto px-4">
          {currentLang === 'zh' ? '该测算采用特定工况数据模拟，难以避免实际场景不同、设备配置不同对测算结果带来的影响，不作为商务或最终报价依据，仅作为参考。' : 'This calculation uses specific operating condition data simulation. It is difficult to avoid the impact of different actual scenarios and equipment configurations on the calculation results. It is not used as a business or final quotation basis, only as a reference.'}
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #0D7E9C, #01847E);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #0D7E9C, #01847E);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: none;
        }
        
        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
    </div>;
}