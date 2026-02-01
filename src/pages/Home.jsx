import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight, Play } from 'lucide-react';
import { siteConfig } from '../data/site-config';
import { getIcon } from '../utils/iconMap';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';

export default function Home() {
    const { hero, features, testimonials, bookingSteps } = siteConfig.pages.home;
    const featuredTours = siteConfig.tours.filter(tour => tour.featured).slice(0, 4);

    return (
        <>
            <SEO
                title={null} // Use default title for homepage
                description={hero.description}
                url="/"
            />
            <div className="min-h-screen">
                {/* Hero Section */}
                <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={hero.image}
                            alt="Bali Paradise"
                            className="w-full h-full object-cover brightness-[0.85]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full mt-20">
                            <div className="w-full md:w-3/4 animate-fade-in-up">
                                <h1 className="text-6xl md:text-8xl font-black text-white leading-tight uppercase tracking-tighter hero-text-shadow mb-4">
                                    {hero.title}<br />{hero.subtitle}
                                </h1>
                                <p className="text-white/80 text-lg max-w-xl mb-8">
                                    {hero.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {hero.cta.map((button, index) => (
                                        <Link
                                            key={index}
                                            to={button.href}
                                            className={button.variant === 'primary' ? 'btn-primary' : 'btn-outline'}
                                        >
                                            {button.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Slide indicators */}
                            <div className="hidden md:flex flex-col items-end space-y-4 text-gray-400 font-light text-sm absolute right-12 top-1/3">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div
                                        key={num}
                                        className={`hover:text-white cursor-pointer transition-colors ${num === 3 ? 'text-white font-bold text-2xl flex items-center gap-2' : ''}`}
                                    >
                                        0{num}
                                        {num === 3 && <span className="w-8 h-[2px] bg-white inline-block" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Search Bar Section */}
                <section className="bg-surface py-8 md:py-16 relative z-20 -mt-2">
                    <div className="container mx-auto px-4 md:px-12">
                        {/* <div className="relative -top-20 md:-top-28 bg-surface rounded-full shadow-2xl flex flex-col md:flex-row overflow-hidden max-w-4xl mx-auto border border-white/10">
                        <div className="flex-1 flex items-center justify-between px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
                            <span className="font-bold text-white uppercase text-sm tracking-wide">Location</span>
                            <ChevronRight className="text-gray-400 group-hover:rotate-90 transition-transform" size={20} />
                        </div>
                        <div className="flex-1 flex items-center justify-between px-6 py-4 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
                            <span className="font-bold text-white uppercase text-sm tracking-wide">Type</span>
                            <ChevronRight className="text-gray-400 group-hover:rotate-90 transition-transform" size={20} />
                        </div>
                        <div className="flex-1 flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors cursor-pointer">
                            <span className="font-bold text-white uppercase text-sm tracking-wide">Destination</span>
                        </div>
                        <Link
                            to="/packages"
                            className="bg-primary hover:bg-opacity-80 text-white font-bold uppercase text-xs md:text-sm px-8 py-4 md:py-0 transition-colors flex items-center justify-center gap-2 text-center whitespace-nowrap"
                        >
                            Choose Your Travel
                        </Link>
                    </div> */}

                        {/* Featured Tours Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-0 md:mt-8">
                            {featuredTours.slice(0, 3).map((tour, index) => (
                                <div
                                    key={tour.id}
                                    className={index === 1 ? 'md:-mt-12 z-10' : ''}
                                >
                                    <TourCard tour={tour} />
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-8">
                            <Link
                                to="/packages"
                                className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
                            >
                                <span className="uppercase text-sm font-medium tracking-wider">View All Packages</span>
                                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="bg-black py-20">
                    <div className="container mx-auto px-6 md:px-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {features.title}
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                {features.subtitle}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
                            {features.stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="flex justify-center mb-2 text-primary">
                                        {getIcon(stat.icon, { size: 32 })}
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.cards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-surface border border-white/5 rounded-lg p-8 card-hover"
                                >
                                    <div className="text-primary mb-4">
                                        {getIcon(card.icon, { size: 40 })}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                {testimonials.items.length > 0 && (
                    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden py-20">
                        <div className="absolute inset-0 z-0">
                            <img
                                src={testimonials.backgroundImage}
                                alt="Bali Temple"
                                className="w-full h-full object-cover opacity-40"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                        </div>

                        <div className="container mx-auto px-6 md:px-12 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                        {testimonials.title}
                                    </h2>

                                    <div className="space-y-6">
                                        {testimonials.items.map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-6"
                                            >
                                                <div className="flex items-center gap-4 mb-4">
                                                    <img
                                                        src={item.avatar}
                                                        alt={item.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <div className="text-white font-medium">{item.name}</div>
                                                        <div className="flex gap-1 text-yellow-400">
                                                            {[...Array(item.rating)].map((_, i) => (
                                                                <Star key={i} size={14} fill="currentColor" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="text-gray-300">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="hidden md:flex flex-col gap-6">
                                    {testimonials.gallery.map((item, index) => (
                                        <div key={index} className={`relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer border border-white/10 h-64 ${index === 1 ? 'mr-12' : ''} transform hover:-translate-x-2 transition-transform`}>
                                            <img
                                                src={item.image}
                                                alt={item.label}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                                    <Play className="text-white ml-1" size={32} />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 left-4">
                                                <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/50 px-2 py-1 rounded">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Booking Steps Section */}
                <section className="bg-black py-20">
                    <div className="container mx-auto px-6 md:px-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                            {bookingSteps.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {bookingSteps.steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        {getIcon(step.icon, { size: 36 })}
                                    </div>
                                    <div className="text-gray-500 text-sm mb-2">Step {index + 1}</div>
                                    <h3 className="text-white text-xl font-bold">{step.title}</h3>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/packages" className="btn-primary inline-block">
                                Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
