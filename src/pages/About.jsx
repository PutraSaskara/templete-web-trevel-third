import { Link } from 'react-router-dom';
import { siteConfig } from '../data/site-config';
import { getIcon } from '../utils/iconMap';
import SEO from '../components/SEO';

export default function About() {
    const { about } = siteConfig.pages;

    return (
        <>
            <SEO
                title="About Us"
                description={about.description}
                url="/about"
                image={about.image}
            />
            <div className="min-h-screen pt-32 pb-20">
                {/* Hero Section */}
                <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden mb-20">
                    <div className="absolute inset-0">
                        <img
                            src={about.image}
                            alt="About MelaliBali"
                            className="w-full h-full object-cover brightness-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background" />
                    </div>

                    <div className="relative z-10 container mx-auto px-6 md:px-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
                            {about.title}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl animate-fade-in-up stagger-1">
                            {about.subtitle}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {about.description}
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Our team of local guides, travel experts, and hospitality professionals work together to create journeys that go beyond typical tourism. We connect you with local artisans, take you to hidden temples, and introduce you to the warm hearts of Balinese families.
                            </p>
                            <Link to="/contact" className="btn-primary inline-block">
                                Get In Touch
                            </Link>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=2070&auto=format&fit=crop"
                                alt="Bali Rice Terraces"
                                className="rounded-lg shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-lg shadow-xl hidden md:block">
                                <div className="text-4xl font-bold mb-2">12+</div>
                                <div className="text-sm uppercase tracking-wider">Years of Excellence</div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="bg-surface border border-white/5 rounded-lg p-12 mb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {about.stats.map((stat, index) => (
                                <div key={index} className="p-6">
                                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400 uppercase tracking-wider text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Values Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-surface border border-white/5 rounded-lg p-8 text-center card-hover">
                                <div className="text-primary mb-4 flex justify-center">
                                    {getIcon('Heart', { size: 40 })}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">Authentic Experiences</h3>
                                <p className="text-gray-400">
                                    We believe in real connections with local culture, not manufactured tourist attractions.
                                </p>
                            </div>
                            <div className="bg-surface border border-white/5 rounded-lg p-8 text-center card-hover">
                                <div className="text-primary mb-4 flex justify-center">
                                    {getIcon('Leaf', { size: 40 })}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">Sustainable Tourism</h3>
                                <p className="text-gray-400">
                                    Every tour supports local communities and preserves Bali's natural beauty for generations.
                                </p>
                            </div>
                            <div className="bg-surface border border-white/5 rounded-lg p-8 text-center card-hover">
                                <div className="text-primary mb-4 flex justify-center">
                                    {getIcon('Users', { size: 40 })}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-3">Local Expertise</h3>
                                <p className="text-gray-400">
                                    Our guides are born and raised in Bali, offering insights that no guidebook can provide.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
