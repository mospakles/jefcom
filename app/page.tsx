"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Cog,
  Sun,
  Shield,
  Factory,
  CheckCircle,
  Award,
  ChevronRight,
  ChevronLeft,
  Star,
  Quote,
  Wrench,
  Lightbulb,
  Target,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  const slides = [
    {
      title: "Engineering Excellence",
      subtitle: "EPC Electrical Solutions",
      description:
        "Leading the way in electrical engineering, automation, and renewable energy",
      image: "/images/cranes.jpg",
    },
    {
      title: "Solar & Renewable Energy",
      subtitle: "Sustainable Power Solutions",
      description:
        "Harnessing green energy for homes, businesses, and communities",
      image: "/images/solarrr.jpg",
    },
    {
      title: "Industrial Automation",
      subtitle: "Smart Control Systems",
      description:
        "Advanced control panels and automation for modern industries",
      image: "/images/automation.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Michael Adeyemi",
      role: "Project Director, Christ Embassy",
      company: "Christ Embassy Crusade Ground",
      text: "Jefcom's expertise in handling our 5,250KVA generator synchronizing system was exceptional. Their attention to detail and commitment to quality exceeded our expectations. The project was completed on time and has been running flawlessly.",
      rating: 5,
      image: "/images/boy.jpg",
    },
    {
      name: "Sarah Okonkwo",
      role: "General Manager",
      company: "Omnia Hotel & Towers",
      text: "The 180KW solar installation by Jefcom has significantly reduced our energy costs. Their team was professional, knowledgeable, and delivered beyond what we imagined possible. Highly recommended for any hospitality project.",
      rating: 5,
      image: "/images/girl.jpg",
    },
    {
      name: "Engr. Chukwuma Nwankwo",
      role: "Operations Manager",
      company: "Ascon Oil Depot",
      text: "Working with Jefcom on our petroleum tank farm electrical systems was a game-changer. Their expertise in oil & gas sector requirements and safety standards is unmatched. Outstanding service delivery.",
      rating: 5,
      image: "/images/boyy.jpg",
    },
    {
      name: "Mrs. Funke Olawale",
      role: "Facility Manager",
      company: "Lagos Business Hub",
      text: "From design to installation, Jefcom demonstrated professionalism at every stage. Their maintenance support is prompt and reliable. We've had zero electrical issues since they completed our facility.",
      rating: 5,
      image: "/images/girl.jpg",
    },
  ];

  const services = [
    {
      icon: Zap,
      title: "Electrical Design",
      description:
        "Complete electrical design and installation for residential, commercial, and industrial projects",
      image: "/images/distpanel.jpg",
    },
    {
      icon: Cog,
      title: "Control Systems",
      description:
        "Advanced control panel design, fabrication, and automation solutions",
      image: "/images/computer.jpg",
    },
    {
      icon: Sun,
      title: "Solar Energy",
      description:
        "Green energy solutions with solar panels, inverters, and battery storage systems",
      image: "/images/solar.jpg",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description:
        "CCTV, access control, and comprehensive security installations",
      image: "/images/security.jpg",
    },
  ];

  const stats = [
    { number: "1000+", label: "Projects Completed" },
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management",
    },
    {
      icon: Shield,
      title: "COREN Certified",
      description: "Engineering Council",
    },
    {
      icon: Target,
      title: "NECA Member",
      description: "Electrical Contractors",
    },
    {
      icon: CheckCircle,
      title: "HSE Compliant",
      description: "Safety Standards",
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
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
          );

          gsap.fromTo(
            ".hero-subtitle",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
          );

          gsap.fromTo(
            ".hero-description",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.8 }
          );

          gsap.fromTo(
            ".hero-buttons",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.1 }
          );

          // Stats Animation
          gsap.fromTo(
            ".stat-item",
            { opacity: 0, scale: 0.5, y: 50 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: statsRef.current,
                start: "top 80%",
              },
            }
          );

          // Services Animation
          gsap.fromTo(
            ".service-card",
            { opacity: 0, y: 80, rotationX: -15 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 70%",
              },
            }
          );

          // Projects Animation
          gsap.fromTo(
            ".project-card",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: projectsRef.current,
                start: "top 70%",
              },
            }
          );

          // Testimonials Animation
          gsap.fromTo(
            ".testimonial-card",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: testimonialsRef.current,
                start: "top 70%",
              },
            }
          );

          // Floating Animation for Icons
          gsap.to(".float-icon", {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
          });

          // CTA Animation
          gsap.fromTo(
            ".cta-content",
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Hero Section with Image Carousel */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Image placeholder with vibrant overlay */}
              <div className="absolute inset-0 animated-bg">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-green-900/60 to-gray-900/80"></div>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full lg:w-2/3 z-10">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 hero-subtitle opacity-0">
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 animate-pulse"></div>
                <span className="text-base font-bold tracking-[0.25em] uppercase text-orange-400 heading-font">
                  {slides[currentSlide].subtitle}
                </span>
              </div>

              <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] hero-title opacity-0 text-shadow-glow">
                {slides[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-semibold hero-description opacity-0 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-6 pt-8 hero-buttons opacity-0">
                <a
                  href="/contact"
                  className="group bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 transition-all duration-300 font-bold flex items-center box-shadow-glow heading-font tracking-wider text-lg relative overflow-hidden transform hover:scale-105"
                >
                  <span className="relative z-10">Get Started</span>
                  <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                </a>
                <a
                  href="/portfolio"
                  className="border-3 border-orange-500 text-orange-400 bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-white hover:border-orange-600 transition-all duration-300 font-bold heading-font tracking-wider text-lg transform hover:scale-105"
                >
                  View Projects
                </a>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3 pt-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-12 bg-orange-500 border-glow"
                        : "w-8 bg-gray-500 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600 backdrop-blur-md text-white p-3 rounded-full transition-all z-20 border-2 border-orange-500/50 hover:border-orange-500 transform hover:scale-110 box-shadow-glow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-orange-600/20 hover:bg-orange-600 backdrop-blur-md text-white p-3 rounded-full transition-all z-20 border-2 border-orange-500/50 hover:border-orange-500 transform hover:scale-110 box-shadow-glow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-green-500/5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center stat-item opacity-0 transform scale-50"
              >
                <div className="relative inline-block mb-4">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black gradient-text heading-font drop-shadow-2xl text-white">
                    {stat.number}
                  </div>
                  <div className="absolute inset-0 blur-xl bg-gradient-to-r from-orange-500 to-orange-600 opacity-30 animate-pulse"></div>
                </div>
                <div className="text-gray-300 font-bold text-base uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-28 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-gray-900 to-orange-900/30"></div>
          <div className="absolute inset-0 grid-overlay opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Our Core <span className="gradient-text">Services</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-semibold leading-relaxed">
              Comprehensive electrical engineering solutions for every sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="service-card opacity-0 transform translate-y-20 group relative bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-xl"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-orange-500/10 group-hover:to-transparent transition-all duration-500"></div>

                  {/* Image placeholder */}
                  <div className="h-56 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="w-28 h-28 text-gray-600 group-hover:text-orange-500 transition-all duration-500 float-icon group-hover:scale-110" />
                    </div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                  </div>

                  <div className="p-8 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-4 heading-font group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>
                    <a
                      href="/services"
                      className="inline-flex items-center text-orange-500 font-bold hover:text-orange-400 uppercase tracking-wider text-sm heading-font group/link"
                    >
                      Learn More
                      <ChevronRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        ref={projectsRef}
        className="py-28 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-orange-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-semibold leading-relaxed">
              Delivering excellence across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Christ Embassy Crusade Ground",
                description:
                  "5,250KVA diesel generator synchronizing panel with 6300A automatic changeover system",
                category: "Power Systems",
                image: "/images/autoo.jpg",
              },
              {
                title: "Omnia Hotel & Towers",
                description:
                  "200-room hotel electrical system with 180KW solar power installation",
                category: "Hospitality",
                image: "/images/tower.jpg",
              },
              {
                title: "Ascon Oil Depot",
                description:
                  "Complete electrical control panels and perimeter lighting for petroleum tank farm",
                category: "Oil & Gas",
                image: "/images/oilngas.jpg",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="project-card opacity-0 transform -translate-x-20 group bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 overflow-hidden transition-all duration-500 rounded-xl hover:shadow-2xl box-shadow-glow"
              >
                <div className="h-72 bg-gradient-to-br from-green-800 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Factory className="w-36 h-36 text-gray-700 opacity-40 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700" />
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 text-sm font-bold heading-font tracking-wider rounded-lg shadow-lg border-glow">
                    {project.category}
                  </div>
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h3 className="text-xl font-bold text-white mb-4 heading-font group-hover:text-orange-400 transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-base relative z-10">
                    {project.description}
                  </p>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center text-orange-500 font-bold hover:text-orange-400 uppercase tracking-wider text-sm heading-font group/link relative z-10"
                  >
                    View Details
                    <ChevronRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <a
              href="/portfolio"
              className="inline-block bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 transition-all duration-300 font-bold box-shadow-glow heading-font tracking-wider text-lg transform hover:scale-105"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        className="py-28 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900 to-green-900/20"></div>
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-semibold leading-relaxed">
              What our clients say about working with us
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="testimonial-card opacity-0 transform scale-90 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 shadow-2xl p-14 relative rounded-xl box-shadow-glow">
              <Quote className="w-20 h-20 text-orange-500/30 absolute top-10 left-10 animate-pulse" />

              <div className="flex flex-col md:flex-row gap-10 items-center mb-10 relative z-10">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 flex items-center justify-center text-white text-4xl font-bold heading-font flex-shrink-0 shadow-2xl border-4 border-orange-400/50">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-orange-500 fill-orange-500 drop-shadow-lg"
                        />
                      )
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white heading-font mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-orange-400 font-bold text-lg">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gray-400 text-base">
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>

              <p className="text-white text-xl leading-relaxed mb-10 relative z-10 italic font-medium">
                &quot;{testimonials[currentTestimonial].text}&quot;
              </p>

              <div className="flex justify-center gap-4 relative z-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? "w-12 bg-orange-500 border-glow"
                        : "w-8 bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-orange-600/20 hover:bg-orange-600 backdrop-blur-md text-white p-3 border-2 border-orange-500/50 hover:border-orange-500 transition-all z-20 rounded-full transform hover:scale-110 box-shadow-glow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-orange-600/20 hover:bg-orange-600 backdrop-blur-md text-white p-3 border-2 border-orange-500/50 hover:border-orange-500 transition-all z-20 rounded-full transform hover:scale-110 box-shadow-glow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-28 bg-gradient-to-br from-green-800 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,146,60,0.3),transparent_70%)]"></div>
          <div className="absolute inset-0 grid-overlay opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 heading-font leading-tight">
                Why Choose{" "}
                <span className="text-orange-400 drop-shadow-2xl">Jefcom?</span>
              </h2>
              <p className="text-xl text-green-100 mb-14 leading-relaxed font-medium">
                We combine engineering excellence with unwavering commitment to
                quality, safety, and client satisfaction.
              </p>

              <div className="space-y-7">
                {[
                  "25+ years of proven engineering excellence",
                  "Highly trained and certified professionals",
                  "24/7 maintenance and technical support",
                  "Quality-assured equipment and materials",
                  "Competitive pricing with no compromise on standards",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-5 group hover:translate-x-3 transition-transform"
                  >
                    <CheckCircle className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform drop-shadow-lg" />
                    <span className="text-lg text-white font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {certifications.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:border-orange-400 hover:bg-white/20 p-10 rounded-2xl text-center hover:scale-110 transition-all duration-300 group box-shadow-glow"
                  >
                    <Icon className="w-20 h-20 mx-auto mb-5 text-orange-400 group-hover:scale-125 transition-transform float-icon drop-shadow-2xl" />
                    <div className="font-bold text-lg mb-2 heading-font group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </div>
                    <div className="text-green-100 text-base">
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Our <span className="gradient-text">Process</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              {
                icon: Phone,
                step: "01",
                title: "Consultation",
                description: "Initial assessment and requirements gathering",
              },
              {
                icon: Lightbulb,
                step: "02",
                title: "Design",
                description: "Detailed engineering plans and specifications",
              },
              {
                icon: Wrench,
                step: "03",
                title: "Implementation",
                description: "Professional installation and testing",
              },
              {
                icon: CheckCircle,
                step: "04",
                title: "Support",
                description: "Ongoing maintenance and 24/7 assistance",
              },
            ].map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-36 h-36 mx-auto bg-gradient-to-br from-gray-700 to-gray-800 border-4 border-orange-500 rounded-2xl shadow-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 box-shadow-glow">
                      <Icon className="w-16 h-16 text-orange-500 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="absolute -top-2 right-2 w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 text-white flex items-center justify-center font-black text-xl heading-font rounded-xl shadow-2xl border-2 border-orange-400">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 heading-font group-hover:text-orange-400 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {process.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info Strip */}
      <section className="py-16 bg-gray-900 border-y-2 border-orange-500/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex items-center justify-center space-x-5 group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center border-2 border-orange-500 group-hover:bg-orange-600 transition-all">
                <Phone className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-gray-500 text-sm uppercase tracking-wider font-bold">
                  Call Us
                </div>
                <a
                  href="tel:+2348033014900"
                  className="text-white font-bold text-lg hover:text-orange-400 transition-colors"
                >
                  +234 803 301 4900
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-5 group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center border-2 border-orange-500 group-hover:bg-orange-600 transition-all">
                <Mail className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-gray-500 text-sm uppercase tracking-wider font-bold">
                  Email Us
                </div>
                <a
                  href="mailto:info@jefcom.com"
                  className="text-white font-bold text-xl hover:text-orange-400 transition-colors"
                >
                  info@jefcom.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-5 group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center border-2 border-orange-500 group-hover:bg-orange-600 transition-all">
                <MapPin className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <div className="text-left">
                <div className="text-gray-500 text-sm uppercase tracking-wider font-bold">
                  Visit Us
                </div>
                <div className="text-white font-bold text-xl">
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-36 bg-orange-700 relative overflow-hidden"
      >
        <div className="absolute inset-0 animated-bg opacity-50"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content opacity-0 transform scale-90">
            <h2 className="text-2xl md:text-5xl lg:text-5xl font-black text-white mb-10 heading-font text-shadow-glow leading-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-2xl text-orange-100 mb-16 font-semibold leading-relaxed drop-shadow-lg">
              Let&apos;s discuss how we can bring your electrical engineering
              vision to life
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <a
                href="/contact"
                className="bg-white text-orange-600 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-black shadow-lg hover:shadow-3xl heading-font tracking-wider text-lg group relative overflow-hidden transform hover:scale-110"
              >
                <span className="relative z-10">Contact Us Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
              </a>
              <a
                href="tel:+2348033014900"
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-black heading-font tracking-wider text-lg transform hover:scale-110 shadow-2xl"
              >
                Call: +234 803 301 4900
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
