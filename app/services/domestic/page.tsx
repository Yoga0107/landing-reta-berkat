"use client";

import { useState } from 'react';
import { Ship, Plane, Truck, Package, ArrowLeft, Languages, Menu, X, CheckCircle, MapPin } from 'lucide-react';
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
  pageTitle: { id: "Layanan Domestik", en: "Domestic Services" },
  pageSubtitle: { id: "Solusi pengiriman dalam negeri yang terpercaya untuk seluruh nusantara", en: "Reliable domestic shipping solutions throughout the archipelago" },
  
  // Services
  servicesTitle: { id: "Layanan Domestik Kami", en: "Our Domestic Services" },
  
  domesticSea: { id: "Pengiriman Laut Domestik", en: "Domestic Sea Delivery" },
  domesticSeaDesc: { id: "Layanan pengiriman antar pulau yang aman dan terjangkau dengan jaringan pelabuhan di seluruh Indonesia.", en: "Safe and affordable inter-island shipping service with port network throughout Indonesia." },
  
  domesticAir: { id: "Pengiriman Udara Domestik", en: "Domestic Air Delivery" },
  domesticAirDesc: { id: "Pengiriman udara domestik yang cepat dan efisien ke seluruh kota di Indonesia.", en: "Fast and efficient domestic air delivery to all cities in Indonesia." },
  
  domesticLand: { id: "Pengiriman Darat Domestik", en: "Domestic Land Delivery" },
  domesticLandDesc: { id: "Distribusi darat ke seluruh pulau Jawa, Sumatera, dan Kalimantan dengan armada yang handal.", en: "Land distribution throughout Java, Sumatra, and Kalimantan with reliable fleet." },
  
  courierService: { id: "Layanan Kurir", en: "Courier Service" },
  courierServiceDesc: { id: "Layanan kurir ekspres untuk dokumen dan paket kecil dengan pengiriman same day dan next day.", en: "Express courier service for documents and small packages with same day and next day delivery." },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Domestik", en: "Domestic Service Excellence" },
  feature1: { id: "Jangkauan Nasional", en: "National Coverage" },
  feature1Desc: { id: "Melayani seluruh wilayah Indonesia", en: "Serving all regions of Indonesia" },
  feature2: { id: "Harga Kompetitif", en: "Competitive Rates" },
  feature2Desc: { id: "Tarif pengiriman yang terjangkau", en: "Affordable shipping rates" },
  feature3: { id: "Tracking Online", en: "Online Tracking" },
  feature3Desc: { id: "Lacak paket secara real-time", en: "Track packages in real-time" },
  feature4: { id: "Pickup Service", en: "Pickup Service" },
  feature4Desc: { id: "Layanan penjemputan di lokasi", en: "Pickup service at location" },
  
  // Coverage Areas
  coverageTitle: { id: "Area Jangkauan", en: "Coverage Areas" },
  java: { id: "Pulau Jawa", en: "Java Island" },
  sumatra: { id: "Pulau Sumatera", en: "Sumatra Island" },
  kalimantan: { id: "Pulau Kalimantan", en: "Kalimantan Island" },
  sulawesi: { id: "Pulau Sulawesi", en: "Sulawesi Island" },
  bali: { id: "Bali & Nusa Tenggara", en: "Bali & Nusa Tenggara" },
  papua: { id: "Papua & Maluku", en: "Papua & Maluku" },
  
  // Service Types
  serviceTypesTitle: { id: "Jenis Layanan", en: "Service Types" },
  regular: { id: "Regular Service", en: "Regular Service" },
  express: { id: "Express Service", en: "Express Service" },
  sameDay: { id: "Same Day Service", en: "Same Day Service" },
  nextDay: { id: "Next Day Service", en: "Next Day Service" },
  
  // CTA
  getQuote: { id: "Minta Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function DomesticPage() {
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
      icon: Ship,
      title: t('domesticSea'),
      description: t('domesticSeaDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Plane,
      title: t('domesticAir'),
      description: t('domesticAirDesc'),
      color: 'bg-purple-500'
    },
    {
      icon: Truck,
      title: t('domesticLand'),
      description: t('domesticLandDesc'),
      color: 'bg-orange-500'
    },
    {
      icon: Package,
      title: t('courierService'),
      description: t('courierServiceDesc'),
      color: 'bg-green-500'
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: t('feature1'),
      description: t('feature1Desc')
    },
    {
      icon: CheckCircle,
      title: t('feature2'),
      description: t('feature2Desc')
    },
    {
      icon: Package,
      title: t('feature3'),
      description: t('feature3Desc')
    },
    {
      icon: Truck,
      title: t('feature4'),
      description: t('feature4Desc')
    }
  ];

  const coverageAreas = [
    t('java'),
    t('sumatra'),
    t('kalimantan'),
    t('sulawesi'),
    t('bali'),
    t('papua')
  ];

  const serviceTypes = [
    t('regular'),
    t('express'),
    t('sameDay'),
    t('nextDay')
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

      {/* Coverage & Service Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Coverage Areas */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('coverageTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="text-indigo-400 flex-shrink-0" size={20} />
                      <span className="text-white">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Types */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('serviceTypesTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {serviceTypes.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Package className="text-indigo-400 flex-shrink-0" size={20} />
                      <span className="text-white">{service}</span>
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
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'id' ? 'Siap Mengirim ke Seluruh Indonesia?' : 'Ready to Ship Throughout Indonesia?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'id' 
                ? 'Hubungi kami untuk solusi pengiriman domestik yang terpercaya'
                : 'Contact us for reliable domestic shipping solutions'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 text-lg">
                {t('getQuote')}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 text-lg">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}