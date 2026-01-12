import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    name?: string;
    type?: string;
    path?: string;
    image?: string;
}

export const SEO = ({
    title = 'Tajul Islam | Digital Marketing Expert & Meta Ads Specialist',
    description = 'Looking for a Digital Marketing Specialist? Tajul Islam is a top-rated Meta Ads Expert and Paid Ad Expert in Dhaka, helping businesses 3X revenue. Portfolio inside.',
    keywords = 'Digital Marketing Specialist, Digital Marketing Expert, Meta Ads Expert, Paid Ad Expert, Facebook Ads Specialist, Media Buyer, PPC Expert, Digital Marketing Portfolio, Tajul Islam, Dhaka, Bangladesh',
    name = 'Tajul Islam',
    type = 'website',
    path = '/',
    image = '/opengraph-image.png'
}: SEOProps) => {
    const siteUrl = 'https://tajulislam.com';
    const fullUrl = `${siteUrl}${path}`;

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://tajulislam.com/#person",
                "name": "Tajul Islam",
                "jobTitle": "Digital Marketing Expert",
                "url": siteUrl,
                "sameAs": [
                    "https://facebook.com/tajulislam",
                    "https://linkedin.com/in/tajulislam",
                    "https://twitter.com/TajulIslam"
                ],
                "image": `${siteUrl}${image}`,
                "description": "Tajul Islam is a certified Digital Marketing Specialist and Meta Ads Expert helping businesses grow through paid advertising."
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://tajulislam.com/#service",
                "name": "Tajul Islam - Digital Marketing & Meta Ads",
                "url": siteUrl,
                "logo": `${siteUrl}${image}`,
                "image": `${siteUrl}${image}`,
                "description": "Premium Digital Marketing and Paid Ads services by Tajul Islam. Specializing in Meta Ads, ROAS optimization, and Scaling strategies.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dhaka",
                    "addressCountry": "Bangladesh"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 23.8103,
                    "longitude": 90.4125
                },
                "priceRange": "$$",
                "telephone": "+880-1568619196"
            }
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <meta name='author' content={name} />
            <link rel='canonical' href={fullUrl} />

            {/* Facebook Open Graph */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={fullUrl} />
            <meta property='og:site_name' content={name} />
            <meta property='og:image' content={image} />

            {/* Twitter Cards */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:creator' content={name} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};
