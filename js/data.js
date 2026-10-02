/**
 * Data de Proyectos Medianos y Grandes - Jhamile Macavilca
 * Fullstack Web Developer
 */

const projectsData = [
  {
    id: "saas-erp",
    title: "SaaS Enterprise ERP & Analytics",
    category: "saas",
    categoryLabel: "Sistema Fullstack Grande",
    thumb: "assets/images/project_saas.jpg",
    description: "Plataforma SaaS multi-tenant a gran escala para gestión de inventarios, analítica financiera en tiempo real, roles RBAC y módulo de facturación.",
    fullDescription: "Este sistema ERP está diseñado para empresas medianas y grandes que requieren alta concurrencia. Cuenta con paneles analíticos interactivos, control de inventarios con notificaciones en tiempo real, autenticación OAuth2/JWT y pasarela de pagos automatizada.",
    stack: ["Node.js", "Express", "React", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    demoUrl: "https://saas-enterprise-demo.vercel.app",
    githubUrl: "https://github.com/jhamile4/saas-enterprise-erp",
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│                 ARQUITECTURA DEL SISTEMA                   │
└─────────────────────────────────────────────────────────────┘
  [CLIENTE WEB] (React + TypeScript + Tailwind CSS)
        │ (HTTPS / WebSockets)
        ▼
  [API GATEWAY] (Express.js / Node.js + JWT Auth Middleware)
        │
   ┌────┴─────────────────────────────┐
   ▼                                  ▼
[SERVICIO ANALÍTICO]        [GESTOR DE TRANSACCIONES]
 (PostgreSQL Cluster)         (Redis Cache + Worker Queue)
   │                                  │
   └─────────────────┬────────────────┘
                     ▼
             [TERCEROS API] (Stripe Payments & AWS S3 Storage)
    `
  },
  {
    id: "aura-ecommerce",
    title: "Aura & Co. Luxury E-Commerce Engine",
    category: "ecommerce",
    categoryLabel: "Plataforma Fullstack",
    thumb: "assets/images/project_ecommerce.jpg",
    description: "Plataforma e-commerce para marcas de moda con catálogo dinámico, carrito en tiempo real, búsqueda con Algolia y cobros seguros.",
    fullDescription: "Aplicación Fullstack de comercio electrónico construida con arquitectura Jamstack. Implementa Server Side Rendering (SSR) para SEO optimizado, actualización instantánea de stock, filtros avanzados de búsqueda y panel administrativo para actualización de productos.",
    stack: ["Next.js", "React", "Supabase", "PostgreSQL", "Stripe API", "Tailwind CSS"],
    demoUrl: "https://aura-storefront.vercel.app",
    githubUrl: "https://github.com/jhamile4/aura-luxury-ecommerce",
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│                 ARQUITECTURA E-COMMERCE                    │
└─────────────────────────────────────────────────────────────┘
  [NEXT.JS APP ROUTER] ── (SSR & Edge Middleware)
        │
   ┌────┴────────────────────────────────┐
   ▼                                     ▼
[SUPABASE CLOUD DB]             [STRIPE PAYMENT GATEWAY]
 (PostgreSQL DB + Auth + Storage) (Webhooks de Procesamiento)
   │
   ▼
[ALGOLIA SEARCH ENGINE] (Indexación instantánea de productos)
    `
  },
  {
    id: "fastapi-microservices",
    title: "High-Concurrency API Engine & Microservices",
    category: "api",
    categoryLabel: "Sistema Backend Mediano",
    thumb: "assets/images/hero.jpg",
    description: "Motor de APIs RESTful asíncronas de alta velocidad con documentación interactiva Swagger/OpenAPI y balanceo de carga.",
    fullDescription: "Arquitectura de microservicios desarrollada con FastAPI y Python 3.11. Diseñada para procesar miles de peticiones por segundo, con pipeline de integración continua, pruebas unitarias automatizadas con PyTest y contenedorización completa con Docker Compose.",
    stack: ["Python", "FastAPI", "MongoDB", "Redis", "Docker", "Swagger", "PyTest"],
    demoUrl: "https://api-engine-docs.render.com",
    githubUrl: "https://github.com/jhamile4/fastapi-microservices-engine",
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│               ARQUITECTURA DE MICROSERVICIOS               │
└─────────────────────────────────────────────────────────────┘
  [NGINX REVERSE PROXY / LOAD BALANCER]
        │
   ┌────┴─────────────────────────────┐
   ▼                                  ▼
[FASTAPI CONTAINER #1]       [FASTAPI CONTAINER #2]
   │                                  │
   └─────────────────┬────────────────┘
                     ▼
          [MONGODB REPLICA SET] + [REDIS RATE LIMITER]
    `
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro - Real-time Project Management",
    category: "saas",
    categoryLabel: "Sistema Web Mediano",
    thumb: "assets/images/portrait.jpg",
    description: "Aplicación interactiva para gestión de proyectos, tableros Kanban interactivos drag-and-drop y chat colaborativo websockets.",
    fullDescription: "Plataforma colaborativa para equipos de desarrollo software. Permite crear sprints de trabajo, asignar tareas con fechas límite, adjuntar archivos y sincronización bidireccional instantánea entre usuarios mediante WebSockets.",
    stack: ["Vue.js 3", "Pinia", "Node.js", "Socket.io", "MongoDB", "Express"],
    demoUrl: "https://taskflow-app.vercel.app",
    githubUrl: "https://github.com/jhamile4/taskflow-collaboration-app",
    architecture: `
┌─────────────────────────────────────────────────────────────┐
│                 ARQUITECTURA EN TIEMPO REAL                 │
└─────────────────────────────────────────────────────────────┘
  [VUE 3 SPA CLIENT] ◄─── (WebSockets Socket.io) ───► [NODE.JS SERVER]
                                                             │
                                                             ▼
                                                    [MONGODB ATLAS DB]
    `
  }
];
