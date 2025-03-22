
import { trackingConfig } from "./siteConfig";

/**
 * Initialize all tracking scripts
 * This should be called once when the app loads
 */
export const initializeTracking = (): void => {
  // Initialize Google Analytics (GA4)
  initGA();
  
  // Initialize Google Tag Manager
  initGTM();
  
  // Initialize Facebook Pixel
  initFBPixel();
  
  // Initialize LinkedIn Insight Tag
  initLinkedInTag();
  
  console.log("All tracking initialized");
};

/**
 * Track a page view
 * @param path - The current path being viewed
 * @param title - The page title
 */
export const trackPageView = (path: string, title: string): void => {
  // Google Analytics page view tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', trackingConfig.gaTrackingId, {
      page_path: path,
      page_title: title,
    });
  }
  
  console.log(`Page view tracked: ${path} - ${title}`);
};

/**
 * Track a conversion event
 * @param eventName - Name of the event (use from trackingConfig.conversionEvents)
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, any>): void => {
  // Google Analytics event tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
  
  // Google Tag Manager event tracking
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }
  
  console.log(`Event tracked: ${eventName}`, eventParams);
};

// Private initialization methods

// Initialize Google Analytics
const initGA = (): void => {
  // Dummy Google Analytics initialization code
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingConfig.gaTrackingId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      (window.dataLayer as any).push(arguments);
    }
    (window as any).gtag = gtag;
    gtag('js', new Date());
    gtag('config', trackingConfig.gaTrackingId);
    
    console.log("Google Analytics initialized");
  }
};

// Initialize Google Tag Manager
const initGTM = (): void => {
  // Dummy Google Tag Manager initialization code
  if (typeof window !== 'undefined') {
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      const f=d.getElementsByTagName(s)[0],
      j=d.createElement(s) as HTMLScriptElement,
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode?.insertBefore(j,f);
    })(window,document,'script','dataLayer',trackingConfig.gtmId);
    
    console.log("Google Tag Manager initialized");
  }
};

// Initialize Facebook Pixel
const initFBPixel = (): void => {
  // Dummy Facebook Pixel initialization code
  if (typeof window !== 'undefined') {
    (function(f,b,e,v,n,t,s){
      if(f.fbq)return;
      n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;
      n.push=n;
      n.loaded=!0;
      n.version='2.0';
      n.queue=[];
      t=b.createElement(e);
      t.async=!0;
      t.src=v;
      s=b.getElementsByTagName(e)[0];
      s.parentNode?.insertBefore(t,s);
    })(window as any, document,'script','https://connect.facebook.net/en_US/fbevents.js');
    (window as any).fbq('init', trackingConfig.fbPixelId);
    (window as any).fbq('track', 'PageView');
    
    console.log("Facebook Pixel initialized");
  }
};

// Initialize LinkedIn Insight Tag
const initLinkedInTag = (): void => {
  // Dummy LinkedIn Insight Tag initialization code
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    document.head.appendChild(script);
    
    (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
    (window as any)._linkedin_data_partner_ids.push(trackingConfig.linkedInTagId);
    
    console.log("LinkedIn Insight Tag initialized");
  }
};

// Define window dataLayer to avoid TypeScript errors
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
  }
}
