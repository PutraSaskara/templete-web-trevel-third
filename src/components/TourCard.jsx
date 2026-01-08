import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';

export default function TourCard({ tour }) {
    return (
        <Link
            to={`/packages/${tour.slug}`}
            className="group relative overflow-hidden rounded-lg cursor-pointer card-hover block"
        >
            <div className="relative h-[400px] md:h-[450px] overflow-hidden">
                <img
                    src={tour.image}
                    alt={tour.title}
                    className="absolute inset-0 w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 gradient-overlay opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Featured badge */}
                {tour.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded">
                        Featured
                    </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                        <MapPin size={14} />
                        <span>{tour.location}</span>
                    </div>
                    <h3 className="text-white text-xl font-bold tracking-wide mb-1">
                        {tour.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{tour.subTitle}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-yellow-400">
                            <Star size={14} fill="currentColor" />
                            <span className="text-white text-sm">{tour.rating}</span>
                        </div>
                        <div className="text-primary font-bold">{tour.price}</div>
                    </div>

                    <div className="h-0.5 w-12 bg-white mt-4 group-hover:w-full transition-all duration-500 line-expand" />
                </div>
            </div>
        </Link>
    );
}
