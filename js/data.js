/**
 * Proyectos - Jhamile Macavilca
 * Solo se describe lo que existe en el código de cada proyecto.
 * githubUrl / demoUrl en null = el botón no se muestra.
 */

const projectsData = [
  {
    id: "prestafacil",
    title: "PrestaFácil — Sistema de Gestión de Préstamos",
    categories: ["backend", "fullstack"],
    categoryLabel: "Full Stack .NET + React · Proyecto personal",
    thumb: "assets/images/prestafacil.jpg",
    description: "Sistema para una caja o financiera, con API en .NET y app en React: evaluación crediticia, cronograma por sistema francés, cobranza con mora, reportes y pantallas según el rol.",
    fullDescription: "Sistema que cubre todo el ciclo de un préstamo: registro del cliente, simulación, evaluación de capacidad de pago, aprobación, desembolso, cronograma, cobranza con mora y reportes. Cada rol (administrador, asesor y cajero) trabaja en su propia pantalla. Lo diseñé y desarrollé completo, desde los requerimientos y el modelo de datos hasta la interfaz, Docker y la integración continua.",
    role: "Proyecto personal: requerimientos, modelo de datos, backend, frontend, pruebas, Docker y CI.",
    highlights: [
      "Arquitectura en capas (Domain, Application, Infrastructure, API) con ASP.NET Core y Entity Framework Core sobre SQL Server.",
      "Cálculo de cuotas por sistema francés idéntico en C# y en SQL Server; las pruebas detectaron y corrigieron un error de precisión en el script SQL.",
      "Evaluación crediticia automática: tope de 40 % del ingreso neto, máximo 2 préstamos activos, sin cuotas vencidas y segregación de funciones al aprobar.",
      "Pagos aplicados a la cuota más antigua (mora → interés → capital), anulación con reversión y control de concurrencia con ROWVERSION.",
      "Autenticación JWT con roles (Admin, Asesor, Cajero), contraseñas con BCrypt y límite de intentos de login.",
      "Procedimientos almacenados para reportes y un proceso diario de mora con BackgroundService.",
      "Frontend en React con TypeScript, Tailwind CSS y TanStack Query: simulador con evaluación, caja con recibo de cómo se aplicó el pago y reportes con gráficos.",
      "119 pruebas con xUnit y 24 con Vitest; GitHub Actions compila, prueba, revisa vulnerabilidades y levanta SQL Server, API y frontend con Docker Compose para una prueba de humo."
    ],
    stack: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "React", "TypeScript", "Tailwind CSS", "JWT", "xUnit", "Docker", "GitHub Actions"],
    demoUrl: null,
    githubUrl: "https://github.com/jhamile4/prestafacil",
    architecture: `
  [React + TypeScript] ── JWT Bearer ──►  [ASP.NET Core Web API]
                                               │  Controladores + roles
                                               ▼
                                      [Application] Servicios, DTOs,
                                               │     FluentValidation
                                               ▼
                                      [Domain] Préstamo, Cuota, Pago
                                               │  cálculo y reglas
                                               ▼
                                      [Infrastructure] EF Core + ADO.NET
                                               │
                                               ▼
                                [SQL Server] tablas + procedimientos
    `
  },
  {
    id: "crecio",
    title: "CRECIO — Plataforma para Negocios y Emprendedores",
    categories: ["fullstack"],
    categoryLabel: "Full Stack · Proyecto de tesis",
    thumb: "assets/images/crecio.jpg",
    description: "Sitio público con tiendas de emprendedores y un panel para cada negocio: inventario, ventas, pedidos, finanzas y marketing con IA, con pagos en Stripe.",
    fullDescription: "Plataforma en dos partes. En el sitio público, los clientes encuentran tiendas, compran con Stripe, siguen sus pedidos (delivery o recojo) y dejan reseñas de compras verificadas. En el panel, cada negocio gestiona inventario, ventas, clientes, finanzas y metas, y genera publicaciones con IA que se publican o programan en Facebook e Instagram.",
    role: "Proyecto de tesis: desarrollo de la API, el sitio público y el panel de negocios.",
    highlights: [
      "Tres aplicaciones: API REST en Node.js/Express y dos frontends en React (sitio público y panel), cada uno desplegable por separado.",
      "Base de datos PostgreSQL en Supabase con migraciones versionadas y almacenamiento de imágenes.",
      "Pagos con Stripe, control de stock al vender y seguimiento de pedidos por estado.",
      "Autenticación con JWT y bcrypt, recuperación de contraseña por correo y un negocio por cuenta.",
      "Marketing con IA (Groq / OpenAI): genera textos e imágenes y publica o programa en Facebook e Instagram."
    ],
    stack: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "Stripe", "JWT"],
    demoUrl: null,
    githubUrl: null,
    privateNote: "Repositorio privado de Tecsup. Código disponible a solicitud.",
    architecture: `
  [Sitio público - React]      [Panel de negocios - React]
             │                              │
             └──────────────┬───────────────┘
                            ▼  HTTPS + JWT
                 [API REST - Node.js / Express]
                            │
       ┌────────────┬───────┴──────┬──────────────────┐
       ▼            ▼              ▼                  ▼
  [Supabase      [Stripe]    [Groq / OpenAI]   [Meta: Facebook
   PostgreSQL                 IA de marketing     e Instagram]
   + Storage]
    `
  },
  {
    id: "muniapp",
    title: "MuniApp — Reporte de Incidencias Municipales",
    categories: ["fullstack", "movil"],
    categoryLabel: "Web y Móvil · Proyecto integrador en equipo",
    thumb: "assets/images/muniapp.jpg",
    description: "Los ciudadanos reportan incidencias de su comunidad desde la web o el celular, y la municipalidad las gestiona y prioriza desde un panel con apoyo de IA.",
    fullDescription: "Monorepo con dos backends, dos frontends web y una app Android. El ciudadano reporta incidencias con ubicación en el mapa y hace su seguimiento; el personal municipal las gestiona desde un panel administrativo que usa modelos de IA locales (Ollama) para priorizar los reportes, moderar las imágenes y generar reportes en PDF.",
    role: "Integrante de un equipo de 5. Desarrollé parte del frontend web del ciudadano (autenticación con token, panel principal, términos y condiciones) y corregí la carga del mapa en la app Android.",
    highlights: [
      "Backend ciudadano en Java con Spring Boot y backend administrativo en Python con Django REST Framework, ambos con JWT y MySQL.",
      "Frontend del ciudadano en React con TypeScript, mapas con Leaflet y notificaciones en tiempo real con STOMP/SockJS.",
      "App Android en Kotlin con mapas OpenStreetMap.",
      "IA local con Ollama (Llama y LLaVA): priorización de reportes, moderación de imágenes y reportes en PDF.",
      "Integración continua con GitHub Actions."
    ],
    stack: ["Java", "Spring Boot", "Python", "Django REST", "React", "TypeScript", "Kotlin", "MySQL", "Leaflet", "Ollama"],
    demoUrl: null,
    githubUrl: null,
    privateNote: "Repositorio privado de Tecsup. Código disponible a solicitud.",
    architecture: `
  [Web ciudadano - React]   [App Android - Kotlin]   [Panel municipal - React]
            │                        │                         │
            └───────────┬────────────┘                         │
                        ▼                                      ▼
          [Backend ciudadano - Spring Boot]    [Backend admin - Django REST]
                        │                                      │
                        └──────────────────┬───────────────────┘
                                           ▼
                                      [MySQL 8]      [Ollama: Llama / LLaVA]
    `
  },
  {
    id: "strata-erp",
    title: "Strata ERP — Inventario y Analítica",
    categories: ["fullstack"],
    categoryLabel: "Full Stack · Prototipo",
    thumb: "assets/images/strata-erp.jpg",
    description: "Dashboard de inventario con alertas de reposición, márgenes por producto y vistas distintas según el rol del usuario.",
    fullDescription: "Prototipo de un módulo de inventario con analítica. Registra productos y categorías, clasifica el stock automáticamente según el mínimo configurado y calcula el margen de cada producto. La vista cambia según el rol elegido: el personal de almacén no ve los costos. Es un prototipo: no tiene inicio de sesión y algunos indicadores y reportes son de demostración.",
    role: "Proyecto personal: análisis, diseño y desarrollo.",
    highlights: [
      "Next.js 15 con App Router, React 19 y TypeScript; API Routes para inventario e indicadores.",
      "Prisma ORM sobre PostgreSQL (Supabase) con datos de prueba.",
      "Clasificación automática del stock: normal, reorden o crítico según el stock mínimo.",
      "Costos y márgenes ocultos según el rol (demostración, sin autenticación).",
      "Gráficos con Recharts y documentación de requerimientos, arquitectura y plan de implementación."
    ],
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Recharts"],
    demoUrl: null,
    githubUrl: "https://github.com/jhamile4/saas-enterprise-erp",
    architecture: `
  [Next.js App Router - React 19 + Tailwind]
               │  fetch
               ▼
  [API Routes]  /api/inventory   /api/analytics/kpis
               │
               ▼
        [Prisma ORM]  ──►  [PostgreSQL - Supabase]
    `
  }
];
