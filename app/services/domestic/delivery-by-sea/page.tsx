"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Ship, Anchor, Globe, CheckCircle, Phone, Mail, Languages, MapPin, Clock, Shield, Users } from 'lucide-react';
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
  deliveryBySea: { id: "Pengiriman Laut", en: "Delivery by Sea" },
  seaSubtitle: { id: "Solusi pengiriman laut yang ekonomis dan handal untuk seluruh kepulauan Indonesia", en: "Economical and reliable sea shipping solutions across Indonesian archipelago" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan pengiriman laut domestik yang ekonomis untuk kargo dalam jumlah besar ke seluruh kepulauan Indonesia. Cocok untuk pengiriman antar pulau dengan biaya yang efisien dan kapasitas besar.", 
    en: "Economical domestic sea shipping service for large cargo volumes across Indonesian archipelago. Perfect for inter-island shipping with cost-efficient rates and large capacity." 
  },
  
  // Services
  containerShipping: { id: "Container Shipping", en: "Container Shipping" },
  containerDesc: { 
    id: "Layanan pengiriman menggunakan container FCL (Full Container Load) dan LCL (Less Container Load) untuk berbagai jenis kargo.", 
    en: "Shipping service using FCL (Full Container Load) and LCL (Less Container Load) containers for various types of cargo." 
  },
  
  bulkCargo: { id: "Kargo Curah", en: "Bulk Cargo" },
  bulkDesc: { 
    id: "Pengiriman kargo curah untuk komoditas dalam jumlah besar seperti batu bara, biji-bijian, dan material konstruksi.", 
    en: "Bulk cargo shipping for large commodities such as coal, grains, and construction materials." 
  },
  
  breakBulk: { id: "Break Bulk Cargo", en: "Break Bulk Cargo" },
  breakBulkDesc: { 
    id: "Pengiriman barang-barang besar yang tidak dapat dikemas dalam container standar seperti mesin berat dan kendaraan.", 
    en: "Shipping of large items that cannot be packed in standard containers such as heavy machinery and vehicles." 
  },
  
  projectCargo: { id: "Project Cargo", en: "Project Cargo" },
  projectDesc: { 
    id: "Penanganan khusus untuk kargo proyek dengan dimensi dan berat yang tidak standar, memerlukan perencanaan khusus.", 
    en: "Special handling for project cargo with non-standard dimensions and weight, requiring special planning." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Laut Kami", en: "Our Sea Service Excellence" },
  feature1: { id: "Jaringan Pelabuhan Luas", en: "Wide Port Network" },
  feature1Desc: { id: "Akses ke 50+ pelabuhan di seluruh Indonesia", en: "Access to 50+ ports across Indonesia" },
  feature2: { id: "Vessel Tracking", en: "Vessel Tracking" },
  feature2Desc: { id: "Pemantauan real-time posisi kapal", en: "Real-time vessel position monitoring" },
  feature3: { id: "Competitive Rates", en: "Competitive Rates" },
  feature3Desc: { id: "Tarif yang kompetitif untuk semua rute", en: "Competitive rates for all routes" },
  feature4: { id: "Cargo Insurance", en: "Cargo Insurance" },
  feature4Desc: { id: "Asuransi penuh untuk keamanan kargo", en: "Full insurance for cargo security" },
  
  // Container Types
  containerTypesTitle: { id: "Jenis Container", en: "Container Types" },
  container20ft: { id: "Container 20 Feet", en: "20 Feet Container" },
  container20ftDesc: { id: "Kapasitas: 28 CBM, Berat maksimal: 21.6 ton", en: "Capacity: 28 CBM, Max weight: 21.6 tons" },
  container40ft: { id: "Container 40 Feet", en: "40 Feet Container" },
  container40ftDesc: { id: "Kapasitas: 58 CBM, Berat maksimal: 26.5 ton", en: "Capacity: 58 CBM, Max weight: 26.5 tons" },
  container40hc: { id: "Container 40 HC", en: "40 HC Container" },
  container40hcDesc: { id: "Kapasitas: 68 CBM, Berat maksimal: 26.5 ton", en: "Capacity: 68 CBM, Max weight: 26.5 tons" },
  
  // Routes
  routesTitle: { id: "Rute Utama", en: "Main Routes" },
  route1: { id: "Jakarta - Surabaya - Makassar", en: "Jakarta - Surabaya - Makassar" },
  route2: { id: "Jakarta - Semarang - Balikpapan", en: "Jakarta - Semarang - Balikpapan" },
  route3: { id: "Surabaya - Banjarmasin - Pontianak", en: "Surabaya - Banjarmasin - Pontianak" },
  route4: { id: "Jakarta - Medan - Batam", en: "Jakarta - Medan - Batam" },
  
  // Process
  processTitle: { id: "Proses Pengiriman Laut", en: "Sea Shipping Process" },
  step1: { id: "Booking & Dokumentasi", en: "Booking & Documentation" },
  step1Desc: { id: "Pemesanan ruang kapal dan persiapan dokumen", en: "Vessel space booking and document preparation" },
  step2: { id: "Stuffing Container", en: "Container Stuffing" },
  step2Desc: { id: "Pemuatan barang ke dalam container", en: "Loading goods into container" },
  step3: { id: "Pengiriman Laut", en: "Sea Transportation" },
  step3Desc: { id: "Transportasi laut ke pelabuhan tujuan", en: "Sea transportation to destination port" },
  step4: { id: "Stripping & Delivery", en: "Stripping & Delivery" },
  step4Desc: { id: "Pembongkaran dan pengantaran ke alamat tujuan", en: "Unloading and delivery to final destination" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Siap Mengirim Kargo Laut Anda?", en: "Ready to Ship Your Sea Cargo?" },
  ctaDescription: { id: "Hubungi tim ahli kami untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan pengiriman laut Anda.", en: "Contact our expert team for free consultation and best quotes for your sea shipping needs." }
};

export default function DeliveryBySeaPage() {
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
                  <Ship className="text-white" size={32} />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white">
                  {t('deliveryBySea')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('seaSubtitle')}
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
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
                >
                  <Mail className="mr-2" size={20} />
                  {t('contactUs')}
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sea Freight" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Anchor className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">50+ Pelabuhan</p>
                    <p className="text-sm opacity-90">Seluruh Indonesia</p>
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
              { icon: Ship, title: t('containerShipping'), desc: t('containerDesc') },
              { icon: Anchor, title: t('bulkCargo'), desc: t('bulkDesc') },
              { icon: Globe, title: t('breakBulk'), desc: t('breakBulkDesc') },
              { icon: MapPin, title: t('projectCargo'), desc: t('projectDesc') }
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

      {/* Container Types */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('containerTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('container20ft'), desc: t('container20ftDesc') },
              { title: t('container40ft'), desc: t('container40ftDesc') },
              { title: t('container40hc'), desc: t('container40hcDesc') }
            ].map((container, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ship className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{container.title}</h3>
                <p className="text-white/80">{container.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Routes */}
      <section className="py-20 relative">
        <GeometricPattern className="bottom-10 left-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('routesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              t('route1'),
              t('route2'),
              t('route3'),
              t('route4')
            ].map((route, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-white font-medium">{route}</span>
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
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
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