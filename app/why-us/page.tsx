"use client";

import { useState } from 'react';
import { Shield, Clock, Users, Award, Globe, CheckCircle, ArrowLeft, Languages, Menu, X, Star, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { id: "Beranda", en: "Home" },
  services: { id: "Layanan", en: "Services" },
  backToServices: { id: "Kembali ke Layanan", en: "Back to Services" },
  
  // Page Content
  pageTitle: { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },
  pageSubtitle: { id: "Keunggulan dan komitmen kami dalam melayani pelanggan dengan standar terbaik", en: "Our advantages and commitment to serving customers with the best standards" },
  
  // Main Reasons
  reasonsTitle: { id: "Alasan Memilih PT. Reta Berkat Jaya", en: "Reasons to Choose PT. Reta Berkat Jaya" },
  
  experience: { id: "Pengalaman Terpercaya", en: "Trusted Experience" },
  experienceDesc: { id: "Tim berpengalaman dengan keahlian mendalam di bidang logistik dan pengiriman internasional maupun domestik.", en: "Experienced team with deep expertise in logistics and international as well as domestic shipping." },
  
  network: { id: "Jaringan Global", en: "Global Network" },
  networkDesc: { id: "Kemitraan strategis dengan agen dan operator di seluruh dunia untuk memastikan layanan terbaik.", en: "Strategic partnerships with agents and operators worldwide to ensure the best service." },
  
  technology: { id: "Teknologi Modern", en: "Modern Technology" },
  technologyDesc: { id: "Sistem tracking dan monitoring canggih untuk transparansi dan keamanan pengiriman Anda.", en: "Advanced tracking and monitoring systems for transparency and security of your shipments." },
  
  service247: { id: "Layanan 24/7", en: "24/7 Service" },
  service247Desc: { id: "Tim customer service yang siap membantu Anda kapan saja, 24 jam sehari 7 hari seminggu.", en: "Customer service team ready to help you anytime, 24 hours a day 7 days a week." },
  
  competitive: { id: "Harga Kompetitif", en: "Competitive Pricing" },
  competitiveDesc: { id: "Tarif yang kompetitif tanpa mengorbankan kualitas layanan dan keamanan pengiriman.", en: "Competitive rates without compromising service quality and shipping security." },
  
  insurance: { id: "Asuransi Lengkap", en: "Complete Insurance" },
  insuranceDesc: { id: "Perlindungan asuransi menyeluruh untuk memberikan ketenangan pikiran dalam setiap pengiriman.", en: "Comprehensive insurance protection to provide peace of mind in every shipment." },
  
  // Statistics
  statsTitle: { id: "Pencapaian Kami", en: "Our Achievements" },
  stat1: { id: "Pengiriman Berhasil", en: "Successful Deliveries" },
  stat2: { id: "Kepuasan Pelanggan", en: "Customer Satisfaction" },
  stat3: { id: "Jaringan Kota", en: "City Network" },
  stat4: { id: "Pengalaman", en: "Years Experience" },
  
  // Values
  valuesTitle: { id: "Nilai-Nilai Kami", en: "Our Values" },
  integrity: { id: "Integritas", en: "Integrity" },
  integrityDesc: { id: "Berkomitmen pada kejujuran dan transparansi", en: "Committed to honesty and transparency" },
  excellence: { id: "Keunggulan", en: "Excellence" },
  excellenceDesc: { id: "Selalu memberikan yang terbaik", en: "Always delivering the best" },
  innovation: { id: "Inovasi", en: "Innovation" },
  innovationDesc: { id: "Terus berinovasi untuk kemajuan", en: "Continuously innovating for progress" },
  reliability: { id: "Keandalan", en: "Reliability" },
  reliabilityDesc: { id: "Dapat diandalkan dalam setiap situasi", en: "Reliable in every situation" },
  
  // CTA
  getQuote: { id: "Minta Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function WhyUsPage() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = (key: string): string => {
    return translations[key] ? translations[key][language] : key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const reasons = [
    {
      icon: Users,
      title: t('experience'),
      description: t('experienceDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: t('network'),
      description: t('networkDesc'),
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: t('technology'),
      description: t('technologyDesc'),
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: t('service247'),
      description: t('service247Desc'),
      color: 'bg-orange-500'
    },
    {
      icon: Award,
      title: t('competitive'),
      description: t('competitiveDesc'),
      color: 'bg-red-500'
    },
    {
      icon: CheckCircle,
      title: t('insurance'),
      description: t('insuranceDesc'),
      color: 'bg-indigo-500'
    }
  ];

  const stats = [
    { number: "10,000+", label: t('stat1') },
    { number: "99%", label: t('stat2') },
    { number: "500+", label: t('stat3') },
    { number: "2024", label: t('stat4') }
  ];

  const values = [
    {
      icon: Shield,
      title: t('integrity'),
      description: t('integrityDesc')
    },
    {
      icon: Star,
      title: t('excellence'),
      description: t('excellenceDesc')
    },
    {
      icon: Award,
      title: t('innovation'),
      description: t('innovationDesc')
    },
    {
      icon: CheckCircle,
      title: t('reliability'),
      description: t('reliabilityDesc')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">bc</span>
              </div>
              <span className="text-white font-semibold text-lg">PT. Reta Berkat Jaya</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-orange-400 transition-colors">
                {t('home')}
              </Link>
              <Link href="/services" className="text-orange-400">
                {t('services')}
              </Link>
              
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors bg-white/10 px-3 py-2 rounded-lg"
              >
                <Languages size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-blue-900/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link href="/" className="text-white hover:text-orange-400 block px-3 py-2">
                  {t('home')}
                </Link>
                <Link href="/services" className="text-orange-400 block px-3 py-2">
                  {t('services')}
                </Link>
                
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 text-white hover:text-orange-400 px-3 py-2 w-full"
                >
                  <Languages size={18} />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            {t('backToServices')}
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('pageTitle')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">{t('reasonsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${reason.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-white/80">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">{t('statsTitle')}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 rounded-2xl p-8 mb-4">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">{t('valuesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-blue-900" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-white/80">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'id' ? 'Bergabunglah dengan Ribuan Pelanggan Puas' : 'Join Thousands of Satisfied Customers'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'id' 
                ? 'Rasakan pengalaman layanan logistik terbaik bersama kami'
                : 'Experience the best logistics service with us'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                {t('getQuote')}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}