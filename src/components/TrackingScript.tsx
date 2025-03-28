
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initializeTracking, trackPageView } from "@/lib/tracking";

const TrackingScript = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize tracking scripts on first load
    initializeTracking();
  }, []);

  useEffect(() => {
    // Track page view on route change
    const currentPath = location.pathname;
    const pageTitle = document.title;
    trackPageView(currentPath, pageTitle);
  }, [location]);

  return null; // This component doesn't render anything
};

export default TrackingScript;
