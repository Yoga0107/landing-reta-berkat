"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Clock, Shield, CheckCircle, Phone, Mail, Languages, MapPin, Zap, Ship, Users } from 'lucide-react';
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
  exportImportService: { id: "Layanan Ekspor & Impor", en: "Export & Import Service" },
  exportImportSubtitle: { id: "Solusi lengkap untuk kebutuhan ekspor dan impor dengan layanan terintegrasi", en: "Complete solution for export and import needs with integrated services" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan ekspor dan impor yang komprehensif dengan dukungan penuh dari dokumentasi hingga pengiriman. Kami membantu bisnis Anda berkembang di pasar global dengan solusi logistik yang efisien dan terpercaya.", 
    en: "Comprehensive export and import services with full support from documentation to delivery. We help your business grow in the global market with efficient and reliable logistics solutions." 
  },
  
  // Services
  exportService: { id: "Export Service", en: "Export Service" },
  exportDesc: { 
    id: "Layanan ekspor lengkap mulai dari dokumentasi, packaging, hingga pengiriman ke berbagai negara tujuan dengan prosedur yang sesuai regulasi internasional.", 
    en: "Complete export service from documentation, packaging, to shipping to various destination countries with procedures compliant with international regulations." 
  },
  
  importService: { id: "Import Service", en: "Import Service" },
  importDesc: { 
    id: "Layanan impor yang mencakup pengurusan dokumen, custom clearance, dan distribusi barang impor ke seluruh Indonesia dengan proses yang cepat dan aman.", 
    en: "Import service covering document processing, custom clearance, and distribution of imported goods throughout Indonesia with fast and secure processes." 
  },
  
  tradingConsultation: { id: "Trading Consultation", en: "Trading Consultation" },
  tradingDesc: { 
    id: "Konsultasi perdagangan internasional untuk membantu bisnis memahami regulasi, prosedur, dan strategi terbaik dalam ekspor impor.", 
    en: "International trade consultation to help businesses understand regulations, procedures, and best strategies in export import." 
  },
  
  documentHandling: { id: "Document Handling", en: "Document Handling" },
  documentDesc: { 
    id: "Penanganan lengkap dokumen ekspor impor termasuk invoice, packing list, certificate of origin, dan dokumen lainnya sesuai kebutuhan.", 
    en: "Complete handling of export import documents including invoice, packing list, certificate of origin, and other documents as needed." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Ekspor Impor Kami", en: "Our Export Import Service Excellence" },
  feature1: { id: "Global Network", en: "Global Network" },
  feature1Desc: { id: "Jaringan mitra di 100+ negara", en: "Partner network in 100+ countries" },
  feature2: { id: "Compliance Expert", en: "Compliance Expert" },
  feature2Desc: { id: "Tim ahli regulasi perdagangan internasional", en: "International trade regulation expert team" },
  feature3: { id: "End-to-End Service", en: "End-to-End Service" },
  feature3Desc: { id: "Layanan lengkap dari origin hingga destination", en: "Complete service from origin to destination" },
  feature4: { id: "Competitive Rate", en: "Competitive Rate" },
  feature4Desc: { id: "Tarif kompetitif dengan kualitas terjamin", en: "Competitive rates with guaranteed quality" },
  
  // Commodity Types
  commodityTypesTitle: { id: "Jenis Komoditas", en: "Commodity Types" },
  manufacturing: { id: "Manufacturing Goods", en: "Manufacturing Goods" },
  manufacturingDesc: { id: "Produk manufaktur seperti tekstil, elektronik, mesin", en: "Manufacturing products such as textiles, electronics, machinery" },
  agricultural: { id: "Agricultural Products", en: "Agricultural Products" },
  agriculturalDesc: { id: "Produk pertanian seperti kopi, rempah, buah-buahan", en: "Agricultural products such as coffee, spices, fruits" },
  rawMaterials: { id: "Raw Materials", en: "Raw Materials" },
  rawMaterialsDesc: { id: "Bahan baku industri seperti logam, kimia, plastik", en: "Industrial raw materials such as metals, chemicals, plastics" },
  
  // Countries
  countriesTitle: { id: "Negara Tujuan Utama", en: "Main Destination Countries" },
  country1: { id: "Asia: China, Jepang, Korea, Singapura", en: "Asia: China, Japan, Korea, Singapore" },
  country2: { id: "Eropa: Jerman, Belanda, Inggris, Italia", en: "Europe: Germany, Netherlands, UK, Italy" },
  country3: { id: "Amerika: USA, Kanada, Brasil, Meksiko", en: "America: USA, Canada, Brazil, Mexico" },
  country4: { id: "Timur Tengah: UAE, Arab Saudi, Qatar", en: "Middle East: UAE, Saudi Arabia, Qatar" },
  
  // Process
  processTitle: { id: "Proses Ekspor Impor", en: "Export Import Process" },
  step1: { id: "Inquiry & Quote", en: "Inquiry & Quote" },
  step1Desc: { id: "Konsultasi kebutuhan dan penawaran harga", en: "Needs consultation and price quotation" },
  step2: { id: "Documentation", en: "Documentation" },
  step2Desc: { id: "Persiapan dan verifikasi dokumen", en: "Document preparation and verification" },
  step3: { id: "Shipping & Clearance", en: "Shipping & Clearance" },
  step3Desc: { id: "Pengiriman dan pengurusan bea cukai", en: "Shipping and customs clearance" },
  step4: { id: "Delivery & Report", en: "Delivery & Report" },
  step4Desc: { id: "Pengantaran dan laporan pengiriman", en: "Delivery and shipping report" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Siap Mengembangkan Bisnis Global Anda?", en: "Ready to Expand Your Global Business?" },
  ctaDescription: { id: "Hubungi tim ahli ekspor impor kami untuk konsultasi gratis dan solusi terbaik untuk kebutuhan perdagangan internasional Anda.", en: "Contact our export import expert team for free consultation and best solutions for your international trade needs." }
};

export default function ExportImportPage() {
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
                  <Globe className="text-white" size={32} />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {t('exportImportService')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('exportImportSubtitle')}
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
                alt="Export Import" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Globe className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">Global</p>
                    <p className="text-sm opacity-90">Trade</p>
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
              { icon: Ship, title: t('exportService'), desc: t('exportDesc') },
              { icon: Globe, title: t('importService'), desc: t('importDesc') },
              { icon: Users, title: t('tradingConsultation'), desc: t('tradingDesc') },
              { icon: CheckCircle, title: t('documentHandling'), desc: t('documentDesc') }
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
              { icon: Shield, title: t('feature2'), desc: t('feature2Desc') },
              { icon: CheckCircle, title: t('feature3'), desc: t('feature3Desc') },
              { icon: Zap, title: t('feature4'), desc: t('feature4Desc') }
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

      {/* Commodity Types */}
      <section className="py-20 relative">
        <FloatingOrbs className="top-20 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('commodityTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('manufacturing'), desc: t('manufacturingDesc') },
              { title: t('agricultural'), desc: t('agriculturalDesc') },
              { title: t('rawMaterials'), desc: t('rawMaterialsDesc') }
            ].map((commodity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{commodity.title}</h3>
                <p className="text-white/80">{commodity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20 relative">
        <GeometricPattern className="bottom-10 left-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('countriesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              t('country1'),
              t('country2'),
              t('country3'),
              t('country4')
            ].map((country, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-white font-medium">{country}</span>
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