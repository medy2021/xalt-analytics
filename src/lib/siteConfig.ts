
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
  gaTrackingId: "G-VV0YPQ0FDL", // Current GA4 tracking ID
  
  // Google Tag Manager ID
  gtmId: "GTM-M3GK972K", // Updated GTM ID
  
  // Facebook Pixel ID - set to empty string if not available
  fbPixelId: "", // Remove placeholder and set to empty string if not using
  
  // LinkedIn Insight Tag ID
  linkedInTagId: "XXXXXXXX", // Replace with your actual LinkedIn Tag ID
  
  // Conversion tracking events
  conversionEvents: {
    leadCaptureFormSubmit: "lead_capture_submit",
    downloadGuide: "download_guide",
    ctaClick: "cta_click",
  }
};


