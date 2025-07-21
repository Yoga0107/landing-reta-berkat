"use client";

import { useState } from 'react';
import { Globe, Plane, Ship, Truck, FileText, ArrowLeft, Languages, Menu, X, CheckCircle } from 'lucide-react';
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
    backToServices: { id: "Kembali ke Layanan", en: "Back to Services" },

    // Page Content
    pageTitle: { id: "Layanan Ekspor & Impor", en: "Export & Import Services" },
    pageSubtitle: { id: "Solusi lengkap untuk kebutuhan perdagangan internasional Anda", en: "Complete solutions for your international trade needs" },

    // Service Details
    airFreightTitle: { id: "Angkutan Udara", en: "Air Freight" },
    airFreightDesc: { id: "Layanan pengiriman udara cepat ke berbagai negara untuk keperluan ekspor dan impor dengan jaminan keamanan dan ketepatan waktu.", en: "Fast air shipping service to various countries for export and import purposes with guaranteed security and punctuality." },

    oceanFreightTitle: { id: "Angkutan Laut", en: "Ocean Freight" },
    oceanFreightDesc: { id: "Layanan pengiriman laut ekonomis ke berbagai negara untuk keperluan ekspor dan impor dengan kapasitas besar.", en: "Economical ocean shipping service to various countries for export and import purposes with large capacity." },

    truckingTitle: { id: "Angkutan Darat", en: "Trucking" },
    truckingDesc: { id: "Layanan pengiriman darat dari gudang atau pabrik ke pelabuhan dan sebaliknya untuk mendukung proses ekspor impor.", en: "Land delivery service from warehouse or factory to port and vice versa to support export import processes." },

    customClearanceTitle: { id: "Bea Cukai", en: "Custom Clearance" },
    customClearanceDesc: { id: "Penanganan dokumen dan proses bea cukai untuk keperluan ekspor atau impor dengan tim yang berpengalaman.", en: "Handling documents and customs processes for export or import purposes with an experienced team." },

    // Features
    featuresTitle: { id: "Keunggulan Layanan", en: "Service Excellence" },
    feature1: { id: "Jaringan Global", en: "Global Network" },
    feature1Desc: { id: "Kemitraan dengan agen di seluruh dunia", en: "Partnership with agents worldwide" },
    feature2: { id: "Dokumentasi Lengkap", en: "Complete Documentation" },
    feature2Desc: { id: "Pengurusan semua dokumen ekspor impor", en: "Handling all export import documents" },
    feature3: { id: "Tracking Real-time", en: "Real-time Tracking" },
    feature3Desc: { id: "Pemantauan status pengiriman secara real-time", en: "Real-time shipment status monitoring" },
    feature4: { id: "Asuransi Kargo", en: "Cargo Insurance" },
    feature4Desc: { id: "Perlindungan asuransi untuk keamanan kargo", en: "Insurance protection for cargo security" },

    // Process
    processTitle: { id: "Proses Layanan", en: "Service Process" },
    step1: { id: "Konsultasi", en: "Consultation" },
    step1Desc: { id: "Diskusi kebutuhan dan solusi terbaik", en: "Discuss needs and best solutions" },
    step2: { id: "Dokumentasi", en: "Documentation" },
    step2Desc: { id: "Persiapan dan pengurusan dokumen", en: "Document preparation and processing" },
    step3: { id: "Pengiriman", en: "Shipping" },
    step3Desc: { id: "Eksekusi pengiriman sesuai jadwal", en: "Execute shipping according to schedule" },
    step4: { id: "Monitoring", en: "Monitoring" },
    step4Desc: { id: "Pemantauan hingga barang sampai tujuan", en: "Monitoring until goods reach destination" },

    // CTA
    getQuote: { id: "Minta Penawaran", en: "Get Quote" },
    contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function ExportImportPage() {
    const [language, setLanguage] = useState<'id' | 'en'>('id');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const t = (key: string): string => {
        return translations[key] ? translations[key][language] : key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'id' ? 'en' : 'id');
    };

    const services = [
        {
            icon: Plane,
            title: t('airFreightTitle'),
            description: t('airFreightDesc'),
            color: 'bg-purple-500'
        },
        {
            icon: Ship,
            title: t('oceanFreightTitle'),
            description: t('oceanFreightDesc'),
            color: 'bg-blue-500'
        },
        {
            icon: Truck,
            title: t('truckingTitle'),
            description: t('truckingDesc'),
            color: 'bg-orange-500'
        },
        {
            icon: FileText,
            title: t('customClearanceTitle'),
            description: t('customClearanceDesc'),
            color: 'bg-green-500'
        }
    ];

    const features = [
        {
            icon: Globe,
            title: t('feature1'),
            description: t('feature1Desc')
        },
        {
            icon: FileText,
            title: t('feature2'),
            description: t('feature2Desc')
        },
        {
            icon: CheckCircle,
            title: t('feature3'),
            description: t('feature3Desc')
        },
        {
            icon: CheckCircle,
            title: t('feature4'),
            description: t('feature4Desc')
        }
    ];

    const processSteps = [
        {
            number: "01",
            title: t('step1'),
            description: t('step1Desc')
        },
        {
            number: "02",
            title: t('step2'),
            description: t('step2Desc')
        },
        {
            number: "03",
            title: t('step3'),
            description: t('step3Desc')
        },
        {
            number: "04",
            title: t('step4'),
            description: t('step4Desc')
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
                            <Link href="/services" className="text-orange-400">
                                {t('services')}
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
                                <Link href="/services" className="text-orange-400 block px-3 py-2">
                                    {t('services')}
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-orange-400 hover:text-orange-300 mb-8">
                        <ArrowLeft size={20} className="mr-2" />
                        {t('backToServices')}
                    </Link>

                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                            {t('pageTitle')}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            {t('pageSubtitle')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                                >
                                    <div className={`w-16 h-16 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                                        <IconComponent className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                    <p className="text-white/80">{service.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('featuresTitle')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-white/80">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('processTitle')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-blue-900 font-bold text-xl">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-white/80">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {language === 'id' ? 'Siap Memulai Ekspor Impor Anda?' : 'Ready to Start Your Export Import?'}
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            {language === 'id'
                                ? 'Hubungi tim ahli kami untuk mendapatkan solusi ekspor impor terbaik'
                                : 'Contact our expert team to get the best export import solutions'
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                                {t('getQuote')}
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
                                {t('contactUs')}
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}