"use client";

import React, { useEffect, useRef } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const footerRef = useRef(null);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // GSAP Animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          // Footer Columns Animation
          gsap.fromTo(
            ".footer-column",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
              },
            }
          );

          // Footer Bottom Animation
          gsap.fromTo(
            ".footer-bottom",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
              },
            }
          );

          // Social Icons Animation
          gsap.fromTo(
            ".social-icon",
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
              },
            }
          );

          // Floating Animation for Logo
          gsap.to(".footer-logo", {
            y: -5,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      });
    }
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-overlay opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/5 via-transparent to-orange-900/5"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="footer-column opacity-0">
            <Image
              src="/images/jefcomlogo.jpg"
              alt="JEFCOM Logo"
              width={100}
              height={100}
            />
            <p className="text-sm text-gray-400 mb-4 font-semibold leading-relaxed mt-4">
              Leading electrical and allied service institution delivering
              unequaled value-adding experience.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="social-icon opacity-0 w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-green-700 hover:to-green-900 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-600 box-shadow-glow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="social-icon opacity-0 w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-green-700 hover:to-green-900 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-600 box-shadow-glow"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="social-icon opacity-0 w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-green-700 hover:to-green-900 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-green-600 box-shadow-glow"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column opacity-0">
            <h3 className="text-white font-black text-lg mb-4 heading-font">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Products", href: "/products" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Careers", href: "/careers" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-semibold flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column opacity-0">
            <h3 className="text-white font-black text-lg mb-4 heading-font">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Electrical Design", href: "/services#electrical" },
                { name: "Home Automation", href: "/services#automation" },
                { name: "Solar Energy", href: "/services#solar" },
                { name: "Control Panels", href: "/services#control" },
                { name: "Security Systems", href: "/services#security" },
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm font-semibold flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column opacity-0">
            <h3 className="text-white font-black text-lg mb-4 heading-font">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 group">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                <span className="text-sm text-gray-400 font-semibold leading-relaxed">
                  10, Badejo Kalesanwo Street, Matori Industrial Area, Lagos,
                  Nigeria
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                <div className="text-sm text-gray-400 font-semibold">
                  <a
                    href="tel:+2348033014900"
                    className="hover:text-orange-500 transition-colors block"
                  >
                    +234 803 301 4900
                  </a>
                  <a
                    href="tel:+2348099073333"
                    className="hover:text-orange-500 transition-colors block"
                  >
                    +234 809 907 3333
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <a
                  href="mailto:info@jefcomgroup.com"
                  className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-semibold"
                >
                  info@jefcomgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 footer-bottom opacity-0">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 font-semibold">
              © {new Date().getFullYear()} Jefcom Integrated Systems Ltd. All
              rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="/privacy"
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-semibold"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors font-semibold"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 box-shadow-glow border-2 border-orange-400 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
