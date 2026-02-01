import { useParams, Link, useNavigate } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { MapPin, Star, Check, ArrowLeft, MessageCircle, Calendar, Users, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function TourDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { whatsapp, siteName } = siteConfig.global;

    // Find tour by slug
    const tour = siteConfig.tours.find(t => t.slug === slug);

    if (!tour) {
        return (
            <>
                <SEO title="Tour Not Found" />
                <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Tour Not Found</h1>
                        <p className="text-gray-400 mb-8">The tour you're looking for doesn't exist.</p>
                        <Link to="/packages" className="btn-primary inline-block">
                            View All Tours
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    const handleBooking = () => {
        const message = encodeURIComponent(
            `*Booking Inquiry - ${tour.title}*\n\n` +
            `Hi, I'm interested in booking the "${tour.title}" tour.\n\n` +
            `*Price:* ${tour.price}\n` +
            `*Duration:* ${tour.duration || 'Full Day'}\n\n` +
            `Please provide more details about availability and booking process.`
        );
        window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
    };

    // Get related tours
    const relatedTours = siteConfig.tours
        .filter(t => t.id !== tour.id && t.location === tour.location)
        .slice(0, 3);

    return (
        <>
            <SEO
                title={tour.title}
                description={tour.description}
                url={`/packages/${tour.slug}`}
                image={tour.image}
                tour={{
                    price: tour.price,
                    duration: tour.duration,
                    rating: tour.rating,
                    location: tour.location
                }}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Packages', url: '/packages' },
                    { name: tour.title, url: `/packages/${tour.slug}` }
                ]}
            />
            <div className="min-h-screen pt-24 pb-20">
                {/* Hero Image */}
                <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />

                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-8 left-6 md:left-12 flex items-center gap-2 text-white hover:text-primary transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>
                </section>

                {/* Content */}
                <section className="container mx-auto px-6 md:px-12 -mt-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-surface border border-white/5 rounded-lg p-8 mb-8 animate-fade-in-up">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {tour.featured && (
                                        <span className="bg-primary/20 text-primary text-xs font-bold uppercase px-3 py-1 rounded">
                                            Featured
                                        </span>
                                    )}
                                    {tour.duration && (
                                        <span className="bg-secondary/20 text-secondary text-xs font-bold uppercase px-3 py-1 rounded flex items-center gap-1">
                                            <Clock size={12} />
                                            {tour.duration}
                                        </span>
                                    )}
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                    {tour.title}
                                </h1>
                                <p className="text-xl text-gray-400 mb-4">{tour.subTitle}</p>

                                <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                                    {tour.location && (
                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} className="text-primary" />
                                            <span>{tour.location}</span>
                                        </div>
                                    )}
                                    {tour.rating && (
                                        <div className="flex items-center gap-2">
                                            <Star size={18} className="text-yellow-400" fill="currentColor" />
                                            <span>{tour.rating}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-gray-300 text-lg leading-relaxed">
                                        {tour.description}
                                    </p>
                                </div>
                            </div>

                            {/* Highlights */}
                            {tour.highlights && tour.highlights.length > 0 && (
                                <div className="bg-surface border border-white/5 rounded-lg p-8 mb-8 animate-fade-in-up stagger-2">
                                    <h2 className="text-2xl font-bold text-white mb-6">Tour Highlights</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {tour.highlights.map((highlight, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                                                    <Check size={16} />
                                                </div>
                                                <span className="text-gray-300">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Includes */}
                            {tour.includes && tour.includes.length > 0 && (
                                <div className="bg-surface border border-white/5 rounded-lg p-8 animate-fade-in-up stagger-3">
                                    <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {tour.includes.map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                                                    <Check size={16} />
                                                </div>
                                                <span className="text-gray-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-surface border border-white/5 rounded-lg p-8 sticky top-32 animate-slide-in-right stagger-2">
                                <div className="text-center mb-6">
                                    <div className="text-gray-400 text-sm mb-1">Starting from</div>
                                    <div className="text-3xl font-bold text-primary">{tour.price}</div>
                                    <div className="text-gray-500 text-sm">per person</div>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {tour.duration && (
                                        <div className="flex items-center gap-3 text-gray-400">
                                            <Clock size={18} />
                                            <span>{tour.duration} full day experience</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Calendar size={18} />
                                        <span>Flexible booking dates</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <Users size={18} />
                                        <span>Private & group options</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleBooking}
                                    className="w-full bg-primary hover:bg-opacity-80 text-white font-bold uppercase text-sm px-8 py-4 rounded transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={18} />
                                    Book via WhatsApp
                                </button>

                                <p className="text-gray-500 text-xs text-center mt-4">
                                    Free cancellation up to 48 hours before the tour
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Tours */}
                {relatedTours.length > 0 && (
                    <section className="container mx-auto px-6 md:px-12 mt-20">
                        <h2 className="text-2xl font-bold text-white mb-8">You May Also Like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedTours.map((relatedTour) => (
                                <Link
                                    key={relatedTour.id}
                                    to={`/packages/${relatedTour.slug}`}
                                    className="group relative h-[300px] overflow-hidden rounded-lg"
                                >
                                    <img
                                        src={relatedTour.image}
                                        alt={relatedTour.title}
                                        className="w-full h-full object-cover img-zoom"
                                    />
                                    <div className="absolute inset-0 gradient-overlay" />
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <h3 className="text-white text-lg font-bold">{relatedTour.title}</h3>
                                        <p className="text-primary">{relatedTour.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
