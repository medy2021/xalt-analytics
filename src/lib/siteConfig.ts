
/**
 * Centralized site configuration for SEO and tracking
 * Update these values with your actual tracking IDs and SEO information
 */

// SEO Configuration
export const seoConfig = {
  defaultTitle: "Xalt Analytics - Unstructured Data Analytics Solutions",
  defaultDescription: "Transform unstructured data into actionable business intelligence with Xalt Analytics. Specialized in text, image, video, and audio analytics.",
  siteName: "Xalt Analytics",
  siteUrl: "https://www.xaltanalytics.com", // Replace with your actual domain
  twitterHandle: "@xaltanalytics",
  ogImage: "https://www.xaltanalytics.com/og-image.png", // Replace with your actual OG image path
};

// Analytics & Tracking Configuration
export const trackingConfig = {
  // Google Analytics Measurement ID (GA4)
  gaTrackingId: "G-XXXXXXXXXX", // Replace with your actual GA4 tracking ID
  
  // Google Tag Manager ID
  gtmId: "GTM-XXXXXXX", // Replace with your actual GTM ID
  
  // Facebook Pixel ID
  fbPixelId: "XXXXXXXXXX", // Replace with your actual Facebook Pixel ID
  
  // LinkedIn Insight Tag ID
  linkedInTagId: "XXXXXXXX", // Replace with your actual LinkedIn Tag ID
  
  // Conversion tracking events
  conversionEvents: {
    leadCaptureFormSubmit: "lead_capture_submit",
    downloadGuide: "download_guide",
    ctaClick: "cta_click",
  }
};
