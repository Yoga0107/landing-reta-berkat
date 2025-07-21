"use client";

import { useState } from 'react';
import { Ship, Container, Globe, Shield, ArrowLeft, Languages, Menu, X, CheckCircle, Clock } from 'lucide-react';
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
  pageTitle: { id: "Layanan Angkutan Laut", en: "Ocean Freight Service" },
  pageSubtitle: { id: "Solusi pengiriman laut yang ekonomis dan handal untuk kargo internasional", en: "Economical and reliable ocean shipping solutions for international cargo" },
  
  // Services
  servicesTitle: { id: "Layanan Angkutan Laut Kami", en: "Our Ocean Freight Services" },
  
  fcl: { id: "Full Container Load (FCL)", en: "Full Container Load (FCL)" },
  fclDesc: { id: "Pengiriman dengan kontainer penuh untuk kargo dalam jumlah besar dengan keamanan maksimal.", en: "Full container shipping for large cargo volumes with maximum security." },
  
  lcl: { id: "Less Container Load (LCL)", en: "Less Container Load (LCL)" },
  lclDesc: { id: "Pengiriman kargo dalam jumlah kecil dengan berbagi kontainer untuk efisiensi biaya.", en: "Small cargo shipping with container sharing for cost efficiency." },
  
  breakBulk: { id: "Break Bulk Cargo", en: "Break Bulk Cargo" },
  breakBulkDesc: { id: "Pengiriman kargo khusus yang tidak dapat dikemas dalam kontainer standar.", en: "Special cargo shipping that cannot be packed in standard containers." },
  
  projectCargo: { id: "Project Cargo", en: "Project Cargo" },
  projectCargoDesc: { id: "Pengiriman kargo proyek dengan dimensi dan berat khusus yang memerlukan penanganan khusus.", en: "Project cargo shipping with special dimensions and weight requiring special handling." },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Angkutan Laut", en: "Ocean Freight Service Excellence" },
  feature1: { id: "Jaringan Pelabuhan Global", en: "Global Port Network" },
  feature1Desc: { id: "Akses ke lebih dari 500 pelabuhan di seluruh dunia", en: "Access to over 500 ports worldwide" },
  feature2: { id: "Biaya Kompetitif", en: "Competitive Rates" },
  feature2Desc: { id: "Tarif pengiriman yang kompetitif untuk semua rute", en: "Competitive shipping rates for all routes" },
  feature3: { id: "Tracking Real-time", en: "Real-time Tracking" },
  feature3Desc: { id: "Pemantauan posisi kapal dan status kargo secara real-time", en: "Real-time vessel position and cargo status monitoring" },
  feature4: { id: "Asuransi Marine", en: "Marine Insurance" },
  feature4Desc: { id: "Perlindungan asuransi laut untuk keamanan kargo", en: "Marine insurance protection for cargo security" },
  
  // Container Types
  containerTitle: { id: "Jenis Kontainer", en: "Container Types" },
  container20: { id: "20' Dry Container", en: "20' Dry Container" },
  container40: { id: "40' Dry Container", en: "40' Dry Container" },
  container40hc: { id: "40' High Cube", en: "40' High Cube" },
  containerReef: { id: "Reefer Container", en: "Reefer Container" },
  containerOpen: { id: "Open Top Container", en: "Open Top Container" },
  containerFlat: { id: "Flat Rack Container", en: "Flat Rack Container" },
  
  // Routes
  routesTitle: { id: "Rute Utama", en: "Main Routes" },
  route1: { id: "Asia - Eropa", en: "Asia - Europe" },
  route2: { id: "Asia - Amerika", en: "Asia - America" },
  route3: { id: "Asia - Australia", en: "Asia - Australia" },
  route4: { id: "Asia - Timur Tengah", en: "Asia - Middle East" },
  route5: { id: "Asia - Afrika", en: "Asia - Africa" },
  route6: { id: "Intra Asia", en: "Intra Asia" },
  
  // CTA
  getQuote: { id: "Minta Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function OceanFreightPage() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = (key: string): string => {
    return translations[key] ? translations[key][language] : key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const services = [
    {
      icon: Container,
      title: t('fcl'),
      description: t('fclDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Container,
      title: t('lcl'),
      description: t('lclDesc'),
      color: 'bg-green-500'
    },
    {
      icon: Ship,
      title: t('breakBulk'),
      description: t('breakBulkDesc'),
      color: 'bg-purple-500'
    },
    {
      icon: Ship,
      title: t('projectCargo'),
      description: t('projectCargoDesc'),
      color: 'bg-orange-500'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: t('feature1'),
      description: t('feature1Desc')
    },
    {
      icon: CheckCircle,
      title: t('feature2'),
      description: t('feature2Desc')
    },
    {
      icon: Clock,
      title: t('feature3'),
      description: t('feature3Desc')
    },
    {
      icon: Shield,
      title: t('feature4'),
      description: t('feature4Desc')
    }
  ];

  const containerTypes = [
    t('container20'),
    t('container40'),
    t('container40hc'),
    t('containerReef'),
    t('containerOpen'),
    t('containerFlat')
  ];

  const routes = [
    t('route1'),
    t('route2'),
    t('route3'),
    t('route4'),
    t('route5'),
    t('route6')
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

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">{t('servicesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                >
                  <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">{t('featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Container Types & Routes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Container Types */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('containerTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {containerTypes.map((container, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Container className="text-blue-400 flex-shrink-0" size={20} />
                      <span className="text-white">{container}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Routes */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('routesTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {routes.map((route, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Ship className="text-blue-400 flex-shrink-0" size={20} />
                      <span className="text-white">{route}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'id' ? 'Siap Mengirim Kargo Laut?' : 'Ready to Ship Ocean Cargo?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'id' 
                ? 'Dapatkan penawaran terbaik untuk pengiriman laut internasional Anda'
                : 'Get the best quote for your international ocean shipping'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
                {t('getQuote')}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}