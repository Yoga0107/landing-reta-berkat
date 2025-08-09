"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plane, Clock, Shield, CheckCircle, Phone, Mail, Languages, MapPin, Zap, Globe, Users } from 'lucide-react';
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
  skyFreightService: { id: "Layanan Angkutan Udara", en: "Sky Freight Service" },
  skySubtitle: { id: "Layanan pengiriman udara internasional yang cepat dan aman untuk ekspor impor", en: "Fast and secure international air shipping service for export import" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan angkutan udara internasional yang profesional dengan jaringan global untuk memenuhi kebutuhan ekspor impor yang urgent dan time-sensitive. Kami menyediakan layanan door-to-door dengan handling yang aman dan dokumentasi lengkap.", 
    en: "Professional international air freight service with global network to meet urgent and time-sensitive export import needs. We provide door-to-door service with safe handling and complete documentation." 
  },
  
  // Services
  exportAir: { id: "Export Air Freight", en: "Export Air Freight" },
  exportAirDesc: { 
    id: "Layanan pengiriman udara ekspor ke berbagai negara dengan dokumentasi lengkap dan proses custom clearance yang cepat.", 
    en: "Export air shipping service to various countries with complete documentation and fast custom clearance process." 
  },
  
  importAir: { id: "Import Air Freight", en: "Import Air Freight" },
  importAirDesc: { 
    id: "Layanan pengiriman udara impor dari berbagai negara dengan pengurusan bea cukai dan distribusi ke seluruh Indonesia.", 
    en: "Import air shipping service from various countries with customs clearance and distribution throughout Indonesia." 
  },
  
  expressService: { id: "Express Service", en: "Express Service" },
  expressServiceDesc: { 
    id: "Layanan pengiriman udara express untuk barang urgent dengan transit time 1-3 hari ke berbagai negara tujuan.", 
    en: "Express air shipping service for urgent goods with 1-3 days transit time to various destination countries." 
  },
  
  consolidation: { id: "Consolidation Service", en: "Consolidation Service" },
  consolidationDesc: { 
    id: "Layanan konsolidasi untuk pengiriman kargo kecil dengan menggabungkan beberapa shipment untuk efisiensi biaya.", 
    en: "Consolidation service for small cargo shipments by combining multiple shipments for cost efficiency." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Angkutan Udara Kami", en: "Our Sky Freight Service Excellence" },
  feature1: { id: "Global Network", en: "Global Network" },
  feature1Desc: { id: "Jaringan ke 200+ bandara internasional", en: "Network to 200+ international airports" },
  feature2: { id: "Fast Transit", en: "Fast Transit" },
  feature2Desc: { id: "Transit time 1-5 hari ke seluruh dunia", en: "1-5 days transit time worldwide" },
  feature3: { id: "Secure Handling", en: "Secure Handling" },
  feature3Desc: { id: "Penanganan aman sesuai standar IATA", en: "Safe handling according to IATA standards" },
  feature4: { id: "Complete Documentation", en: "Complete Documentation" },
  feature4Desc: { id: "Dokumentasi lengkap dan akurat", en: "Complete and accurate documentation" },
  
  // Cargo Types
  cargoTypesTitle: { id: "Jenis Kargo", en: "Cargo Types" },
  generalCargo: { id: "General Cargo", en: "General Cargo" },
  generalDesc: { id: "Kargo umum seperti dokumen, spare parts, elektronik", en: "General cargo such as documents, spare parts, electronics" },
  perishable: { id: "Perishable Goods", en: "Perishable Goods" },
  perishableDesc: { id: "Barang mudah rusak dengan temperature control", en: "Perishable goods with temperature control" },
  dangerous: { id: "Dangerous Goods", en: "Dangerous Goods" },
  dangerousDesc: { id: "Barang berbahaya dengan sertifikasi IATA DGR", en: "Dangerous goods with IATA DGR certification" },
  
  // Destinations
  destinationsTitle: { id: "Destinasi Utama", en: "Main Destinations" },
  dest1: { id: "Asia: Singapore, Hong Kong, Bangkok, Manila", en: "Asia: Singapore, Hong Kong, Bangkok, Manila" },
  dest2: { id: "Eropa: Amsterdam, Frankfurt, London, Paris", en: "Europe: Amsterdam, Frankfurt, London, Paris" },
  dest3: { id: "Amerika: Los Angeles, New York, Miami, Chicago", en: "America: Los Angeles, New York, Miami, Chicago" },
  dest4: { id: "Timur Tengah: Dubai, Doha, Kuwait, Riyadh", en: "Middle East: Dubai, Doha, Kuwait, Riyadh" },
  
  // Process
  processTitle: { id: "Proses Angkutan Udara", en: "Sky Freight Process" },
  step1: { id: "Booking & AWB", en: "Booking & AWB" },
  step1Desc: { id: "Pemesanan space dan penerbitan Air Waybill", en: "Space booking and Air Waybill issuance" },
  step2: { id: "Documentation", en: "Documentation" },
  step2Desc: { id: "Persiapan dokumen ekspor/impor", en: "Export/import document preparation" },
  step3: { id: "Flight & Transit", en: "Flight & Transit" },
  step3Desc: { id: "Penerbangan dan transit di hub", en: "Flight and transit at hub" },
  step4: { id: "Clearance & Delivery", en: "Clearance & Delivery" },
  step4Desc: { id: "Custom clearance dan pengantaran", en: "Custom clearance and delivery" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Siap Mengirim Kargo Udara Internasional?", en: "Ready to Ship International Air Cargo?" },
  ctaDescription: { id: "Hubungi tim sky freight kami untuk mendapatkan solusi pengiriman udara internasional yang cepat, aman, dan terpercaya untuk kebutuhan ekspor impor Anda.", en: "Contact our sky freight team to get fast, safe, and reliable international air shipping solutions for your export import needs." }
};

export default function SkyFreightPage() {
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

  const FloatingOrbs = ({ className = "" }: { className?: string }) => (
    <div className={`absolute ${className} pointer-events-none`}>
      <div className="relative">
        <div className="w-32 h-32 bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-300/30 to-orange-300/30 rounded-full blur-lg animate-bounce"></div>
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
        <FloatingOrbs className="top-32 left-1/4" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
                <ArrowLeft size={20} className="mr-2" />
                {t('backToServices')}
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Plane className="text-white" size={32} />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {t('skyFreightService')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('skySubtitle')}
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
                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sky Freight" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">International</p>
                    <p className="text-sm opacity-90">Express</p>
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
        <FloatingOrbs className="bottom-32 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: Plane, title: t('exportAir'), desc: t('exportAirDesc') },
              { icon: Globe, title: t('importAir'), desc: t('importAirDesc') },
              { icon: Zap, title: t('expressService'), desc: t('expressServiceDesc') },
              { icon: MapPin, title: t('consolidation'), desc: t('consolidationDesc') }
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
              { icon: Globe, title: t('feature1'), desc: t('feature1Desc') },
              { icon: Zap, title: t('feature2'), desc: t('feature2Desc') },
              { icon: Shield, title: t('feature3'), desc: t('feature3Desc') },
              { icon: CheckCircle, title: t('feature4'), desc: t('feature4Desc') }
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

      {/* Cargo Types */}
      <section className="py-20 relative">
        <FloatingOrbs className="top-20 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('cargoTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('generalCargo'), desc: t('generalDesc') },
              { title: t('perishable'), desc: t('perishableDesc') },
              { title: t('dangerous'), desc: t('dangerousDesc') }
            ].map((cargo, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{cargo.title}</h3>
                <p className="text-white/80">{cargo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 relative">
        <GeometricPattern className="bottom-10 left-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('destinationsTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              t('dest1'),
              t('dest2'),
              t('dest3'),
              t('dest4')
            ].map((dest, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-white font-medium">{dest}</span>
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