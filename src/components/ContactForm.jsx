// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { useToast, Button } from '@/components/ui';
// @ts-ignore;
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

export function ContactForm({
  currentLang = 'zh'
}) {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactData = {
    zh: {
      title: '联系我们',
      subtitle: '我们期待与您合作，共同推动新能源产业发展',
      form: {
        title: '发送消息',
        fields: {
          name: '姓名',
          email: '邮箱',
          company: '公司',
          message: '留言内容'
        },
        button: '发送消息'
      },
      info: {
        title: '联系方式',
        items: [{
          icon: 'Mail',
          label: '邮箱',
          value: 'sales@hill-sea.com'
        }, {
          icon: 'Phone',
          label: '电话',
          value: '+86 21 1234 5678'
        }, {
          icon: 'MapPin',
          label: '地址',
          value: '上海市浦东新区张江高科技园区'
        }]
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We look forward to collaborating with you to promote the development of the new energy industry',
      form: {
        title: 'Send Message',
        fields: {
          name: 'Name',
          email: 'Email',
          company: 'Company',
          message: 'Message'
        },
        button: 'Send Message'
      },
      info: {
        title: 'Contact Information',
        items: [{
          icon: 'Mail',
          label: 'Email',
          value: 'sales@hill-sea.com'
        }, {
          icon: 'Phone',
          label: 'Phone',
          value: '+86 21 1234 5678'
        }, {
          icon: 'MapPin',
          label: 'Address',
          value: 'Zhangjiang Hi-Tech Park, Pudong New Area, Shanghai'
        }]
      }
    }
  };
  const t = contactData[currentLang];
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // 构建邮件内容
    const subject = encodeURIComponent(`来自${formData.name || '网站访客'}的咨询 - ${formData.company || '个人'}`);
    const body = encodeURIComponent(`姓名：${formData.name || ''}\n邮箱：${formData.email || ''}\n公司：${formData.company || ''}\n\n留言内容：\n${formData.message || ''}`);

    // 创建mailto链接
    const mailtoLink = `mailto:sales@hill-sea.com?subject=${subject}&body=${body}`;

    // 打开邮件客户端
    window.location.href = mailtoLink;

    // 显示成功提示
    toast({
      title: currentLang === 'zh' ? '正在打开邮件客户端' : 'Opening email client',
      description: currentLang === 'zh' ? '请使用邮件客户端发送您的消息' : 'Please use your email client to send your message'
    });

    // 重置表单
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };
  const getIcon = iconName => {
    switch (iconName) {
      case 'Mail':
        return Mail;
      case 'Phone':
        return Phone;
      case 'MapPin':
        return MapPin;
      default:
        return Mail;
    }
  };
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.form.title}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  {t.form.fields.name}
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D7E9C] focus:border-transparent transition-all duration-300" placeholder={currentLang === 'zh' ? '请输入您的姓名' : 'Enter your name'} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  {t.form.fields.email}
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D7E9C] focus:border-transparent transition-all duration-300" placeholder={currentLang === 'zh' ? '请输入您的邮箱' : 'Enter your email'} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  {t.form.fields.company}
                </label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D7E9C] focus:border-transparent transition-all duration-300" placeholder={currentLang === 'zh' ? '请输入您的公司名称' : 'Enter your company name'} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  {t.form.fields.message}
                </label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0D7E9C] focus:border-transparent transition-all duration-300 resize-none" placeholder={currentLang === 'zh' ? '请输入您的留言内容' : 'Enter your message'} />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                {isSubmitting ? <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {currentLang === 'zh' ? '处理中...' : 'Processing...'}
                  </> : <>
                    <Send className="w-5 h-5 mr-2" />
                    {t.form.button}
                  </>}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#0D7E9C]/10 to-[#01847E]/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.info.title}</h3>
              
              <div className="space-y-6">
                {t.info.items.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#0D7E9C]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.label}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>;
              })}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {currentLang === 'zh' ? '工作时间' : 'Business Hours'}
              </h4>
              <p className="text-gray-600 mb-2">
                {currentLang === 'zh' ? '周一至周五：9:00 - 18:00' : 'Monday - Friday: 9:00 AM - 6:00 PM'}
              </p>
              <p className="text-gray-600">
                {currentLang === 'zh' ? '周六至周日：休息' : 'Saturday - Sunday: Closed'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}