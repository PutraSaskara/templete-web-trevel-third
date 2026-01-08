import { useParams, Link, useNavigate } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

export default function BlogPost() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Find article by slug
    const article = siteConfig.articles.find(a => a.slug === slug);

    if (!article) {
        return (
            <>
                <SEO title="Article Not Found" />
                <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
                        <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
                        <Link to="/blog" className="btn-primary inline-block">
                            View All Articles
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    // Get related articles (same category or random)
    const relatedArticles = siteConfig.articles
        .filter(a => a.id !== article.id)
        .filter(a => article.category ? a.category === article.category : true)
        .slice(0, 3);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.excerpt,
                url: window.location.href
            }).catch(() => {
                // Fallback - copy to clipboard
                navigator.clipboard.writeText(window.location.href);
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <>
            <SEO
                title={article.title}
                description={article.excerpt}
                url={`/blog/${article.slug}`}
                image={article.image}
                type="article"
                article={{
                    publishedTime: article.date,
                    author: article.author,
                    tags: article.category ? [article.category] : []
                }}
            />
            <div className="min-h-screen pt-24 pb-20">
                {/* Hero Image */}
                <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-black/40" />

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
                    <article className="max-w-3xl mx-auto">
                        <div className="bg-surface border border-white/5 rounded-lg p-8 md:p-12 mb-8">
                            {/* Category Badge */}
                            {article.category && (
                                <span className="bg-primary/20 text-primary text-xs font-bold uppercase px-3 py-1 rounded mb-4 inline-block">
                                    {article.category}
                                </span>
                            )}

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{article.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{article.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} />
                                    <span>{article.readTime || '5 min'} read</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                {article.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                                {article.excerpt}
                            </p>

                            {/* Content */}
                            <div
                                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-primary prose-strong:text-white prose-li:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: article.content }}
                            />

                            {/* Share */}
                            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                                <div className="text-gray-400">
                                    <span className="text-white font-medium">Written by</span> {article.author}
                                </div>
                                <button
                                    onClick={handleShare}
                                    className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
                                >
                                    <Share2 size={18} />
                                    Share
                                </button>
                            </div>
                        </div>
                    </article>
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="container mx-auto px-6 md:px-12 mt-20">
                        <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedArticles.map((relatedArticle) => (
                                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
