"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Search,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

const FAQPage = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const faqRef = useRef(null);
  const contactRef = useRef(null);
  const tipsRef = useRef(null);

  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "services", name: "Services" },
    { id: "solar", name: "Solar Energy" },
    { id: "pricing", name: "Pricing & Payment" },
    { id: "maintenance", name: "Maintenance" },
    { id: "technical", name: "Technical" },
  ];

  const faqs = [
    {
      category: "general",
      question: "What services does Jefcom Integrated Systems provide?",
      answer:
        "We provide comprehensive electrical engineering services including electrical design and installation, home automation, solar and renewable energy solutions, control panel design and fabrication, security systems installation, street and park lighting, power systems installation, and plumbing and mechanical services. We serve clients in Oil & Gas, Manufacturing, Banking, Hospitality, and Residential sectors.",
    },
    {
      category: "general",
      question:
        "Where is Jefcom located and do you serve clients outside Lagos?",
      answer:
        "Our head office is located at 10, Badejo Kalesanwo Street, Matori Industrial Area, Lagos, Nigeria. Yes, we serve clients across Nigeria. We have successfully completed projects in Lagos, Port Harcourt, Abuja, Anambra, Enugu, Ogun State, and other locations throughout the country and through Africa",
    },
    {
      category: "general",
      question: "How long has Jefcom been in business?",
      answer:
        "Jefcom Integrated Systems has been providing electrical engineering services for over 15 years. During this time, we have completed over 500 projects for more than 100 satisfied clients across various sectors.",
    },
    {
      category: "services",
      question: "Do you provide free site assessments and consultations?",
      answer:
        "Yes! We provide free initial consultations and site assessments for all potential projects. Our team will visit your site, assess your requirements, and provide professional recommendations. We will then prepare a detailed quotation for your approval before commencing work.",
    },
    {
      category: "services",
      question: "What is the typical timeline for completing a project?",
      answer:
        "Project timelines vary depending on scope and complexity. A residential electrical installation might take 2-4 weeks, while large commercial or industrial projects can take 2-6 months. Solar installations typically take 1-2 weeks for residential and 4-8 weeks for commercial systems. We provide detailed project timelines during the consultation phase.",
    },
    {
      category: "services",
      question: "Do you provide maintenance services after installation?",
      answer:
        "Absolutely! We provide comprehensive after-sales service and maintenance. After every installation, we have a structured follow-up system where clients are visited periodically. For some projects, we assign standby personnel for 3-6 months to monitor installations and train client staff. We also offer 24/7 emergency support for critical systems.",
    },
    {
      category: "solar",
      question: "What size solar system do I need for my home or business?",
      answer:
        "The required solar system size depends on your energy consumption. For residential homes, systems typically range from 3KW to 15KW. For commercial buildings, systems can range from 20KW to several megawatts. We conduct a thorough energy audit of your facility, analyze your electricity bills, and recommend the optimal system size. Contact us for a free assessment.",
    },
    {
      category: "solar",
      question:
        "How long do solar panels last and what warranty do you provide?",
      answer:
        "Quality solar panels typically last 25-30 years with minimal degradation. The inverters last 10-15 years, and batteries (if included) last 5-15 years depending on type. We work with premium brands like Sigenergy that offer manufacturer warranties. Solar panels usually come with 25-year performance warranties, while inverters have 5-10 year warranties.",
    },
    {
      category: "solar",
      question: "Can I go completely off-grid with solar power?",
      answer:
        "Yes, you can go completely off-grid with a properly sized solar system that includes adequate battery storage. However, most of our clients prefer hybrid systems that combine solar, grid power, and backup generators for maximum reliability. We design systems based on your specific needs and preferences.",
    },
    {
      category: "solar",
      question: "What is the return on investment for solar energy?",
      answer:
        "ROI varies based on system size, electricity costs, and usage patterns. In Nigeria, with frequent power outages and high diesel/petrol costs for generators, most commercial solar installations achieve ROI within 3-5 years. Residential systems typically see ROI in 4-7 years. Solar systems also increase property value and provide energy independence.",
    },
    {
      category: "pricing",
      question: "How much do your services cost?",
      answer:
        "Costs vary significantly based on project scope, materials, and complexity. We provide customized quotations for each project. After a free site assessment, we prepare a detailed, transparent quotation breaking down all costs. We use quality materials from trusted brands and our pricing is competitive without compromising on standards.",
    },
    {
      category: "pricing",
      question: "What payment terms do you offer?",
      answer:
        "We typically work with milestone-based payment structures: an initial deposit upon contract signing, progress payments at key milestones, and final payment upon project completion and client acceptance. Specific payment terms are discussed and agreed upon during contract negotiations and vary based on project size and duration.",
    },
    {
      category: "pricing",
      question: "Do you provide financing options for solar installations?",
      answer:
        "While we do not directly provide financing, we work with several financial institutions and can connect clients with financing options. We also offer flexible payment plans for qualified clients on certain projects. Contact us to discuss financing options for your specific project.",
    },
    {
      category: "maintenance",
      question: "What maintenance is required for solar systems?",
      answer:
        "Solar systems require minimal maintenance. We recommend: cleaning panels every 2-3 months (more frequently in dusty areas), annual professional inspections, monitoring system performance through our installed monitoring systems, and ensuring vegetation does not shade panels. We offer maintenance contracts for hassle-free system upkeep.",
    },
    {
      category: "maintenance",
      question: "Do you offer maintenance contracts?",
      answer:
        "Yes, we offer comprehensive maintenance contracts tailored to your needs. These can include regular scheduled maintenance visits, priority emergency response, annual system testing and calibration, cleaning services, and performance monitoring. Maintenance contracts ensure optimal system performance and extend equipment lifespan.",
    },
    {
      category: "maintenance",
      question: "How quickly can you respond to emergency calls?",
      answer:
        "We provide 24/7 emergency support. For critical systems (hospitals, data centers, telecommunications), we typically respond within 2-4 hours in Lagos and surrounding areas. For other locations, response times vary but we prioritize emergency calls. Clients with maintenance contracts receive priority emergency response.",
    },
    {
      category: "technical",
      question: "What brands and equipment do you use?",
      answer:
        "We use only premium, tested equipment from reputable international brands. For control panels: Schneider Electric, ABB, Rittal. For solar: Sigenergy, Huawei, SMA. For automation: Deep Sea Electronics, ComAp, Smarthome. For security: Hikvision, Dahua, ZKTeco. We choose brands based on quality, reliability, availability of support, and warranty coverage.",
    },
    {
      category: "technical",
      question:
        "Are your installations compliant with Nigerian electrical codes?",
      answer:
        "Yes, absolutely. All our installations comply with Nigerian Electrical Code, IEE Wiring Regulations, and other applicable international standards. Our engineers are trained professionals, and we ensure all work meets or exceeds regulatory requirements. We can provide all necessary documentation for regulatory approvals.",
    },
    {
      category: "technical",
      question: "Can you integrate new systems with existing installations?",
      answer:
        "Yes, we specialize in integration and retrofitting. We can assess your existing systems and design solutions that integrate seamlessly. This includes upgrading old panels, adding solar to existing power systems, integrating new automation systems, and expanding capacity. We ensure compatibility and optimal performance.",
    },
    {
      category: "technical",
      question: "Do you provide training for client staff?",
      answer:
        "Yes! We provide comprehensive training for client staff as part of our service. This includes system operation training, basic troubleshooting, safety procedures, and maintenance protocols. For complex systems, we may assign personnel to work with your staff for 3-6 months to ensure smooth operation and knowledge transfer.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            ".faq-hero-icon",
            { opacity: 0, scale: 0, rotation: -180 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: "back.out(1.7)",
              delay: 0.2,
            }
          );

          gsap.fromTo(
            ".faq-hero-title",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.5 }
          );

          gsap.fromTo(
            ".faq-hero-line",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: "power3.out", delay: 1 }
          );

          gsap.fromTo(
            ".faq-hero-desc",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1.2 }
          );

          // Filter Buttons Animation
          gsap.fromTo(
            ".category-button",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: filterRef.current,
                start: "top 90%",
              },
            }
          );

          // FAQ Items Animation
          gsap.fromTo(
            ".faq-item",
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: faqRef.current,
                start: "top 70%",
              },
            }
          );

          // Contact Cards Animation
          gsap.fromTo(
            ".contact-card",
            { opacity: 0, y: 80, scale: 0.8 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: contactRef.current,
                start: "top 70%",
              },
            }
          );

          // Tips Animation
          gsap.fromTo(
            ".tip-card",
            { opacity: 0, rotationY: -90 },
            {
              opacity: 1,
              rotationY: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: tipsRef.current,
                start: "top 70%",
              },
            }
          );

          // Floating Animation
          gsap.to(".float-help", {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          });
        });
      });
    }
  }, []);

  // Re-animate FAQ items when filter changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;

        gsap.fromTo(
          ".faq-item",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
          }
        );
      });
    }
  }, [selectedCategory, searchTerm]);

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
            <div className="flex justify-center mb-6">
              <div className="faq-hero-icon opacity-0 w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center box-shadow-glow">
                <HelpCircle className="w-10 h-10 text-white float-help" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 faq-hero-title opacity-0 heading-font text-shadow-glow">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8 faq-hero-line origin-center"></div>
            <p className="text-xl text-gray-300 faq-hero-desc opacity-0 font-semibold leading-relaxed">
              Find answers to common questions about our services, projects, and
              processes
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section
        ref={filterRef}
        className="py-8 bg-gray-800/50 backdrop-blur-lg border-b border-orange-500/30 sticky top-20 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-button opacity-0 px-6 py-2 rounded-lg font-bold transition-all heading-font tracking-wider transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg box-shadow-glow"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section
        ref={faqRef}
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-orange-900/10"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 box-shadow-glow"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors group"
                >
                  <div className="flex-1 pr-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-xs font-bold heading-font tracking-wider border-glow">
                        {categories.find((c) => c.id === faq.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors heading-font">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                      openItem === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openItem === index && (
                  <div className="px-6 pb-6 pt-2 animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed font-semibold">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-20">
              <HelpCircle className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <p className="text-xl text-gray-400 font-semibold">
                No questions found matching your search.
              </p>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section
        ref={contactRef}
        className="py-20 bg-gray-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-green-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 heading-font">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-semibold">
              Our team is here to help. Reach out to us directly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="contact-card opacity-0 bg-gradient-to-br from-green-700 to-green-900 p-8 rounded-xl text-white text-center hover:shadow-2xl transition-all duration-300 group border-2 border-green-600 hover:border-orange-500 box-shadow-glow">
              <Phone className="w-12 h-12 mx-auto mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-black mb-2 heading-font">Call Us</h3>
              <a
                href="tel:+2348033014900"
                className="block text-green-100 hover:text-white mb-1 font-semibold"
              >
                +234 803 301 4900
              </a>
              <a
                href="tel:+2348099073333"
                className="block text-green-100 hover:text-white font-semibold"
              >
                +234 809 907 3333
              </a>
            </div>

            <div className="contact-card opacity-0 bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-xl text-white text-center hover:shadow-2xl transition-all duration-300 group border-2 border-orange-500 hover:border-green-500 box-shadow-glow">
              <Mail className="w-12 h-12 mx-auto mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-black mb-2 heading-font">Email Us</h3>
              <a
                href="mailto:info@jefcomgroup.com"
                className="block text-orange-100 hover:text-white font-semibold"
              >
                info@jefcomgroup.com
              </a>
            </div>

            <div className="contact-card opacity-0 bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-xl text-white text-center hover:shadow-2xl transition-all duration-300 group border-2 border-gray-600 hover:border-orange-500 box-shadow-glow">
              <MapPin className="w-12 h-12 mx-auto mb-4 group-hover:scale-125 transition-transform" />
              <h3 className="text-xl font-black mb-2 heading-font">Visit Us</h3>
              <p className="text-gray-300 font-semibold">
                10, Badejo Kalesanwo Street
                <br />
                Matori Industrial Area
                <br />
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-black shadow-2xl text-lg heading-font tracking-wider transform hover:scale-110 box-shadow-glow"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section
        ref={tipsRef}
        className="py-20 bg-gradient-to-br from-green-900 to-gray-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black mb-4 heading-font">
              Helpful <span className="gradient-text">Tips</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Before Consultation",
                tip: "Prepare information about your project scope, budget range, and timeline expectations",
                image: "/images/board.jpg",
              },
              {
                title: "Site Preparation",
                tip: "Ensure easy access to installation areas and clear communication with site personnel",
                image: "/images/distpanel.jpg",
              },
              {
                title: "During Installation",
                tip: "Maintain open communication with our project manager for any concerns or changes",
                image: "/images/computer.jpg",
              },
              {
                title: "After Completion",
                tip: "Keep all documentation safe and schedule regular maintenance to ensure optimal performance",
                image: "/images/solar.jpg",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="tip-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg p-6 rounded-xl border-2 border-gray-700 hover:border-orange-500 transition-all duration-300 group overflow-hidden box-shadow-glow"
              >
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center border-2 border-orange-400">
                    <span className="text-2xl font-black heading-font">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-black mb-2 text-orange-400 heading-font group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-semibold">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
