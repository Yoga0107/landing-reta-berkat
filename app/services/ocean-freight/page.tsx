"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Ship, Clock, Shield, CheckCircle, Phone, Mail, Languages, MapPin, Zap, Anchor, Users } from 'lucide-react';
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
  oceanFreightService: { id: "Layanan Angkutan Laut", en: "Ocean Freight Service" },
  oceanSubtitle: { id: "Solusi pengiriman laut yang ekonomis dan handal untuk kargo volume besar", en: "Economical and reliable ocean shipping solution for large volume cargo" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan angkutan laut yang komprehensif dengan jaringan global untuk memenuhi kebutuhan pengiriman kargo volume besar. Kami menyediakan layanan FCL dan LCL dengan jadwal sailing reguler ke berbagai pelabuhan dunia.", 
    en: "Comprehensive ocean freight service with global network to meet large volume cargo shipping needs. We provide FCL and LCL services with regular sailing schedules to various world ports." 
  },
  
  // Services
  fclService: { id: "FCL (Full Container Load)", en: "FCL (Full Container Load)" },
  fclDesc: { 
    id: "Layanan container penuh untuk kargo volume besar dengan berbagai ukuran container 20ft, 40ft, dan 40ft HC. Ideal untuk shipment besar dan barang yang memerlukan handling khusus.", 
    en: "Full container service for large volume cargo with various container sizes 20ft, 40ft, and 40ft HC. Ideal for large shipments and goods requiring special handling." 
  },
  
  lclService: { id: "LCL (Less Container Load)", en: "LCL (Less Container Load)" },
  lclDesc: { 
    id: "Layanan konsolidasi untuk kargo volume kecil yang digabungkan dengan shipment lain. Solusi cost-effective untuk pengiriman yang tidak memerlukan container penuh.", 
    en: "Consolidation service for small volume cargo combined with other shipments. Cost-effective solution for shipments that don't require full container." 
  },
  
  breakbulk: { id: "Breakbulk Cargo", en: "Breakbulk Cargo" },
  breakbulkDesc: { 
    id: "Layanan untuk kargo besar dan berat yang tidak dapat dimasukkan ke dalam container standar seperti mesin industri, kendaraan, dan project cargo.", 
    en: "Service for large and heavy cargo that cannot fit in standard containers such as industrial machinery, vehicles, and project cargo." 
  },
  
  roro: { id: "RoRo (Roll-on/Roll-off)", en: "RoRo (Roll-on/Roll-off)" },
  roroDesc: { 
    id: "Layanan khusus untuk kendaraan dan machinery yang dapat dikendarai langsung ke dalam kapal. Ideal untuk mobil, truk, dan alat berat.", 
    en: "Special service for vehicles and machinery that can be driven directly onto the ship. Ideal for cars, trucks, and heavy equipment." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Angkutan Laut Kami", en: "Our Ocean Freight Service Excellence" },
  feature1: { id: "Global Network", en: "Global Network" },
  feature1Desc: { id: "Akses ke 500+ pelabuhan dunia", en: "Access to 500+ world ports" },
  feature2: { id: "Regular Schedule", en: "Regular Schedule" },
  feature2Desc: { id: "Jadwal sailing tetap dan terprediksi", en: "Fixed and predictable sailing schedule" },
  feature3: { id: "Competitive Rate", en: "Competitive Rate" },
  feature3Desc: { id: "Tarif kompetitif untuk semua rute", en: "Competitive rates for all routes" },
  feature4: { id: "Cargo Insurance", en: "Cargo Insurance" },
  feature4Desc: { id: "Asuransi kargo untuk perlindungan maksimal", en: "Cargo insurance for maximum protection" },
  
  // Container Types
  containerTypesTitle: { id: "Jenis Container", en: "Container Types" },
  dryContainer: { id: "Dry Container", en: "Dry Container" },
  dryDesc: { id: "Container standar untuk general cargo", en: "Standard container for general cargo" },
  reefer: { id: "Reefer Container", en: "Reefer Container" },
  reeferDesc: { id: "Container berpendingin untuk barang mudah rusak", en: "Refrigerated container for perishable goods" },
  openTop: { id: "Open Top Container", en: "Open Top Container" },
  openTopDesc: { id: "Container terbuka untuk kargo tinggi", en: "Open container for high cargo" },
  
  // Routes
  routesTitle: { id: "Rute Utama", en: "Main Routes" },
  route1: { id: "Asia - Eropa: Singapore, Rotterdam, Hamburg", en: "Asia - Europe: Singapore, Rotterdam, Hamburg" },
  route2: { id: "Asia - Amerika: Los Angeles, New York, Long Beach", en: "Asia - America: Los Angeles, New York, Long Beach" },
  route3: { id: "Intra Asia: Jakarta, Bangkok, Manila, Ho Chi Minh", en: "Intra Asia: Jakarta, Bangkok, Manila, Ho Chi Minh" },
  route4: { id: "Timur Tengah: Jebel Ali, Dammam, Kuwait", en: "Middle East: Jebel Ali, Dammam, Kuwait" },
  
  // Process
  processTitle: { id: "Proses Angkutan Laut", en: "Ocean Freight Process" },
  step1: { id: "Booking & Space", en: "Booking & Space" },
  step1Desc: { id: "Reservasi space dan container", en: "Space and container reservation" },
  step2: { id: "Documentation", en: "Documentation" },
  step2Desc: { id: "Persiapan shipping documents", en: "Shipping documents preparation" },
  step3: { id: "Loading & Sailing", en: "Loading & Sailing" },
  step3Desc: { id: "Pemuatan dan keberangkatan kapal", en: "Loading and vessel departure" },
  step4: { id: "Discharge & Delivery", en: "Discharge & Delivery" },
  step4Desc: { id: "Bongkar muat dan pengantaran", en: "Discharge and delivery" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Siap Mengirim Kargo Laut Anda?", en: "Ready to Ship Your Ocean Cargo?" },
  ctaDescription: { id: "Hubungi tim ocean freight kami untuk mendapatkan penawaran terbaik dan solusi pengiriman laut yang sesuai dengan kebutuhan bisnis Anda.", en: "Contact our ocean freight team to get the best quotes and ocean shipping solutions that suit your business needs." }
};

export default function OceanFreightPage() {
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
                  <Ship className="text-white" size={32} />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {t('oceanFreightService')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('oceanSubtitle')}
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
                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Ocean Freight" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Anchor className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">Global</p>
                    <p className="text-sm opacity-90">Shipping</p>
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
              { icon: Ship, title: t('fclService'), desc: t('fclDesc') },
              { icon: Anchor, title: t('lclService'), desc: t('lclDesc') },
              { icon: MapPin, title: t('breakbulk'), desc: t('breakbulkDesc') },
              { icon: Zap, title: t('roro'), desc: t('roroDesc') }
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
              { icon: Zap, title: t('feature3'), desc: t('feature3Desc') },
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

      {/* Container Types */}
      <section className="py-20 relative">
        <FloatingOrbs className="top-20 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('containerTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('dryContainer'), desc: t('dryDesc') },
              { title: t('reefer'), desc: t('reeferDesc') },
              { title: t('openTop'), desc: t('openTopDesc') }
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

      {/* Routes */}
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