import { useState } from 'react';
import { siteConfig } from '../data/site-config';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
    const { contact } = siteConfig.pages;
    const { whatsapp, siteName } = siteConfig.global;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create WhatsApp message
        const message = encodeURIComponent(
            `*New Inquiry from ${siteName} Website*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n\n` +
            `*Message:*\n${formData.message}`
        );

        // Redirect to WhatsApp
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

    return (
        <>
            <SEO
                title="Contact Us"
                description={contact.description}
                url="/contact"
            />
            <div className="min-h-screen pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden mb-20">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop"
                            alt="Contact Us"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                            {contact.title}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up stagger-1">
                            {contact.description}
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
                            <p className="text-gray-400 mb-8">
                                Ready to plan your Bali adventure? Reach out to us through WhatsApp for the fastest response, or fill out the form and we'll get back to you within 24 hours.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Phone / WhatsApp</h3>
                                        <p className="text-gray-400">+{whatsapp}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Email</h3>
                                        <p className="text-gray-400">hello@melalibali.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Office</h3>
                                        <p className="text-gray-400">Jl. Raya Ubud No. 88, Ubud, Bali 80571</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium mb-1">Working Hours</h3>
                                        <p className="text-gray-400">Mon - Sun: 08:00 - 20:00 WITA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Direct WhatsApp Button */}
                            <a
                                href={`https://wa.me/${whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-sm px-8 py-4 rounded transition-all"
                            >
                                <MessageCircle size={20} />
                                {contact.buttonText}
                            </a>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface border border-white/5 rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-400 text-sm mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-400 text-sm mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-400 text-sm mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="+1 234 567 8900"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-400 text-sm mb-2">
                                        Your Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us about your dream Bali trip..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full btn-primary flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={18} />
                                    Send via WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
