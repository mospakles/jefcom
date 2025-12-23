"use client";

import React, { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);
  const contactCardsRef = useRef(null);
  const formRef = useRef(null);
  const whyContactRef = useRef(null);
  const emergencyRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            ".contact-hero-title",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
          );

          gsap.fromTo(
            ".contact-hero-line",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
          );

          gsap.fromTo(
            ".contact-hero-desc",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
          );

          // Contact Cards Animation
          gsap.fromTo(
            ".contact-info-card",
            { opacity: 0, scale: 0.5, y: 50 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: contactCardsRef.current,
                start: "top 80%",
              },
            }
          );

          // Form Animation
          gsap.fromTo(
            ".form-container",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: formRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".form-input",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: formRef.current,
                start: "top 70%",
              },
            }
          );

          // Why Contact Box Animation
          gsap.fromTo(
            ".why-contact-box",
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: whyContactRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".why-contact-item",
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: whyContactRef.current,
                start: "top 70%",
              },
            }
          );

          // Map Animation
          gsap.fromTo(
            ".map-container",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: whyContactRef.current,
                start: "top 70%",
              },
            }
          );

          // Emergency Section Animation
          gsap.fromTo(
            ".emergency-content",
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: emergencyRef.current,
                start: "top 80%",
              },
            }
          );

          // Floating Animation for Icons
          gsap.to(".float-contact-icon", {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: 0.2,
          });
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 bg-gradient-to-br from-green-900 via-green-800 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-20"></div>
        <div className="absolute inset-0">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black mb-6 contact-hero-title opacity-0 heading-font text-shadow-glow">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8 contact-hero-line origin-center"></div>
            <p className="text-xl text-gray-300 contact-hero-desc opacity-0 font-semibold leading-relaxed">
              Let&apos;s discuss your electrical engineering project and how we
              can help bring your vision to life
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        ref={contactCardsRef}
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="contact-info-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 p-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 group box-shadow-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform">
                <Phone className="w-8 h-8 text-white float-contact-icon" />
              </div>
              <h3 className="text-lg font-black text-white mb-2 heading-font group-hover:text-orange-400 transition-colors">
                Call Us
              </h3>
              <a
                href="tel:+2348033014900"
                className="text-green-400 hover:text-green-300 block text-sm mb-1 font-semibold"
              >
                +234 803 301 4900
              </a>
              <a
                href="tel:+2348099073333"
                className="text-green-400 hover:text-green-300 block text-sm font-semibold"
              >
                +234 809 907 3333
              </a>
            </div>

            <div className="contact-info-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 p-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 group box-shadow-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform">
                <Mail className="w-8 h-8 text-white float-contact-icon" />
              </div>
              <h3 className="text-lg font-black text-white mb-2 heading-font group-hover:text-orange-400 transition-colors">
                Email Us
              </h3>
              <a
                href="mailto:info@jefcomgroup.com"
                className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
              >
                info@jefcomgroup.com
              </a>
            </div>

            <div className="contact-info-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 p-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 group box-shadow-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform">
                <MapPin className="w-8 h-8 text-white float-contact-icon" />
              </div>
              <h3 className="text-lg font-black text-white mb-2 heading-font group-hover:text-orange-400 transition-colors">
                Visit Us
              </h3>
              <p className="text-gray-400 text-sm font-semibold">
                10, Badejo Kalesanwo Street, Matori Industrial Area, Lagos,
                Nigeria
              </p>
            </div>

            <div className="contact-info-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 p-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 group box-shadow-glow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform">
                <Clock className="w-8 h-8 text-white float-contact-icon" />
              </div>
              <h3 className="text-lg font-black text-white mb-2 heading-font group-hover:text-orange-400 transition-colors">
                Business Hours
              </h3>
              <p className="text-gray-400 text-sm font-semibold">
                Mon - Fri: 8:00 AM - 6:00 PM
                <br />
                Sat: 9:00 AM - 2:00 PM
                <br />
                24/7 Emergency Support
              </p>
            </div>
          </div>

          {/* Contact Form and Map */}
          <div ref={formRef} className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="form-container opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-xl shadow-2xl p-8 box-shadow-glow">
              <h2 className="text-3xl font-black text-white mb-6 heading-font">
                Send Us a <span className="gradient-text">Message</span>
              </h2>

              {submitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-bounce" />
                  <h3 className="text-2xl font-black text-white mb-2 heading-font">
                    Thank You!
                  </h3>
                  <p className="text-gray-400 font-semibold">
                    Your message has been sent. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-input opacity-0">
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-300 mb-2 heading-font"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500 font-semibold"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-input opacity-0">
                      <label
                        htmlFor="email"
                        className="block text-sm font-bold text-gray-300 mb-2 heading-font"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500 font-semibold"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="form-input opacity-0">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-bold text-gray-300 mb-2 heading-font"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500 font-semibold"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div className="form-input opacity-0">
                    <label
                      htmlFor="company"
                      className="block text-sm font-bold text-gray-300 mb-2 heading-font"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-500 font-semibold"
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="form-input opacity-0">
                    <label
                      htmlFor="service"
                      className="block text-sm font-bold text-gray-300 mb-2 heading-font"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all font-semibold"
                    >
                      <option value="">Select a service</option>
                      <option value="electrical-design">
                        Electrical Design & Wiring
                      </option>
                      <option value="home-automation">Home Automation</option>
                      <option value="solar">Solar & Renewable Energy</option>
                      <option value="control-panels">
                        Control Panel Design
                      </option>
                      <option value="security">Security Systems</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div className="form-input opacity-0">
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-gray-300 mb-2 heading-font"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none placeholder-gray-500 font-semibold"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="form-input opacity-0 w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-black flex items-center justify-center shadow-2xl heading-font tracking-wider text-lg transform hover:scale-105 box-shadow-glow"
                  >
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div ref={whyContactRef}>
              <div className="why-contact-box opacity-0 bg-gradient-to-br from-green-800 to-green-900 rounded-xl p-8 text-white mb-6 border-2 border-green-700 box-shadow-glow">
                <h3 className="text-2xl font-black mb-4 heading-font">
                  Why <span className="text-orange-400">Contact Us?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free project consultation and site assessment",
                    "Competitive pricing with transparent quotations",
                    "Fast response time within 24 hours",
                    "Expert technical advice from certified professionals",
                    "Customized solutions for your specific needs",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="why-contact-item opacity-0 flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="map-container opacity-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden shadow-2xl h-80 border-2 border-gray-600 box-shadow-glow relative">
                <Image
                  src="/images/tower.jpg"
                  alt="Office Location"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-orange-500" />
                    <p className="font-bold text-lg heading-font">
                      10, Badejo Kalesanwo Street
                    </p>
                    <p className="font-semibold">Matori Industrial Area</p>
                    <p className="font-semibold">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section
        ref={emergencyRef}
        className="py-20 bg-gradient-to-br from-orange-700 to-orange-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 animated-bg opacity-40"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="emergency-content opacity-0">
            <h2 className="text-4xl font-black text-white mb-4 heading-font text-shadow-glow">
              Need Emergency Support?
            </h2>
            <p className="text-xl text-orange-100 mb-8 font-semibold leading-relaxed">
              Our technical team is available 24/7 for urgent electrical issues
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+2348033014900"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-black shadow-2xl text-lg flex items-center heading-font tracking-wider transform hover:scale-110"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
