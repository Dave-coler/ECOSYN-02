// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button, Input, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
// @ts-ignore;
import { Send, Mail, User, Building } from 'lucide-react';

import { useForm } from 'react-hook-form';
export function ContactForm({
  currentLang,
  onSubmit
}) {
  const form = useForm();
  const texts = {
    zh: {
      title: '联系我们',
      subtitle: '获取专业的新能源解决方案咨询',
      form: {
        name: '姓名',
        company: '公司名称',
        email: '邮箱',
        message: '留言',
        messagePlaceholder: '使用场景、运距、载重、油耗等',
        button: '提交'
      }
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Get professional new energy solution consultation',
      form: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        message: 'Message',
        messagePlaceholder: 'Use case, distance, payload, fuel consumption, etc.',
        button: 'Submit'
      }
    }
  };
  const t = texts[currentLang];
  return <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Mail className="w-12 h-12 text-[#0D7E9C]" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.title}</h3>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField control={form.control} name="name" render={({
            field
          }) => <FormItem>
                  <FormLabel className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    {t.form.name}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t.form.name} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />

            <FormField control={form.control} name="company" render={({
            field
          }) => <FormItem>
                  <FormLabel className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    {t.form.company}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t.form.company} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>} />
          </div>

          <FormField control={form.control} name="email" render={({
          field
        }) => <FormItem>
                <FormLabel className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  {t.form.email}
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t.form.email} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="message" render={({
          field
        }) => <FormItem>
                <FormLabel>{t.form.message}</FormLabel>
                <FormControl>
                  <textarea placeholder={t.form.messagePlaceholder} className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D7E9C] focus:border-transparent" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <Button type="submit" className="w-full bg-gradient-to-r from-[#0D7E9C] to-[#01847E] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300">
            {t.form.button}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </Form>
    </div>;
}