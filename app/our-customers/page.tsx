"use client";

import { useState } from 'react';
import { Building, Factory, Store, Users, ArrowLeft, Languages, Menu, X, Star, CheckCircle } from 'lucide-react';
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
    pageTitle: { id: "Pelanggan Kami", en: "Our Customers" },
    pageSubtitle: { id: "Kepercayaan dari berbagai industri dan perusahaan di seluruh Indonesia", en: "Trust from various industries and companies throughout Indonesia" },

    // Customer Categories
    categoriesTitle: { id: "Kategori Pelanggan", en: "Customer Categories" },

    manufacturing: { id: "Manufaktur", en: "Manufacturing" },
    manufacturingDesc: { id: "Perusahaan manufaktur yang membutuhkan pengiriman bahan baku dan produk jadi ke berbagai destinasi.", en: "Manufacturing companies that need shipping of raw materials and finished products to various destinations." },

    retail: { id: "Retail & E-commerce", en: "Retail & E-commerce" },
    retailDesc: { id: "Toko retail dan platform e-commerce yang memerlukan distribusi produk ke konsumen akhir.", en: "Retail stores and e-commerce platforms that require product distribution to end consumers." },

    automotive: { id: "Otomotif", en: "Automotive" },
    automotiveDesc: { id: "Industri otomotif yang membutuhkan pengiriman spare parts dan kendaraan.", en: "Automotive industry that needs shipping of spare parts and vehicles." },

    fmcg: { id: "FMCG", en: "FMCG" },
    fmcgDesc: { id: "Perusahaan Fast Moving Consumer Goods yang memerlukan distribusi cepat dan efisien.", en: "Fast Moving Consumer Goods companies that require fast and efficient distribution." },

    // Industries Served
    industriesTitle: { id: "Industri yang Kami Layani", en: "Industries We Serve" },
    textile: { id: "Tekstil & Garmen", en: "Textile & Garment" },
    electronics: { id: "Elektronik", en: "Electronics" },
    food: { id: "Makanan & Minuman", en: "Food & Beverage" },
    chemical: { id: "Kimia", en: "Chemical" },
    pharmaceutical: { id: "Farmasi", en: "Pharmaceutical" },
    construction: { id: "Konstruksi", en: "Construction" },

    // Testimonials
    testimonialsTitle: { id: "Testimoni Pelanggan", en: "Customer Testimonials" },
    testimonial1: { id: "Layanan yang sangat memuaskan, pengiriman selalu tepat waktu dan aman.", en: "Very satisfying service, delivery is always on time and safe." },
    testimonial2: { id: "Tim yang profesional dan responsif, sangat membantu bisnis kami.", en: "Professional and responsive team, very helpful for our business." },
    testimonial3: { id: "Harga kompetitif dengan kualitas layanan yang excellent.", en: "Competitive prices with excellent service quality." },

    // Customer Benefits
    benefitsTitle: { id: "Manfaat untuk Pelanggan", en: "Benefits for Customers" },
    benefit1: { id: "Solusi Terintegrasi", en: "Integrated Solutions" },
    benefit1Desc: { id: "Layanan end-to-end dari pickup hingga delivery", en: "End-to-end service from pickup to delivery" },
    benefit2: { id: "Dedicated Account Manager", en: "Dedicated Account Manager" },
    benefit2Desc: { id: "Tim khusus untuk menangani kebutuhan Anda", en: "Dedicated team to handle your needs" },
    benefit3: { id: "Reporting & Analytics", en: "Reporting & Analytics" },
    benefit3Desc: { id: "Laporan detail dan analisis performa pengiriman", en: "Detailed reports and shipping performance analytics" },
    benefit4: { id: "Flexible Payment", en: "Flexible Payment" },
    benefit4Desc: { id: "Berbagai pilihan metode pembayaran", en: "Various payment method options" },

    // CTA
    getQuote: { id: "Minta Penawaran", en: "Get Quote" },
    contactUs: { id: "Hubungi Kami", en: "Contact Us" },
    becomeCustomer: { id: "Menjadi Pelanggan", en: "Become a Customer" },
};

export default function OurCustomersPage() {
    const [language, setLanguage] = useState<'id' | 'en'>('id');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const t = (key: string): string => {
        return translations[key] ? translations[key][language] : key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'id' ? 'en' : 'id');
    };

    const customerCategories = [
        {
            icon: Factory,
            title: t('manufacturing'),
            description: t('manufacturingDesc'),
            color: 'bg-blue-500'
        },
        {
            icon: Store,
            title: t('retail'),
            description: t('retailDesc'),
            color: 'bg-green-500'
        },
        {
            icon: Building,
            title: t('automotive'),
            description: t('automotiveDesc'),
            color: 'bg-purple-500'
        },
        {
            icon: Users,
            title: t('fmcg'),
            description: t('fmcgDesc'),
            color: 'bg-orange-500'
        }
    ];

    const industries = [
        t('textile'),
        t('electronics'),
        t('food'),
        t('chemical'),
        t('pharmaceutical'),
        t('construction')
    ];

    const testimonials = [
        {
            text: t('testimonial1'),
            author: "PT. Maju Bersama",
            rating: 5
        },
        {
            text: t('testimonial2'),
            author: "CV. Sukses Mandiri",
            rating: 5
        },
        {
            text: t('testimonial3'),
            author: "PT. Global Trading",
            rating: 5
        }
    ];

    const benefits = [
        {
            icon: CheckCircle,
            title: t('benefit1'),
            description: t('benefit1Desc')
        },
        {
            icon: Users,
            title: t('benefit2'),
            description: t('benefit2Desc')
        },
        {
            icon: Building,
            title: t('benefit3'),
            description: t('benefit3Desc')
        },
        {
            icon: Star,
            title: t('benefit4'),
            description: t('benefit4Desc')
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

            {/* Customer Categories Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('categoriesTitle')}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {customerCategories.map((category, index) => {
                            const IconComponent = category.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
                                >
                                    <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                                        <IconComponent className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                                    <p className="text-white/80">{category.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('industriesTitle')}</h2>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((industry, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="text-orange-400 flex-shrink-0" size={20} />
                                    <span className="text-white">{industry}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('testimonialsTitle')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                    ))}
                                </div>
                                <p className="text-white/90 mb-4 italic">"{testimonial.text}"</p>
                                <p className="text-orange-400 font-semibold">- {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('benefitsTitle')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-white/80">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            {language === 'id' ? 'Bergabunglah dengan Pelanggan Kami' : 'Join Our Customers'}
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            {language === 'id'
                                ? 'Rasakan pengalaman layanan logistik terbaik untuk bisnis Anda'
                                : 'Experience the best logistics service for your business'
                            }
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                                {t('becomeCustomer')}
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