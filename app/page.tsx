"use client";

import { useState, useEffect, useRef } from 'react';
import { Ship, Plane, Truck, Globe, CheckCircle, Menu, X, Languages, ArrowRight, Star, Users, Award, Clock, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Translations {
  [key: string]: {
    id: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { id: "Beranda", en: "Home" },
  profile: { id: "Profil", en: "Profile" },
  vision: { id: "Visi & Misi", en: "Vision & Mission" },
  values: { id: "Nilai & Budaya", en: "Values & Culture" },
  services: { id: "Layanan", en: "Services" },
  
  // Hero Section
  heroTitle1: { id: "EKSPOR", en: "EXPORT" },
  heroTitle2: { id: "IMPOR", en: "IMPORT" },
  heroTitle3: { id: "DOMESTIK", en: "DOMESTIC" },
  footerTitle1: { id: "Ekspor", en: "Export" },
  footerTitle2: { id: "Impor", en: "Import" },
  heroDescription: { 
    id: "Solusi logistik komprehensif untuk semua kebutuhan pengiriman Anda. Dari angkutan darat, laut, dan udara, kami memberikan kenyamanan pengiriman domestik dan internasional.", 
    en: "Comprehensive logistics solutions for all your shipping needs. From land, sea, and air transportation, we provide convenient domestic and international shipping." 
  },
  ourServices: { id: "Layanan Kami", en: "Our Services" },
  learnMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
  operations247: { id: "Operasional 24/7", en: "24/7 Operations" },
  globalCoverage: { id: "Jangkauan Global", en: "Global Coverage" },
  
  // Profile Section
  profileTitle: { id: "Profil", en: "Profile" },
  profileText1: { 
    id: "PT. Reta Berkat Jaya menyediakan layanan ekstensif dalam menangani pengiriman internasional dan domestik. Didirikan sejak 2024, kami telah membantu beberapa pelanggan kami dengan layanan yang komprehensif, efektif dan efisien.", 
    en: "PT. Reta Berkat Jaya provides extensive services in handling international and domestic shipments. Established since 2024, we have helped some of our customers with comprehensive, effective and efficient services." 
  },
  profileText2: { 
    id: "Kami menawarkan berbagai layanan sesuai kebutuhan pelanggan. Untuk ekspor impor kami menyediakan custom clearance, ocean freight, air freight, dan layanan trucking. Untuk domestik kami menyediakan domestic ocean freight, domestic air freight, trucking, dan layanan agen kurir.", 
    en: "We offer a variety of services according to customer needs. For export import we provide custom clearance, ocean freight, air freight, and trucking services. For domestic we provide domestic ocean freight, domestic air freight, trucking, and courier agent services." 
  },
  profileText3: { 
    id: "Pelanggan kami berasal dari berbagai latar belakang, baik individu maupun korporat. Kami terus berinovasi dalam meningkatkan kualitas layanan dan akan selalu membantu memberikan solusi untuk memenuhi kebutuhan pengiriman pelanggan.", 
    en: "Our customers come from various backgrounds, both individuals and corporate. We continue to innovate in improving the quality of service and will always help provide solutions to meet customer shipping needs." 
  },
  established: { id: "Didirikan", en: "Established" },
  service: { id: "Layanan", en: "Service" },
  global: { id: "Global", en: "Global" },
  
  // Vision and Mission Section
  visionMissionTitle: { id: "Visi dan Misi", en: "Vision and Mission" },
  visionLabel: { id: "Visi :", en: "Vision :" },
  visionText: { id: "Menjadi penyedia layanan pengiriman terbaik.", en: "To be the best delivery service provider." },
  missionLabel: { id: "Misi :", en: "Mission :" },
  mission1: { id: "Memberikan pelayanan optimal untuk kepuasan pelanggan.", en: "Provide optimal service for customer satisfaction." },
  mission2: { id: "Membangun kemitraan bisnis dan menerapkan lingkungan kerja yang bertanggung jawab.", en: "Building business partnerships and implementing a responsible work environment." },
  mission3: { id: "Menciptakan lapangan kerja yang luas dengan sumber daya manusia yang profesional di bidangnya.", en: "Creating a wide range of jobs with professional human resources in their fields." },
  
  // Corporate Values Section
  corporateValuesTitle: { id: "Nilai & Budaya Perusahaan", en: "Corporate Value & Culture" },
  valuesIntro: { id: "Kami memiliki nilai-nilai yang terus kami jaga dan nilai-nilai tersebut adalah:", en: "We have values that we continue to maintain and those values are:" },
  trustIntegrity: { id: "KEPERCAYAAN dan INTEGRITAS:", en: "TRUST and INTEGRITY:" },
  trustText: { id: "Selalu memberikan pelayanan optimal dan menjamin kepuasan pelanggan.", en: "Always provide optimal service and guarantee customer satisfaction." },
  speed: { id: "KECEPATAN :", en: "SPEED :" },
  speedText: { id: "Selalu memberikan solusi yang tepat dan cepat.", en: "Always provide the right and fast solution." },
  deliveryResult: { id: "HASIL PENGIRIMAN :", en: "DELIVERY RESULT :" },
  deliveryText: { id: "Memastikan optimalisasi setiap layanan untuk kepuasan pelanggan.", en: "Ensuring optimization of every service for customer satisfaction." },
  
  // Services Section
  exportImportTitle: { id: "Layanan Ekspor dan Impor", en: "Export and Import Services" },
  airFreight: { id: "Angkutan Udara", en: "Air Freight" },
  airFreightDesc: { id: "Layanan pengiriman udara ke berbagai negara untuk keperluan Ekspor dan Impor.", en: "Air delivery service to various countries for Export and Import purposes." },
  oceanFreight: { id: "Angkutan Laut", en: "Ocean Freight" },
  oceanFreightDesc: { id: "Layanan pengiriman laut ke berbagai negara untuk keperluan Ekspor dan Impor.", en: "Ocean delivery service to various countries for Export and Import purposes." },
  trucking: { id: "Angkutan Darat", en: "Trucking" },
  truckingDesc: { id: "Layanan pengiriman darat dari gudang atau pabrik ke pelabuhan dan sebaliknya.", en: "In-land delivery service from warehouse or factory to port and vice versa." },
  customClearance: { id: "Bea Cukai", en: "Custom Clearance" },
  customClearanceDesc: { id: "Penanganan dokumen untuk keperluan ekspor atau impor.", en: "Handling document for export or import purposes." },
  contactUsToday: { id: "Hubungi Kami Hari Ini", en: "Contact Us Today" },
  
  // New translations for services section
  wantToKnowMore: { id: "Ingin Tahu Lebih Lanjut?", en: "Want to Know More?" },
  exploreServices: { 
    id: "Jelajahi berbagai layanan logistik komprehensif kami yang dirancang khusus untuk memenuhi kebutuhan bisnis Anda.", 
    en: "Explore our comprehensive logistics services specifically designed to meet your business needs." 
  },
  viewAllServices: { id: "Lihat Semua Layanan", en: "View All Services" },
  fastDeliveryWorldwide: { id: "Pengiriman cepat ke seluruh dunia", en: "Fast delivery worldwide" },
  costEffectiveShipping: { id: "Pengiriman hemat biaya", en: "Cost-effective shipping" },
  doorToDoorService: { id: "Layanan door-to-door", en: "Door-to-door service" },
  expertDocumentation: { id: "Dokumentasi ahli", en: "Expert documentation" },
  fastProcessing: { id: "Proses Cepat", en: "Fast Processing" },
  fastProcessingDesc: { id: "Waktu pemrosesan cepat untuk semua pengiriman", en: "Quick turnaround times for all shipments" },
  secureHandling: { id: "Penanganan Aman", en: "Secure Handling" },
  secureHandlingDesc: { id: "Asuransi penuh dan penanganan kargo yang aman", en: "Full insurance and secure cargo handling" },
  expertTeam: { id: "Tim Ahli", en: "Expert Team" },
  expertTeamDesc: { id: "Spesialis logistik profesional", en: "Professional logistics specialists" },
  
  // Featured Services Section
  featuredServicesTitle: { id: "Layanan Unggulan Kami", en: "Our Featured Services" },
  featuredServicesSubtitle: { id: "Solusi logistik terpercaya untuk semua kebutuhan Anda", en: "Trusted logistics solutions for all your needs" },
  exportImportService: { id: "Ekspor & Impor", en: "Export & Import" },
  exportImportServiceDesc: { 
    id: "Layanan ekspor impor profesional dengan handling terpercaya", 
    en: "Professional export import services with trusted handling" 
  },
  domesticServices: { id: "Layanan Domestik", en: "Domestic Services" },
  domesticServicesDesc: { 
    id: "Pengiriman domestik ke seluruh Indonesia dengan berbagai pilihan", 
    en: "Domestic shipping throughout Indonesia with various options" 
  },
  customClearanceService: { id: "Bea Cukai", en: "Custom Clearance" },
  customClearanceServiceDesc: { 
    id: "Pengurusan dokumen bea cukai yang cepat dan akurat", 
    en: "Fast and accurate customs document processing" 
  },
  
  // Why Choose Us Section
  whyChooseUs: { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },
  experienced: { id: "Berpengalaman", en: "Experienced" },
  experiencedDesc: { id: "Tim profesional dengan pengalaman bertahun-tahun", en: "Professional team with years of experience" },
  onTime: { id: "Tepat Waktu", en: "On Time" },
  onTimeDesc: { id: "Komitmen pengiriman sesuai jadwal yang dijanjikan", en: "Commitment to delivery according to promised schedule" },
  trusted: { id: "Terpercaya", en: "Trusted" },
  trustedDesc: { id: "Keamanan dan keselamatan kargo adalah prioritas utama", en: "Cargo security and safety is our top priority" },
  happyCustomers: { id: "Pelanggan Puas", en: "Happy Customers" },
  citiesCovered: { id: "Kota Terjangkau", en: "Cities Covered" },
  support: { id: "Dukungan", en: "Support" },
  onTimeDelivery: { id: "Pengiriman Tepat Waktu", en: "On-Time Delivery" },
  
  // Footer
  trustedPartner: { id: "Mitra terpercaya Anda untuk solusi logistik komprehensif di seluruh dunia.", en: "Your trusted partner for comprehensive logistics solutions worldwide." },
  contact: { id: "Kontak", en: "Contact" },
  email: { id: "Email: jayacargoberkat@gmail.com", en: "Email: jayacargoberkat@gmail.com" },
  phone: { id: "Telepon: +62 823 1277 3010", en: "Phone: +62 823 1277 3010" },
  copyright: { id: "© 2024 PT. Reta Berkat Jaya. Semua hak dilindungi.", en: "© 2024 PT. Reta Berkat Jaya. All rights reserved." }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const t = (key: string): string => {
    return translations[key] ? translations[key][language] : key;
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'vision', 'values', 'services'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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

  const DiagonalLines = ({ className = "" }: { className?: string }) => (
    <div className={`absolute ${className} pointer-events-none overflow-hidden`}>
      <div className="relative w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent transform rotate-45"
            style={{
              width: '200%',
              top: `${i * 15}%`,
              left: '-50%',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  const CircularPattern = ({ className = "" }: { className?: string }) => (
    <div className={`absolute ${className} pointer-events-none`}>
      <div className="relative">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute border border-orange-400/20 rounded-full animate-spin`}
            style={{
              width: `${(i + 1) * 40}px`,
              height: `${(i + 1) * 40}px`,
              top: `${-i * 20}px`,
              left: `${-i * 20}px`,
              animationDuration: `${(i + 1) * 10}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
            }}
          />
        ))}
      </div>
    </div>
  );

  const HexagonPattern = ({ className = "" }: { className?: string }) => (
    <div className={`absolute ${className} pointer-events-none`}>
      <div className="grid grid-cols-3 gap-4 opacity-10">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="w-8 h-8 border-2 border-orange-400 transform rotate-45 animate-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: t('home') },
                { id: 'profile', label: t('profile') },
                { id: 'vision', label: t('vision') },
                { id: 'values', label: t('values') },
                { id: 'services', label: t('services') }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-orange-400 transition-colors ${
                    activeSection === item.id ? 'text-orange-400' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
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
                {[
                  { id: 'home', label: t('home') },
                  { id: 'profile', label: t('profile') },
                  { id: 'vision', label: t('vision') },
                  { id: 'values', label: t('values') },
                  { id: 'services', label: t('services') }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-orange-400 block px-3 py-2 w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Language Toggle */}
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
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden" ref={heroRef}>
        <GeometricPattern className="top-20 right-20" />
        <GeometricPattern className="bottom-20 left-20" />
        <FloatingOrbs className="top-32 left-1/4" />
        <FloatingOrbs className="bottom-32 right-1/4" />
        <DiagonalLines className="top-0 left-0 w-full h-full" />
        <CircularPattern className="top-1/2 right-10" />
        <HexagonPattern className="bottom-40 left-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-blue-800/30"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                  <span className="text-blue-900 font-bold text-2xl">bc</span>
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold">PT. RETA BERKAT JAYA</h1>
                  <p className="text-orange-400 text-sm">BERKAT JAYA CARGO</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
                  {t('heroTitle1')}<br />
                  {t('heroTitle2')}<br />
                  {t('heroTitle3')}
                </h2>
                
                <p className="text-xl text-white/90 max-w-lg">
                  {t('heroDescription')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    onClick={() => scrollToSection('services')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ArrowRight className="mr-2" size={20} />
                    {t('ourServices')}
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('profile')}
                    variant="outline" 
                    className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {t('learnMore')}
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <img 
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Logistics Operations" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg animate-bounce">
                <div className="flex items-center space-x-3">
                  <Ship className="text-white" size={24} />
                  <div className="text-white">
                    <p className="font-semibold">{t('operations247')}</p>
                    <p className="text-sm opacity-90">{t('globalCoverage')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">2024</div>
                <div className="text-white text-sm">{t('established')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">24/7</div>
                <div className="text-white text-sm">{t('service')}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">50+</div>
                <div className="text-white text-sm">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <GeometricPattern className="top-10 left-10" />
        <FloatingOrbs className="top-20 right-20" />
        <CircularPattern className="bottom-20 left-1/3" />
        <HexagonPattern className="top-1/3 right-10" />
        
        {/* Additional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-blue-800/30 via-transparent to-blue-900/50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center mx-auto lg:mx-0 shadow-2xl">
                <div className="text-center">
                  <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-4xl">bc</span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-xl">BERKAT JAYA CARGO</h3>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white mb-8">{t('profileTitle')}</h2>
              
              <div className="space-y-6 text-white">
                <p className="text-lg leading-relaxed">
                  {t('profileText1')}
                </p>
                
                <p className="text-lg leading-relaxed">
                  {t('profileText2')}
                </p>
                
                <p className="text-lg leading-relaxed">
                  {t('profileText3')}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">2024</div>
                  <div className="text-white">{t('established')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-white">{t('service')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">{t('global')}</div>
                  <div className="text-white">Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section id="vision" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <GeometricPattern className="top-20 right-20" />
        <FloatingOrbs className="bottom-32 left-20" />
        <DiagonalLines className="top-0 right-0 w-1/2 h-full" />
        <CircularPattern className="top-40 left-10" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-800/20 via-transparent to-blue-900/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl font-bold text-white">{t('visionMissionTitle')}</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t('visionLabel')}</h3>
                  <p className="text-lg text-white leading-relaxed">
                    {t('visionText')}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">{t('missionLabel')}</h3>
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-lg">{t('mission1')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-lg">{t('mission2')}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-orange-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-lg">{t('mission3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Port Operations" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section id="values" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <GeometricPattern className="bottom-20 left-20" />
        <FloatingOrbs className="top-40 right-1/4" />
        <HexagonPattern className="bottom-32 right-20" />
        <CircularPattern className="top-20 left-1/4" />
        
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 via-blue-800/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional Worker" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-5xl font-bold text-white">{t('corporateValuesTitle')}</h2>
              

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t('trustIntegrity')}</h3>
                  <p className="text-lg text-white leading-relaxed">
                    {t('trustText')}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t('speed')}</h3>
                  <p className="text-lg text-white leading-relaxed">
                    {t('speedText')}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{t('deliveryResult')}</h3>
                  <p className="text-lg text-white leading-relaxed">
                    {t('deliveryText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <GeometricPattern className="top-10 right-10" />
        <FloatingOrbs className="bottom-20 left-1/3" />
        <DiagonalLines className="bottom-0 left-0 w-full h-1/2" />
        <HexagonPattern className="top-20 left-20" />
        <CircularPattern className="bottom-40 right-20" />
        
        {/* Complex gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/30 to-blue-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-orange-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">{t('exportImportTitle')}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">{t('wantToKnowMore')}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  {t('exploreServices')}
                </p>
                <Button 
                  onClick={() => window.location.href = '/services'}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg transform hover:scale-105 transition-all duration-300"
                >
                  <ArrowRight className="mr-2" size={20} />
                  {t('viewAllServices')}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Plane className="text-orange-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">{t('airFreight')}</h4>
                  <p className="text-white/80 text-sm">{t('fastDeliveryWorldwide')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Ship className="text-orange-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">{t('oceanFreight')}</h4>
                  <p className="text-white/80 text-sm">{t('costEffectiveShipping')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Truck className="text-orange-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">{t('trucking')}</h4>
                  <p className="text-white/80 text-sm">{t('doorToDoorService')}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Globe className="text-orange-400 mb-4" size={32} />
                  <h4 className="text-white font-semibold mb-2">{t('customClearance')}</h4>
                  <p className="text-white/80 text-sm">{t('expertDocumentation')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: t('fastProcessing'), desc: t('fastProcessingDesc') },
              { icon: Shield, title: t('secureHandling'), desc: t('secureHandlingDesc') },
              { icon: Users, title: t('expertTeam'), desc: t('expertTeamDesc') }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <feature.icon className="text-orange-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <GeometricPattern className="top-5 left-5" />
          <HexagonPattern className="bottom-5 right-5" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">{t('featuredServicesTitle')}</h2>
            <p className="text-xl text-white/80">{t('featuredServicesSubtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: t('exportImportService'), 
                desc: t('exportImportServiceDesc'),
                icon: Globe,
                link: "/services/export-import"
              },
              { 
                title: t('domesticServices'), 
                desc: t('domesticServicesDesc'),
                icon: Truck,
                link: "/services#domesticService"
              },
              { 
                title: t('customClearanceService'), 
                desc: t('customClearanceServiceDesc'),
                icon: CheckCircle,
                link: "/services/custom-clearance"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer" onClick={() => window.location.href = service.link}>
                <service.icon className="text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/80 mb-6 leading-relaxed">{service.desc}</p>
                <div className="flex items-center text-orange-400 group-hover:text-orange-300 transition-colors">
                  <span className="font-medium">{t('learnMore')}</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">{t('whyChooseUs')}</h2>
              <div className="space-y-6">
                {[
                  { icon: Award, title: t('experienced'), desc: t('experiencedDesc') },
                  { icon: Clock, title: t('onTime'), desc: t('onTimeDesc') },
                  { icon: Shield, title: t('trusted'), desc: t('trustedDesc') }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-white/80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">100+</div>
                    <div className="text-white">{t('happyCustomers')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">50+</div>
                    <div className="text-white">{t('citiesCovered')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                    <div className="text-white">{t('support')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">99%</div>
                    <div className="text-white">{t('onTimeDelivery')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-12">
        <div className="absolute inset-0 overflow-hidden">
          <GeometricPattern className="top-5 left-5" />
          <HexagonPattern className="bottom-5 right-5" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-lg">bc</span>
                </div>
                <span className="text-white font-semibold">PT. Reta Berkat Jaya</span>
              </div>
              <p className="text-white/80">
                {t('trustedPartner')}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-white/80">
                <li>{t('footerTitle1')} {t('footerTitle2')}</li>
                <li>{t('oceanFreight')}</li>
                <li>{t('airFreight')}</li>
                <li>{t('customClearance')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">{t('contact')}</h4>
              <div className="text-white/80">
                <p>{t('email')}</p>
                <p>{t('phone')}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>{t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}