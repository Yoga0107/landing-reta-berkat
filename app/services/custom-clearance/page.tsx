"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Clock, Shield, CheckCircle, Phone, Mail, Languages, MapPin, Zap, Users, AlertCircle } from 'lucide-react';
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
  customClearanceService: { id: "Layanan Custom Clearance", en: "Custom Clearance Service" },
  customSubtitle: { id: "Pengurusan dokumen bea cukai yang cepat, akurat, dan sesuai regulasi", en: "Fast, accurate, and regulation-compliant customs document processing" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan pengurusan bea cukai yang profesional dan terpercaya untuk memastikan kelancaran proses ekspor impor Anda. Tim ahli kami berpengalaman dalam menangani berbagai jenis komoditas dan regulasi kepabeanan.", 
    en: "Professional and reliable customs clearance service to ensure smooth export import processes. Our expert team is experienced in handling various commodity types and customs regulations." 
  },
  
  // Services
  importClearance: { id: "Import Clearance", en: "Import Clearance" },
  importClearanceDesc: { 
    id: "Pengurusan dokumen impor termasuk PIB (Pemberitahuan Impor Barang), pemeriksaan fisik, dan pembayaran bea masuk serta pajak impor.", 
    en: "Import document processing including PIB (Import Declaration), physical inspection, and payment of import duties and taxes." 
  },
  
  exportClearance: { id: "Export Clearance", en: "Export Clearance" },
  exportClearanceDesc: { 
    id: "Pengurusan dokumen ekspor termasuk PEB (Pemberitahuan Ekspor Barang), sertifikat asal, dan dokumen pendukung lainnya.", 
    en: "Export document processing including PEB (Export Declaration), certificate of origin, and other supporting documents." 
  },
  
  dutyCalculation: { id: "Duty Calculation", en: "Duty Calculation" },
  dutyCalculationDesc: { 
    id: "Perhitungan bea masuk, pajak, dan biaya lainnya secara akurat sesuai dengan klasifikasi HS Code dan nilai pabean.", 
    en: "Accurate calculation of import duties, taxes, and other fees according to HS Code classification and customs value." 
  },
  
  complianceCheck: { id: "Compliance Check", en: "Compliance Check" },
  complianceCheckDesc: { 
    id: "Pemeriksaan kepatuhan terhadap regulasi perdagangan internasional dan persyaratan khusus untuk komoditas tertentu.", 
    en: "Compliance check against international trade regulations and special requirements for specific commodities." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Custom Clearance Kami", en: "Our Custom Clearance Service Excellence" },
  feature1: { id: "Licensed PPJK", en: "Licensed PPJK" },
  feature1Desc: { id: "Tim bersertifikat PPJK resmi", en: "Official PPJK certified team" },
  feature2: { id: "Fast Processing", en: "Fast Processing" },
  feature2Desc: { id: "Proses clearance dalam 1-2 hari kerja", en: "Clearance process within 1-2 working days" },
  feature3: { id: "Accurate Documentation", en: "Accurate Documentation" },
  feature3Desc: { id: "Dokumen lengkap dan sesuai regulasi", en: "Complete and regulation-compliant documents" },
  feature4: { id: "Cost Transparent", en: "Cost Transparent" },
  feature4Desc: { id: "Biaya transparan tanpa biaya tersembunyi", en: "Transparent costs without hidden fees" },
  
  // Document Types
  documentTypesTitle: { id: "Jenis Dokumen", en: "Document Types" },
  commercialDoc: { id: "Commercial Documents", en: "Commercial Documents" },
  commercialDesc: { id: "Invoice, Packing List, Bill of Lading, AWB", en: "Invoice, Packing List, Bill of Lading, AWB" },
  permits: { id: "Permits & Licenses", en: "Permits & Licenses" },
  permitsDesc: { id: "Import License, Certificate of Origin, Health Certificate", en: "Import License, Certificate of Origin, Health Certificate" },
  customs: { id: "Customs Documents", en: "Customs Documents" },
  customsDesc: { id: "PIB, PEB, SPPB, Custom Declaration", en: "PIB, PEB, SPPB, Custom Declaration" },
  
  // Commodity Categories
  commoditiesTitle: { id: "Kategori Komoditas", en: "Commodity Categories" },
  commodity1: { id: "Tekstil & Garmen - Mesin & Peralatan", en: "Textile & Garment - Machinery & Equipment" },
  commodity2: { id: "Elektronik & IT - Kimia & Farmasi", en: "Electronics & IT - Chemical & Pharmaceutical" },
  commodity3: { id: "Makanan & Minuman - Otomotif", en: "Food & Beverage - Automotive" },
  commodity4: { id: "Bahan Baku Industri - Produk Pertanian", en: "Industrial Raw Materials - Agricultural Products" },
  
  // Process
  processTitle: { id: "Proses Custom Clearance", en: "Custom Clearance Process" },
  step1: { id: "Document Review", en: "Document Review" },
  step1Desc: { id: "Pemeriksaan kelengkapan dokumen", en: "Document completeness review" },
  step2: { id: "Declaration Filing", en: "Declaration Filing" },
  step2Desc: { id: "Pengajuan pemberitahuan ke sistem", en: "Declaration filing to system" },
  step3: { id: "Inspection & Payment", en: "Inspection & Payment" },
  step3Desc: { id: "Pemeriksaan fisik dan pembayaran", en: "Physical inspection and payment" },
  step4: { id: "Release & Delivery", en: "Release & Delivery" },
  step4Desc: { id: "Pengeluaran barang dari pelabuhan", en: "Goods release from port" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Butuh Bantuan Custom Clearance?", en: "Need Custom Clearance Assistance?" },
  ctaDescription: { id: "Hubungi tim PPJK bersertifikat kami untuk pengurusan bea cukai yang cepat, akurat, dan sesuai regulasi terbaru.", en: "Contact our certified PPJK team for fast, accurate, and latest regulation-compliant customs clearance." }
};

export default function CustomClearancePage() {
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
                  <FileText className="text-white" size={32} />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {t('customClearanceService')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('customSubtitle')}
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
                src="https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Custom Clearance" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">Licensed</p>
                    <p className="text-sm opacity-90">PPJK</p>
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
              { icon: FileText, title: t('importClearance'), desc: t('importClearanceDesc') },
              { icon: CheckCircle, title: t('exportClearance'), desc: t('exportClearanceDesc') },
              { icon: AlertCircle, title: t('dutyCalculation'), desc: t('dutyCalculationDesc') },
              { icon: Shield, title: t('complianceCheck'), desc: t('complianceCheckDesc') }
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
              { icon: Shield, title: t('feature1'), desc: t('feature1Desc') },
              { icon: Zap, title: t('feature2'), desc: t('feature2Desc') },
              { icon: CheckCircle, title: t('feature3'), desc: t('feature3Desc') },
              { icon: Clock, title: t('feature4'), desc: t('feature4Desc') }
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

      {/* Document Types */}
      <section className="py-20 relative">
        <FloatingOrbs className="top-20 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('documentTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('commercialDoc'), desc: t('commercialDesc') },
              { title: t('permits'), desc: t('permitsDesc') },
              { title: t('customs'), desc: t('customsDesc') }
            ].map((doc, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{doc.title}</h3>
                <p className="text-white/80">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commodities */}
      <section className="py-20 relative">
        <GeometricPattern className="bottom-10 left-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('commoditiesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              t('commodity1'),
              t('commodity2'),
              t('commodity3'),
              t('commodity4')
            ].map((commodity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-white font-medium">{commodity}</span>
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