/**
 * Enhanced SEO Component for React 19
 * Uses React 19's native hoisting feature to inject title and meta tags into <head>
 * Includes JSON-LD structured data for rich snippets
 */

import { siteConfig } from '../data/site-config';

export default function SEO({
    title,
    description,
    image,
    url,
    type = 'website',
    keywords = null,
    article = null, // For blog posts: { publishedTime, author, tags }
    tour = null, // For tour pages: { price, duration, rating, location }
    breadcrumbs = null // Array of { name, url }
}) {
    const { seo, siteName, whatsapp } = siteConfig.global;

    // Build final values with fallbacks
    const finalTitle = title
        ? seo.titleTemplate.replace('%s', title)
        : seo.defaultTitle;
    const finalDescription = description || seo.defaultDescription;
    const finalImage = image || seo.defaultImage;
    const finalUrl = url ? `${seo.siteUrl}${url}` : seo.siteUrl;
    const finalType = type || seo.type;
    const finalKeywords = keywords || 'Bali tours, full day tours, Bali travel, cultural tours, Bali vacation, Indonesian tourism, Ubud tours, temple tours, Bali packages';

    // Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'TravelAgency',
        name: siteName,
        url: seo.siteUrl,
        logo: finalImage,
        description: seo.defaultDescription,
        telephone: `+${whatsapp}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ubud',
            addressRegion: 'Bali',
            addressCountry: 'ID'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -8.5069,
            longitude: 115.2625
        },
        priceRange: '$$',
        sameAs: [
            `https://wa.me/${whatsapp}`
        ]
    };

    // WebSite Schema (for homepage)
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: seo.siteUrl,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${seo.siteUrl}/packages?search={search_term_string}`,
            'query-input': 'required name=search_term_string'
        }
    };

    // Article Schema (for blog posts)
    const articleSchema = article ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description: finalDescription,
        image: finalImage,
        datePublished: article.publishedTime,
        author: {
            '@type': 'Person',
            name: article.author
        },
        publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: {
                '@type': 'ImageObject',
                url: finalImage
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': finalUrl
        }
    } : null;

    // Tour/Product Schema
    const tourSchema = tour ? {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: title,
        description: finalDescription,
        image: finalImage,
        url: finalUrl,
        touristType: 'Cultural tourism',
        provider: {
            '@type': 'TravelAgency',
            name: siteName
        },
        offers: {
            '@type': 'Offer',
            price: tour.price?.replace(/[^0-9]/g, '') || '0',
            priceCurrency: 'IDR',
            availability: 'https://schema.org/InStock'
        },
        ...(tour.duration && { duration: tour.duration }),
        ...(tour.location && {
            itinerary: {
                '@type': 'Place',
                name: tour.location,
                address: {
                    '@type': 'PostalAddress',
                    addressRegion: 'Bali',
                    addressCountry: 'ID'
                }
            }
        }),
        ...(tour.rating && {
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: parseFloat(tour.rating) || 4.8,
                bestRating: 5,
                ratingCount: 100
            }
        })
    } : null;

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: `${seo.siteUrl}${crumb.url}`
        }))
    } : null;

    // Combine schemas
    const schemas = [
        organizationSchema,
        type === 'website' && url === '/' ? websiteSchema : null,
        articleSchema,
        tourSchema,
        breadcrumbSchema
    ].filter(Boolean);

    return (
        <>
            {/* Primary Meta Tags - React 19 will hoist these to <head> */}
            <title>{finalTitle}</title>
            <meta name="title" content={finalTitle} />
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />
            <meta name="author" content={siteName} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

            {/* Geo Location Tags for Local SEO */}
            <meta name="geo.region" content="ID-BA" />
            <meta name="geo.placename" content="Bali, Indonesia" />
            <meta name="geo.position" content="-8.5069;115.2625" />
            <meta name="ICBM" content="-8.5069, 115.2625" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={finalType} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={seo.locale} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalUrl} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
            {seo.twitterHandle && (
                <meta name="twitter:site" content={seo.twitterHandle} />
            )}

            {/* Article specific meta tags */}
            {article && (
                <>
                    <meta property="article:published_time" content={article.publishedTime} />
                    {article.author && <meta property="article:author" content={article.author} />}
                    {article.tags && article.tags.map((tag, index) => (
                        <meta key={index} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={finalUrl} />

            {/* Alternate language (for future i18n) */}
            <link rel="alternate" hrefLang="en" href={finalUrl} />
            <link rel="alternate" hrefLang="x-default" href={finalUrl} />

            {/* JSON-LD Structured Data */}
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

