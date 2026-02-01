import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

export default function Blog() {
    const { blog } = siteConfig.pages;
    const { articles } = siteConfig;

    return (
        <>
            <SEO
                title="Bali Travel Blog"
                description={blog.subtitle}
                url="/blog"
            />
            <div className="min-h-screen pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden mb-12">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1523413363572-3c7d81c746d4?q=80&w=2070&auto=format&fit=crop"
                            alt="Bali Blog"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                            {blog.title}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up stagger-1">
                            {blog.subtitle}
                        </p>
                    </div>
                </section>

                {/* Featured Article */}
                {articles.length > 0 && (
                    <section className="container mx-auto px-6 md:px-12 mb-16 animate-scale-in stagger-2">
                        <Link
                            to={`/blog/${articles[0].slug}`}
                            className="block relative h-[500px] overflow-hidden rounded-lg group cursor-pointer hover:shadow-2xl transition-shadow duration-500"
                        >
                            <img
                                src={articles[0].image}
                                alt={articles[0].title}
                                className="w-full h-full object-cover img-zoom"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                <span className="bg-primary text-white text-xs font-bold uppercase px-3 py-1 rounded mb-4 inline-block">
                                    Featured
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {articles[0].title}
                                </h2>
                                <p className="text-gray-300 max-w-2xl mb-4">
                                    {articles[0].excerpt}
                                </p>
                                <div className="flex items-center gap-4 text-gray-400 text-sm">
                                    <span>{articles[0].date}</span>
                                    <span>•</span>
                                    <span>By {articles[0].author}</span>
                                    {articles[0].readTime && (
                                        <>
                                            <span>•</span>
                                            <span>{articles[0].readTime} read</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Link>
                    </section>
                )}

                {/* Articles Grid */}
                <section className="container mx-auto px-6 md:px-12">
                    <h2 className="text-2xl font-bold text-white mb-8 animate-slide-in-left stagger-3">Latest Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up stagger-4">
                        {articles.slice(1).map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
