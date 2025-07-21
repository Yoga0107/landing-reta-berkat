"use client";

import { useState } from 'react';
import { Truck, MapPin, Clock, Shield, ArrowLeft, Languages, Menu, X, CheckCircle, Package } from 'lucide-react';
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
  pageTitle: { id: "Layanan Angkutan Darat", en: "Trucking Service" },
  pageSubtitle: { id: "Solusi transportasi darat yang handal untuk distribusi lokal dan regional", en: "Reliable land transportation solutions for local and regional distribution" },
  
  // Services
  servicesTitle: { id: "Layanan Angkutan Darat Kami", en: "Our Trucking Services" },
  
  localDelivery: { id: "Pengiriman Lokal", en: "Local Delivery" },
  localDeliveryDesc: { id: "Layanan pengiriman dalam kota dan sekitarnya dengan armada yang beragam dan terpercaya.", en: "Delivery service within the city and surrounding areas with diverse and reliable fleet." },
  
  interCity: { id: "Antar Kota", en: "Inter-City" },
  interCityDesc: { id: "Pengiriman antar kota dengan rute tetap dan jadwal yang dapat diandalkan.", en: "Inter-city delivery with fixed routes and reliable schedules." },
  
  portTransfer: { id: "Transfer Pelabuhan", en: "Port Transfer" },
  portTransferDesc: { id: "Layanan transfer dari gudang ke pelabuhan dan sebaliknya untuk mendukung ekspor impor.", en: "Transfer service from warehouse to port and vice versa to support export import." },
  
  specialCargo: { id: "Kargo Khusus", en: "Special Cargo" },
  specialCargoDesc: { id: "Penanganan kargo dengan dimensi atau karakteristik khusus yang memerlukan peralatan khusus.", en: "Handling cargo with special dimensions or characteristics requiring special equipment." },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Trucking", en: "Trucking Service Excellence" },
  feature1: { id: "Armada Lengkap", en: "Complete Fleet" },
  feature1Desc: { id: "Berbagai jenis kendaraan sesuai kebutuhan", en: "Various types of vehicles according to needs" },
  feature2: { id: "Driver Berpengalaman", en: "Experienced Drivers" },
  feature2Desc: { id: "Sopir profesional dengan pengalaman bertahun-tahun", en: "Professional drivers with years of experience" },
  feature3: { id: "GPS Tracking", en: "GPS Tracking" },
  feature3Desc: { id: "Pemantauan real-time posisi kendaraan", en: "Real-time vehicle position monitoring" },
  feature4: { id: "Asuransi Kargo", en: "Cargo Insurance" },
  feature4Desc: { id: "Perlindungan asuransi untuk keamanan barang", en: "Insurance protection for cargo security" },
  
  // Fleet Types
  fleetTitle: { id: "Jenis Armada", en: "Fleet Types" },
  pickup: { id: "Pick Up", en: "Pick Up" },
  cdd: { id: "CDD (City Delivery Truck)", en: "CDD (City Delivery Truck)" },
  cde: { id: "CDE (Engkel Box)", en: "CDE (Engkel Box)" },
  trailer: { id: "Trailer", en: "Trailer" },
  container: { id: "Container Truck", en: "Container Truck" },
  lowbed: { id: "Low Bed Trailer", en: "Low Bed Trailer" },
  
  // Coverage Areas
  coverageTitle: { id: "Area Jangkauan", en: "Coverage Areas" },
  jabodetabek: { id: "Jabodetabek", en: "Jabodetabek" },
  westJava: { id: "Jawa Barat", en: "West Java" },
  centralJava: { id: "Jawa Tengah", en: "Central Java" },
  eastJava: { id: "Jawa Timur", en: "East Java" },
  sumatra: { id: "Sumatera", en: "Sumatra" },
  kalimantan: { id: "Kalimantan", en: "Kalimantan" },
  
  // CTA
  getQuote: { id: "Minta Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function TruckingPage() {
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
      icon: Truck,
      title: t('localDelivery'),
      description: t('localDeliveryDesc'),
      color: 'bg-orange-500'
    },
    {
      icon: MapPin,
      title: t('interCity'),
      description: t('interCityDesc'),
      color: 'bg-blue-500'
    },
    {
      icon: Package,
      title: t('portTransfer'),
      description: t('portTransferDesc'),
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: t('specialCargo'),
      description: t('specialCargoDesc'),
      color: 'bg-purple-500'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: t('feature1'),
      description: t('feature1Desc')
    },
    {
      icon: CheckCircle,
      title: t('feature2'),
      description: t('feature2Desc')
    },
    {
      icon: MapPin,
      title: t('feature3'),
      description: t('feature3Desc')
    },
    {
      icon: Shield,
      title: t('feature4'),
      description: t('feature4Desc')
    }
  ];

  const fleetTypes = [
    t('pickup'),
    t('cdd'),
    t('cde'),
    t('trailer'),
    t('container'),
    t('lowbed')
  ];

  const coverageAreas = [
    t('jabodetabek'),
    t('westJava'),
    t('centralJava'),
    t('eastJava'),
    t('sumatra'),
    t('kalimantan')
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

      {/* Fleet Types & Coverage */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Fleet Types */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('fleetTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {fleetTypes.map((fleet, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Truck className="text-orange-400 flex-shrink-0" size={20} />
                      <span className="text-white">{fleet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t('coverageTitle')}</h2>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  {coverageAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <MapPin className="text-orange-400 flex-shrink-0" size={20} />
                      <span className="text-white">{area}</span>
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
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'id' ? 'Butuh Layanan Trucking?' : 'Need Trucking Service?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'id' 
                ? 'Hubungi kami untuk solusi transportasi darat yang handal'
                : 'Contact us for reliable land transportation solutions'
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