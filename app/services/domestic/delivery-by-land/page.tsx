"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, MapPin, Clock, Shield, CheckCircle, Phone, Mail, Languages, Navigation, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  backToServices: { id: "Kembali ke Layanan", en: "Back to Services" },
  
  // Page Title
  deliveryByLand: { id: "Pengiriman Darat", en: "Delivery by Land" },
  landSubtitle: { id: "Layanan pengiriman darat yang fleksibel dan terjangkau untuk distribusi barang di seluruh Indonesia", en: "Flexible and affordable land shipping service for goods distribution across Indonesia" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan pengiriman darat yang fleksibel dan terjangkau untuk distribusi barang di Pulau Jawa, Sumatera, dan Kalimantan. Solusi door-to-door yang efisien dengan berbagai pilihan armada.", 
    en: "Flexible and affordable land shipping service for goods distribution in Java, Sumatra, and Kalimantan. Efficient door-to-door solutions with various fleet options." 
  },
  
  // Services
  localDelivery: { id: "Local Delivery", en: "Local Delivery" },
  localDesc: { 
    id: "Layanan pengiriman lokal dalam kota dengan waktu pengiriman same-day untuk kebutuhan distribusi cepat.", 
    en: "Local delivery service within the city with same-day delivery time for fast distribution needs." 
  },
  
  interCity: { id: "Inter-City Delivery", en: "Inter-City Delivery" },
  interCityDesc: { 
    id: "Layanan pengiriman antar kota dengan jadwal reguler dan tracking real-time untuk memantau perjalanan kargo.", 
    en: "Inter-city delivery service with regular schedules and real-time tracking to monitor cargo journey." 
  },
  
  portTransfer: { id: "Port Transfer", en: "Port Transfer" },
  portTransferDesc: { 
    id: "Layanan transfer dari/ke pelabuhan untuk mendukung kegiatan ekspor-impor dengan handling yang profesional.", 
    en: "Transfer service from/to ports to support export-import activities with professional handling." 
  },
  
  warehouseDistribution: { id: "Warehouse Distribution", en: "Warehouse Distribution" },
  warehouseDesc: { 
    id: "Layanan distribusi dari gudang ke berbagai titik tujuan dengan sistem manajemen inventory yang terintegrasi.", 
    en: "Distribution service from warehouse to various destinations with integrated inventory management system." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Darat Kami", en: "Our Land Service Excellence" },
  feature1: { id: "Door-to-Door", en: "Door-to-Door" },
  feature1Desc: { id: "Layanan pickup dan delivery langsung ke alamat", en: "Direct pickup and delivery service to address" },
  feature2: { id: "GPS Tracking", en: "GPS Tracking" },
  feature2Desc: { id: "Pemantauan real-time posisi kendaraan", en: "Real-time vehicle position monitoring" },
  feature3: { id: "Flexible Schedule", en: "Flexible Schedule" },
  feature3Desc: { id: "Jadwal pengiriman yang dapat disesuaikan", en: "Customizable delivery schedule" },
  feature4: { id: "Full Insurance", en: "Full Insurance" },
  feature4Desc: { id: "Asuransi penuh untuk keamanan kargo", en: "Full insurance for cargo security" },
  
  // Fleet Types
  fleetTypesTitle: { id: "Jenis Armada", en: "Fleet Types" },
  cdd: { id: "CDD (Colt Diesel Double)", en: "CDD (Colt Diesel Double)" },
  cddDesc: { id: "Kapasitas: 5 ton, Cocok untuk kargo sedang", en: "Capacity: 5 tons, Suitable for medium cargo" },
  cde: { id: "CDE (Colt Diesel Engkel)", en: "CDE (Colt Diesel Engkel)" },
  cdeDesc: { id: "Kapasitas: 2.5 ton, Ideal untuk kargo kecil", en: "Capacity: 2.5 tons, Ideal for small cargo" },
  fuso: { id: "Fuso Truck", en: "Fuso Truck" },
  fusoDesc: { id: "Kapasitas: 8-16 ton, Untuk kargo besar", en: "Capacity: 8-16 tons, For large cargo" },
  
  // Coverage Areas
  coverageTitle: { id: "Area Jangkauan", en: "Coverage Areas" },
  java: { id: "Pulau Jawa", en: "Java Island" },
  javaDesc: { id: "Jakarta, Bandung, Semarang, Surabaya, Yogyakarta", en: "Jakarta, Bandung, Semarang, Surabaya, Yogyakarta" },
  sumatra: { id: "Pulau Sumatera", en: "Sumatra Island" },
  sumatraDesc: { id: "Medan, Pekanbaru, Palembang, Lampung", en: "Medan, Pekanbaru, Palembang, Lampung" },
  kalimantan: { id: "Pulau Kalimantan", en: "Kalimantan Island" },
  kalimantanDesc: { id: "Balikpapan, Banjarmasin, Pontianak, Samarinda", en: "Balikpapan, Banjarmasin, Pontianak, Samarinda" },
  
  // Process
  processTitle: { id: "Proses Pengiriman Darat", en: "Land Shipping Process" },
  step1: { id: "Order & Pickup", en: "Order & Pickup" },
  step1Desc: { id: "Pemesanan layanan dan penjemputan barang", en: "Service booking and goods pickup" },
  step2: { id: "Loading & Departure", en: "Loading & Departure" },
  step2Desc: { id: "Pemuatan barang dan keberangkatan kendaraan", en: "Goods loading and vehicle departure" },
  step3: { id: "Transit & Tracking", en: "Transit & Tracking" },
  step3Desc: { id: "Perjalanan dengan monitoring GPS real-time", en: "Journey with real-time GPS monitoring" },
  step4: { id: "Delivery & POD", en: "Delivery & POD" },
  step4Desc: { id: "Pengantaran dan bukti penerimaan", en: "Delivery and proof of delivery" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Siap Mengirim Kargo Darat Anda?", en: "Ready to Ship Your Land Cargo?" },
  ctaDescription: { id: "Hubungi tim ahli kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan pengiriman darat Anda.", en: "Contact our expert team for free consultation and best quotes for your land shipping needs." }
};

export default function DeliveryByLandPage() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const t = (key: string): string => {
    return translations[key] ? translations[key][language] : key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const GeometricPattern = ({ className = "" }: { className?: string }) => (
    <div className={`absolute ${className}`}>
      <div className="grid grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 border border-orange-400 ${
              i % 3 === 0 ? 'bg-orange-400/30' : ''
            } ${i % 5 === 0 ? 'w-6 h-6' : ''}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">bc</span>
              </div>
              <span className="text-white font-semibold text-lg">PT. Reta Berkat Jaya</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/services" className="text-white hover:text-orange-400 transition-colors">
                {t('backToServices')}
              </Link>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors bg-white/10 px-3 py-2 rounded-lg"
              >
                <Languages size={18} />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <GeometricPattern className="top-20 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
                <ArrowLeft size={20} className="mr-2" />
                {t('backToServices')}
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Truck className="text-white" size={32} />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  {t('deliveryByLand')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('landSubtitle')}
              </p>
              
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {t('heroDescription')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                  <Phone className="mr-2" size={20} />
                  {t('getQuote')}
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
                >
                  <Mail className="mr-2" size={20} />
                  {t('contactUs')}
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Land Freight" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Navigation className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">Door-to-Door</p>
                    <p className="text-sm opacity-90">Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <GeometricPattern className="bottom-20 left-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: MapPin, title: t('localDelivery'), desc: t('localDesc') },
              { icon: Truck, title: t('interCity'), desc: t('interCityDesc') },
              { icon: Navigation, title: t('portTransfer'), desc: t('portTransferDesc') },
              { icon: Users, title: t('warehouseDistribution'), desc: t('warehouseDesc') }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <service.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-white/90 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <GeometricPattern className="top-10 right-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('featuresTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: t('feature1'), desc: t('feature1Desc') },
              { icon: Navigation, title: t('feature2'), desc: t('feature2Desc') },
              { icon: Clock, title: t('feature3'), desc: t('feature3Desc') },
              { icon: Shield, title: t('feature4'), desc: t('feature4Desc') }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <feature.icon className="text-orange-400 mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Types */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('fleetTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('cdd'), desc: t('cddDesc') },
              { title: t('cde'), desc: t('cdeDesc') },
              { title: t('fuso'), desc: t('fusoDesc') }
            ].map((fleet, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{fleet.title}</h3>
                <p className="text-white/80">{fleet.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 relative">
        <GeometricPattern className="bottom-10 left-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('coverageTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('java'), desc: t('javaDesc') },
              { title: t('sumatra'), desc: t('sumatraDesc') },
              { title: t('kalimantan'), desc: t('kalimantanDesc') }
            ].map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-white/80">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('processTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: t('step1'), desc: t('step1Desc') },
              { step: "02", title: t('step2'), desc: t('step2Desc') },
              { step: "03", title: t('step3'), desc: t('step3Desc') },
              { step: "04", title: t('step4'), desc: t('step4Desc') }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-white/80 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <GeometricPattern className="top-20 right-20" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">{t('ctaTitle')}</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('ctaDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                <Phone className="mr-2" size={20} />
                {t('getQuote')}
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                <Mail className="mr-2" size={20} />
                {t('contactUs')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">bc</span>
              </div>
              <span className="text-white font-semibold">PT. Reta Berkat Jaya</span>
            </div>
            <p className="text-white/60">© 2024 PT. Reta Berkat Jaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}