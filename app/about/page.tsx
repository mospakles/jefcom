"use client";

import React, { useEffect, useRef } from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Factory,
  Building2,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const AboutPage = () => {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const visionRef = useRef(null);
  const valuesRef = useRef(null);
  const sectorsRef = useRef(null);
  const whyUsRef = useRef(null);
  const ctaRef = useRef(null);

  const values = [
    {
      icon: Shield,
      title: "Accountability",
      description:
        "We are accountable in all our processes, decisions and actions",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We act with integrity in dealing with people",
    },
    {
      icon: Zap,
      title: "Passion",
      description: "We are passionate about our business and our brand",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive to achieve excellence in quality",
    },
  ];

  const sectors = [
    { name: "Oil & Gas", icon: Factory },
    { name: "Telecommunications", icon: Zap },
    { name: "Manufacturing", icon: Factory },
    { name: "Banking & Finance", icon: TrendingUp },
    { name: "Hospitality", icon: Building2 },
    { name: "Engineering", icon: Lightbulb },
    { name: "Healthcare", icon: Heart },
    { name: "Residential", icon: Users },
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
            ".overview-text",
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: overviewRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".stat-card",
            { opacity: 0, scale: 0.5, rotationY: -90 },
            {
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: overviewRef.current,
                start: "top 70%",
              },
            }
          );

          // Vision/Mission Cards
          gsap.fromTo(
            ".vision-card",
            { opacity: 0, y: 80, rotationX: -15 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 1,
              stagger: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: visionRef.current,
                start: "top 70%",
              },
            }
          );

          // Values Animation
          gsap.fromTo(
            ".value-card",
            { opacity: 0, y: 60, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: valuesRef.current,
                start: "top 70%",
              },
            }
          );

          // Sectors Animation
          gsap.fromTo(
            ".sector-item",
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: sectorsRef.current,
                start: "top 70%",
              },
            }
          );

          // Why Us Cards
          gsap.fromTo(
            ".why-us-card",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: whyUsRef.current,
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

          // Floating Animation for Icons
          gsap.to(".float-icon", {
            y: -15,
            duration: 2.5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.3,
          });

          // Parallax effect on images
          gsap.to(".parallax-img", {
            y: 50,
            ease: "none",
            scrollTrigger: {
              trigger: overviewRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
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
              About <span className="gradient-text">Jefcom</span> Integrated
              Systems
            </h1>
            <div className="hero-divider w-0 h-1 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 font-semibold hero-description opacity-0 leading-relaxed">
              A leading electrical and allied service institution with the best
              team, delivering unequaled value-adding experience to our clients
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section
        ref={overviewRef}
        className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="overview-text opacity-0">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 heading-font">
                Who We <span className="gradient-text">Are</span>
              </h2>
              <div className="space-y-6 text-white leading-relaxed text-lg">
                <p>
                  JEFCOM Integrated Systems Ltd is an engineering service firm
                  with a group of young, dynamic and dedicated professionals
                  providing numerous services to our esteemed clients across
                  multiple sectors in Nigeria.
                </p>
                <p>
                  The resources, scope and professionalism of our company are
                  combined with the flexibility and personal attention usually
                  associated with a smaller concern. Our focus is on quality
                  service delivery which is essential in developing long-term
                  relationships with our clients.
                </p>
                <p>
                  We consistently exceed client expectations by providing
                  value-adding electrical and allied services through our
                  dedicated, well-trained and highly motivated team. Achieving
                  this whilst delivering value continues to be the
                  company&apos;s passion.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="stat-card opacity-0 bg-gradient-to-br from-green-700 to-green-900 p-8 rounded-2xl text-white shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-green-600/50">
                <Users className="w-16 h-16 mb-6 float-icon" />
                <div className="text-4xl font-black mb-3 heading-font">
                  100+
                </div>
                <div className="text-green-100 font-semibold text-lg">
                  Satisfied Clients
                </div>
              </div>
              <div className="stat-card opacity-0 bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-2xl text-white shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-orange-500/50">
                <Award className="w-16 h-16 mb-6 float-icon" />
                <div className="text-4xl font-black mb-3 heading-font">
                  00+
                </div>
                <div className="text-orange-100 font-semibold text-lg">
                  Projects Delivered
                </div>
              </div>
              <div className="stat-card opacity-0 bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-2xl text-white shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gray-600/50">
                <TrendingUp className="w-16 h-16 mb-6 float-icon" />
                <div className="text-4xl font-black mb-3 heading-font">25+</div>
                <div className="text-gray-100 font-semibold text-lg">
                  Years Experience
                </div>
              </div>
              <div className="stat-card opacity-0 bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl text-white shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-green-500/50">
                <Shield className="w-16 h-16 mb-6 float-icon" />
                <div className="text-4xl font-black mb-3 heading-font">
                  24/7
                </div>
                <div className="text-green-100 font-semibold text-lg">
                  Support Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission */}
      <section
        ref={visionRef}
        className="py-28 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="vision-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl border-2 border-gray-700 hover:border-green-500 hover:shadow-green-500/20 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:via-green-500/5 group-hover:to-transparent transition-all duration-500"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-green-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl border-2 border-green-600/50 relative z-10">
                <Eye className="w-10 h-10 text-white float-icon" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 heading-font relative z-10">
                Our Vision
              </h3>
              <p className="text-xl text-white leading-relaxed font-medium relative z-10">
                To be a leading electrical and allied service institution, with
                the best team, delivering unequaled value-adding experience to
                the client.
              </p>
            </div>

            <div className="vision-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl shadow-2xl border-2 border-gray-700 hover:border-orange-500 hover:shadow-orange-500/20 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-transparent transition-all duration-500"></div>

              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mb-8 shadow-xl border-2 border-orange-500/50 relative z-10">
                <Target className="w-10 h-10 text-white float-icon" />
              </div>
              <h3 className="text-4xl font-black text-white mb-6 heading-font relative z-10">
                Our Mission
              </h3>
              <p className="text-xl text-white leading-relaxed font-medium relative z-10">
                To consistently exceed client&apos;s expectations by providing
                value-adding electrical and allied services through a dedicated,
                well-trained and highly motivated team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        ref={valuesRef}
        className="py-28 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-orange-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl text-center border-2 border-gray-700 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-transparent transition-all duration-500"></div>

                  <div className="w-20 h-20 bg-gradient-to-br from-green-700 to-green-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl border-2 border-green-600/50 group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <Icon className="w-10 h-10 text-white float-icon" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 heading-font group-hover:text-orange-400 transition-colors relative z-10">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section
        ref={sectorsRef}
        className="py-28 bg-gradient-to-br from-green-900 via-green-800 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(251,146,60,0.2),transparent_60%)]"></div>
          <div className="absolute inset-0 grid-overlay opacity-15"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 heading-font">
              Sectors We{" "}
              <span className="text-orange-400 drop-shadow-2xl">Serve</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold leading-relaxed">
              Delivering excellence across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="sector-item opacity-0 bg-white/10 backdrop-blur-lg p-8 rounded-2xl text-center hover:bg-white/20 hover:scale-110 transition-all duration-300 border-2 border-white/20 hover:border-orange-400 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:to-transparent transition-all duration-500"></div>

                  <Icon className="w-12 h-12 mx-auto mb-4 text-orange-400 float-icon group-hover:scale-125 transition-transform relative z-10" />
                  <div className="text-lg font-bold relative z-10 group-hover:text-orange-300 transition-colors">
                    {sector.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={whyUsRef}
        className="py-28 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-gray-900 to-green-900/10"></div>
        <div className="absolute inset-0 grid-overlay opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 heading-font">
              Why Partner With <span className="gradient-text">Us</span>
            </h2>
            <div className="w-40 h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description:
                  "Young, dynamic professionals with deep industry expertise and certifications",
                image: "/images/team.jpg",
              },
              {
                title: "Quality Assurance",
                description:
                  "We use only premium equipment from trusted manufacturers like Schneider, Rittal, and ABB",
                image: "/images/quality.jpg",
              },
              {
                title: "Client-Focused",
                description:
                  "Long-term relationships built on trust, quality delivery, and exceeding expectations",
                image: "/images/call.jpg",
              },
              {
                title: "Comprehensive Solutions",
                description:
                  "From design to installation and maintenance, we handle your entire project lifecycle",
                image: "/images/solutions.jpg",
              },
              {
                title: "Safety First",
                description:
                  "Strict adherence to international safety standards and best practices",
                image: "/images/safety.jpg",
              },
              {
                title: "24/7 Support",
                description:
                  "Round-the-clock technical support and maintenance services for peace of mind",
                image: "/images/247.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="why-us-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group"
              >
                <div className="h-48 bg-gradient-to-br from-green-800 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle className="w-24 h-24 text-gray-700 opacity-40 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" />
                  </div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center shadow-2xl border-2 border-orange-500">
                    <span className="text-white font-black text-2xl heading-font">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <h3 className="text-2xl font-black text-white mb-4 heading-font group-hover:text-orange-400 transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed relative z-10">
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
              Let&apos;s Work Together
            </h2>
            <p className="text-xl md:text-2xl text-orange-100 mb-16 font-semibold leading-relaxed drop-shadow-lg">
              Experience the Jefcom difference in electrical engineering
              excellence
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-6 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 font-black shadow-2xl text-lg heading-font tracking-wider group relative overflow-hidden transform hover:scale-110"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/20 to-orange-600/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
