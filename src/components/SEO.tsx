
import React from "react";
import { Helmet } from "react-helmet-async";
import { seoConfig } from "@/lib/siteConfig";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
  twitterCard?: "summary" | "summary_large_image";
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  twitterCard = "summary_large_image",
}: SEOProps) => {
  const siteTitle = title 
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;
  
  const siteDescription = description || seoConfig.defaultDescription;
  const siteUrl = canonical ? `${seoConfig.siteUrl}${canonical}` : seoConfig.siteUrl;
  const siteImage = ogImage || seoConfig.ogImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={seoConfig.siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
};

export default SEO;
