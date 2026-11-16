/**
 * Internationalization (i18n) Engine for Arián Reyes Portfolio
 * Supports English (Default) and Spanish with local storage persistence.
 */

const translations = {
  en: {
    // Document
    "doc.title": "Arián Reyes Arrunátegui | Full Stack Engineer & AI Architect",
    "doc.meta_desc": "Senior Full Stack Engineer & Technical Team Lead with 10+ years of experience in .NET 8, React, TypeScript, Google Gemini API, OpenAI API, AWS, and Clean Architecture.",

    // Navigation
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects & AI",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "nav.contact_btn": "Contact",

    // Hero
    "hero.status": "Available for High-Impact Projects & Technical Advisory",
    "hero.greeting": "Hi, I'm",
    "hero.role_ai": "AI-Powered Products",
    "hero.lead": "Senior Full Stack Engineer and technical team lead with <strong>10+ years of experience</strong> designing, building, and improving web applications, enterprise platforms, and backend services. Hands-on experience integrating generative AI into user-facing products through <strong>Google Gemini and OpenAI APIs</strong>, applying <strong>Clean Architecture, .NET 8, React, TypeScript, and AWS</strong>.",
    "hero.cta_projects": "View Projects & AI",
    "hero.cta_linkedin": "Connect on LinkedIn",
    "hero.cta_contact": "Contact Details",
    "hero.badge_lead": "Team Lead & Architect",

    // Metrics
    "metrics.m1_num": "10+",
    "metrics.m1_label": "Years of Enterprise Experience",
    "metrics.m2_num": "-90%",
    "metrics.m2_label": "Attendance Report Latency (LINQ & EF)",
    "metrics.m3_num": "-90%",
    "metrics.m3_label": "ERP Incidents Reduced (Root-Cause Fixes)",
    "metrics.m4_num": "Gemini & OpenAI",
    "metrics.m4_label": "LLMs Integrated in SaaS Products",

    // About Section
    "about.tag": "// Professional Profile",
    "about.title": "Robust Engineering + AI Innovation",
    "about.desc": "Technical leadership backed by over a decade delivering banking, mining, and educational platforms, combined with active adoption of large language models to elevate user products.",
    "about.ai_title": "AI & Generative LLMs",
    "about.ai_desc": "Designing and integrating Generative AI workflows with <strong>Google Gemini</strong> and <strong>OpenAI</strong> APIs. AI-assisted content optimization, contextual response generation, prompt engineering, and LLM-powered SaaS architecture.",
    "about.backend_title": "Backend & API Architecture",
    "about.backend_desc": "Specialized in the <strong>.NET ecosystem (C#, .NET Core, .NET 8)</strong>, designing scalable RESTful APIs, microservices, and legacy services (WCF/SOAP). Disciplined adoption of <strong>Clean Architecture, DDD, CQRS</strong>, and design patterns.",
    "about.frontend_title": "Modern Frontend & React",
    "about.frontend_desc": "Crafting responsive, dynamic, and high-performance user interfaces using <strong>React, TypeScript, Angular, Modern JavaScript, and Bootstrap/Tailwind</strong>. Focused on user experience and accessibility.",

    // Skills
    "skills.tag": "// Core Technical Skills",
    "skills.title": "Technical Ecosystem",
    "skills.desc": "Technologies, frameworks, and methodologies mastered across 10+ years of continuous software delivery.",

    // Projects
    "projects.tag": "// Portfolio & Case Studies",
    "projects.title": "Featured Projects & AI Products",
    "projects.desc": "A selection of SaaS solutions, large-scale enterprise platforms, and Artificial Intelligence integrations.",
    
    "projects.p1_tag": "AI SaaS Product",
    "projects.p1_title": "Cross-Posting Pro",
    "projects.p1_subtitle": "AI-Assisted Social Media Publishing Platform",
    "projects.p1_desc": "SaaS platform that optimizes and automates multi-channel social media publishing, integrating Artificial Intelligence via <strong>Google Gemini API</strong> to enhance and suggest high-engagement copy.",
    "projects.p1_h1": "Integrated Google Gemini API to provide AI-powered text optimization and contextual suggestions.",
    "projects.p1_h2": "Built AI-assisted workflows that help users improve copy, alternative text, and hashtags.",
    "projects.p1_h3": "Decoupled architecture and reactive frontend designed for content creators and businesses.",
    "projects.p1_btn": "Visit crosspostingpro.com",

    "projects.p2_tag": "AI Prototype",
    "projects.p2_title": "AI-Powered English Translator",
    "projects.p2_subtitle": "Contextual Language Assistance Prototype with LLMs",
    "projects.p2_desc": "Conversational prototype leveraging large language models (Google Gemini) to translate idioms and formulate contextual responses to complex queries written in English.",
    "projects.p2_h1": "Adaptive contextual translation considering formal, technical, or conversational tone.",
    "projects.p2_h2": "Real-time response suggestions for fluent professional interaction in English.",
    "projects.p2_h3": "Advanced prompt engineering and low-latency LLM inference.",
    "projects.p2_btn": "Request Details / Demo",

    "projects.p3_tag": "Enterprise Core ERP",
    "projects.p3_title": "Mining & Corporate ERP Platform",
    "projects.p3_subtitle": "Technical Direction, Architecture & Optimization",
    "projects.p3_desc": "Led the engineering team responsible for the architecture, mission-critical modules, and continuous evolution of the corporate ERP platform at Minera Colquisiri S.A.",
    "projects.p3_h1": "<strong>-90% report response times:</strong> Query and application-level optimization using LINQ and Entity Framework.",
    "projects.p3_h2": "<strong>-90% recurring ERP incidents:</strong> Root-cause identification and permanent software fixes.",
    "projects.p3_h3": "<strong>Electronic Invoicing & Delivery Guides:</strong> Digitized document access, eliminating paper costs.",
    "projects.p3_h4": "Automated performance and UI testing with Apache JMeter and Selenium.",
    "projects.p3_btn": "Corporate ERP Link",

    "projects.p4_tag": "B2B Portal",
    "projects.p4_title": "Supplier & Contractor Extranet",
    "projects.p4_subtitle": "B2B Procurement & Tender Management Portal",
    "projects.p4_desc": "Mission-critical portal for mining contractors and suppliers, managing certifications, purchase orders, bids, and billing status in real time.",
    "projects.p4_h1": "Developed in .NET 8 with Clean Architecture, strict layer separation, and enhanced security.",
    "projects.p4_h2": "Seamless enterprise web service integrations and regulatory compliance checks.",
    "projects.p4_h3": "Responsive, user-friendly UI designed for hundreds of external partner companies.",
    "projects.p4_btn": "Visit Extranet",

    "projects.p5_tag": "High Concurrency",
    "projects.p5_title": "Pre-Registration & Admissions Portal",
    "projects.p5_subtitle": "Nationwide Educational Admissions System",
    "projects.p5_desc": "Admissions platform for Peru's largest private school network, handling high concurrency during peak nationwide enrollment periods.",
    "projects.p5_h1": "Improved pre-registration system, reducing frontend bugs by 90% and boosting usability.",
    "projects.p5_h2": "Reduced recurring incidents in the nationwide Data Management platform by 60%.",
    "projects.p5_h3": "Optimized student data migration and mass sales-order generation for NetSuite ERP.",
    "projects.p5_h4": "Integrated online payment gateway with Interbank and HR recruitment enhancements.",
    "projects.p5_btn": "Innova Schools Portal",

    "projects.p6_tag": "Banking & Finance",
    "projects.p6_title": "Scotiabank Enterprise Banking Systems",
    "projects.p6_subtitle": "ScotiaFriends, SCI Agreements & Counselor Alignment",
    "projects.p6_desc": "Developed, maintained, and optimized financial enterprise platforms for Scotiabank, CrediScotia, and regional projects involving teams in Peru, Chile, Mexico, Canada, Costa Rica, and El Salvador.",
    "projects.p6_h1": "Led technical delivery of the ScotiaFriends customer referral system.",
    "projects.p6_h2": "Refactored high-load batch workflows, SSIS/SSRS reporting pipelines, and WCF services.",
    "projects.p6_h3": "Collaborated actively with stakeholders on requirements, estimates, and technical roadmaps.",
    "projects.p6_btn": "View Career Track",

    // Experience
    "exp.tag": "// Career Track",
    "exp.title": "Professional Experience",
    "exp.desc": "Proven track record leading engineering teams and delivering high-impact software solutions.",
    
    "exp.vap_role": "Senior Full Stack Developer & Team Lead",
    "exp.vap_company": "VAP Perú — Corporate ERP Platform",
    "exp.vap_period": "July 2018 – Present",
    "exp.vap_b1": "<strong>Team Leadership:</strong> Contributed technical direction, architecture, delivery, and continuous improvement for the corporate ERP.",
    "exp.vap_b2": "<strong>Modern Frontend & Backend:</strong> Designed and delivered ERP modules using React, alongside backend services and integrations built with .NET and Web APIs.",
    "exp.vap_b3": "<strong>Performance Optimization (-90%):</strong> Reduced attendance-report response times by approximately 90% through query and application-level optimization using LINQ and Entity Framework.",
    "exp.vap_b4": "<strong>Incident Reduction (-90%):</strong> Reduced recurring ERP incidents by approximately 90% by identifying root causes and implementing permanent solutions.",
    "exp.vap_b5": "<strong>Electronic Invoicing:</strong> Implemented electronic invoicing and delivery guides, digitizing document access and eliminating printing and stationery costs.",
    "exp.vap_b6": "<strong>Architecture & QA:</strong> Designed architecture for new modules, evaluated design patterns (Clean Architecture, DDD), and performed testing with Apache JMeter and Selenium.",

    "exp.innova_role": "Senior .NET / Full Stack Developer",
    "exp.innova_company": "Innova Schools",
    "exp.innova_period": "November 2016 – June 2018",
    "exp.innova_b1": "<strong>Admissions Optimization:</strong> Improved pre-registration system, reducing frontend issues by 90% and increasing application performance and usability.",
    "exp.innova_b2": "<strong>Incident Reduction (-60%):</strong> Reduced recurring incident handling in the Data Management system by approximately 60%.",
    "exp.innova_b3": "<strong>NetSuite ERP Integration:</strong> Optimized student data migration and mass sales-order generation processes for NetSuite ERP.",
    "exp.innova_b4": "<strong>Payments & HR:</strong> Contributed to the Interbank online-payment integration and HR recruitment-process improvements.",

    "exp.ses_role": "Senior Analyst / Senior Developer",
    "exp.ses_company": "Software Enterprise Services (SES) — Banking Sector",
    "exp.ses_period": "June 2011 – July 2016",
    "exp.ses_b1": "<strong>Banking Platforms:</strong> Developed, maintained, and optimized enterprise applications for Scotiabank (Counselor Alignment, SCI Agreements, CrediScotia Referrals, and ScotiaFriends).",
    "exp.ses_b2": "<strong>ScotiaFriends Delivery:</strong> Led delivery of the ScotiaFriends system and collaborated with stakeholders on requirements, estimates, and technical documentation.",
    "exp.ses_b3": "<strong>Regional Delivery:</strong> Developed reporting components for a regional project involving teams in Peru, Chile, Mexico, Canada, Costa Rica, and El Salvador.",

    "exp.algoliq_role": "Senior Developer",
    "exp.algoliq_company": "ALGOLIQ — Buenos Aires, Argentina",
    "exp.algoliq_period": "April 2009 – March 2010",
    "exp.algoliq_b1": "<strong>Data Access Refactoring:</strong> Refactored the data-access layer and optimized heavy processing workflows to improve application response times.",
    "exp.algoliq_b2": "<strong>SQL to Oracle Migration:</strong> Migrated SQL stored procedures to Oracle and improved processing queues using Microsoft Message Queuing (MSMQ), multithreading, and bulk inserts.",

    "exp.xstrata_role": "Senior Systems Analyst & Tech Lead",
    "exp.xstrata_company": "Xstrata Copper — Las Bambas Project | Mining, Oil & Gas",
    "exp.xstrata_period": "June 2007 – December 2008",
    "exp.xstrata_b1": "<strong>HSEC Enterprise System:</strong> Led functional analysis and technical delivery for the Health, Safety, Environment & Community (HSEC) platform, modernizing legacy modules from Visual FoxPro to .NET.",
    "exp.xstrata_b2": "<strong>Service-Oriented Architecture:</strong> Architected the backend business and data-access layer using .NET Web Services integrated with Microsoft SQL Server 2005.",
    "exp.xstrata_b3": "<strong>Analytics & Reporting Portal:</strong> Designed and implemented an interactive analytics and statistics portal utilizing ChartFX for business visualization, DevExpress dynamic OLAP cubes, and DlhSoft Gantt Chart for project activity tracking.",
    "exp.xstrata_b4": "<strong>Database Engineering:</strong> Modeled relational data structures and optimized complex stored procedures, ensuring data integrity across mining operations.",

    "exp.axle_role": "Analyst / Programmer",
    "exp.axle_company": "Axle Financial Solutions | Banking & Financial Services",
    "exp.axle_period": "November 2006 – May 2007",
    "exp.axle_b1": "<strong>Core Remittance Platform:</strong> Maintained and implemented mission-critical features for <em>Xpress Remittance</em>, the enterprise international money transfer engine.",
    "exp.axle_b2": "<strong>Corporate Intranet Development:</strong> Designed and deployed intranet modules using ASP.NET AJAX, improving internal communication and operational processing speed.",
    "exp.axle_b3": "<strong>Database & Integration:</strong> Developed optimized database procedures and transactional queries on Microsoft SQL Server 2000 under .NET Framework.",

    "exp.silsa_role": "Analyst / Programmer & Project Lead",
    "exp.silsa_company": "SILSA S.A. | Enterprise Corporate Services",
    "exp.silsa_period": "November 2005 – October 2006",
    "exp.silsa_b1": "<strong>Commercial & Contract Management System:</strong> Architected and built core transactional modules for contract registration, addendums, bank guarantee letters (cartas fianza), purchase orders, and commercial proposal generation.",
    "exp.silsa_b2": "<strong>Multi-Tier Development:</strong> Developed desktop (Windows C#) and web (ASP.NET) solutions integrated with Microsoft SQL Server 2000.",
    "exp.silsa_b3": "<strong>Data Migration & Architecture:</strong> Coordinated and executed historical data migration from Visual FoxPro to SQL Server, creating reusable shared software components.",
    "exp.silsa_b4": "<strong>Project Coordination:</strong> Managed project timelines with Microsoft Project, distributed development tasks across the team, and reported project milestones directly to executive management.",

    // Education & Certs
    "edu.tag": "// Background & Credentials",
    "edu.title": "Education, Certifications & Languages",
    "edu.desc": "Lifelong learning in software engineering, cloud architecture, and agile delivery.",
    "edu.higher_title": "Higher Education",
    "edu.degree1": "Systems Engineering",
    "edu.school1": "Universidad Tecnológica del Perú (UTP) — Lima, Peru",
    "edu.degree2": "Degree in Computing and Informatics",
    "edu.school2": "CIBERTEC (2004 – 2021)",
    "edu.langs_title": "Languages",
    "edu.langs_val": "• <strong>Spanish:</strong> Native<br>• <strong>English:</strong> B2 (Upper-Intermediate)",

    "edu.certs_title": "Key Certifications & Training",
    "edu.cert1": "Scrum Foundation Professional Certificate (SFPC)",
    "edu.cert1_sub": "CertiProf (2020)",
    "edu.cert2": "Architecting on Amazon Web Services (AWS)",
    "edu.cert2_sub": "AWS (2018) | AWS Essentials (2017)",
    "edu.cert3": "Project Management with PMBOK 5th Edition",
    "edu.cert3_sub": "Project Management (2017)",
    "edu.cert4": "Business Intelligence with SQL Server",
    "edu.cert4_sub": "SSIS / SSRS (2017)",
    "edu.cert5": "Microsoft Certified Application Developer (MCAD)",
    "edu.cert5_sub": "Microsoft (2006)",

    // Contact
    "contact.tag": "// Get In Touch",
    "contact.title": "Let's Build Something Exceptional",
    "contact.desc": "Looking to integrate AI into your product, modernize your backend, or add technical leadership to your engineering team?",
    "contact.msg": "Available for senior engineering roles, technical leadership, architectural consulting, and LLM integrations in production software.",
    "contact.email_label": "Email Address",
    "contact.phone_label": "Phone / WhatsApp",
    "contact.linkedin_label": "Official LinkedIn",
    "contact.btn_linkedin": "View Full Profile on LinkedIn",

    // Footer
    "footer.rights": "© 2026 <strong>Arián Reyes Arrunátegui</strong>. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.oauth": "OAuth Redirect"
  },

  es: {
    // Document
    "doc.title": "Arián Reyes Arrunátegui | Full Stack Engineer & AI Architect",
    "doc.meta_desc": "Senior Full Stack Engineer y Team Lead con más de 10 años de experiencia en .NET 8, React, TypeScript, APIs de Google Gemini y OpenAI, AWS y Clean Architecture.",

    // Navigation
    "nav.about": "Acerca de",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos & IA",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "nav.contact_btn": "Contactar",

    // Hero
    "hero.status": "Disponible para Proyectos de Alto Impacto & Consultoría",
    "hero.greeting": "Hola, soy",
    "hero.role_ai": "AI-Powered Products",
    "hero.lead": "Senior Full Stack Engineer y Technical Team Lead con más de <strong>10 años de trayectoria</strong> diseñando, construyendo y optimizando plataformas empresariales, microservicios y aplicaciones web de misión crítica. Experiencia directa integrando <strong>Inteligencia Artificial Generativa (Google Gemini API y OpenAI API)</strong> en productos SaaS en producción, aplicando <strong>Clean Architecture, .NET 8, React, TypeScript y AWS</strong>.",
    "hero.cta_projects": "Ver Proyectos & IA",
    "hero.cta_linkedin": "Conectar en LinkedIn",
    "hero.cta_contact": "Datos de Contacto",
    "hero.badge_lead": "Team Lead & Architect",

    // Metrics
    "metrics.m1_num": "10+",
    "metrics.m1_label": "Años de experiencia profesional",
    "metrics.m2_num": "-90%",
    "metrics.m2_label": "Latencia en consultas de reportes (LINQ / EF)",
    "metrics.m3_num": "-90%",
    "metrics.m3_label": "Reducción de incidentes ERP con fixes de raíz",
    "metrics.m4_num": "Gemini & OpenAI",
    "metrics.m4_label": "Integración de LLMs en productos SaaS",

    // About Section
    "about.tag": "// Perfil Profesional",
    "about.title": "Ingeniería Sólida + Innovación con IA",
    "about.desc": "Liderazgo técnico respaldado por una década en desarrollo de sistemas bancarios, mineros y educativos, complementado con la adopción activa de modelos de lenguaje para potenciar productos reales.",
    "about.ai_title": "AI & Generative LLMs",
    "about.ai_desc": "Diseño e integración de flujos de IA Generativa mediante APIs de <strong>Google Gemini</strong> y <strong>OpenAI</strong>. Optimización de contenidos, generación contextual de respuestas, prompt engineering y arquitectura de productos SaaS potenciados por IA.",
    "about.backend_title": "Backend & API Architecture",
    "about.backend_desc": "Especialista en el ecosistema <strong>.NET (C#, .NET Core, .NET 8)</strong>, diseño de APIs RESTful escalables, microservicios y servicios legacy (WCF/SOAP). Aplicación rigurosa de <strong>Clean Architecture, Domain-Driven Design (DDD), CQRS</strong> y patrones de diseño.",
    "about.frontend_title": "Frontend Moderno & React",
    "about.frontend_desc": "Construcción de interfaces de usuario modernas, reactivas y de alto rendimiento utilizando <strong>React, TypeScript, Angular, JavaScript moderno y Bootstrap/Tailwind</strong>. Enfoque centrado en experiencia de usuario fluida y accesibilidad.",

    // Skills
    "skills.tag": "// Habilidades Técnicas",
    "skills.title": "Ecosistema Tecnológico",
    "skills.desc": "Tecnologías, herramientas y metodologías dominadas a lo largo de 10+ años de entrega continua de software.",

    // Projects
    "projects.tag": "// Portafolio & Casos de Éxito",
    "projects.title": "Proyectos Destacados & Productos de IA",
    "projects.desc": "Una selección de soluciones SaaS, plataformas corporativas de alta escala y aplicaciones con Inteligencia Artificial.",
    
    "projects.p1_tag": "AI SaaS Product",
    "projects.p1_title": "Cross-Posting Pro",
    "projects.p1_subtitle": "Plataforma de Publicación en Redes con Asistencia de IA",
    "projects.p1_desc": "Plataforma SaaS que optimiza y automatiza la publicación multicanal en redes sociales integrando Inteligencia Artificial con <strong>Google Gemini API</strong> para enriquecer y sugerir copy publicitario de alto engagement.",
    "projects.p1_h1": "Integración de Google Gemini API para optimización automática de textos y sugerencias contextuales.",
    "projects.p1_h2": "Workflows asistidos por IA para generar textos alternativos, variaciones de copy y hashtags inteligentes.",
    "projects.p1_h3": "Arquitectura desacoplada y frontend reactivo orientado a creadores de contenido y empresas.",
    "projects.p1_btn": "Visitar crosspostingpro.com",

    "projects.p2_tag": "AI Prototype",
    "projects.p2_title": "AI-Powered English Translator",
    "projects.p2_subtitle": "Prototipo de Asistencia Lingüística Contextual con LLMs",
    "projects.p2_desc": "Prototipo conversacional que aprovecha modelos de lenguaje de gran tamaño (Google Gemini) para traducir expresiones idiomáticas y formular respuestas contextuales a preguntas complejas en inglés.",
    "projects.p2_h1": "Traducción contextual adaptativa considerando tono formal, técnico o coloquial.",
    "projects.p2_h2": "Generación de sugerencias de respuesta en tiempo real para interacción profesional en inglés.",
    "projects.p2_h3": "Exploración avanzada de prompt engineering e inferencia rápida con LLMs.",
    "projects.p2_btn": "Solicitar Demo / Detalles",

    "projects.p3_tag": "Enterprise Core ERP",
    "projects.p3_title": "Sistema ERP Minero & Corporativo",
    "projects.p3_subtitle": "Liderazgo de Desarrollo, Arquitectura y Optimización",
    "projects.p3_desc": "Liderazgo del equipo de desarrollo a cargo de la arquitectura, módulos críticos y evolución continua del ERP corporativo de Minera Colquisiri S.A.",
    "projects.p3_h1": "<strong>-90% de tiempo en reportes de asistencia:</strong> Optimización exhaustiva de queries LINQ y Entity Framework.",
    "projects.p3_h2": "<strong>-90% de incidentes recurrentes:</strong> Análisis de causa raíz y soluciones de software definitivas.",
    "projects.p3_h3": "<strong>Facturación y Guías Electrónicas:</strong> Digitalización al 100% de documentos, eliminando papel y papelería.",
    "projects.p3_h4": "Pruebas de carga y UI automatizadas con Apache JMeter y Selenium.",
    "projects.p3_btn": "Acceso ERP Corporativo",

    "projects.p4_tag": "B2B Portal",
    "projects.p4_title": "Extranet de Proveedores & Contratistas",
    "projects.p4_subtitle": "Portal B2B de Gestión de Compras y Licitaciones",
    "projects.p4_desc": "Plataforma transaccional para proveedores y contratistas de minería, gestionando homologaciones, órdenes de compra, cotizaciones y estados de facturación en tiempo real.",
    "projects.p4_h1": "Desarrollado en .NET 8 con Clean Architecture, separación de capas y seguridad reforzada.",
    "projects.p4_h2": "Integración de servicios web y validaciones normativas empresariales.",
    "projects.p4_h3": "Diseño UI responsivo y amigable para usuarios externos.",
    "projects.p4_btn": "Visitar Extranet",

    "projects.p5_tag": "High Concurrency",
    "projects.p5_title": "Portal de Pre-Matrícula & Admisiones",
    "projects.p5_subtitle": "Sistema Nacional de Gestión Educativa",
    "projects.p5_desc": "Plataforma de admisiones para la cadena de colegios más grande del Perú, procesando miles de solicitudes simultáneas en periodos de matrícula nacional.",
    "projects.p5_h1": "Reducción del 90% en incidencias de frontend y aumento significativo en usabilidad.",
    "projects.p5_h2": "Reducción del 60% en incidentes en el sistema central de Data Management.",
    "projects.p5_h3": "Optimización en la migración de datos y generación masiva de órdenes de venta para NetSuite ERP.",
    "projects.p5_h4": "Integración de pasarela de pago en línea con Interbank.",
    "projects.p5_btn": "Portal Innova Schools",

    "projects.p6_tag": "Banking & Finance",
    "projects.p6_title": "Sistemas Empresariales Scotiabank",
    "projects.p6_subtitle": "ScotiaFriends, Acuerdos SCI & Alineamiento de Asesores",
    "projects.p6_desc": "Desarrollo, optimización y soporte de aplicaciones financieras para Scotiabank, CrediScotia y proyectos regionales con equipos internacionales (Perú, Chile, México, Canadá, Costa Rica, El Salvador).",
    "projects.p6_h1": "Liderazgo en la entrega y despliegue del sistema <strong>ScotiaFriends</strong> para gestión de referidos.",
    "projects.p6_h2": "Refactorización de procesos pesados, pipelines de reportes con SSIS/SSRS y WCF.",
    "projects.p6_h3": "Colaboración activa en estimaciones técnicas y definición de requerimientos con stakeholders.",
    "projects.p6_btn": "Ver Trayectoria",

    // Experience
    "exp.tag": "// Experiencia",
    "exp.title": "Experiencia Profesional",
    "exp.desc": "Trayectoria demostrable liderando equipos y construyendo soluciones de software de alto impacto.",

    "exp.vap_role": "Senior Full Stack Developer & Team Lead",
    "exp.vap_company": "VAP Perú — Plataforma ERP Corporativo",
    "exp.vap_period": "Julio 2018 – Presente",
    "exp.vap_b1": "<strong>Liderazgo de equipo:</strong> Dirección técnica, arquitectura, entregas continuas y mejora de procesos de ingeniería para el ERP corporativo.",
    "exp.vap_b2": "<strong>Frontend y Backend moderno:</strong> Diseño y desarrollo de módulos en React junto con servicios backend e integraciones REST con .NET y Web APIs.",
    "exp.vap_b3": "<strong>Optimización de rendimiento (-90%):</strong> Reducción drástica del tiempo de respuesta en reportes de asistencia mediante optimización de queries a nivel de aplicación con LINQ y Entity Framework.",
    "exp.vap_b4": "<strong>Estabilidad del sistema (-90% incidencias):</strong> Identificación de causas raíz e implementación de soluciones definitivas para el ERP.",
    "exp.vap_b5": "<strong>Facturación y Guías Electrónicas:</strong> Implementación de facturación electrónica y guías de remisión digitalizadas, eliminando costos de impresión y papelería.",
    "exp.vap_b6": "<strong>Arquitectura y QA:</strong> Evaluación de patrones (Clean Architecture, DDD), diseño arquitectural y pruebas de rendimiento con Apache JMeter y Selenium.",

    "exp.innova_role": "Senior .NET / Full Stack Developer",
    "exp.innova_company": "Innova Schools",
    "exp.innova_period": "Noviembre 2016 – Junio 2018",
    "exp.innova_b1": "<strong>Optimización de admisiones:</strong> Mejora integral del sistema de pre-matrícula, reduciendo incidencias de frontend en un 90% y elevando usabilidad y rendimiento.",
    "exp.innova_b2": "<strong>Gestión de incidencias (-60%):</strong> Reducción recurrente en la atención de incidentes en la plataforma de Data Management nacional.",
    "exp.innova_b3": "<strong>Integración con NetSuite ERP:</strong> Optimización de flujos de migración masiva de estudiantes y generación automatizada de órdenes de venta.",
    "exp.innova_b4": "<strong>Pagos y RRHH:</strong> Integración de pasarela de pago online con Interbank y digitalización del proceso de selección de personal.",

    "exp.ses_role": "Senior Analyst / Senior Developer",
    "exp.ses_company": "Software Enterprise Services (SES) — Sector Financiero",
    "exp.ses_period": "Junio 2011 – Julio 2016",
    "exp.ses_b1": "<strong>Aplicaciones bancarias:</strong> Desarrollo, mantenimiento y soporte especializado para Scotiabank y CrediScotia (Counselor Alignment, Convenios SCI, Referidos CrediScotia y ScotiaFriends).",
    "exp.ses_b2": "<strong>Entrega de ScotiaFriends:</strong> Liderazgo técnico del sistema integral para el programa de referidos de Scotiabank, coordinando estimaciones y especificaciones.",
    "exp.ses_b3": "<strong>Proyectos regionales:</strong> Componentes de reportería de alta exigencia para equipos distribuidos en Perú, Chile, México, Canadá, Costa Rica y El Salvador.",

    "exp.algoliq_role": "Senior Developer",
    "exp.algoliq_company": "ALGOLIQ — Buenos Aires, Argentina",
    "exp.algoliq_period": "Abril 2009 – Marzo 2010",
    "exp.algoliq_b1": "<strong>Refactorización de capa de datos:</strong> Optimización de flujos de procesamiento pesado reduciendo sustancialmente los tiempos de respuesta.",
    "exp.algoliq_b2": "<strong>Migración SQL a Oracle:</strong> Migración masiva de procedimientos almacenados y optimización de colas con Microsoft Message Queuing (MSMQ), multithreading e inserciones masivas (bulk inserts).",

    "exp.xstrata_role": "Analista Programador Senior / Liderazgo de Proyecto",
    "exp.xstrata_company": "Xstrata Copper — Proyecto Las Bambas | Minería, Petróleo y Gas",
    "exp.xstrata_period": "Junio 2007 – Diciembre 2008",
    "exp.xstrata_b1": "<strong>Sistema HSEC Corporativo:</strong> Liderazgo técnico y análisis funcional para la plataforma HSEC (Salud, Seguridad, Medio Ambiente y Comunidad), modernizando módulos de Visual FoxPro hacia .NET.",
    "exp.xstrata_b2": "<strong>Arquitectura Orientada a Servicios:</strong> Diseño y desarrollo de la capa modelo y lógica de negocio mediante .NET Web Services y Microsoft SQL Server 2005.",
    "exp.xstrata_b3": "<strong>Portal Estadístico & Business Intelligence:</strong> Construcción de un portal analítico avanzado con ChartFX para visualización de métricas, cubos dinámicos DevExpress para reportería multidimensional y diagramas Gantt interactivos DlhSoft.",
    "exp.xstrata_b4": "<strong>Ingeniería de Base de Datos:</strong> Modelamiento relacional, creación y optimización de procedimientos almacenados de alta concurrencia.",

    "exp.axle_role": "Analista Programador",
    "exp.axle_company": "Axle Financial Solutions | Sector Bancario y Financiero",
    "exp.axle_period": "Noviembre 2006 – Mayo 2007",
    "exp.axle_b1": "<strong>Plataforma Central de Remesas:</strong> Mantenimiento evolutivo y desarrollo de requerimientos para <em>Xpress Remittance</em>, sistema transaccional de transferencias y giros internacionales.",
    "exp.axle_b2": "<strong>Intranet Corporativa:</strong> Desarrollo de módulos para la intranet empresarial implementando ASP.NET AJAX para mejorar la agilidad y experiencia operativa.",
    "exp.axle_b3": "<strong>Base de Datos y Transaccionalidad:</strong> Programación de consultas optimizadas y procedimientos almacenados en Microsoft SQL Server 2000 y plataforma .NET.",

    "exp.silsa_role": "Analista Programador / Responsable de Proyecto",
    "exp.silsa_company": "SILSA S.A. | Servicios Empresariales Corporativos",
    "exp.silsa_period": "Noviembre 2005 – Octubre 2006",
    "exp.silsa_b1": "<strong>Gestión Integral de Contratos y Ventas:</strong> Diseño y desarrollo de módulos clave para administración de contratos, adendas, cartas fianza, órdenes de compra y generación automatizada de propuestas comerciales.",
    "exp.silsa_b2": "<strong>Desarrollo C# y ASP.NET:</strong> Implementación de soluciones híbridas de escritorio (Windows Forms C#) y web (ASP.NET) sobre base de datos SQL Server 2000.",
    "exp.silsa_b3": "<strong>Migración de Datos y Componentes:</strong> Coordinación de la migración de datos históricos desde Visual FoxPro hacia SQL Server y construcción de librerías de componentes reutilizables.",
    "exp.silsa_b4": "<strong>Liderazgo y Reportes a Gerencia:</strong> Planificación y seguimiento del cronograma con Microsoft Project, delegación de módulos al equipo técnico y presentación de avances a la alta dirección.",

    // Education & Certs
    "edu.tag": "// Antecedentes & Credenciales",
    "edu.title": "Educación, Certificaciones & Idiomas",
    "edu.desc": "Formación continua en ingeniería de software, arquitectura en la nube y metodologías ágiles.",
    "edu.higher_title": "Educación Superior",
    "edu.degree1": "Ingeniería de Sistemas",
    "edu.school1": "Universidad Tecnológica del Perú (UTP) — Lima, Perú",
    "edu.degree2": "Computación e Informática",
    "edu.school2": "CIBERTEC (2004 – 2021)",
    "edu.langs_title": "Idiomas",
    "edu.langs_val": "• <strong>Español:</strong> Nativo<br>• <strong>Inglés:</strong> B2 (Upper-Intermediate)",

    "edu.certs_title": "Certificaciones & Cursos Clave",
    "edu.cert1": "Scrum Foundation Professional Certificate (SFPC)",
    "edu.cert1_sub": "CertiProf (2020)",
    "edu.cert2": "Architecting on Amazon Web Services (AWS)",
    "edu.cert2_sub": "AWS (2018) | AWS Essentials (2017)",
    "edu.cert3": "Gestión de Proyectos con PMBOK 5th Edition",
    "edu.cert3_sub": "Project Management (2017)",
    "edu.cert4": "Business Intelligence con SQL Server",
    "edu.cert4_sub": "SSIS / SSRS (2017)",
    "edu.cert5": "Microsoft Certified Application Developer (MCAD)",
    "edu.cert5_sub": "Microsoft (2006)",

    // Contact
    "contact.tag": "// Contacto",
    "contact.title": "Hablemos de tu Próximo Proyecto",
    "contact.desc": "¿Buscas potenciar tu plataforma con IA, modernizar tu backend o sumar liderazgo técnico a tu equipo?",
    "contact.msg": "Estoy disponible para roles de ingeniería senior, liderazgo técnico, consultorías de arquitectura e integración de modelos de lenguaje en plataformas de negocio.",
    "contact.email_label": "Correo Electrónico",
    "contact.phone_label": "Teléfono / WhatsApp",
    "contact.linkedin_label": "LinkedIn Oficial",
    "contact.btn_linkedin": "Ver Perfil Completo en LinkedIn",

    // Footer
    "footer.rights": "© 2026 <strong>Arián Reyes Arrunátegui</strong>. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.oauth": "OAuth Redirect"
  }
};

/**
 * Apply selected language to the DOM
 */
function applyLanguage(lang) {
  if (!translations[lang]) lang = 'en';

  const dict = translations[lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update Document Title and Meta Description
  if (dict["doc.title"]) document.title = dict["doc.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["doc.meta_desc"]) {
    metaDesc.setAttribute("content", dict["doc.meta_desc"]);
  }

  // Update text / html in all matching elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Save to localStorage
  try {
    localStorage.setItem('arian_portfolio_lang', lang);
  } catch (e) {
    // Local storage unavailable or disabled
  }
}

/**
 * Initialize language on page load: Default is 'en'
 */
document.addEventListener('DOMContentLoaded', function () {
  let savedLang = 'en';
  try {
    savedLang = localStorage.getItem('arian_portfolio_lang') || 'en';
  } catch (e) {
    savedLang = 'en';
  }

  // Apply language (English by default)
  applyLanguage(savedLang);

  // Bind clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const selected = this.getAttribute('data-lang');
      applyLanguage(selected);
    });
  });
});
