"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Heart,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

const CareersPage = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const cultureRef = useRef(null);
  const openingsRef = useRef(null);
  const ctaRef = useRef(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Clear career progression paths with regular training and development",
      image: "/images/career.jpg",
    },
    {
      icon: Award,
      title: "Competitive Salary",
      description:
        "Industry-leading compensation packages and performance bonuses",
      image: "/images/careerr.jpg",
    },
    {
      icon: Users,
      title: "Great Team",
      description:
        "Work with passionate, skilled professionals in a collaborative environment",
      image: "/images/team.jpg",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description:
        "Flexible working arrangements and comprehensive health benefits",
      image: "/images/careerrr.jpg",
    },
  ];

  const openings = [
    {
      title: "Senior Electrical Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Lead electrical design and installation projects for commercial and industrial clients. Oversee project teams and ensure quality delivery.",
      responsibilities: [
        "Design electrical systems for buildings and industrial facilities",
        "Lead project teams and coordinate with clients",
        "Prepare technical drawings and documentation",
        "Ensure compliance with electrical codes and standards",
        "Conduct site inspections and quality control",
      ],
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "Minimum 5 years experience in electrical design",
        "Professional registration (COREN) preferred",
        "Proficiency in AutoCAD and electrical design software",
        "Strong project management skills",
      ],
    },
    {
      title: "Control Systems Engineer",
      department: "Engineering",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Design and implement control panel systems for industrial automation projects. Work with PLC programming and SCADA systems.",
      responsibilities: [
        "Design and program control panel systems",
        "Develop PLC and SCADA applications",
        "Troubleshoot and maintain automation systems",
        "Prepare technical specifications and documentation",
        "Provide technical support to clients",
      ],
      requirements: [
        "Bachelor's degree in Electrical/Electronic Engineering",
        "Experience with PLC programming (Siemens, Allen Bradley, Schneider)",
        "Knowledge of SCADA systems and HMI design",
        "Understanding of industrial communication protocols",
        "Strong problem-solving abilities",
      ],
    },
    {
      title: "Solar Energy Technician",
      department: "Renewable Energy",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Install and maintain solar power systems for residential and commercial clients. Ensure optimal system performance and client satisfaction.",
      responsibilities: [
        "Install solar panels, inverters, and battery systems",
        "Conduct site surveys and system assessments",
        "Perform system commissioning and testing",
        "Troubleshoot and repair solar installations",
        "Maintain accurate installation records",
      ],
      requirements: [
        "Diploma/Degree in Electrical Engineering or related field",
        "Hands-on experience with solar installations",
        "Knowledge of solar system components and design",
        "Ability to work at heights and in outdoor conditions",
        "Valid driver's license",
      ],
    },
    {
      title: "Electrical Technician",
      department: "Installation",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "1-3 years",
      description:
        "Execute electrical installations for residential and commercial projects. Work under supervision of senior engineers.",
      responsibilities: [
        "Install electrical wiring and fixtures",
        "Read and interpret electrical drawings",
        "Conduct electrical testing and troubleshooting",
        "Maintain tools and equipment",
        "Follow safety procedures on site",
      ],
      requirements: [
        "Technical certification in Electrical Installation",
        "Basic understanding of electrical codes",
        "Ability to use electrical testing equipment",
        "Good physical fitness",
        "Team player with good communication skills",
      ],
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "5+ years",
      description:
        "Manage multiple electrical engineering projects from inception to completion. Coordinate teams, clients, and resources.",
      responsibilities: [
        "Plan and execute project timelines and budgets",
        "Coordinate with clients, engineers, and contractors",
        "Monitor project progress and quality",
        "Manage project documentation and reporting",
        "Resolve project issues and risks",
      ],
      requirements: [
        "Bachelor's degree in Engineering or Project Management",
        "PMP certification preferred",
        "Proven track record in project management",
        "Strong leadership and communication skills",
        "Proficiency in project management software",
      ],
    },
    {
      title: "Sales Engineer",
      department: "Business Development",
      location: "Lagos, Nigeria",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Drive business growth by identifying opportunities and providing technical solutions to clients in the electrical engineering sector.",
      responsibilities: [
        "Identify and pursue new business opportunities",
        "Prepare technical proposals and quotations",
        "Conduct client presentations and demonstrations",
        "Build and maintain client relationships",
        "Achieve sales targets and objectives",
      ],
      requirements: [
        "Bachelor's degree in Engineering or Business",
        "Experience in technical sales",
        "Knowledge of electrical systems and products",
        "Excellent communication and negotiation skills",
        "Self-motivated with strong business acumen",
      ],
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
            ".careers-hero-title",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
          );

          gsap.fromTo(
            ".careers-hero-line",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
          );

          gsap.fromTo(
            ".careers-hero-desc",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
          );

          gsap.fromTo(
            ".careers-hero-btn",
            { opacity: 0, scale: 0.8 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              delay: 1.2,
            }
          );

          // Benefits Animation
          gsap.fromTo(
            ".benefit-card",
            { opacity: 0, y: 80, rotationX: -15 },
            {
              opacity: 1,
              y: 0,
              rotationX: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: benefitsRef.current,
                start: "top 70%",
              },
            }
          );

          // Culture Section Animation
          gsap.fromTo(
            ".culture-text",
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cultureRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".culture-item",
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cultureRef.current,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            ".stat-box",
            { opacity: 0, scale: 0.5, rotation: -10 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: cultureRef.current,
                start: "top 70%",
              },
            }
          );

          // Job Openings Animation
          gsap.fromTo(
            ".job-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: openingsRef.current,
                start: "top 70%",
              },
            }
          );

          // CTA Animation
          gsap.fromTo(
            ".careers-cta",
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

          // Floating Animation
          gsap.to(".float-icon", {
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
            <h1 className="text-5xl md:text-6xl font-black mb-6 careers-hero-title opacity-0 heading-font text-shadow-glow">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8 careers-hero-line origin-center"></div>
            <p className="text-xl text-gray-300 mb-8 careers-hero-desc opacity-0 font-semibold leading-relaxed">
              Build your career with Nigeria&apos;s leading electrical
              engineering firm
            </p>
            <a
              href="#openings"
              className="careers-hero-btn opacity-0 inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-black shadow-2xl heading-font tracking-wider text-lg transform hover:scale-110 box-shadow-glow"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section
        ref={benefitsRef}
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 heading-font">
              Why Choose <span className="gradient-text">Jefcom</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              Join a team of passionate professionals making a difference in
              Nigeria&apos;s electrical infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="benefit-card opacity-0 group bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 p-8 rounded-xl text-center hover:shadow-2xl transition-all duration-300 overflow-hidden box-shadow-glow"
                >
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-900 rounded-full flex items-center justify-center border-2 border-green-500 box-shadow-glow">
                        <Icon className="w-8 h-8 text-white float-icon" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 heading-font group-hover:text-orange-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 font-semibold">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section
        ref={cultureRef}
        className="py-20 bg-gray-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-orange-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="culture-text opacity-0">
              <h2 className="text-4xl font-black text-white mb-6 heading-font">
                Our Culture & <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 font-semibold leading-relaxed">
                At Jefcom, we foster a culture of excellence, innovation, and
                collaboration. Our team members are our greatest asset, and we
                invest in their growth and development.
              </p>

              <div className="space-y-4">
                {[
                  "Continuous learning and professional development",
                  "Collaborative and supportive work environment",
                  "Recognition and reward for outstanding performance",
                  "Commitment to safety and quality in all projects",
                  "Opportunities to work on diverse, challenging projects",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="culture-item opacity-0 flex items-start space-x-3 group"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-300 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="stat-box opacity-0 bg-gradient-to-br from-green-700 to-green-900 p-8 rounded-xl text-white border-2 border-green-600 hover:border-orange-500 transition-all duration-300 hover:scale-105 box-shadow-glow">
                <div className="text-4xl font-black mb-2 heading-font">25+</div>
                <div className="text-green-100 font-bold">
                  Years in Business
                </div>
              </div>
              <div className="stat-box opacity-0 bg-gradient-to-br from-orange-600 to-orange-700 p-8 rounded-xl text-white border-2 border-orange-500 hover:border-green-500 transition-all duration-300 hover:scale-105 box-shadow-glow">
                <div className="text-4xl font-black mb-2 heading-font">50+</div>
                <div className="text-orange-100 font-bold">Team Members</div>
              </div>
              <div className="stat-box opacity-0 bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-xl text-white border-2 border-gray-600 hover:border-orange-500 transition-all duration-300 hover:scale-105 box-shadow-glow">
                <div className="text-4xl font-black mb-2 heading-font">
                  00+
                </div>
                <div className="text-gray-100 font-bold">
                  Projects Delivered
                </div>
              </div>
              <div className="stat-box opacity-0 bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-xl text-white border-2 border-green-500 hover:border-orange-500 transition-all duration-300 hover:scale-105 box-shadow-glow">
                <div className="text-4xl font-black mb-2 heading-font">
                  100+
                </div>
                <div className="text-green-100 font-bold">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        id="openings"
        ref={openingsRef}
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 grid-overlay opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-orange-900/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 heading-font">
              Current <span className="gradient-text">Openings</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              Explore exciting opportunities to grow your career with us
            </p>
          </div>

          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="job-card opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 rounded-xl overflow-hidden transition-all duration-300 box-shadow-glow"
              >
                <button
                  onClick={() =>
                    setExpandedJob(expandedJob === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2 flex-wrap">
                      <h3 className="text-2xl font-black text-white heading-font group-hover:text-orange-400 transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-sm font-bold heading-font tracking-wider border-glow">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-semibold">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1 text-orange-500" />
                        {job.department}
                      </span>
                      <span>{job.location}</span>
                      <span>{job.experience} experience</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-orange-500 transition-transform duration-300 ${
                      expandedJob === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedJob === index && (
                  <div className="p-6 border-t border-gray-700 bg-gray-800/50 animate-fadeIn">
                    <p className="text-gray-300 mb-6 font-semibold leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="text-lg font-black text-white mb-3 heading-font">
                          Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-gray-300 font-semibold"
                            >
                              <span className="text-orange-500 mr-2 font-bold text-lg">
                                •
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-white mb-3 heading-font">
                          Requirements:
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-gray-300 font-semibold"
                            >
                              <span className="text-green-500 mr-2 font-bold text-lg">
                                •
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <a
                      href="/contact"
                      className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-300 font-black heading-font tracking-wider transform hover:scale-105 box-shadow-glow"
                    >
                      Apply Now
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-orange-700 to-orange-600 relative overflow-hidden"
      >
        <div className="absolute inset-0 animated-bg opacity-40"></div>
        <div className="absolute inset-0 grid-overlay opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="careers-cta opacity-0">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 heading-font text-shadow-glow">
              Don&apos;t See Your Role?
            </h2>
            <p className="text-xl text-orange-100 mb-8 font-semibold leading-relaxed">
              We&apos;re always looking for talented professionals. Send us your
              CV and we&apos;ll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:info@jefcomgroup.com"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-black shadow-2xl text-lg heading-font tracking-wider transform hover:scale-110"
            >
              Send Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
