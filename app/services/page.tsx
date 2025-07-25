"use client";

import { useState } from 'react';
import { Ship, Plane, Truck, Globe, FileText, Package, ArrowRight, Languages, Menu, X } from 'lucide-react';
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
    services: { id: "Layanan", en: "Services" },
    about: { id: "Tentang", en: "About" },
    contact: { id: "Kontak", en: "Contact" },

    // Services Page
    servicesTitle: { id: "Layanan Kami", en: "Our Services" },
    servicesSubtitle: { id: "Solusi logistik komprehensif untuk semua kebutuhan pengiriman Anda", en: "Comprehensive logistics solutions for all your shipping needs" },

    // Export Import Services
    exportImportTitle: { id: "Layanan Ekspor & Impor", en: "Export & Import Services" },
    exportImportDesc: { id: "Layanan lengkap untuk kebutuhan ekspor dan impor internasional", en: "Complete services for international export and import needs" },

    customClearanceTitle: { id: "Layanan Custom Clearance", en: "Custom Clearance Service" },
    customClearanceDesc: { id: "Penanganan dokumen dan proses bea cukai yang efisien", en: "Efficient customs documentation and clearance processes" },

    oceanFreightTitle: { id: "Layanan Angkutan Laut", en: "Ocean Freight Service" },
    oceanFreightDesc: { id: "Pengiriman kargo laut yang aman dan ekonomis", en: "Safe and economical ocean cargo shipping" },

    truckingTitle: { id: "Layanan Angkutan Darat", en: "Trucking Service" },
    truckingDesc: { id: "Transportasi darat yang handal untuk distribusi lokal", en: "Reliable land transportation for local distribution" },

    skyFreightTitle: { id: "Layanan Angkutan Udara", en: "Sky Freight Service" },
    skyFreightDesc: { id: "Pengiriman udara cepat untuk kargo prioritas", en: "Fast air shipping for priority cargo" },

    // Domestic Services
    domesticTitle: { id: "Layanan Domestik", en: "Domestic Services" },
    domesticDesc: { id: "Layanan pengiriman dalam negeri yang terpercaya", en: "Reliable domestic shipping services" },

    deliverySeaTitle: { id: "Pengiriman Laut Domestik", en: "Domestic Sea Delivery" },
    deliverySeaDesc: { id: "Pengiriman antar pulau yang aman dan terjangkau", en: "Safe and affordable inter-island shipping" },

    deliveryAirTitle: { id: "Pengiriman Udara Domestik", en: "Domestic Air Delivery" },
    deliveryAirDesc: { id: "Pengiriman udara domestik yang cepat dan efisien", en: "Fast and efficient domestic air delivery" },

    deliveryLandTitle: { id: "Pengiriman Darat Domestik", en: "Domestic Land Delivery" },
    deliveryLandDesc: { id: "Distribusi darat ke seluruh nusantara", en: "Land distribution throughout the archipelago" },

    // Additional Services
    whyUsTitle: { id: "Mengapa Memilih Kami?", en: "Why Choose Us?" },
    whyUsDesc: { id: "Keunggulan dan komitmen kami dalam melayani pelanggan", en: "Our advantages and commitment to serving customers" },

    ourCustomerTitle: { id: "Pelanggan Kami", en: "Our Customers" },
    ourCustomerDesc: { id: "Kepercayaan dari berbagai industri dan perusahaan", en: "Trust from various industries and companies" },

    // CTA
    learnMore: { id: "Pelajari Lebih Lanjut", en: "Learn More" },
    getQuote: { id: "Minta Penawaran", en: "Get Quote" },
    contactUs: { id: "Hubungi Kami", en: "Contact Us" },

    // Features
    feature1: { id: "Layanan 24/7", en: "24/7 Service" },
    feature2: { id: "Tracking Real-time", en: "Real-time Tracking" },
    feature3: { id: "Asuransi Kargo", en: "Cargo Insurance" },
    feature4: { id: "Tim Profesional", en: "Professional Team" },
};

export default function ServicesPage() {
    const [language, setLanguage] = useState<'id' | 'en'>('id');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const t = (key: string): string => {
        return translations[key] ? translations[key][language] : key;
    };

/*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Toggles the language of the page between Indonesian and English.
     *
     * This function is called when the language toggle button is clicked.
     * It sets the language state to the opposite of the current language.
     */
/*******  c4cbc9d1-6fa7-48ed-9f28-4a2a1fcc3655  *******/
    const toggleLanguage = () => {
        setLanguage(prev => prev === 'id' ? 'en' : 'id');
    };

    const services = [
        {
            id: 'export-import',
            title: t('exportImportTitle'),
            description: t('exportImportDesc'),
            icon: Globe,
            color: 'bg-blue-500',
            href: '/services/export-import'
        },
        {
            id: 'custom-clearance',
            title: t('customClearanceTitle'),
            description: t('customClearanceDesc'),
            icon: FileText,
            color: 'bg-green-500',
            href: '/services/custom-clearance'
        },
        {
            id: 'ocean-freight',
            title: t('oceanFreightTitle'),
            description: t('oceanFreightDesc'),
            icon: Ship,
            color: 'bg-blue-600',
            href: '/services/ocean-freight'
        },
        {
            id: 'trucking',
            title: t('truckingTitle'),
            description: t('truckingDesc'),
            icon: Truck,
            color: 'bg-orange-500',
            href: '/services/trucking'
        },
        {
            id: 'sky-freight',
            title: t('skyFreightTitle'),
            description: t('skyFreightDesc'),
            icon: Plane,
            color: 'bg-purple-500',
            href: '/services/sky-freight'
        }
    ];

    const domesticServices = [
        {
            id: 'delivery-sea',
            title: t('deliverySeaTitle'),
            description: t('deliverySeaDesc'),
            icon: Ship,
            color: 'bg-blue-500',
            href: '/services/domestic/delivery-by-sea'
        },
        {
            id: 'delivery-air',
            title: t('deliveryAirTitle'),
            description: t('deliveryAirDesc'),
            icon: Plane,
            color: 'bg-purple-500',
            href: '/services/domestic/delivery-by-sky'
        },
        {
            id: 'delivery-land',
            title: t('deliveryLandTitle'),
            description: t('deliveryLandDesc'),
            icon: Truck,
            color: 'bg-orange-500',
            href: '/services/domestic/delivery-by-land'
        }
    ];

    const additionalServices = [
        {
            id: 'why-us',
            title: t('whyUsTitle'),
            description: t('whyUsDesc'),
            href: '/why-us'
        },
        {
            id: 'our-customers',
            title: t('ourCustomerTitle'),
            description: t('ourCustomerDesc'),
            href: '/our-customers'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-blue-900 font-bold text-lg">bc</span>
                            </div>
                            <span className="text-white font-semibold text-lg">PT. Reta Berkat Jaya</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-white hover:text-orange-400 transition-colors">
                                {t('home')}
                            </Link>
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
                                <Link href="/" className="text-white hover:text-orange-400 block px-3 py-2">
                                    {t('home')}
                                </Link>

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
            <section className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t('servicesTitle')}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        {t('servicesSubtitle')}
                    </p>
                </div>
            </section>

            {/* Main Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <IconComponent className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-white/80 mb-6">{service.description}</p>
                                    <div className="flex items-center text-orange-400 group-hover:text-orange-300">
                                        <span className="mr-2">{t('learnMore')}</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Domestic Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('domesticTitle')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {domesticServices.map((service) => {
                            const IconComponent = service.icon;
                            return (
                                <Link
                                    key={service.id}
                                    href={service.href}
                                    className="group bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20"
                                >
                                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <IconComponent className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-white/80 mb-6">{service.description}</p>
                                    <div className="flex items-center text-orange-400 group-hover:text-orange-300">
                                        <span className="mr-2">{t('learnMore')}</span>
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {additionalServices.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-white/90 mb-6">{service.description}</p>
                                <div className="flex items-center text-white group-hover:text-orange-100">
                                    <span className="mr-2">{t('learnMore')}</span>
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">
                            {language === 'id' ? 'Keunggulan Layanan Kami' : 'Our Service Excellence'}
                        </h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold">24</span>
                                </div>
                                <h3 className="text-white font-semibold">{t('feature1')}</h3>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Package className="text-white" size={24} />
                                </div>
                                <h3 className="text-white font-semibold">{t('feature2')}</h3>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FileText className="text-white" size={24} />
                                </div>
                                <h3 className="text-white font-semibold">{t('feature3')}</h3>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe className="text-white" size={24} />
                                </div>
                                <h3 className="text-white font-semibold">{t('feature4')}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {language === 'id' ? 'Siap Memulai Pengiriman Anda?' : 'Ready to Start Your Shipment?'}
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        {language === 'id'
                            ? 'Hubungi tim ahli kami untuk mendapatkan solusi logistik terbaik'
                            : 'Contact our expert team to get the best logistics solutions'
                        }
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
                            onClick={() =>
                                window.open(
                                    'https://wa.me/6282312773010?text=Hai%20saya%20ingin%20menghubungi%20mengenai%20pengiriman',
                                    '_blank'
                                )
                            }
                        >
                            {t('getQuote')}
                        </Button>

                        <Button
                            variant="outline"
                            className="border-white text-black hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
                            onClick={() => (window.location.href = '/contact')}
                        >
                            {t('contactUs')}
                        </Button>

                    </div>
                </div>
            </section>
        </div>
    );
}