import {
  Code2,
  Cpu,
  Database,
  Globe,
  Server,
  Wifi
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Vince Buladaco",
    title: "Senior Full-Stack Web Developer & Solutions Architect",
    subtitle: "Specializing in AI, IoT, and Scalable Web Systems.",
    bio: "With over a decade of professional experience, I engineer high-performance systems bridging web technologies, artificial intelligence, and physical devices (IoT). My approach focuses on solving complex business problems through clean architecture, resilient APIs, and intuitive user experiences.",
    email: "jbuladaco88@gmail.com",
    phone: "+63 936 811 5868",
    location: "Davao City, Philippines",
    availability: "Available for new projects",
    status: "available", // available, busy, limited
    profileImage: "/assets/portfolio-profile.png",
    profileImageLight: "/assets/portfolio-profile-black.png",
    socials: {
      github: "https://github.com/vincebuladaco",
      linkedin: "https://linkedin.com/in/vincebuladaco",
      whatsapp: "https://wa.me/639368115868",
    }
  },
  about: {
    journey: "From building robust CRUD applications to engineering advanced IoT monitoring systems and AI-powered logic, my career is defined by continuous technical evolution. I specialize in Next.js, Node.js, and PHP environments, crafting tailored, automation-driven solutions that transform raw data into actionable insights."
  },
  services: [
    {
      id: "web-dev",
      title: "Full-Stack Web Development",
      description: "End-to-end development of scalable, high-conversion web applications using modern frameworks like React, Next.js, and Node.js.",
      icon: Globe,
    },
    {
      id: "ai-solutions",
      title: "AI & Automation Solutions",
      description: "Integrating intelligent features like facial recognition and automated workflows to reduce manual overhead and improve accuracy.",
      icon: Cpu,
    },
    {
      id: "iot",
      title: "IoT Systems Engineering",
      description: "Connecting hardware to the cloud. Designing real-time monitoring dashboards for sensor networks and physical devices.",
      icon: Wifi,
    },
    {
      id: "system-architecture",
      title: "Backend & API Architecture",
      description: "Building resilient, secure REST and GraphQL APIs using Node.js and PHP. Database design and optimization for complex systems.",
      icon: Server,
    }
  ],
  projects: [
    {
      id: "aquacare",
      title: "AquaCare",
      subtitle: "IoT-Based Water Quality Monitoring System",
      description: "A comprehensive hardware-software solution tracking pH, DO, temperature, and salinity. Features a real-time dashboard, automated alerting, and complex data reporting via PHP and custom APIs.",
      image: "/assets/fish-cage.jpg",
      tags: ["PHP", "MySQL", "Chart.js", "IoT", "C++", "Hardware Integration"],
      highlights: [
        "Real-time sensor data visualization",
        "Automated PDF reporting and analytics",
        "Custom JSON APIs for hardware communication",
        "Threshold-based alert system"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "kwentong-interaktibo",
      title: "Kwentong Interaktibo",
      subtitle: "Interactive Story Builder for Educators",
      description: "A creative platform allowing teachers to build, edit, and publish interactive, choice-based stories for students with branching logic.",
      image: "/assets/kwentong-interaktibo.png",
      tags: ["Next.js", "React", "Node.js", "Content Management"],
      highlights: [
        "Visual content creation and editing",
        "Immersive student reading experience",
        "Interactive storytelling logic"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "facial-attendance",
      title: "Smart Attendance",
      subtitle: "Facial Recognition Attendance System",
      description: "An AI-powered attendance logging platform that automates tracking and enhances security through real-time processing and facial detection.",
      image: "/assets/face-reco.jpg",
      tags: ["Python", "Computer Vision", "AI", "Real-time Processing"],
      highlights: [
        "High-accuracy face detection model",
        "Automated attendance logging",
        "Real-time processing"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "coffee-pos",
      title: "Coffee Shop POS System",
      subtitle: "Point of Sale & Inventory Management",
      description: "A robust POS tailored for coffee shops, implementing real-world business logic, inventory tracking, and order management.",
      image: "/assets/coffee-shop.jpg",
      tags: ["Web Technologies", "Database Management", "Business Logic"],
      highlights: [
        "Sales tracking and analytics",
        "Inventory depletion and order management",
        "Real-world business logic implementation"
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: "hospital-management",
      title: "Hospital Management System",
      subtitle: "Enterprise CRUD System",
      description: "A centralized platform managing patient, staff, and medical records through comprehensive database design and system logic.",
      image: "/assets/hospital-system.jpg",
      tags: ["PHP/Node.js", "SQL", "System Logic", "CRUD"],
      highlights: [
        "Complex CRUD operations",
        "Relational database architecture",
        "Patient and staff records management"
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ],
  techStack: {
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    backend: ["Node.js", "PHP", "Express", "REST APIs", "Python"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "AWS", "IoT Sensors", "Linux"]
  },
  journey: [
    {
      year: "2025 - Present",
      title: "Advanced Systems Engineer",
      description: "Focusing on complex integrations and interactive platforms.",
      achievements: [
        "Built AquaCare, an IoT Water Quality Monitoring System with real-time sensors and dashboard analytics.",
        "Developed Kwentong Interaktibo, an interactive storytelling platform for educators with a robust content editing system.",
        "Engineered custom JSON APIs and PHP backends."
      ]
    },
    {
      year: "2024",
      title: "AI & Automation Developer",
      description: "Delved into AI integration and real-time processing.",
      achievements: [
        "Created a Facial Recognition Attendance System.",
        "Integrated computer vision for real-time automated logging.",
        "Focused on reducing manual overhead through automation."
      ]
    },
    {
      year: "2023",
      title: "Full-Stack Developer",
      description: "Mastered real-world business logic and inventory systems.",
      achievements: [
        "Developed a comprehensive Coffee Shop POS System.",
        "Implemented deep sales tracking and inventory management features."
      ]
    },
    {
      year: "2022",
      title: "BSIT Foundation & Systems Developer",
      description: "Started BSIT journey and established core software engineering principles.",
      achievements: [
        "Built a full-scale Hospital Management System.",
        "Mastered advanced CRUD operations and database architecture."
      ]
    }
  ],
  certifications: [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      image: "/assets/certificate-1.jpg"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      date: "2023",
      image: "/assets/certificate-2.jpg"
    },
    {
      id: 3,
      title: "IoT Systems Engineering",
      issuer: "Coursera",
      date: "2023",
      image: "/assets/certificate-3.jpg"
    }
  ]
};
