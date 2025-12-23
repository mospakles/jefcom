"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ZoomIn,
  Building2,
  Factory,
  Hotel,
  Church,
  Droplet,
  Search,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Grid3x3,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showImageGrid, setShowImageGrid] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(false);
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  const categories = [
    { id: "all", name: "All Projects", icon: Building2 },
    { id: "power-systems", name: "Power Systems", icon: Building2 },
    { id: "solar", name: "Solar Installations", icon: Building2 },
    { id: "control-panels", name: "Control Panels", icon: Building2 },
    { id: "lighting", name: "Lighting Systems", icon: Building2 },
    { id: "automation", name: "Automation", icon: Building2 },
    { id: "industrial", name: "Industrial", icon: Factory },
    { id: "oil-gas", name: "Oil & Gas", icon: Droplet },
    { id: "manufacturing", name: "Manufacturing", icon: Factory },
    { id: "hospitality", name: "Hospitality", icon: Hotel },
    { id: "religious", name: "Religious", icon: Church },
    { id: "marine", name: "Marine", icon: Factory },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "power-systems",
      sector: "religious",
      title: "Christ Embassy 5,250KVA Generator Panel",
      description: "Synchronizing panel with 6300A automatic changeover system",
      fullDescription:
        "Designed, built and installed a 5,250KVA diesel generator synchronizing panel including a 6300A automatic changeover system integrating both diesel generators and utility supply. Features 400V bus power supply with integrated 5MW stepdown transformer from 33KV to 400V.",
      client: "Christ Embassy Crusade Ground",
      location: "Lagos, Nigeria",
      scope: "Power Systems Installation",
      year: "2024",
      images: [
        "/images/sync-panel.jpeg",
        "/images/synccpanel.jpeg",
        "/images/synccpanell.jpeg",
        "/images/syncpanel.jpeg",
      ],
      highlights: [
        "5,250KVA generator synchronizing panel",
        "6300A automatic changeover system",
        "33KV to 400V transformer integration",
        "400V bus power supply system",
        "Integrated 5MW stepdown transformer",
        "3MW gas generators (upcoming commission January 2026)",
      ],
    },
    {
      id: 2,
      category: "power-systems",
      sector: "religious",
      title: "LCA 10MVA Generator Synchronizing Panel",
      description: "Complete power distribution for multi-campus facility",
      fullDescription:
        "Designed and built 10MVA capacity synchronizing panel with distribution to various locations across Believers Loveworld campuses. Integrated dual 2.5MVA transformer synchronizing panel into the main 10MVA system.",
      client: "LCA - Christ Embassy",
      location: "Lagos, Nigeria",
      scope: "Multi-Campus Power Distribution",
      year: "2023",
      images: [
        "/images/lcaapanel.jpeg",
        "/images/lcapanel.jpeg",
        "/images/lccaapanel.jpeg",
        // "/images/distpanel.jpg",
        // "/images/computer.jpg",
      ],
      highlights: [
        "10MVA synchronizing panel capacity",
        "Dual 2.5MVA transformer integration",
        "Multi-location power distribution network",
        "Campus-wide electrical distribution design",
        "Integrated transformer synchronizing system",
      ],
    },
    {
      id: 3,
      category: "automation",
      sector: "religious",
      title: "LCA Smart Guesthouse Automation",
      description: "5-floor guesthouse with Smarthome G4 system",
      fullDescription:
        "Complete electrical and mechanical design and installation for a 5-floor guesthouse utilizing Smarthome G4 automation system. Includes PPR Technogreen piping, advanced AC systems, and comprehensive plumbing solutions.",
      client: "LCA - Christ Embassy",
      location: "Lagos, Nigeria",
      scope: "Building Automation & Mechanical Systems",
      year: "2023",
      images: [
        "/images/hotel.jpeg",
        "/images/hotell.jpeg",
        "/images/hotelll.jpeg",
      ],
      highlights: [
        "Smarthome G4 automation system",
        "5-floor complete electrical installation",
        "PPR Technogreen plumbing system",
        "Advanced air conditioning installation",
        "Integrated mechanical and electrical design",
      ],
    },
    {
      id: 4,
      category: "solar",
      sector: "hospitality",
      title: "Omnia Hotel 180KW Solar Installation",
      description: "Complete solar system for 200-room hotel complex",
      fullDescription:
        "Comprehensive electrical system design and implementation for 200-room hotel including lighting, power outlets, fire detection, intercom, data services, and 180KW rooftop solar installation with battery storage. Also includes 2.5MVA power generation and distribution system.",
      client: "Omnia Hotel & Towers",
      location: "Aseese, Ogun State",
      scope: "Complete Electrical & Solar Installation",
      year: "2024",
      images: [
        "/images/omnia.jpeg",
        "/images/hottel.jpeg",
        "/images/hotellll.jpeg",
        "/images/hottell.jpeg",
      ],
      highlights: [
        "200-room hotel electrical design",
        "180KW solar power installation",
        "2.5MVA power generation system",
        "800 bed unit rooms electrical installation",
        "Addressable Gent 6-loop fire detection panel",
        "DLink WiFi wireless phone & DPH 200 smart hotel phone system",
        "Complete intercom and data services",
      ],
    },
    {
      id: 5,
      category: "solar",
      sector: "hospitality",
      title: "90KW Commercial Solar Project",
      description: "Grid-tied solar system for office complex",
      fullDescription:
        "Complete grid-tied solar system installation for commercial office complex, featuring advanced monitoring and energy management systems with real-time performance tracking.",
      client: "Commercial Client",
      location: "Lagos, Nigeria",
      scope: "Commercial Solar Installation",
      year: "2023",
      images: [
        "/images/commercialsolar.jpg",
        "/images/solar.jpg",
        // "/images/tower.jpg",
      ],
      highlights: [
        "90KW solar capacity",
        "Grid-tied system with net metering",
        "Real-time monitoring system",
        "Energy management optimization",
        "Advanced inverter technology",
      ],
    },
    {
      id: 6,
      category: "control-panels",
      sector: "oil-gas",
      title: "Ascon Oil MCC & Control Panels",
      description: "Complete tank farm electrical control systems",
      fullDescription:
        "Electrical design, construction and installation of main power supply switching gadgets, MCC panels for petroleum product pumps (25HP, 50HP, 100HP), changeover switch stations, thermistor control panels, perimeter lighting layout, and tank earthing systems.",
      client: "Ascon Oil Company Limited",
      location: "Apapa Depot, Lagos",
      scope: "Tank Farm Electrical Systems",
      year: "2022",
      images: [
        "/images/ascon.jpg",
        "/images/ascoonn.jpg",
        "/images/ascoon.jpg",
        "/images/asconn.jpg",
      ],
      highlights: [
        "MCC panels for petroleum pumps (25HP-100HP)",
        "Multiple changeover switch stations",
        "Thermistor control panels for product pumps",
        "Perimeter lighting system installation",
        "Tank earthing connection systems",
        "Jockey pump panel & 75KW installations",
      ],
    },
    {
      id: 7,
      category: "control-panels",
      sector: "oil-gas",
      title: "Sahara Oil Presidential Air Fleet Tank Farm",
      description: "Aviation fuel pump control and rehabilitation",
      fullDescription:
        "Rehabilitation of Presidential Air Fleet tank farm at Abuja Airport. Designed, built and installed electrical control panels for aviation fuel pumps, perimeter lighting installation, and serviced existing lightning arrestor systems.",
      client: "Sahara Oil Ltd",
      location: "Abuja Airport",
      scope: "Aviation Tank Farm Rehabilitation",
      year: "2021",
      images: [
        "/images/sahara.jpg",
        "/images/saharra.jpg",
        "/images/sahara.jpeg",
      ],
      highlights: [
        "Aviation fuel pump control panels",
        "Perimeter lighting systems",
        "Lightning arrestor servicing",
        "Presidential Air Fleet specifications",
        "Complete electrical rehabilitation",
      ],
    },
    {
      id: 8,
      category: "control-panels",
      sector: "oil-gas",
      title: "Shell Petroleum Oil Water Separator",
      description: "Automatic control panel for fuel depot",
      fullDescription:
        "Designed, constructed and installed electrical control panel for automatic oil water separator system at the fuel depot facility in Port Harcourt.",
      client: "Shell Petroleum",
      location: "Port Harcourt",
      scope: "Control Panel Design & Installation",
      year: "2021",
      images: ["/images/shhell.jpg", "/images/shell.jpg", "/images/shelll.jpg"],
      highlights: [
        "Automatic oil water separator control",
        "Custom electrical panel design",
        "Fuel depot application",
        "Environmental compliance systems",
      ],
    },
    {
      id: 9,
      category: "control-panels",
      sector: "manufacturing",
      title: "CHI Ltd Dual 3200A Distribution System",
      description: "High-capacity factory power distribution",
      fullDescription:
        "Designed and wired 4-input changeover panel with multiple outputs. Rebuilt 3200A sub-station distribution panel with seven outputs. Built three transformer control panels for new sub-station grid. Installed Marshall Turflex cable trunking throughout gas power plant and offices.",
      client: "CHI Ltd / Cormart Nigeria Limited",
      location: "Ogba Factory, Lagos",
      scope: "Industrial Power Systems",
      year: "2020-2023",
      images: ["/images/chi.avif", "/images/chhii.avif", "/images/chii.webp"],
      highlights: [
        "4-input changeover panel design",
        "3200A distribution panel rebuild",
        "Three transformer control panels",
        "Marshall Turflex cable trunking installation",
        "160A changeover with fire hydrant pump control",
        "400A power distribution panel (10 outputs)",
        "Dual 3200A distribution panel for Chivita plant",
        "1600A changeover for Ajanla Farm FeedMill",
        "Sequential control panel for FeedMill",
      ],
    },
    {
      id: 10,
      category: "industrial",
      sector: "manufacturing",
      title: "Cormart Multiple Facility Installations",
      description: "Comprehensive electrical systems across multiple plants",
      fullDescription:
        "Built numerous control and distribution panels across multiple facilities including Chivita Lagos, Cormart Lagos, Wacot Lagos, KM 51 Plant, Ajanla Farm, Owode Farm, and Margo Farm. Projects include automatic water system controls, ETP distribution panels, UPS distribution, and sequential controls.",
      client: "CHI Ltd / Cormart Nigeria Limited",
      location: "Multiple Locations, Lagos & Ogun",
      scope: "Multi-Facility Electrical Systems",
      year: "2020-2023",
      images: [
        "/images/comart.jpg",
        "/images/commart.jpg",
        "/images/comartt.jpg",
      ],
      highlights: [
        "Dual 400A UPS distribution panels",
        "ETP distribution panel for Chivita",
        "400A distribution panel for Ajanla Farm",
        "Automatic water system control panels",
        "4-input changeover panels with multiple outputs",
        "Coverage across 7+ facilities",
      ],
    },
    {
      id: 11,
      category: "lighting",
      sector: "hospitality",
      title: "Ikorodu Musical Village 6,000-Capacity Hall",
      description: "Complete electrical installation for event complex",
      fullDescription:
        "Designed and carried out complete electrical installation for hall facility that seats 6,000 guests. Includes central control panel for 44 units of 5-tonne air conditioners, matrix hall lighting system with central control, 12m high pole perimeter lighting, fully automated changeover system for PHCN and three generators with selector panel, and central CCTV system. Also designed and implemented electrical wiring for four duplex residences.",
      client: "Ikorodu Musical Village Ltd",
      location: "Ikorodu, Lagos",
      scope: "Event Hall & Residential Complex",
      year: "2019",
      images: ["/images/ikoroduu.jpg", "/images/ikorodu.jpeg"],
      highlights: [
        "6,000-guest capacity hall electrical systems",
        "Central control for 44x 5-tonne AC units",
        "Matrix hall lighting with central control",
        "12m high pole perimeter lighting",
        "600mm x 600mm modular lighting installation",
        "Automated 3-generator changeover with selector",
        "Central closed circuit camera system",
        "Four duplex residences electrical design",
      ],
    },
    {
      id: 12,
      category: "control-panels",
      sector: "oil-gas",
      title: "Loutronix Multiple Tank Farm Projects",
      description: "Control panels for petroleum facilities across Nigeria",
      fullDescription:
        "Designed and built numerous control panels for petroleum product pumps (25HP, 50HP, 100HP capacities) for various tank farms. Designed general electrical distribution systems for multiple petroleum companies. Projects include MCC panels, changeover panels, and pump control systems.",
      client: "Loutronix Ltd (Multiple End Clients)",
      location: "Lagos, Port Harcourt, Abuja",
      scope: "Petroleum Industry Control Systems",
      year: "2019-2022",
      images: [
        "/images/tank.jpg",
        "/images/tankk.png",
        "/images/tankkk.jpg",
        "/images/tankkkk.jpg",
      ],
      highlights: [
        "MCC Panel for Ascon Petroleum, Apapa",
        "MCC Panel for Rahamaniyya Petroleum, Apapa",
        "Changeover Panel for Master Oil, Port Harcourt",
        "Pump Panel for Sahara Oil Presidential Air Fleet, Abuja",
        "Changeover Panel for Everest/Eterna Oil, Apapa",
        "MCC Panel for Master Oil, Port Harcourt",
        "25HP, 50HP, and 100HP pump control panels",
      ],
    },
    {
      id: 13,
      category: "marine",
      sector: "industrial",
      title: "Nigeria Navy Ship Electrical Systems",
      description: "Naval vessel engine control and electrical systems",
      fullDescription:
        "In partnership with BT Lincoln Engineering Services, redesigned and rewired clutch/gearbox electrical control for NNS Lana. Participated in main engine installation for NNS Rima and Mira. Wired digital control (CCM and ECM) modules for main engines.",
      client: "Nigeria Navy Ship",
      location: "Naval Facilities",
      scope: "Marine Electrical Systems",
      year: "2020-2021",
      images: ["/images/navvy.jpg", "/images/navy.jpg", "/images/navyyy.jpeg"],
      highlights: [
        "Clutch/gearbox electrical control redesign (NNS Lana)",
        "Main engine installation participation (NNS Rima & Mira)",
        "CCM and ECM module wiring for main engines",
        "Naval-grade electrical specifications",
        "Marine environment compliance",
      ],
    },
    {
      id: 14,
      category: "industrial",
      sector: "manufacturing",
      title: "Plastic Manufacturing Machine Installations",
      description: "Multiple plastic processing equipment installations",
      fullDescription:
        "Installed and maintained various plastic injection and blow molding machines across multiple facilities. Brands include Windsor, Sandretto, Engel repro series, Bone craven, Storkreed, and Sikoplast. Provided ongoing consultancy and maintenance services.",
      client:
        "Multiple Clients (Adig Plastics, Vectorstruct, Sunflower, DVC, Finoc)",
      location: "Lagos, Anambra, Enugu",
      scope: "Industrial Equipment Installation",
      year: "2018-2023",
      images: [
        "/images/plastic.jpg",
        "/images/plasticc.jpg",
        "/images/plasticcc.jpg",
      ],
      highlights: [
        "Injection molding machines (various makes)",
        "Blow molding machine installations",
        "Sikoplast extrusion machine",
        "Blown film machine installation",
        "Pipe extrusion machine setup",
        "PLC-controlled machine repairs (Omega 200)",
        "Demag injection molding modifications",
        "Bekum blow machine electrical modifications",
      ],
    },
    {
      id: 15,
      category: "industrial",
      sector: "manufacturing",
      title: "Vectorstruct Power & Machine Systems",
      description: "Complete factory electrical and machine installation",
      fullDescription:
        "Installed power control gadgets including switch gears, busbars, and changeover switches. Installed and maintained Sikoplast extrusion machine, blown film machine, and pipe extrusion machine. Provided ongoing consultancy and maintenance.",
      client: "Vectorstruct Ltd",
      location: "Lagos",
      scope: "Factory Power & Equipment Installation",
      year: "2019-2022",
      images: [
        "/images/vector.jpg",
        "/images/vecctor.avif",
        "/images/vecctor.jpg",
      ],
      highlights: [
        "Switch gear and busbar installation",
        "Changeover switch systems",
        "Sikoplast extrusion machine installation",
        "Blown film machine setup",
        "Pipe extrusion machine installation",
        "Continuous maintenance services",
      ],
    },
    {
      id: 16,
      category: "industrial",
      sector: "manufacturing",
      title: "Tripple Gee Printing Equipment Services",
      description: "Industrial printing machine electrical systems",
      fullDescription:
        "Rebuilt electrical/electronic control panel and rewired Drent Eeberk printing machine. Installed and repaired flex printing machines in packing section. Carried out repair work on Rotatek 200 multi-station printing machine with continuous maintenance.",
      client: "Tripple Gee & Company PLC",
      location: "Lagos",
      scope: "Printing Equipment Electrical Systems",
      year: "2020-2022",
      images: [
        "/images/ggg.webp",
        "/images/gggg.jpg",
        "/images/gggg.png",
        "/images/ggggg.jpg",
      ],
      highlights: [
        "Drent Eeberk printing machine control rebuild",
        "Flex printing machine installations and repairs",
        "Rotatek 200 multi-station printing repairs",
        "Continuous factory maintenance services",
      ],
    },
    {
      id: 17,
      category: "automation",
      sector: "hospitality",
      title: "Talldrum Smart Apartment & Office",
      description: "Smarthome automation for residential and commercial",
      fullDescription:
        "Designed and installed complete electrical and mechanical fittings for 5-bedroom apartment with Smarthome automation control. Provided electrical installation and lighting design for office complex.",
      client: "Talldrum Limited",
      location: "Lagos",
      scope: "Smart Home & Office Automation",
      year: "2022",
      images: [
        "/images/talldrum.jpg",
        "/images/talldrumm.jpg",
        "/images/talldrummm.webp",
      ],
      highlights: [
        "5-bedroom apartment smart automation",
        "Smarthome electrical control system",
        "Complete mechanical fittings",
        "Office complex electrical installation",
        "Custom lighting design",
      ],
    },
    {
      id: 18,
      category: "power-systems",
      sector: "religious",
      title: "Loveworld Exhibition Power Stations",
      description: "Warehouse power distribution systems",
      fullDescription:
        "Electrical installation and construction of power switch stations for PaperCraft warehouse and BCN warehouse facilities serving Christ Embassy exhibition operations.",
      client: "Loveworld Exhibition (Christ Embassy)",
      location: "Lagos",
      scope: "Warehouse Power Systems",
      year: "2021",
      images: ["/images/lwpower.jpg", "/images/lwpowerr.jpg"],
      highlights: [
        "PaperCraft warehouse power station",
        "BCN warehouse power station",
        "Custom switch station construction",
        "Exhibition facility electrical systems",
      ],
    },
    {
      id: 19,
      category: "power-systems",
      sector: "religious",
      title: "Christ Embassy Isolo Power Supply",
      description: "11KV to premises power distribution design",
      fullDescription:
        "Designed and supervised complete power supply scheme from 11KV line to church premises. Designed and supervised renovation of new altar electrical systems.",
      client: "Christ Embassy Church, Isolo",
      location: "Isolo, Lagos",
      scope: "Church Power Infrastructure",
      year: "2020",
      images: ["/images/isolo.jpeg"],
      highlights: [
        "11KV power line to premises design",
        "Complete power supply scheme",
        "Altar renovation electrical design",
        "Supervision and implementation",
      ],
    },
    {
      id: 20,
      category: "control-panels",
      sector: "industrial",
      title: "BT Technologies Specialized Panels",
      description: "Data center and office power solutions",
      fullDescription:
        "Designed and built remote control panel for package unit air conditioners for Interswitch Data Centre. Built 250A three-input changeover panel, 160A distribution panel, and implemented power management solution for Eartholeum office complex.",
      client: "BT Technologies Ltd",
      location: "Lekki, Lagos",
      scope: "Data Center & Office Power Management",
      year: "2021",
      images: ["/images/bttech.jpg", "/images/btt.jpg", "/images/bttt.jpg"],
      highlights: [
        "Remote AC control panel for data center",
        "Package unit air conditioner controls",
        "250A three-input changeover panel",
        "160A distribution panel",
        "Power management solution implementation",
      ],
    },
    {
      id: 21,
      category: "automation",
      sector: "industrial",
      title: "Telnet Satellite Dish Control Systems",
      description: "Automatic tracking and power systems",
      fullDescription:
        "Installed motorized mechanism and designed control panel for automatic tracking mode of satellite dish. Built and installed 150KVA AMF automatic changeover panel for satellite equipment. Built bypass panel for AMF control.",
      client: "Telnet Nigeria Limited",
      location: "Lagos",
      scope: "Satellite Equipment Automation",
      year: "2020",
      images: ["/images/telnet.jpg"],
      highlights: [
        "Automatic satellite dish tracking system",
        "Motorized mechanism installation",
        "150KVA AMF changeover panel",
        "Bypass panel for AMF control",
        "Satellite equipment power systems",
      ],
    },
    {
      id: 22,
      category: "automation",
      sector: "hospitality",
      title: "Hotel Automation & Fire Systems",
      description: "Smart hotel and safety systems installation",
      fullDescription:
        "Electrical installation with hotel automation for Rings and Favorits Ltd. Installation of fire hydrant system for LCA Guest House. Multiple CCTV system installations in domestic and commercial buildings across Lagos, Port Harcourt, and Anambra.",
      client: "Multiple Clients",
      location: "Lagos, Port Harcourt, Anambra",
      scope: "Hotel Automation & Security",
      year: "2019-2022",
      images: ["/images/hotelfire.jpg"],
      highlights: [
        "Hotel automation systems (Gbagada)",
        "Fire hydrant system (LCA Billingsway)",
        "CCTV installations across multiple states",
        "Domestic and commercial security systems",
      ],
    },
    {
      id: 23,
      category: "industrial",
      sector: "manufacturing",
      title: "Lloyd Angela Diesel Monitoring Systems",
      description: "BTS site diesel level sensors and storage",
      fullDescription:
        "Produced and calibrated multi-point diesel level sensors for BTS communication sites. Produced 2000-litre diesel storage tanks in partnership with Nifydan for telecommunications infrastructure.",
      client: "Lloyd Angela & Coy Ltd",
      location: "Agidinmgbi, Lagos",
      scope: "Telecommunications Infrastructure",
      year: "2020",
      images: ["/images/diesel.jpg"],
      highlights: [
        "Multi-point diesel level sensors",
        "BTS communication site equipment",
        "2000-litre diesel storage tanks",
        "Calibration and production services",
      ],
    },
    {
      id: 24,
      category: "power-systems",
      sector: "residential",
      title: "Residential Changeover Panel Systems",
      description: "Domestic automatic power switching solutions",
      fullDescription:
        "Built and installed various capacity automatic changeover panels for residential applications. Capacities include 30KVA, 20KVA, 8KVA, 5.5KVA, and 2.5KVA for generator/PHCN supply switching in multiple domestic apartments.",
      client: "Various Residential Clients",
      location: "Multiple Locations",
      scope: "Residential Power Management",
      year: "2018-2023",
      images: [
        "/images/residential.jpeg",
        "/images/residentiall.jpeg",
        "/images/residentialll.jpeg",
        "/images/residentiial.jpeg",
      ],
      highlights: [
        "30KVA changeover panels",
        "20KVA changeover systems",
        "8KVA residential panels",
        "5.5KVA and 2.5KVA capacity units",
        "Automatic PHCN/generator switching",
      ],
    },
    {
      id: 25,
      category: "industrial",
      sector: "manufacturing",
      title: "Container Office Renovation",
      description: "Complete container office transformation",
      fullDescription:
        "Renovated container office with complete electrification, telecommunications infrastructure, internal POP plaster board wall cladding, external Aluminum/PVC cladding (LikeAir product), internal POP screeding, and Dulux paint finishing.",
      client: "Commercial Client",
      location: "Lagos",
      scope: "Container Office Complete Fit-Out",
      year: "2021",
      images: ["/images/containeer.jpg", "/images/container.jpg"],
      highlights: [
        "Complete electrification",
        "Telecommunications installation",
        "POP plaster board interior walls",
        "Aluminum/PVC external cladding",
        "Professional paint finishing",
      ],
    },
    {
      id: 26,
      category: "industrial",
      sector: "commercial",
      title: "Chidan Port Harcourt Office",
      description: "Office electrical and mechanical renovation",
      fullDescription:
        "Complete renovation and installation of electrical and mechanical gadgets for Port Harcourt office facility. Comprehensive upgrade of power distribution and mechanical systems.",
      client: "Chidan Int'l & Resources Ltd",
      location: "Port Harcourt",
      scope: "Office Renovation",
      year: "2020",
      images: ["/images/chidan.jpg", "/images/chiddan.jpg"],
      highlights: [
        "Complete electrical renovation",
        "Mechanical gadgets installation",
        "Power distribution upgrade",
        "Office infrastructure modernization",
      ],
    },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" ||
      item.category === selectedCategory ||
      item.sector === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedProjectData = portfolioItems.find(
    (item) => item.id === selectedProject
  );

  const nextImage = () => {
    if (selectedProjectData && selectedProjectData.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProjectData.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProjectData && selectedProjectData.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProjectData.images.length - 1 : prev - 1
      );
    }
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
    setShowImageGrid(false);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
    setShowImageGrid(false);
    setFullscreenImage(false);
  }, [selectedProject]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        import("gsap/ScrollTrigger").then((ScrollTriggerModule) => {
          const ScrollTrigger = ScrollTriggerModule.default;
          gsap.registerPlugin(ScrollTrigger);

          gsap.fromTo(
            ".hero-title",
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power4.out", delay: 0.3 }
          );

          gsap.fromTo(
            ".hero-line",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
          );

          gsap.fromTo(
            ".hero-desc",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 1 }
          );

          gsap.fromTo(
            ".filter-button",
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.05,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: filterRef.current,
                start: "top 90%",
              },
            }
          );

          gsap.fromTo(
            ".portfolio-item",
            { opacity: 0, scale: 0.8, y: 50 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "back.out(1.4)",
              scrollTrigger: {
                trigger: contentRef.current,
                start: "top 80%",
              },
            }
          );

          gsap.fromTo(
            ".cta-section",
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
    if (typeof window !== "undefined") {
      import("gsap").then((gsapModule) => {
        const gsap = gsapModule.default;
        gsap.fromTo(
          ".portfolio-item",
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: "back.out(1.3)",
          }
        );
      });
    }
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="pt-40 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-green-800 to-gray-900">
          <div className="absolute inset-0 grid-overlay opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-green-500/10"></div>
        </div>
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  3 + Math.random() * 2
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 hero-title opacity-0 leading-tight">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-16 font-semibold leading-relaxed drop-shadow-lg hero-desc opacity-0">
              Explore our comprehensive portfolio of successfully delivered
              electrical engineering projects across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section
        ref={filterRef}
        className="py-8 bg-gray-800/50 backdrop-blur-lg border-b border-orange-500/30 sticky top-20 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-700/50 border-2 border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all placeholder-gray-400 font-semibold"
              />
            </div>
            <span className="text-sm text-gray-400 font-semibold ml-4">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`filter-button opacity-0 flex items-center space-x-2 px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg"
                      : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 border border-gray-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section
        ref={contentRef}
        className="py-20 bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-green-900/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item opacity-0 bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-orange-500 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(item.id)}
              >
                <div className="relative h-64 bg-gradient-to-br from-green-800 to-gray-800 overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                  {/* Image Count Badge */}
                  {item.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <ImageIcon className="w-3 h-3" />
                      <span>{item.images.length} photos</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-bold">
                          {item.year}
                        </span>
                        <ZoomIn className="w-6 h-6 text-orange-500" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-xs font-bold tracking-wider">
                      {categories.find((c) => c.id === item.category)?.name}
                    </span>
                    <span className="text-sm text-gray-400 font-bold">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      <span className="font-bold text-gray-300">Client:</span>{" "}
                      {item.client}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400 font-semibold">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal with Lightbox Gallery */}
      {selectedProject !== null && selectedProjectData && (
        <div className="fixed inset-0 bg-black bg-opacity-98 z-50 flex items-center justify-center overflow-hidden">
          <div className="w-full h-full flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 bg-gray-900/80 backdrop-blur-lg border-b border-orange-500/30">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-black text-white">
                  {selectedProjectData.title}
                </h2>
                <span className="px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full text-xs font-bold">
                  {selectedProjectData.images.length} Photos
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setShowImageGrid(!showImageGrid)}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all"
                  title="Toggle gallery view"
                >
                  <Grid3x3 className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setFullscreenImage(!fullscreenImage)}
                  className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-all"
                  title="Toggle fullscreen"
                >
                  <Maximize2 className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 rounded-lg flex items-center justify-center transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
              {/* Image Viewer Section */}
              <div
                className={`flex flex-col ${
                  fullscreenImage ? "w-full" : "w-full lg:w-2/3"
                } bg-black`}
              >
                {/* Main Image Display */}
                {!showImageGrid && (
                  <div className="flex-1 relative flex items-center justify-center p-4">
                    <Image
                      src={selectedProjectData.images[currentImageIndex]}
                      alt={`${selectedProjectData.title} - Image ${
                        currentImageIndex + 1
                      }`}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                    />

                    {/* Navigation Arrows */}
                    {selectedProjectData.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110 shadow-xl"
                        >
                          <ChevronLeft className="w-7 h-7 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-600 transition-all hover:scale-110 shadow-xl"
                        >
                          <ChevronRight className="w-7 h-7 text-white" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <span className="text-white text-lg font-bold">
                        {currentImageIndex + 1} /{" "}
                        {selectedProjectData.images.length}
                      </span>
                    </div>
                  </div>
                )}

                {/* Grid View */}
                {showImageGrid && (
                  <div className="flex-1 overflow-y-auto p-6 bg-gray-900">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProjectData.images.map((image, idx) => (
                        <div
                          key={idx}
                          onClick={() => selectImage(idx)}
                          className={`relative aspect-video rounded-lg overflow-hidden cursor-pointer group ${
                            idx === currentImageIndex
                              ? "ring-4 ring-orange-500"
                              : "hover:ring-2 hover:ring-orange-400"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${idx + 1}`}
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-2 left-2 text-white text-sm font-bold">
                              {idx + 1}
                            </div>
                          </div>
                          {idx === currentImageIndex && (
                            <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                              Current
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Thumbnail Strip (when not in grid view) */}
                {!showImageGrid && selectedProjectData.images.length > 1 && (
                  <div className="p-4 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
                    <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800">
                      {selectedProjectData.images.map((image, idx) => (
                        <div
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden cursor-pointer transition-all ${
                            idx === currentImageIndex
                              ? "ring-4 ring-orange-500 scale-110"
                              : "opacity-60 hover:opacity-100 hover:ring-2 hover:ring-orange-400"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumbnail ${idx + 1}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Project Information Sidebar */}
              {!fullscreenImage && (
                <div className="w-full lg:w-1/3 bg-gray-900 border-l border-gray-800 overflow-y-auto">
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full text-sm font-bold text-white">
                          {
                            categories.find(
                              (c) => c.id === selectedProjectData.category
                            )?.name
                          }
                        </span>
                        <span className="px-4 py-2 bg-gray-800 rounded-full text-sm font-bold text-white">
                          {selectedProjectData.year}
                        </span>
                      </div>
                      <h3 className="text-3xl font-black text-white leading-tight">
                        {selectedProjectData.title}
                      </h3>
                    </div>

                    {/* Client & Location Grid */}
                    <div className="space-y-4 mb-8">
                      <div className="bg-gradient-to-br from-green-900/20 to-gray-800/30 p-4 rounded-lg border border-gray-700">
                        <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                          Client
                        </h4>
                        <p className="text-lg font-bold text-white">
                          {selectedProjectData.client}
                        </p>
                      </div>
                      {selectedProjectData.location && (
                        <div className="bg-gradient-to-br from-green-900/20 to-gray-800/30 p-4 rounded-lg border border-gray-700">
                          <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                            Location
                          </h4>
                          <p className="text-lg font-bold text-white">
                            {selectedProjectData.location}
                          </p>
                        </div>
                      )}
                      {selectedProjectData.scope && (
                        <div className="bg-gradient-to-br from-green-900/20 to-gray-800/30 p-4 rounded-lg border border-gray-700">
                          <h4 className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-2">
                            Scope
                          </h4>
                          <p className="text-lg font-bold text-white">
                            {selectedProjectData.scope}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                      <h4 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-3 flex items-center">
                        <span className="w-1 h-5 bg-orange-500 mr-3 rounded"></span>
                        Project Overview
                      </h4>
                      <p className="text-base text-gray-300 leading-relaxed pl-4">
                        {selectedProjectData.fullDescription ||
                          selectedProjectData.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    {selectedProjectData.highlights && (
                      <div className="bg-gradient-to-br from-green-900/20 to-gray-800/30 rounded-xl p-6 border border-gray-700">
                        <h4 className="text-lg font-black text-white mb-4 flex items-center">
                          <span className="w-1 h-6 bg-orange-500 mr-3 rounded"></span>
                          Key Highlights
                        </h4>
                        <ul className="space-y-3">
                          {selectedProjectData.highlights.map(
                            (highlight, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-300"
                              >
                                <span className="text-orange-500 mr-3 flex-shrink-0 font-bold text-lg">
                                  ✓
                                </span>
                                <span className="font-semibold">
                                  {highlight}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Sector Badge */}
                    {selectedProjectData.sector && (
                      <div className="mt-6 flex items-center justify-center">
                        <span className="text-sm text-gray-400 mr-2">
                          Industry:
                        </span>
                        <span className="px-4 py-2 bg-gradient-to-r from-green-700 to-green-800 text-white rounded-full text-xs font-bold border border-green-600">
                          {
                            categories.find(
                              (c) => c.id === selectedProjectData.sector
                            )?.name
                          }
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="py-20 bg-gradient-to-br from-orange-700 to-orange-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-40">
          <div
            className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient 15s ease infinite",
            }}
          ></div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-section opacity-0">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-orange-100 mb-8 font-semibold leading-relaxed">
              Let us bring your electrical engineering vision to life with the
              same excellence demonstrated in our 26+ completed projects
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-black shadow-2xl text-lg tracking-wider transform hover:scale-110"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
