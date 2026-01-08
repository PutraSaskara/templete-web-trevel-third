/**
 * SEO Component for React 19
 * Uses React 19's native hoisting feature to inject title and meta tags into <head>
 * No external library needed - React 19 automatically hoists these elements
 */

import { siteConfig } from '../data/site-config';

export default function SEO({
    title,
    description,
    image,
    url,
    type = 'website',
    article = null // For blog posts: { publishedTime, author, tags }
}) {
    const { seo, siteName } = siteConfig.global;

    // Build final values with fallbacks
    const finalTitle = title
        ? seo.titleTemplate.replace('%s', title)
        : seo.defaultTitle;
    const finalDescription = description || seo.defaultDescription;
    const finalImage = image || seo.defaultImage;
    const finalUrl = url ? `${seo.siteUrl}${url}` : seo.siteUrl;
    const finalType = type || seo.type;

    return (
        <>
            {/* Primary Meta Tags - React 19 will hoist these to <head> */}
            <title>{finalTitle}</title>
            <meta name="title" content={finalTitle} />
            <meta name="description" content={finalDescription} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={finalType} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
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
        </>
    );
}
