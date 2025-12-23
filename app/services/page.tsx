"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Home,
  Sun,
  Cog,
  Shield,
  Lightbulb,
  Droplets,
  Wrench,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const detailsRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    {
      id: "electrical",
      icon: Zap,
      title: "Electrical Design & Wiring",
      description:
        "Comprehensive electrical design and installation services for all types of structures",
      details: [
        "Home, office, and commercial electrical design with architectural integration",
        "External lighting schemes for streets, perimeters, and parks",
        "Complete electrical installation services with up-to-date equipment",
        "Mechanical installation design (ventilation and plumbing)",
        "Security and fire safety system integration",
        "Cable trunking and distribution panel design",
      ],
      color: "from-green-700 to-green-900",
      image: "/images/distpanel.jpg",
    },
    {
      id: "automation",
      icon: Home,
      title: "Home Automation",
      description: "Smart home solutions for ultimate comfort and convenience",
      details: [
        "Control lights, curtains, AC, and music from mobile devices",
        "Automated gate and garage door systems",
        "Integrated security and fire alarm systems",
        "Smart heating and cooling control",
        "Voice-activated home control systems",
        "Energy monitoring and management",
      ],
      color: "from-orange-600 to-orange-700",
      image: "/images/automation.jpg",
    },
    {
      id: "solar",
      icon: Sun,
      title: "Solar & Renewable Energy",
      description: "Green energy solutions for sustainable power generation",
      details: [
        "Solar panel design and installation for homes and businesses",
        "Battery storage systems and inverter installations",
        "Hybrid power plant design (solar, gas, and diesel integration)",
        "Partnership with Sigenergy for cutting-edge solutions",
        "Utility-scale solar installations up to 20 MWh",
        "Energy management and monitoring systems",
      ],
      color: "from-yellow-500 to-orange-600",
      image: "/images/solar.jpg",
    },
    {
      id: "control",
      icon: Cog,
      title: "Control Panel Design & Fabrication",
      description:
        "Custom control panels for industrial and commercial applications",
      details: [
        "Design and fabrication using Rittal & Schneider enclosures",
        "Pump control panels for factories and petroleum depots",
        "Automatic changeover systems and AMF panels",
        "Production process control systems",
        "MCC panels and distribution boards",
        "Full safety module integration (overload, earth leakage, circuit breakers)",
      ],
      color: "from-gray-700 to-gray-900",
      image: "/images/controlpanel.jpg",
    },
    {
      id: "security",
      icon: Shield,
      title: "Security Systems",
      description: "Advanced security installations for complete peace of mind",
      details: [
        "CCTV installation (standalone, IP network, speed dome cameras)",
        "Access control panels and hotel keycard systems",
        "Burglary-proof equipment for homes and offices",
        "Network video servers and DVR systems",
        "Pinhole and surveillance camera installations",
        "24/7 monitoring system setup",
      ],
      color: "from-gray-400 to-gray-600",
      image: "/images/securitysyste.jpg",
    },
    {
      id: "lighting",
      icon: Lightbulb,
      title: "Street & Park Lighting",
      description:
        "Professional lighting solutions for public and private spaces",
      details: [
        "Metal halide and sodium vapor lamp installations",
        "LED high bay dome and flood light fittings",
        "Solar-powered street lighting systems",
        "Perimeter and security lighting design",
        "Automatic dark-activated control systems",
        "Energy-efficient LED park lights",
      ],
      color: "from-amber-700 to-amber-900",
      image: "/images/lightingsystems.jpg",
    },
    {
      id: "power",
      icon: Wrench,
      title: "Power Systems Installation",
      description: "Complete power supply switching and distribution solutions",
      details: [
        "Switchgear and busbar installations",
        "Manual and automatic changeover systems",
        "Circuit breaker switching systems",
        "Generator synchronizing panels",
        "Transformer control and distribution panels",
        "AMF (Auto Mains Failure) systems for critical facilities",
      ],
      color: "from-gold-700 to-gold-900",
      image: "/images/powerauto.jpg",
    },
    {
      id: "plumbing",
      icon: Droplets,
      title: "Plumbing & Mechanical",
      description:
        "Professional plumbing installations and mechanical services",
      details: [
        "PPR and PVC piping installations",
        "Water supply and distribution systems",
        "Sewage system design and implementation",
        "Fire hydrant system installation",
        "Pump control systems",
        "Automatic water management systems",
      ],
      color: "from-cyan-700 to-cyan-900",
      image: "/images/plumbing.jpg",
    },
  ];

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

          // Overview Section
          gsap.fromTo(
            ".overview-header",
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: overviewRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".service-card",
            { opacity: 0, scale: 0.5, rotationY: -90 },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: overviewRef.current,
                start: "top 60%",
              },
            }
          );

          // Service Details Animation
          gsap.fromTo(
            ".detail-icon",
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: detailsRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".detail-content",
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: detailsRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".detail-feature",
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: detailsRef.current,
                start: "top 60%",
              },
            }
          );

          gsap.fromTo(
            ".benefit-card",
            { opacity: 0, y: 60, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: detailsRef.current,
                start: "top 60%",
              },
            }
          );

          // Process Animation
          gsap.fromTo(
            ".process-step",
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: processRef.current,
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

          // Floating Animation
          gsap.to(".float-icon", {
            y: -15,
            duration: 2.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
          });
        });
      });
    }
  }, []);

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
              Our <span className="gradient-text">Services</span>
            </h1>
            <div className="hero-divider w-0 h-1 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-semibold hero-description opacity-0 leading-relaxed">
              Comprehensive electrical engineering solutions tailored to your
              needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section
        ref={overviewRef}
        className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 overview-header opacity-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Complete <span className="gradient-text">EPC Solutions</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-semibold leading-relaxed">
              From design to installation and maintenance, we handle every
              aspect of your electrical engineering project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`service-card opacity-0 p-8 rounded-2xl text-left transition-all duration-500 border-2 relative overflow-hidden group ${
                    activeService === index
                      ? "bg-gradient-to-br " +
                        service.color +
                        " text-white shadow-2xl scale-105 border-orange-500 box-shadow-glow"
                      : "bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-800 border-gray-700 hover:border-orange-500/50"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      activeService !== index
                        ? "from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-transparent"
                        : ""
                    } transition-all duration-500`}
                  ></div>

                  <Icon
                    className={`w-12 h-12 mb-6 float-icon relative z-10 transition-all duration-300 ${
                      activeService === index
                        ? "text-white scale-110"
                        : "text-green-500 group-hover:text-orange-500 group-hover:scale-110"
                    }`}
                  />
                  <h3
                    className={`text-xl font-black mb-3 heading-font relative z-10 ${
                      activeService === index
                        ? "text-white"
                        : "text-white group-hover:text-orange-400"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-base leading-relaxed relative z-10 ${
                      activeService === index
                        ? "text-gray-100"
                        : "text-gray-400 group-hover:text-gray-300"
                    }`}
                  >
                    {service.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section
        ref={detailsRef}
        className="py-28 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="detail-content opacity-0">
              <div
                className={`detail-icon opacity-0 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${services[activeService].color} mb-8 shadow-2xl border-2 border-white/20`}
              >
                {React.createElement(services[activeService].icon, {
                  className: "w-12 h-12 text-white float-icon",
                })}
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 heading-font">
                {services[activeService].title}
              </h2>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                {services[activeService].description}
              </p>

              <div className="space-y-5">
                {services[activeService].details.map((detail, index) => (
                  <div
                    key={index}
                    className="detail-feature opacity-0 flex items-start space-x-4 group"
                  >
                    <CheckCircle className="w-7 h-7 text-green-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 transition-all duration-300 font-black shadow-2xl box-shadow-glow heading-font tracking-wider text-lg group transform hover:scale-105"
                >
                  Request a Quote
                  <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 shadow-2xl border-2 border-gray-700">
                {/* Service Image */}
                <div className="mb-8 rounded-2xl overflow-hidden h-64 relative">
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                <div className="space-y-6">
                  <div className="benefit-card opacity-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-xl border-2 border-gray-600 hover:border-green-500 hover:shadow-green-500/20 transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                    <h4 className="font-black text-white mb-3 text-lg heading-font group-hover:text-green-400 transition-colors">
                      Professional Installation
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed">
                      Certified technicians ensure quality workmanship
                    </p>
                  </div>
                  <div className="benefit-card opacity-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-xl border-2 border-gray-600 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                    <h4 className="font-black text-white mb-3 text-lg heading-font group-hover:text-orange-400 transition-colors">
                      Premium Equipment
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed">
                      Using trusted brands like Schneider, Rittal, and ABB
                    </p>
                  </div>
                  <div className="benefit-card opacity-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 shadow-xl border-2 border-gray-600 hover:border-blue-500 hover:shadow-blue-500/20 transition-all duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
                    <h4 className="font-black text-white mb-3 text-lg heading-font group-hover:text-blue-400 transition-colors">
                      24/7 Support
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed">
                      Round-the-clock maintenance and technical assistance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={processRef}
        className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-orange-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              A streamlined approach to deliver excellence at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your requirements and site assessment",
                image: "/images/consultation.jpg",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Creating detailed electrical and mechanical designs",
                image: "/images/design.jpg",
              },
              {
                step: "03",
                title: "Installation",
                description:
                  "Professional implementation with quality materials",
                image: "/images/wiringg.jpg",
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and technical assistance",
                image: "/images/support.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="process-step opacity-0 text-center relative group"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-transparent z-0 group-hover:via-orange-500 transition-all"></div>
                )}
                <div className="relative z-10 bg-gray-900">
                  {/* Image placeholder */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden border-4 border-gray-700 group-hover:border-orange-500 transition-all duration-300 shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-transparent"></div>
                  </div>

                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center shadow-2xl border-2 border-orange-400">
                    <span className="text-lg font-bold text-white heading-font">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 heading-font group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-36 bg-orange-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 animated-bg opacity-50"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-orange-500 rounded-full opacity-30 animate-float"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 heading-font text-shadow-glow leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-16 font-semibold leading-relaxed drop-shadow-lg">
              Let&apos;s discuss your project requirements and provide a
              customized solution
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="/contact"
                className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-all duration-300 font-black shadow-2xl text-lg heading-font tracking-wider group transform hover:scale-110 relative overflow-hidden"
              >
                <span className="relative z-10">Contact Us Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-green-900 transition-all duration-300 font-black text-lg heading-font tracking-wider transform hover:scale-110 shadow-2xl"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
