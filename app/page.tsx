"use client";

import { useState, useEffect } from 'react';
import { Ship, Plane, Truck, Globe, CheckCircle, Menu, X, Languages } from 'lucide-react';
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
  profile: { id: "Profil", en: "Profile" },
  vision: { id: "Visi & Misi", en: "Vision & Mission" },
  values: { id: "Nilai & Budaya", en: "Values & Culture" },
  services: { id: "Layanan", en: "Services" },

  // Hero Section
  heroTitle1: { id: "EKSPOR-", en: "EXPORT-" },
  heroTitle2: { id: "IMPOR-", en: "IMPORT-" },
  heroTitle3: { id: "DOMESTIK", en: "DOMESTIC" },
  heroDescription: {
    id: "Solusi logistik komprehensif untuk semua kebutuhan pengiriman Anda. Dari angkutan udara hingga kargo laut, kami memberikan keunggulan di seluruh dunia.",
    en: "Comprehensive logistics solutions for all your shipping needs. From air freight to ocean cargo, we deliver excellence across the globe."
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

  // Footer
  trustedPartner: { id: "Mitra terpercaya Anda untuk solusi logistik komprehensif di seluruh dunia.", en: "Your trusted partner for comprehensive logistics solutions worldwide." },
  contact: { id: "Kontak", en: "Contact" },
  email: { id: "Email: info@retaberkatjaya.com", en: "Email: info@retaberkatjaya.com" },
  phone: { id: "Telepon: +62 XXX XXX XXXX", en: "Phone: +62 XXX XXX XXXX" },
  copyright: { id: "© 2024 PT. Reta Berkat Jaya. Semua hak dilindungi.", en: "© 2024 PT. Reta Berkat Jaya. All rights reserved." }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

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
            className={`w-3 h-3 border border-orange-400 ${i % 3 === 0 ? 'bg-orange-400/30' : ''
              } ${i % 5 === 0 ? 'w-6 h-6' : ''}`}
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
                  className={`text-white hover:text-orange-400 transition-colors ${activeSection === item.id ? 'text-orange-400' : ''
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
      <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
        <GeometricPattern className="top-20 right-20" />
        <GeometricPattern className="bottom-20 left-20" />

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
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
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                  >
                    {t('ourServices')}
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
                  >
                    <Link href="/services">{t('learnMore')}</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Logistics Operations"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 p-4 rounded-xl shadow-lg">
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
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative">
        <GeometricPattern className="top-10 left-10" />

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

              <p className="text-lg text-white leading-relaxed">
                {t('valuesIntro')}
              </p>

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-white">{t('exportImportTitle')}</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Plane className="text-orange-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('airFreight')}</h3>
                    <p className="text-white/90">{t('airFreightDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Ship className="text-orange-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('oceanFreight')}</h3>
                    <p className="text-white/90">{t('oceanFreightDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Truck className="text-orange-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('trucking')}</h3>
                    <p className="text-white/90">{t('truckingDesc')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Globe className="text-orange-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{t('customClearance')}</h3>
                    <p className="text-white/90">{t('customClearanceDesc')}</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg mt-8"
              >
                <Link href="/services">{t('contactUsToday')}</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-full overflow-hidden w-96 h-96 mx-auto shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Container Port"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 py-12">
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
                <li>{t('heroTitle1')}{t('heroTitle2')}</li>
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