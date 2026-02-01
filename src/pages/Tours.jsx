import { useState } from 'react';
import { siteConfig } from '../data/site-config';
import TourCard from '../components/TourCard';
import SEO from '../components/SEO';
import { Search, Filter } from 'lucide-react';

export default function Tours() {
    const { tours } = siteConfig;
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('all');

    // Filter tours
    const filteredTours = tours.filter(tour => {
        const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tour.location?.toLowerCase().includes(searchQuery.toLowerCase());

        if (filter === 'featured') return matchesSearch && tour.featured;
        if (filter === 'packages') return matchesSearch && tour.isPackage;
        if (filter === 'tours') return matchesSearch && !tour.isPackage;
        return matchesSearch;
    });

    return (
        <>
            <SEO
                title="Full Day Bali Tours & Packages"
                description="Discover our curated full-day Bali tours. From Ubud cultural immersion to Nusa Penida adventures, explore authentic Balinese experiences with local guides."
                url="/packages"
            />
            <div className="min-h-screen pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden mb-12">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?q=80&w=1974&auto=format&fit=crop"
                            alt="Bali Tours"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                            Explore Full Day Tours
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up stagger-1">
                            Discover authentic Balinese experiences curated by local experts
                        </p>
                    </div>
                </section>

                {/* Filters */}
                <section className="container mx-auto px-6 md:px-12 mb-12 animate-fade-in-up stagger-2">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96 animate-slide-in-left stagger-3">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search tours..."
                                className="w-full bg-surface border border-white/10 rounded-full pl-12 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex gap-2 flex-wrap justify-center animate-slide-in-right stagger-3">
                            {[
                                { key: 'all', label: 'All' },
                                { key: 'featured', label: 'Featured' },
                                { key: 'tours', label: 'Day Tours' },
                                { key: 'packages', label: 'Packages' },
                            ].map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => setFilter(item.key)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-all ${filter === item.key
                                        ? 'bg-primary text-white'
                                        : 'bg-surface border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tours Grid */}
                <section className="container mx-auto px-6 md:px-12">
                    {filteredTours.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="text-gray-400 mb-4">
                                <Filter size={48} className="mx-auto mb-4 opacity-50" />
                            </div>
                            <h3 className="text-white text-xl font-bold mb-2">No tours found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
}
