"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Cpu,
  Plug,
  Sun,
  Shield,
  Power,
  Zap,
  Server,
  Battery,
} from "lucide-react";
import Image from "next/image";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const productsRef = useRef(null);
  const brandsRef = useRef(null);
  const qualityRef = useRef(null);
  const ctaRef = useRef(null);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "control", name: "Control Systems" },
    { id: "solar", name: "Solar Solutions" },
    { id: "electrical", name: "Electrical Fittings" },
    { id: "security", name: "Security Equipment" },
  ];

  const products = [
    {
      category: "control",
      icon: Cpu,
      name: "MCC Control Panels",
      description: "Motor Control Center panels for industrial applications",
      features: [
        "Custom ratings up to 3200A",
        "Rittal/Schneider enclosures",
        "Full safety modules",
        "Remote monitoring ready",
      ],
      brands: ["Schneider", "ABB", "Rittal"],
      image: "/images/controlpanel.jpg",
    },
    {
      category: "control",
      icon: Power,
      name: "Automatic Changeover Panels",
      description: "AMF panels for seamless power transition",
      features: [
        "Intelligent control systems",
        "Multiple input options",
        "Generator synchronization",
        "Sub-second switching",
      ],
      brands: ["Deep Sea Electronics", "ComAp", "Schneider"],
      image: "/images/changeover.jpg",
    },
    {
      category: "control",
      icon: Server,
      name: "Distribution Panels",
      description: "Power distribution boards for all applications",
      features: [
        "Modular design",
        "Up to 6300A capacity",
        "Customizable outputs",
        "Bus bar integration",
      ],
      brands: ["Schneider", "Nimel", "ABB"],
      image: "/images/distpanel.jpg",
    },
    {
      category: "solar",
      icon: Sun,
      name: "Solar PV Systems",
      description: "Complete solar power installations",
      features: [
        "10KW to 6MW capacity",
        "Grid-tied and off-grid",
        "Battery storage integration",
        "Smart monitoring",
      ],
      brands: ["Sigenergy", "Huawei", "SMA"],
      image: "/images/solar.jpg",
    },
    {
      category: "solar",
      icon: Battery,
      name: "Energy Storage Systems",
      description: "Advanced battery storage solutions",
      features: [
        "LiFePO4 technology",
        "Modular expansion",
        "20+ year lifespan",
        "Real-time monitoring",
      ],
      brands: ["Sigenergy", "Tesla", "BYD"],
      image: "/images/battery.jpg",
    },
    {
      category: "solar",
      icon: Zap,
      name: "Solar Inverters",
      description: "High-efficiency power conversion",
      features: [
        "String and hybrid inverters",
        "MPPT technology",
        "Grid compliance",
        "Remote monitoring",
      ],
      brands: ["Sigenergy", "SMA", "Fronius"],
      image: "/images/solarr.jpg",
    },
    {
      category: "electrical",
      icon: Plug,
      name: "Electrical Fittings",
      description: "Premium switches and socket outlets",
      features: [
        "Stainless steel finish",
        "1-3 gang options",
        "TV/data outlets",
        "Modern designs",
      ],
      brands: ["Schneider", "Legrand", "MK"],
      image: "/images/elecfittings.jpg",
    },
    {
      category: "electrical",
      icon: Zap,
      name: "Circuit Protection",
      description: "Comprehensive safety devices",
      features: [
        "MCBs and RCBOs",
        "Surge protectors",
        "Earth leakage breakers",
        "Motor starters",
      ],
      brands: ["Schneider", "ABB", "Siemens"],
      image: "/images/circuitprotector.jpg",
    },
    {
      category: "electrical",
      icon: Power,
      name: "Lighting Systems",
      description: "Energy-efficient lighting solutions",
      features: [
        "LED technology",
        "Modular designs",
        "Indoor/outdoor options",
        "Smart controls available",
      ],
      brands: ["Philips", "Osram", "GE Lighting"],
      image: "/images/lightingsystems.jpg",
    },
    {
      category: "security",
      icon: Shield,
      name: "CCTV Systems",
      description: "Advanced surveillance cameras",
      features: [
        "IP and analog options",
        "Night vision capability",
        "Cloud storage",
        "Mobile viewing",
      ],
      brands: ["Hikvision", "Dahua", "Axis"],
      image: "/images/securityy.jpg",
    },
    {
      category: "security",
      icon: Shield,
      name: "Access Control",
      description: "Smart access management systems",
      features: [
        "Biometric readers",
        "Hotel key cards",
        "Mobile credentials",
        "Audit trail logging",
      ],
      brands: ["ZKTeco", "HID", "Suprema"],
      image: "/images/accessmngt.jpg",
    },
    {
      category: "security",
      icon: Shield,
      name: "Alarm Systems",
      description: "Intrusion detection and fire alarms",
      features: [
        "Addressable technology",
        "Zone monitoring",
        "Remote alerts",
        "24/7 monitoring",
      ],
      brands: ["Gent", "Honeywell", "Bosch"],
      image: "/images/alarm.jpg",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // GSAP Animations
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          // Hero Animation
          gsap.fromTo(
            ".hero-title",
            { opacity: 0, y: 100, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power4.out",
              delay: 0.3,
            }
          );

          gsap.fromTo(
            ".hero-divider",
            { width: 0, opacity: 0 },
            {
              width: "96px",
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.8,
            }
          );

          gsap.fromTo(
            ".hero-description",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
          );

          // Filter Buttons
          gsap.fromTo(
            ".filter-button",
            { opacity: 0, y: -30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: filterRef.current,
                start: "top 80%",
              },
            }
          );

          // Floating Animation
          gsap.to(".float-icon", {
            y: -15,
            duration: 2.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
          });

          // Brands Animation
          gsap.fromTo(
            ".brand-card",
            { opacity: 0, scale: 0.5, rotation: -45 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: brandsRef.current,
                start: "top 70%",
              },
            }
          );

          // Quality Cards
          gsap.fromTo(
            ".quality-card",
            { opacity: 0, y: 80, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: qualityRef.current,
                start: "top 70%",
              },
            }
          );

          // CTA Animation
          gsap.fromTo(
            ".cta-content",
            { opacity: 0, scale: 0.9, y: 50 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ctaRef.current,
                start: "top 80%",
              },
            }
          );
        });
      });
    }
  }, []);

  // Re-animate products when filter changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;

        gsap.fromTo(
          ".product-card",
          { opacity: 0, scale: 0.5, rotationY: -90 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          }
        );
      });
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-gray-900">
          <div className="absolute inset-0 grid-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 hero-title opacity-0 leading-tight">
              Our <span className="gradient-text">Products</span>
            </h1>
            <div className="hero-divider w-0 h-1 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-semibold hero-description opacity-0 leading-relaxed">
              Premium electrical equipment and accessories from trusted global
              brands
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        ref={filterRef}
        className="py-10 bg-gradient-to-b from-gray-800 to-gray-900 border-b-2 border-orange-500/30 sticky top-20 z-40 backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-button opacity-0 px-6 py-3 rounded-xl font-black transition-all duration-300 relative overflow-hidden group heading-font tracking-wider ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white shadow-2xl scale-110 box-shadow-glow"
                    : "bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300 hover:text-white border-2 border-gray-600 hover:border-orange-500 hover:scale-105"
                }`}
              >
                <span className="relative z-10">{category.name}</span>
                {selectedCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-orange-500/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section
        ref={productsRef}
        className="py-28 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={index}
                  className="product-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden group border-2 border-gray-700 hover:border-orange-500 hover:scale-105"
                >
                  <div className="relative h-56 bg-gradient-to-br from-green-800 to-gray-800 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-gray-700 opacity-40 float-icon group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                    </div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                    <div className="absolute top-6 left-6">
                      <Icon className="w-16 h-16 text-white drop-shadow-2xl group-hover:scale-125 transition-transform" />
                    </div>
                  </div>

                  <div className="p-8 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <h3 className="text-2xl font-black text-white mb-3 heading-font group-hover:text-orange-400 transition-colors relative z-10">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-6 text-base leading-relaxed relative z-10">
                      {product.description}
                    </p>

                    <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm relative z-10">
                      Key Features:
                    </h4>
                    <ul className="space-y-3 mb-8 relative z-10">
                      {product.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-base text-gray-300 group/item"
                        >
                          <span className="text-orange-500 mr-3 text-xl group-hover/item:scale-125 transition-transform">
                            •
                          </span>
                          <span className="group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t-2 border-gray-700 pt-6 relative z-10">
                      <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-sm">
                        Trusted Brands:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.brands.map((brand, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-800 text-gray-300 rounded-lg text-sm font-bold border border-gray-600 hover:border-orange-500 hover:text-white transition-all"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section
        ref={brandsRef}
        className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-orange-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Trusted Brand <span className="gradient-text">Partners</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              We partner with world-class manufacturers to deliver quality and
              reliability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Schneider Electric",
              "ABB",
              "Rittal",
              "Sigenergy",
              "Deep Sea Electronics",
              "ComAp",
              "Hikvision",
              "Legrand",
              "Siemens",
              "Philips",
              "Huawei",
              "ZKTeco",
            ].map((brand, index) => (
              <div
                key={index}
                className="brand-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-5 flex items-center justify-center hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 transition-all duration-300 border-2 border-gray-700 hover:border-orange-500 hover:scale-110 hover:shadow-2xl hover:shadow-orange-500/20 group"
              >
                <span className="text-gray-300 font-black text-center text-base group-hover:text-white transition-colors heading-font">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section
        ref={qualityRef}
        className="py-28 bg-gradient-to-br from-green-900 via-green-800 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.3),transparent_70%)]"></div>
          <div className="absolute inset-0 grid-overlay opacity-15"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="quality-card opacity-0 text-center group">
              <div className="w-28 h-28 bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-orange-400/50 group-hover:scale-110 transition-all duration-300">
                <Shield className="w-14 h-14 float-icon" />
              </div>
              <h3 className="text-2xl font-black mb-4 heading-font group-hover:text-orange-400 transition-colors">
                Quality Guaranteed
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                All products meet international standards and certifications
              </p>
            </div>
            <div className="quality-card opacity-0 text-center group">
              <div className="w-28 h-28 bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-orange-400/50 group-hover:scale-110 transition-all duration-300">
                <Zap className="w-14 h-14 float-icon" />
              </div>
              <h3 className="text-2xl font-black mb-4 heading-font group-hover:text-orange-400 transition-colors">
                Warranty Support
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                Comprehensive warranty coverage on all equipment
              </p>
            </div>
            <div className="quality-card opacity-0 text-center group">
              <div className="w-28 h-28 bg-gradient-to-br from-orange-600 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-orange-400/50 group-hover:scale-110 transition-all duration-300">
                <Server className="w-14 h-14 float-icon" />
              </div>
              <h3 className="text-2xl font-black mb-4 heading-font group-hover:text-orange-400 transition-colors">
                Technical Support
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                24/7 assistance and maintenance services available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-36 bg-orange-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 animated-bg opacity-50"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content opacity-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 heading-font text-shadow-glow leading-tight">
              Need a Custom Solution?
            </h2>
            <p className="text-xl md:text-2xl text-orange-100 mb-16 font-semibold leading-relaxed drop-shadow-lg">
              Contact us for product recommendations and customized quotations
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-black shadow-2xl text-xl heading-font tracking-wider group relative overflow-hidden transform hover:scale-110"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
