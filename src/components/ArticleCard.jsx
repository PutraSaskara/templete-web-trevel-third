import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export default function ArticleCard({ article }) {
    return (
        <Link
            to={`/blog/${article.slug}`}
            className="group relative overflow-hidden rounded-lg cursor-pointer card-hover block bg-surface border border-white/5"
        >
            <div className="relative h-[200px] overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="p-6">
                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.author}</span>
                </div>

                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                </div>
            </div>
        </Link>
    );
}
