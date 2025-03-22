
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/images/xalt-logo.png" 
                alt="Xalt Analytics Logo" 
                className="h-8 mr-2" 
              />
              {/* <span className="text-xl font-bold text-primary">Xalt Analytics</span> */}
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About Us
            </a>
           
            <Button variant="default" size="sm">
              Get a Demo
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              About Us
            </a>
         
            <Button variant="default" size="sm" className="w-full">
              Get a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

