"use client";

import { useState } from 'react';
import { Plane, Clock, Globe, Shield, ArrowLeft, Languages, Menu, X, CheckCircle, Package } from 'lucide-react';
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
  pageTitle: { id: "Layanan Angkutan Udara", en: "Sky Freight Service" },
  pageSubtitle: { id: "Solusi pengiriman udara cepat dan efisien untuk kargo prioritas internasional", en: "Fast and efficient air shipping solutions for international priority cargo" },
  
  // Services
  servicesTitle: { id: "Layanan Angkutan Udara Kami", en: "Our Sky Freight Services" },
  
  expressAir: { id: "Express Air Freight", en: "Express Air Freight" },
  expressAirDesc: { id: "Pengiriman udara ekspres untuk kargo prioritas dengan waktu transit tercepat.", en: "Express air shipping for priority cargo with fastest transit time." },
  
  standardAir: { id: "Standard Air Freight", en: "Standard Air Freight" },
  standardAirDesc: { id: "Pengiriman udara standar dengan harga kompetitif untuk kargo reguler.", en: "Standard air shipping with competitive rates for regular cargo." },
  
  consolidation: { id: "Consolidation Service", en: "Consolidation Service" },
  consolidationDesc: { id: "Layanan konsolidasi untuk mengoptimalkan biaya pengiriman kargo kecil.", en: "Consolidation service to optimize shipping costs for small cargo." },
  
  charterFlight: { id: "Charter Flight", en: "Charter Flight" },
  charterFlightDesc: { id: "Layanan charter pesawat khusus untuk kargo dengan kebutuhan mendesak atau khusus.", en: "Special charter flight service for urgent or special cargo requirements." },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Sky Freight", en: "Sky Freight Service Excellence" },
  feature1: { id: "Jaringan Maskapai Global", en: "Global Airline Network" },
  feature1Desc: { id: "Kemitraan dengan maskapai terkemuka dunia", en: "Partnership with world leading airlines" },
  feature2: { id: "Transit Time Cepat", en: "Fast Transit Time" },
  feature2Desc: { id: "Waktu pengiriman tercepat ke seluruh dunia", en: "Fastest delivery time worldwide" },
  feature3: { id: "Real-time Tracking", en: "Real-time Tracking" },
  feature3Desc: { id: "Pemantauan status penerbangan dan kargo", en: "Flight and cargo status monitoring" },
  feature4: { id: "Temperature Control", en: "Temperature Control" },
  feature4Desc: { id: "Kontrol suhu untuk kargo sensitif", en: "Temperature control for sensitive cargo" },
  
  // Cargo Types
  cargoTitle: { id: "Jenis Kargo", en: "Cargo Types" },
  general: { id: "General Cargo", en: "General Cargo" },
  perishable: { id: "Perishable Goods", en: "Perishable Goods" },
  dangerous: { id: "Dangerous Goods", en: "Dangerous Goods" },
  valuable: { id: "Valuable Cargo", en: "Valuable Cargo" },
  pharmaceutical: { id: "Pharmaceutical", en: "Pharmaceutical" },
  electronics: { id: "Electronics", en: "Electronics" },
  
  // Destinations
  destinationsTitle: { id: "Destinasi Utama", en: "Main Destinations" },
  asia: { id: "Asia Pasifik", en: "Asia Pacific" },
  europe: { id: "Eropa", en: "Europe" },
  america: { id: "Amerika", en: "America" },
  middleEast: { id: "Timur Tengah", en: "Middle East" },
  africa: { id: "Afrika", en: "Africa" },
  oceania: { id: "Oseania", en: "Oceania" },
  
  // CTA
  getQuote: { id: "Minta Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function SkyFreightPage() {
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
      icon: Plane,
      title: t('expressAir'),
      description: t('expressAirDesc'),
      color: 'bg-red-500'
    },
    {
      icon: Clock,
      title: t('standardAir'),
      description: t('standardAirDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Package,
      title: t('consolidation'),
      description: t('consolidationDesc'),
      color: 'bg-green-500'
    },
    {
      icon: Plane,
      title: t('charterFlight'),
      description: t('charterFlightDesc'),
      color: 'bg-purple-500'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: t('feature1'),
      description: t('feature1Desc')
    },
    {
      icon: Clock,
      title: t('feature2'),
      description: t('feature2Desc')
    },
    {
      icon: CheckCircle,
      title: t('feature3'),
      description: t('feature3Desc')
    },
    {
      icon: Shield,
      title: t('feature4'),
      description: t('feature4Desc')
    }
  ];

  const cargoTypes = [
    t('general'),
    t('perishable'),
    t('dangerous'),
    t('valuable'),
    t('pharmaceutical'),
    t('electronics')
  ];

  const destinations = [
    t('asia'),
    t('europe'),
    t('america'),
    t('middleEast'),
    t('africa'),
    t('oceania')
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

      {/* Cargo Types & Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Cargo Types */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('cargoTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {cargoTypes.map((cargo, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Package className="text-purple-400 flex-shrink-0" size={20} />
                      <span className="text-white">{cargo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Destinations */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('destinationsTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {destinations.map((destination, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Plane className="text-purple-400 flex-shrink-0" size={20} />
                      <span className="text-white">{destination}</span>
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
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'id' ? 'Butuh Pengiriman Udara Cepat?' : 'Need Fast Air Shipping?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'id' 
                ? 'Hubungi kami untuk solusi pengiriman udara yang cepat dan terpercaya'
                : 'Contact us for fast and reliable air shipping solutions'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg">
                {t('getQuote')}
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg">
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}