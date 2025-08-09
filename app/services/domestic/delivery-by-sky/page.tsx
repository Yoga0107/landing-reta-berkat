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
  deliveryBySky: { id: "Pengiriman Udara", en: "Delivery by Sky" },
  skySubtitle: { id: "Layanan pengiriman udara cepat dan aman untuk kargo prioritas ke seluruh Indonesia", en: "Fast and secure air shipping service for priority cargo across Indonesia" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan pengiriman udara domestik yang cepat dan aman untuk kargo prioritas ke seluruh kota besar di Indonesia. Ideal untuk barang urgent, bernilai tinggi, dan memerlukan penanganan khusus.", 
    en: "Fast and secure domestic air shipping service for priority cargo to major cities across Indonesia. Ideal for urgent, high-value goods requiring special handling." 
  },
  
  // Services
  expressAir: { id: "Express Air", en: "Express Air" },
  expressDesc: { 
    id: "Layanan pengiriman udara tercepat dengan same-day dan next-day delivery untuk barang urgent dan time-sensitive.", 
    en: "Fastest air shipping service with same-day and next-day delivery for urgent and time-sensitive goods." 
  },
  
  standardAir: { id: "Standard Air", en: "Standard Air" },
  standardDesc: { 
    id: "Layanan pengiriman udara reguler dengan waktu transit 1-3 hari untuk kargo umum dengan harga yang kompetitif.", 
    en: "Regular air shipping service with 1-3 days transit time for general cargo at competitive rates." 
  },
  
  consolidation: { id: "Consolidation Service", en: "Consolidation Service" },
  consolidationDesc: { 
    id: "Layanan konsolidasi untuk pengiriman kargo kecil dengan menggabungkan beberapa shipment untuk efisiensi biaya.", 
    en: "Consolidation service for small cargo shipments by combining multiple shipments for cost efficiency." 
  },
  
  charterFlight: { id: "Charter Flight", en: "Charter Flight" },
  charterDesc: { 
    id: "Layanan charter pesawat khusus untuk kargo besar, project cargo, atau pengiriman dengan jadwal khusus.", 
    en: "Special aircraft charter service for large cargo, project cargo, or shipments with special schedules." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Udara Kami", en: "Our Air Service Excellence" },
  feature1: { id: "Coverage Luas", en: "Wide Coverage" },
  feature1Desc: { id: "Jangkauan ke 50+ kota besar di Indonesia", en: "Coverage to 50+ major cities in Indonesia" },
  feature2: { id: "Real-time Tracking", en: "Real-time Tracking" },
  feature2Desc: { id: "Pemantauan real-time status penerbangan", en: "Real-time flight status monitoring" },
  feature3: { id: "Temperature Control", en: "Temperature Control" },
  feature3Desc: { id: "Fasilitas kontrol suhu untuk kargo sensitif", en: "Temperature control facility for sensitive cargo" },
  feature4: { id: "24/7 Support", en: "24/7 Support" },
  feature4Desc: { id: "Tim support siap membantu 24 jam", en: "Support team ready to assist 24 hours" },
  
  // Cargo Types
  cargoTypesTitle: { id: "Jenis Kargo", en: "Cargo Types" },
  generalCargo: { id: "General Cargo", en: "General Cargo" },
  generalDesc: { id: "Kargo umum seperti dokumen, spare parts, elektronik", en: "General cargo such as documents, spare parts, electronics" },
  perishable: { id: "Perishable Goods", en: "Perishable Goods" },
  perishableDesc: { id: "Barang mudah rusak seperti makanan segar, obat-obatan", en: "Perishable goods such as fresh food, medicines" },
  dangerous: { id: "Dangerous Goods", en: "Dangerous Goods" },
  dangerousDesc: { id: "Barang berbahaya dengan sertifikasi IATA DGR", en: "Dangerous goods with IATA DGR certification" },
  
  // Destinations
  destinationsTitle: { id: "Destinasi Utama", en: "Main Destinations" },
  dest1: { id: "Jakarta - Surabaya - Medan", en: "Jakarta - Surabaya - Medan" },
  dest2: { id: "Jakarta - Makassar - Balikpapan", en: "Jakarta - Makassar - Balikpapan" },
  dest3: { id: "Jakarta - Denpasar - Manado", en: "Jakarta - Denpasar - Manado" },
  dest4: { id: "Surabaya - Pontianak - Pekanbaru", en: "Surabaya - Pontianak - Pekanbaru" },
  
  // Process
  processTitle: { id: "Proses Pengiriman Udara", en: "Air Shipping Process" },
  step1: { id: "Booking & AWB", en: "Booking & AWB" },
  step1Desc: { id: "Pemesanan space dan penerbitan Air Waybill", en: "Space booking and Air Waybill issuance" },
  step2: { id: "Cargo Acceptance", en: "Cargo Acceptance" },
  step2Desc: { id: "Penerimaan dan pemeriksaan kargo di warehouse", en: "Cargo acceptance and inspection at warehouse" },
  step3: { id: "Flight Departure", en: "Flight Departure" },
  step3Desc: { id: "Pemuatan ke pesawat dan keberangkatan", en: "Loading to aircraft and departure" },
  step4: { id: "Delivery", en: "Delivery" },
  step4Desc: { id: "Pengantaran ke alamat tujuan", en: "Delivery to final destination" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Siap Mengirim Kargo Udara Anda?", en: "Ready to Ship Your Air Cargo?" },
  ctaDescription: { id: "Hubungi tim ahli kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan pengiriman udara Anda.", en: "Contact our expert team for free consultation and best quotes for your air shipping needs." }
};

export default function DeliveryBySkyPage() {
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
                  <Plane className="text-white" size={32} />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  {t('deliveryBySky')}
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
                alt="Air Freight" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Zap className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">Same Day</p>
                    <p className="text-sm opacity-90">Delivery</p>
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
              { icon: Zap, title: t('expressAir'), desc: t('expressDesc') },
              { icon: Plane, title: t('standardAir'), desc: t('standardDesc') },
              { icon: Globe, title: t('consolidation'), desc: t('consolidationDesc') },
              { icon: MapPin, title: t('charterFlight'), desc: t('charterDesc') }
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
              { icon: Clock, title: t('feature2'), desc: t('feature2Desc') },
              { icon: Shield, title: t('feature3'), desc: t('feature3Desc') },
              { icon: Users, title: t('feature4'), desc: t('feature4Desc') }
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

      {/* Main Destinations */}
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