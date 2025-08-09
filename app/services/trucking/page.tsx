"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, Clock, Shield, CheckCircle, Phone, Mail, Languages, MapPin, Zap, Navigation, Users } from 'lucide-react';
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
  truckingService: { id: "Layanan Angkutan Darat", en: "Trucking Service" },
  truckingSubtitle: { id: "Solusi transportasi darat yang fleksibel dan efisien untuk distribusi kargo", en: "Flexible and efficient land transportation solution for cargo distribution" },
  
  // Hero Section
  heroDescription: { 
    id: "Layanan angkutan darat yang komprehensif dengan armada lengkap untuk memenuhi kebutuhan distribusi kargo dari pelabuhan ke gudang, pabrik ke pelabuhan, atau door-to-door delivery di seluruh Indonesia.", 
    en: "Comprehensive land transportation service with complete fleet to meet cargo distribution needs from port to warehouse, factory to port, or door-to-door delivery throughout Indonesia." 
  },
  
  // Services
  portHaulage: { id: "Port Haulage", en: "Port Haulage" },
  portHaulageDesc: { 
    id: "Layanan angkutan dari pelabuhan ke gudang atau sebaliknya dengan berbagai jenis truk sesuai kebutuhan container dan kargo.", 
    en: "Transportation service from port to warehouse or vice versa with various truck types according to container and cargo needs." 
  },
  
  doorToDoor: { id: "Door-to-Door Delivery", en: "Door-to-Door Delivery" },
  doorToDoorDesc: { 
    id: "Layanan pengantaran langsung dari alamat pengirim ke alamat penerima dengan handling yang aman dan tepat waktu.", 
    en: "Direct delivery service from sender address to recipient address with safe and timely handling." 
  },
  
  projectCargo: { id: "Project Cargo Transport", en: "Project Cargo Transport" },
  projectCargoDesc: { 
    id: "Layanan khusus untuk mengangkut kargo besar dan berat seperti mesin industri, konstruksi, dan equipment dengan peralatan khusus.", 
    en: "Special service for transporting large and heavy cargo such as industrial machinery, construction, and equipment with special equipment." 
  },
  
  warehousing: { id: "Warehousing & Distribution", en: "Warehousing & Distribution" },
  warehousingDesc: { 
    id: "Layanan penyimpanan sementara dan distribusi dengan fasilitas gudang yang aman dan sistem manajemen inventory yang modern.", 
    en: "Temporary storage and distribution service with secure warehouse facilities and modern inventory management system." 
  },
  
  // Features
  featuresTitle: { id: "Keunggulan Layanan Angkutan Darat Kami", en: "Our Trucking Service Excellence" },
  feature1: { id: "Complete Fleet", en: "Complete Fleet" },
  feature1Desc: { id: "Armada lengkap dari pickup hingga trailer", en: "Complete fleet from pickup to trailer" },
  feature2: { id: "GPS Tracking", en: "GPS Tracking" },
  feature2Desc: { id: "Pemantauan real-time perjalanan kargo", en: "Real-time cargo journey monitoring" },
  feature3: { id: "Professional Driver", en: "Professional Driver" },
  feature3Desc: { id: "Driver berpengalaman dan berlisensi", en: "Experienced and licensed drivers" },
  feature4: { id: "Flexible Schedule", en: "Flexible Schedule" },
  feature4Desc: { id: "Jadwal pengiriman yang fleksibel", en: "Flexible delivery schedule" },
  
  // Vehicle Types
  vehicleTypesTitle: { id: "Jenis Kendaraan", en: "Vehicle Types" },
  containerTruck: { id: "Container Truck", en: "Container Truck" },
  containerDesc: { id: "Truk container 20ft dan 40ft", en: "20ft and 40ft container trucks" },
  cargoTruck: { id: "Cargo Truck", en: "Cargo Truck" },
  cargoDesc: { id: "Truk kargo untuk general cargo", en: "Cargo trucks for general cargo" },
  lowbed: { id: "Lowbed Trailer", en: "Lowbed Trailer" },
  lowbedDesc: { id: "Trailer khusus untuk heavy equipment", en: "Special trailer for heavy equipment" },
  
  // Coverage Areas
  coverageTitle: { id: "Area Jangkauan", en: "Coverage Areas" },
  coverage1: { id: "Jabodetabek: Jakarta, Bogor, Depok, Tangerang, Bekasi", en: "Jabodetabek: Jakarta, Bogor, Depok, Tangerang, Bekasi" },
  coverage2: { id: "Jawa: Bandung, Semarang, Surabaya, Yogyakarta", en: "Java: Bandung, Semarang, Surabaya, Yogyakarta" },
  coverage3: { id: "Sumatera: Medan, Palembang, Pekanbaru, Lampung", en: "Sumatra: Medan, Palembang, Pekanbaru, Lampung" },
  coverage4: { id: "Kalimantan: Balikpapan, Pontianak, Banjarmasin", en: "Kalimantan: Balikpapan, Pontianak, Banjarmasin" },
  
  // Process
  processTitle: { id: "Proses Angkutan Darat", en: "Trucking Process" },
  step1: { id: "Order & Schedule", en: "Order & Schedule" },
  step1Desc: { id: "Pemesanan dan penjadwalan pickup", en: "Order and pickup scheduling" },
  step2: { id: "Loading & Departure", en: "Loading & Departure" },
  step2Desc: { id: "Pemuatan kargo dan keberangkatan", en: "Cargo loading and departure" },
  step3: { id: "Transit & Tracking", en: "Transit & Tracking" },
  step3Desc: { id: "Perjalanan dengan GPS tracking", en: "Journey with GPS tracking" },
  step4: { id: "Delivery & POD", en: "Delivery & POD" },
  step4Desc: { id: "Pengantaran dan proof of delivery", en: "Delivery and proof of delivery" },
  
  // CTA
  getQuote: { id: "Dapatkan Penawaran", en: "Get Quote" },
  contactUs: { id: "Hubungi Kami", en: "Contact Us" },
  ctaTitle: { id: "Butuh Layanan Angkutan Darat?", en: "Need Trucking Service?" },
  ctaDescription: { id: "Hubungi tim trucking kami untuk mendapatkan solusi transportasi darat yang tepat dan efisien untuk kebutuhan distribusi kargo Anda.", en: "Contact our trucking team to get the right and efficient land transportation solution for your cargo distribution needs." }
};

export default function TruckingPage() {
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
                  <Truck className="text-white" size={32} />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white">
                  {t('truckingService')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('truckingSubtitle')}
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
                alt="Trucking Service" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Navigation className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">GPS</p>
                    <p className="text-sm opacity-90">Tracking</p>
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
              { icon: Truck, title: t('portHaulage'), desc: t('portHaulageDesc') },
              { icon: MapPin, title: t('doorToDoor'), desc: t('doorToDoorDesc') },
              { icon: Zap, title: t('projectCargo'), desc: t('projectCargoDesc') },
              { icon: Shield, title: t('warehousing'), desc: t('warehousingDesc') }
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
              { icon: Truck, title: t('feature1'), desc: t('feature1Desc') },
              { icon: Navigation, title: t('feature2'), desc: t('feature2Desc') },
              { icon: Users, title: t('feature3'), desc: t('feature3Desc') },
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

      {/* Vehicle Types */}
      <section className="py-20 relative">
        <FloatingOrbs className="top-20 right-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('vehicleTypesTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('containerTruck'), desc: t('containerDesc') },
              { title: t('cargoTruck'), desc: t('cargoDesc') },
              { title: t('lowbed'), desc: t('lowbedDesc') }
            ].map((vehicle, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{vehicle.title}</h3>
                <p className="text-white/80">{vehicle.desc}</p>
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

          <div className="grid md:grid-cols-2 gap-6">
            {[
              t('coverage1'),
              t('coverage2'),
              t('coverage3'),
              t('coverage4')
            ].map((coverage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-white font-medium">{coverage}</span>
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