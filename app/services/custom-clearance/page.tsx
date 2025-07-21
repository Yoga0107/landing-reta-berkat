"use client";

import { useState } from 'react';
import { FileText, CheckCircle, Clock, Shield, ArrowLeft, Languages, Menu, X, Users } from 'lucide-react';
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
    pageTitle: { id: "Layanan Bea Cukai", en: "Custom Clearance Service" },
    pageSubtitle: { id: "Penanganan dokumen dan proses bea cukai yang profesional dan efisien", en: "Professional and efficient customs documentation and clearance processes" },

    // Services
    servicesTitle: { id: "Layanan Bea Cukai Kami", en: "Our Custom Clearance Services" },

    importClearance: { id: "Bea Cukai Impor", en: "Import Clearance" },
    importClearanceDesc: { id: "Pengurusan dokumen dan proses bea cukai untuk barang impor dengan prosedur yang tepat dan cepat.", en: "Handling documents and customs processes for imported goods with proper and fast procedures." },

    exportClearance: { id: "Bea Cukai Ekspor", en: "Export Clearance" },
    exportClearanceDesc: { id: "Pengurusan dokumen dan proses bea cukai untuk barang ekspor sesuai regulasi internasional.", en: "Handling documents and customs processes for exported goods according to international regulations." },

    documentPreparation: { id: "Persiapan Dokumen", en: "Document Preparation" },
    documentPreparationDesc: { id: "Persiapan dan verifikasi semua dokumen yang diperlukan untuk proses bea cukai.", en: "Preparation and verification of all documents required for customs processes." },

    consultationService: { id: "Konsultasi Regulasi", en: "Regulation Consultation" },
    consultationServiceDesc: { id: "Konsultasi mengenai regulasi bea cukai dan persyaratan dokumen terbaru.", en: "Consultation on customs regulations and latest document requirements." },

    // Features
    featuresTitle: { id: "Mengapa Memilih Layanan Bea Cukai Kami", en: "Why Choose Our Custom Clearance Service" },
    feature1: { id: "Tim Berpengalaman", en: "Experienced Team" },
    feature1Desc: { id: "Tim ahli dengan pengalaman bertahun-tahun di bidang bea cukai", en: "Expert team with years of experience in customs field" },
    feature2: { id: "Proses Cepat", en: "Fast Process" },
    feature2Desc: { id: "Pengurusan dokumen dan clearance yang cepat dan efisien", en: "Fast and efficient document processing and clearance" },
    feature3: { id: "Kepatuhan Regulasi", en: "Regulatory Compliance" },
    feature3Desc: { id: "Memastikan semua proses sesuai dengan regulasi yang berlaku", en: "Ensuring all processes comply with applicable regulations" },
    feature4: { id: "Transparansi Biaya", en: "Cost Transparency" },
    feature4Desc: { id: "Biaya yang transparan tanpa biaya tersembunyi", en: "Transparent costs without hidden fees" },

    // Documents
    documentsTitle: { id: "Dokumen yang Kami Tangani", en: "Documents We Handle" },
    doc1: { id: "Packing List", en: "Packing List" },
    doc2: { id: "Commercial Invoice", en: "Commercial Invoice" },
    doc3: { id: "Bill of Lading / Airway Bill", en: "Bill of Lading / Airway Bill" },
    doc4: { id: "Certificate of Origin", en: "Certificate of Origin" },
    doc5: { id: "Import/Export License", en: "Import/Export License" },
    doc6: { id: "Insurance Certificate", en: "Insurance Certificate" },

    // CTA
    getQuote: { id: "Minta Penawaran", en: "Get Quote" },
    contactUs: { id: "Hubungi Kami", en: "Contact Us" },
};

export default function CustomClearancePage() {
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
            icon: FileText,
            title: t('importClearance'),
            description: t('importClearanceDesc'),
            color: 'bg-blue-500'
        },
        {
            icon: CheckCircle,
            title: t('exportClearance'),
            description: t('exportClearanceDesc'),
            color: 'bg-green-500'
        },
        {
            icon: Shield,
            title: t('documentPreparation'),
            description: t('documentPreparationDesc'),
            color: 'bg-purple-500'
        },
        {
            icon: Users,
            title: t('consultationService'),
            description: t('consultationServiceDesc'),
            color: 'bg-orange-500'
        }
    ];

    const features = [
        {
            icon: Users,
            title: t('feature1'),
            description: t('feature1Desc')
        },
        {
            icon: Clock,
            title: t('feature2'),
            description: t('feature2Desc')
        },
        {
            icon: Shield,
            title: t('feature3'),
            description: t('feature3Desc')
        },
        {
            icon: CheckCircle,
            title: t('feature4'),
            description: t('feature4Desc')
        }
    ];

    const documents = [
        t('doc1'),
        t('doc2'),
        t('doc3'),
        t('doc4'),
        t('doc5'),
        t('doc6')
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

            {/* Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('servicesTitle')}</h2>
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

            {/* Documents Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('documentsTitle')}</h2>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {documents.map((doc, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                                    <span className="text-white">{doc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {language === 'id' ? 'Butuh Bantuan Bea Cukai?' : 'Need Customs Assistance?'}
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            {language === 'id'
                                ? 'Tim ahli bea cukai kami siap membantu proses clearance Anda'
                                : 'Our customs expert team is ready to help your clearance process'
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
                </div>
            </section>
        </div>
    );
}