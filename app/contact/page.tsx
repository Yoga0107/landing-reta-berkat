"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ArrowLeft, Languages, Menu, X, MessageCircle } from 'lucide-react';
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

    // Page Content
    pageTitle: { id: "Hubungi Kami", en: "Contact Us" },
    pageSubtitle: { id: "Siap membantu kebutuhan logistik Anda dengan layanan terbaik", en: "Ready to help your logistics needs with the best service" },

    // Contact Info
    contactInfoTitle: { id: "Informasi Kontak", en: "Contact Information" },
    address: { id: "Alamat", en: "Address" },
    addressText: { id: "Jl. Raya Logistik No. 123, Jakarta Utara, DKI Jakarta 14240", en: "Jl. Raya Logistik No. 123, North Jakarta, DKI Jakarta 14240" },
    phone: { id: "Telepon", en: "Phone" },
    phoneText: { id: "+62 21 1234 5678", en: "+62 21 1234 5678" },
    email: { id: "Email", en: "Email" },
    emailText: { id: "info@retaberkatjaya.com", en: "info@retaberkatjaya.com" },
    hours: { id: "Jam Operasional", en: "Operating Hours" },
    hoursText: { id: "Senin - Jumat: 08:00 - 17:00 WIB\nSabtu: 08:00 - 12:00 WIB", en: "Monday - Friday: 08:00 - 17:00 WIB\nSaturday: 08:00 - 12:00 WIB" },

    // Contact Form
    formTitle: { id: "Kirim Pesan", en: "Send Message" },
    name: { id: "Nama Lengkap", en: "Full Name" },
    namePlaceholder: { id: "Masukkan nama lengkap Anda", en: "Enter your full name" },
    emailLabel: { id: "Email", en: "Email" },
    emailPlaceholder: { id: "Masukkan email Anda", en: "Enter your email" },
    phoneLabel: { id: "Nomor Telepon", en: "Phone Number" },
    phonePlaceholder: { id: "Masukkan nomor telepon Anda", en: "Enter your phone number" },
    company: { id: "Perusahaan", en: "Company" },
    companyPlaceholder: { id: "Nama perusahaan (opsional)", en: "Company name (optional)" },
    service: { id: "Layanan yang Diminati", en: "Service of Interest" },
    servicePlaceholder: { id: "Pilih layanan", en: "Select service" },
    message: { id: "Pesan", en: "Message" },
    messagePlaceholder: { id: "Tuliskan pesan atau pertanyaan Anda", en: "Write your message or question" },
    sendMessage: { id: "Kirim Pesan", en: "Send Message" },

    // Service Options
    exportImport: { id: "Ekspor & Impor", en: "Export & Import" },
    customClearance: { id: "Bea Cukai", en: "Custom Clearance" },
    oceanFreight: { id: "Angkutan Laut", en: "Ocean Freight" },
    airFreight: { id: "Angkutan Udara", en: "Air Freight" },
    trucking: { id: "Angkutan Darat", en: "Trucking" },
    domestic: { id: "Domestik", en: "Domestic" },

    // Quick Contact
    quickContactTitle: { id: "Kontak Cepat", en: "Quick Contact" },
    whatsapp: { id: "WhatsApp", en: "WhatsApp" },
    whatsappText: { id: "Chat langsung dengan tim kami", en: "Chat directly with our team" },
    emergency: { id: "Emergency", en: "Emergency" },
    emergencyText: { id: "Layanan darurat 24/7", en: "24/7 emergency service" },

    // Office Locations
    officesTitle: { id: "Kantor Kami", en: "Our Offices" },
    headOffice: { id: "Kantor Pusat", en: "Head Office" },
    headOfficeAddress: { id: "Jakarta Utara", en: "North Jakarta" },
    branch1: { id: "Cabang Surabaya", en: "Surabaya Branch" },
    branch1Address: { id: "Surabaya, Jawa Timur", en: "Surabaya, East Java" },
    branch2: { id: "Cabang Medan", en: "Medan Branch" },
    branch2Address: { id: "Medan, Sumatera Utara", en: "Medan, North Sumatra" },
};

export default function ContactPage() {
    const [language, setLanguage] = useState<'id' | 'en'>('id');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const t = (key: string): string => {
        return translations[key] ? translations[key][language] : key;
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'id' ? 'en' : 'id');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const message = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || '-'}
Service: ${formData.service}
Message: ${formData.message}`;

  const encodedMessage = encodeURIComponent(message);
  const phoneNumber = "6281299090466"; // Ganti dengan nomor WhatsApp tujuan tanpa "+" dan tanda baca

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');
};

    const serviceOptions = [
        { value: 'export-import', label: t('exportImport') },
        { value: 'custom-clearance', label: t('customClearance') },
        { value: 'ocean-freight', label: t('oceanFreight') },
        { value: 'air-freight', label: t('airFreight') },
        { value: 'trucking', label: t('trucking') },
        { value: 'domestic', label: t('domestic') }
    ];

    const contactInfo = [
        {
            icon: MapPin,
            title: t('address'),
            content: t('addressText'),
            color: 'bg-blue-500'
        },
        {
            icon: Phone,
            title: t('phone'),
            content: t('phoneText'),
            color: 'bg-green-500'
        },
        {
            icon: Mail,
            title: t('email'),
            content: t('emailText'),
            color: 'bg-purple-500'
        },
        {
            icon: Clock,
            title: t('hours'),
            content: t('hoursText'),
            color: 'bg-orange-500'
        }
    ];

    const offices = [
        {
            name: t('headOffice'),
            location: t('headOfficeAddress'),
            address: "Jl. Raya Logistik No. 123",
            phone: "+62 21 1234 5678"
        },
        {
            name: t('branch1'),
            location: t('branch1Address'),
            address: "Jl. Industri No. 456",
            phone: "+62 31 8765 4321"
        },
        {
            name: t('branch2'),
            location: t('branch2Address'),
            address: "Jl. Pelabuhan No. 789",
            phone: "+62 61 2468 1357"
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
                            <Link href="/services" className="text-white hover:text-orange-400 transition-colors">
                                {t('services')}
                            </Link>
                            <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
                                {t('about')}
                            </Link>
                            <Link href="/contact" className="text-orange-400">
                                {t('contact')}
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
                                <Link href="/services" className="text-white hover:text-orange-400 block px-3 py-2">
                                    {t('services')}
                                </Link>
                                <Link href="/about" className="text-white hover:text-orange-400 block px-3 py-2">
                                    {t('about')}
                                </Link>
                                <Link href="/contact" className="text-orange-400 block px-3 py-2">
                                    {t('contact')}
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
                        {t('pageTitle')}
                    </h1>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        {t('pageSubtitle')}
                    </p>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white text-center mb-12">{t('contactInfoTitle')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                                    <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        <IconComponent className="text-white" size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                                    <p className="text-white/80 whitespace-pre-line">{info.content}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form & Quick Contact */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <h2 className="text-3xl font-bold text-white mb-8">{t('formTitle')}</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white mb-2">{t('name')}</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder={t('namePlaceholder')}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white mb-2">{t('emailLabel')}</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder={t('emailPlaceholder')}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-white mb-2">{t('phoneLabel')}</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder={t('phonePlaceholder')}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-white mb-2">{t('company')}</label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                placeholder={t('companyPlaceholder')}
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white mb-2">{t('service')}</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-400"
                                            required
                                        >
                                            <option value="">{t('servicePlaceholder')}</option>
                                            {serviceOptions.map((option) => (
                                                <option key={option.value} value={option.value} className="bg-blue-900">
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-white mb-2">{t('message')}</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder={t('messagePlaceholder')}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-orange-400 resize-none"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg">
                                        <Send className="mr-2" size={20} />
                                        {t('sendMessage')}
                                    </Button>
                                </form>
                            </div>
                        </div>

                        {/* Quick Contact & Offices */}
                        <div className="space-y-8">
                            {/* Quick Contact */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-6">{t('quickContactTitle')}</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-4 bg-green-500/20 rounded-lg">
                                        <MessageCircle className="text-green-400" size={24} />
                                        <div>
                                            <h4 className="text-white font-semibold">{t('whatsapp')}</h4>
                                            <p className="text-white/80 text-sm">{t('whatsappText')}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-red-500/20 rounded-lg">
                                        <Phone className="text-red-400" size={24} />
                                        <div>
                                            <h4 className="text-white font-semibold">{t('emergency')}</h4>
                                            <p className="text-white/80 text-sm">{t('emergencyText')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Office Locations */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-6">{t('officesTitle')}</h3>
                                <div className="space-y-4">
                                    {offices.map((office, index) => (
                                        <div key={index} className="p-4 bg-white/5 rounded-lg">
                                            <h4 className="text-white font-semibold mb-1">{office.name}</h4>
                                            <p className="text-orange-400 text-sm mb-2">{office.location}</p>
                                            <p className="text-white/80 text-sm">{office.address}</p>
                                            <p className="text-white/80 text-sm">{office.phone}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}