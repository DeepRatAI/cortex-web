// Cortex Landing Page Translations
// Español como idioma principal, Inglés como alternativa

export const languages = {
  es: "Español",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const translations = {
  es: {
    // Meta
    meta: {
      title: "Cortex | Asistente de Conocimiento Empresarial con IA",
      description:
        "Sistema RAG open source para producción. Transforma el conocimiento organizacional en un asistente de IA inteligente. Multi-tenant, detección PII, streaming en tiempo real.",
    },

    // Navigation
    nav: {
      features: "Características",
      comparison: "Comparativa",
      faq: "FAQ",
      docs: "Documentación",
      github: "GitHub",
      tryDemo: "Probar Demo",
      language: "Idioma",
    },

    // Hero
    hero: {
      badge: "Open Source · RAG Empresarial",
      version: "v0.1.0-beta",
      title1: "Asistente de Conocimiento",
      title2: "con Seguridad Enterprise",
      subtitle:
        "Tu documentación interna, respondiendo preguntas. Self-hosted, detección de PII automática, listo para producción.",
      cta: {
        demo: "Probar Demo en Vivo",
        github: "Ver en GitHub",
      },
      terminal: {
        title: "terminal — bash",
        line1:
          "git clone https://github.com/DeepRatAI/cortex-knowledge-assistant",
        line2: "docker compose up -d",
        success: "Cortex corriendo en",
      },
      scrollHint: "Descubre más",
    },

    // TrustBar
    trust: {
      builtWith: "Construido con",
      liveDemo: "Demo en Vivo Disponible",
      badges: {
        ciPassing: "CI Pasando",
        stars: "GitHub Stars",
      },
      metrics: {
        selfHosted: { value: "Self-Hosted", label: "Tus datos, tu infra" },
        pii: { value: "PII Detection", label: "Seguridad Automática" },
        deploy: { value: "< 2 min", label: "Deploy con Docker" },
        license: { value: "Open Source", label: "Sin vendor lock-in" },
      },
    },

    // Features
    features: {
      eyebrow: "Cómo Funciona",
      title: "Todo lo que necesitas para",
      titleHighlight: "RAG en producción",
      subtitle:
        "Arquitectura limpia, código legible, y decisiones de diseño documentadas. Constrúyelo, estudiálo, mejóralo.",
      items: [
        {
          title: "Motor RAG Híbrido",
          problem: "Las búsquedas simples pierden contexto importante",
          description:
            "Búsqueda semántica con embeddings + re-ranking inteligente con Reciprocal Rank Fusion. Encuentra exactamente lo que necesitas, incluso cuando no sabes cómo buscarlo.",
        },
        {
          title: "Seguridad Enterprise",
          problem: "¿Quién accedió a qué dato sensible?",
          description:
            "Multi-tenant con aislamiento completo, detección automática de PII (DNI, tarjetas, emails), RBAC granular y audit trails para cumplimiento normativo.",
        },
        {
          title: "Streaming en Tiempo Real",
          problem: "Esperar 10 segundos por una respuesta es inaceptable",
          description:
            "Server-Sent Events con latencia mínima. Tus usuarios ven las respuestas palabra por palabra mientras se generan.",
        },
        {
          title: "Observabilidad Completa",
          problem: "¿Por qué el sistema está lento hoy?",
          description:
            "Métricas Prometheus, logging estructurado JSON, health checks y trazabilidad end-to-end. Debug en producción sin adivinar.",
        },
        {
          title: "Deploy en Un Comando",
          problem: "Setup de 3 días solo para probar",
          description:
            "Docker Compose listo para producción. De git clone a funcionando en menos de 2 minutos. Kubernetes manifests incluidos.",
        },
        {
          title: "Arquitectura Extensible",
          problem: "Atrapado con un solo proveedor de LLM",
          description:
            "Ports & Adapters pattern. Conecta cualquier LLM, embeddings o vector DB. Cambia de OpenAI a Anthropic en una línea de config.",
        },
      ],
    },

    // Demo
    demo: {
      eyebrow: "Demo Interactiva",
      title: "Cortex",
      titleHighlight: "en acción",
      subtitle:
        "Observa cómo Cortex transforma consultas en lenguaje natural en respuestas precisas con fuentes citadas. Sin trucos, todo streaming real.",
      caption:
        "Demo educativa: consulta sobre distribución de Poisson con respuesta en tiempo real",
      cta: "Probar Demo en Vivo",
      viewSource: "Ver código fuente",
      live: "En Vivo",
    },

    // Architecture
    architecture: {
      title: "Arquitectura",
      titleHighlight: "Hexagonal",
      subtitle:
        "Diseño modular basado en Ports & Adapters. Cada componente puede ser reemplazado sin modificar el núcleo de negocio.",
      flow: {
        user: "Usuario",
        ui: "React UI",
        api: "FastAPI",
        rag: "RAG Service",
        vector: "Qdrant",
        llm: "LLM",
        cache: "Redis",
      },
      cta: "Ver Arquitectura Completa",
    },

    // Use Cases
    useCases: {
      title: "Diseñado para",
      titleHighlight: "múltiples industrias",
      subtitle:
        "Cortex se adapta a diferentes dominios gracias a su arquitectura flexible y sistema de configuración por tenant.",
      items: [
        {
          title: "Banca y Finanzas",
          description:
            "Cumplimiento regulatorio, detección de PII, audit trails y segregación de datos por cliente.",
        },
        {
          title: "Salud y Clínicas",
          description:
            "Consultas sobre protocolos médicos, historial de pacientes con control de acceso estricto.",
        },
        {
          title: "Legal y Compliance",
          description:
            "Búsqueda semántica en contratos, normativas y jurisprudencia con trazabilidad completa.",
        },
        {
          title: "Educación",
          description:
            "Asistentes de estudio personalizados con acceso controlado por materia y rol de usuario.",
        },
      ],
    },

    // Getting Started
    gettingStarted: {
      title: "Comienza en",
      titleHighlight: "30 segundos",
      subtitle:
        "De cero a funcionando con tres simples pasos. Solo necesitas Docker y un token de HuggingFace.",
      steps: [
        {
          number: "1",
          title: "Clonar",
          code: "git clone https://github.com/DeepRatAI/cortex-knowledge-assistant.git",
        },
        {
          number: "2",
          title: "Configurar",
          code: 'cp .env.example .env\necho "HUGGINGFACE_API_TOKEN=hf_xxx" >> .env',
        },
        {
          number: "3",
          title: "Lanzar",
          code: "docker compose up -d",
        },
      ],
      readyText: "¡Listo!",
      readySubtext: "Abre http://localhost:3000",
      docsLink: "Leer documentación completa",
    },

    // Comparison
    comparison: {
      eyebrow: "Comparativa",
      title: "¿Por qué",
      titleHighlight: "elegir Cortex?",
      subtitle:
        "Comparamos con las alternativas más populares para que tomes una decisión informada.",
      feature: "Característica",
      recommended: "Recomendado",
      disclaimer:
        "Comparativa basada en características principales. Cada herramienta tiene sus fortalezas según el caso de uso.",
      competitors: {
        cortex: { name: "Cortex", type: "Sistema RAG Completo" },
        langchain: { name: "LangChain", type: "Framework/Librería" },
        chatgpt: { name: "ChatGPT", type: "SaaS Cloud" },
        llamaindex: { name: "LlamaIndex", type: "Framework" },
      },
      features: {
        selfHosted: {
          name: "Self-Hosted / On-Premise",
          icon: "🏠",
          cortex: true,
          langchain: true,
          chatgpt: false,
          llamaindex: true,
        },
        multiTenant: {
          name: "Multi-Tenant Nativo",
          icon: "🏢",
          cortex: true,
          langchain: false,
          chatgpt: false,
          llamaindex: false,
        },
        piiDetection: {
          name: "Detección de PII",
          icon: "🔒",
          cortex: true,
          langchain: false,
          chatgpt: "Parcial",
          llamaindex: false,
        },
        hybridSearch: {
          name: "Búsqueda Híbrida",
          icon: "🔍",
          cortex: true,
          langchain: "Manual",
          chatgpt: false,
          llamaindex: true,
        },
        streaming: {
          name: "Streaming SSE",
          icon: "⚡",
          cortex: true,
          langchain: "Manual",
          chatgpt: true,
          llamaindex: "Manual",
        },
        openSource: {
          name: "Open Source (AGPL)",
          icon: "📖",
          cortex: true,
          langchain: true,
          chatgpt: false,
          llamaindex: true,
        },
        auditTrails: {
          name: "Audit Trails",
          icon: "📋",
          cortex: true,
          langchain: false,
          chatgpt: false,
          llamaindex: false,
        },
        extensible: {
          name: "Arquitectura Extensible",
          icon: "🧩",
          cortex: true,
          langchain: true,
          chatgpt: false,
          llamaindex: true,
        },
      },
    },

    // FAQ
    faq: {
      eyebrow: "Preguntas Frecuentes",
      title: "¿Tienes dudas?",
      subtitle: "Respuestas a las preguntas más comunes sobre Cortex.",
      moreQuestions: "¿No encuentras lo que buscas?",
      openIssue: "Abrir Issue en GitHub",
      joinDiscussion: "Unirte a Discussions",
      items: [
        {
          icon: "⚖️",
          question: "¿Cuál es la licencia de Cortex?",
          answer:
            "Cortex está licenciado bajo <strong>AGPL-3.0</strong>, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente, siempre que mantengas el código abierto. También ofrecemos una <strong>licencia comercial</strong> para empresas que necesitan términos diferentes.",
          link: {
            text: "Ver términos de licencia",
            url: "https://github.com/DeepRatAI/cortex-knowledge-assistant/blob/main/LICENSE",
          },
        },
        {
          icon: "🚀",
          question: "¿Qué necesito para desplegar Cortex?",
          answer:
            "Solo necesitas <strong>Docker</strong> y un token de <strong>HuggingFace</strong> (gratuito). El sistema incluye todos los servicios necesarios: Qdrant para vectores, Redis para caché, y la API. Con un comando <code>docker compose up -d</code> tienes todo funcionando.",
          link: {
            text: "Ver guía de instalación",
            url: "https://github.com/DeepRatAI/cortex-knowledge-assistant#quick-start",
          },
        },
        {
          icon: "💰",
          question: "¿Cuánto cuesta usar Cortex?",
          answer:
            "El software es <strong>100% gratuito</strong>. Los únicos costos son tu infraestructura (servidor, almacenamiento) y las llamadas a APIs de LLM si usas proveedores externos. Puedes usar modelos locales con Ollama para eliminar ese costo.",
        },
        {
          icon: "🔧",
          question: "¿Puedo usar mi propio LLM o proveedor?",
          answer:
            "Sí. La arquitectura de <strong>Ports & Adapters</strong> te permite conectar cualquier LLM: OpenAI, Anthropic, Mistral, modelos locales con Ollama, o el que prefieras. Solo cambias la configuración en variables de entorno.",
        },
        {
          icon: "📊",
          question: "¿Cuántos documentos puede manejar?",
          answer:
            "Cortex usa <strong>Qdrant</strong> como base de datos vectorial, diseñada para escalar a millones de vectores. El límite real depende de tu hardware y configuración. El chunking semántico optimiza el uso de memoria.",
        },
        {
          icon: "🛡️",
          question: "¿Qué tan seguro es para datos sensibles?",
          answer:
            "Muy seguro. Cortex incluye <strong>detección automática de PII</strong> (DNI, tarjetas, emails, teléfonos), <strong>aislamiento multi-tenant</strong>, <strong>RBAC</strong>, y <strong>audit trails</strong>. Todo corre en tu infraestructura, nunca sale data a terceros.",
          link: {
            text: "Ver documentación de seguridad",
            url: "https://github.com/DeepRatAI/cortex-knowledge-assistant/blob/main/docs/security.md",
          },
        },
      ],
    },

    // Final CTA
    finalCta: {
      badge: "Open Source · En desarrollo activo",
      title: "Construyamos juntos.",
      titleHighlight: "El código está abierto.",
      subtitle:
        "Cortex es un proyecto en evolución. Úsalo, repórtalo, mejorálo. Cada PR y cada issue nos acerca a algo mejor.",
      cta: {
        demo: "Explorar Demo",
        github: "Contribuir en GitHub",
        docs: "Ver Documentación",
      },
      links: {
        features: "Ver cómo funciona",
        docs: "Leer el código",
        license: "AGPL-3.0",
      },
    },

    // Footer
    footer: {
      tagline: "Sistema RAG open source con arquitectura limpia.",
      builtBy: "Construido por",
      author: {
        name: "Gonzalo Romero",
        role: "Software Engineer",
        linkedin: "https://www.linkedin.com/in/gonzalo-romero-b9b5b4355",
      },
      product: {
        title: "Proyecto",
        links: ["Características", "Demo", "Documentación", "Roadmap"],
      },
      resources: {
        title: "Contribuir",
        links: ["GitHub", "API Reference", "Guía de Contribución", "Changelog"],
      },
      legal: {
        title: "Legal",
        links: ["AGPL-3.0", "Licencia Comercial", "Seguridad"],
      },
      copyright: "DeepRat AI. Código abierto bajo",
    },
  },

  en: {
    // Meta
    meta: {
      title: "Cortex | Enterprise AI Knowledge Assistant",
      description:
        "Open source RAG system for production. Transform organizational knowledge into an intelligent AI assistant. Multi-tenant, PII detection, real-time streaming.",
    },

    // Navigation
    nav: {
      features: "Features",
      comparison: "Comparison",
      faq: "FAQ",
      docs: "Docs",
      github: "GitHub",
      tryDemo: "Try Demo",
      language: "Language",
    },

    // Hero
    hero: {
      badge: "Open Source · Enterprise RAG",
      version: "v0.1.0-beta",
      title1: "Knowledge Assistant",
      title2: "with Enterprise Security",
      subtitle:
        "Your internal docs, answering questions. Self-hosted, automatic PII detection, production-ready.",
      cta: {
        demo: "Try Live Demo",
        github: "View on GitHub",
      },
      terminal: {
        title: "terminal — bash",
        line1:
          "git clone https://github.com/DeepRatAI/cortex-knowledge-assistant",
        line2: "docker compose up -d",
        success: "Cortex is running at",
      },
      scrollHint: "Discover more",
    },

    // TrustBar
    trust: {
      builtWith: "Built with",
      liveDemo: "Live Demo Available",
      badges: {
        ciPassing: "CI Passing",
        stars: "GitHub Stars",
      },
      metrics: {
        selfHosted: { value: "Self-Hosted", label: "Your data, your infra" },
        pii: { value: "PII Detection", label: "Automatic Security" },
        deploy: { value: "< 2 min", label: "Docker Deploy" },
        license: { value: "Open Source", label: "No vendor lock-in" },
      },
    },

    // Features
    features: {
      eyebrow: "How It Works",
      title: "Everything you need for",
      titleHighlight: "production RAG",
      subtitle:
        "Clean architecture, readable code, and documented design decisions. Build it, study it, improve it.",
      items: [
        {
          title: "Hybrid RAG Engine",
          problem: "Simple searches miss important context",
          description:
            "Semantic search with embeddings + intelligent re-ranking with Reciprocal Rank Fusion. Find exactly what you need, even when you don't know how to search for it.",
        },
        {
          title: "Enterprise Security",
          problem: "Who accessed what sensitive data?",
          description:
            "Multi-tenant with complete isolation, automatic PII detection (IDs, cards, emails), granular RBAC, and audit trails for compliance.",
        },
        {
          title: "Real-Time Streaming",
          problem: "Waiting 10 seconds for a response is unacceptable",
          description:
            "Server-Sent Events with minimal latency. Your users see responses word by word as they're generated.",
        },
        {
          title: "Full Observability",
          problem: "Why is the system slow today?",
          description:
            "Prometheus metrics, structured JSON logging, health checks, and end-to-end tracing. Debug in production without guessing.",
        },
        {
          title: "One-Command Deploy",
          problem: "3-day setup just to try it",
          description:
            "Docker Compose ready for production. From git clone to running in under 2 minutes. Kubernetes manifests included.",
        },
        {
          title: "Extensible Architecture",
          problem: "Locked into one LLM provider",
          description:
            "Ports & Adapters pattern. Plug any LLM, embeddings, or vector DB. Switch from OpenAI to Anthropic in one config line.",
        },
      ],
    },

    // Demo
    demo: {
      title: "See Cortex",
      eyebrow: "Interactive Demo",
      titleHighlight: "in action",
      subtitle:
        "Watch how Cortex transforms natural language queries into accurate answers with cited sources. No tricks, all real-time streaming.",
      caption:
        "Education demo: querying about Poisson distribution with real-time response",
      cta: "Try Live Demo",
      viewSource: "View source code",
      live: "Live",
    },

    // Architecture
    architecture: {
      title: "Hexagonal",
      titleHighlight: "Architecture",
      subtitle:
        "Modular design based on Ports & Adapters. Each component can be replaced without modifying the business core.",
      flow: {
        user: "User",
        ui: "React UI",
        api: "FastAPI",
        rag: "RAG Service",
        vector: "Qdrant",
        llm: "LLM",
        cache: "Redis",
      },
      cta: "View Full Architecture",
    },

    // Use Cases
    useCases: {
      title: "Built for",
      titleHighlight: "multiple industries",
      subtitle:
        "Cortex adapts to different domains thanks to its flexible architecture and per-tenant configuration system.",
      items: [
        {
          title: "Banking & Finance",
          description:
            "Regulatory compliance, PII detection, audit trails, and customer data segregation.",
        },
        {
          title: "Healthcare & Clinics",
          description:
            "Queries about medical protocols, patient history with strict access control.",
        },
        {
          title: "Legal & Compliance",
          description:
            "Semantic search in contracts, regulations, and case law with full traceability.",
        },
        {
          title: "Education",
          description:
            "Personalized study assistants with controlled access by subject and user role.",
        },
      ],
    },

    // Getting Started
    gettingStarted: {
      title: "Get started in",
      titleHighlight: "30 seconds",
      subtitle:
        "From zero to running with three simple steps. You only need Docker and a HuggingFace token.",
      steps: [
        {
          number: "1",
          title: "Clone",
          code: "git clone https://github.com/DeepRatAI/cortex-knowledge-assistant.git",
        },
        {
          number: "2",
          title: "Configure",
          code: 'cp .env.example .env\necho "HUGGINGFACE_API_TOKEN=hf_xxx" >> .env',
        },
        {
          number: "3",
          title: "Launch",
          code: "docker compose up -d",
        },
      ],
      readyText: "Done!",
      readySubtext: "Open http://localhost:3000",
      docsLink: "Read full documentation",
    },

    // Comparison
    comparison: {
      eyebrow: "Comparison",
      title: "Why",
      titleHighlight: "choose Cortex?",
      subtitle:
        "We compare with the most popular alternatives so you can make an informed decision.",
      feature: "Feature",
      recommended: "Recommended",
      disclaimer:
        "Comparison based on main features. Each tool has its strengths depending on the use case.",
      competitors: {
        cortex: { name: "Cortex", type: "Complete RAG System" },
        langchain: { name: "LangChain", type: "Framework/Library" },
        chatgpt: { name: "ChatGPT", type: "SaaS Cloud" },
        llamaindex: { name: "LlamaIndex", type: "Framework" },
      },
      features: {
        selfHosted: {
          name: "Self-Hosted / On-Premise",
          icon: "🏠",
          cortex: true,
          langchain: true,
          chatgpt: false,
          llamaindex: true,
        },
        multiTenant: {
          name: "Native Multi-Tenant",
          icon: "🏢",
          cortex: true,
          langchain: false,
          chatgpt: false,
          llamaindex: false,
        },
        piiDetection: {
          name: "PII Detection",
          icon: "🔒",
          cortex: true,
          langchain: false,
          chatgpt: "Partial",
          llamaindex: false,
        },
        hybridSearch: {
          name: "Hybrid Search",
          icon: "🔍",
          cortex: true,
          langchain: "Manual",
          chatgpt: false,
          llamaindex: true,
        },
        streaming: {
          name: "SSE Streaming",
          icon: "⚡",
          cortex: true,
          langchain: "Manual",
          chatgpt: true,
          llamaindex: "Manual",
        },
        openSource: {
          name: "Open Source (AGPL)",
          icon: "📖",
          cortex: true,
          langchain: true,
          chatgpt: false,
          llamaindex: true,
        },
        auditTrails: {
          name: "Audit Trails",
          icon: "📋",
          cortex: true,
          langchain: false,
          chatgpt: false,
          llamaindex: false,
        },
        extensible: {
          name: "Extensible Architecture",
          icon: "🧩",
          cortex: true,
          langchain: true,
          chatgpt: false,
          llamaindex: true,
        },
      },
    },

    // FAQ
    faq: {
      eyebrow: "FAQ",
      title: "Got questions?",
      subtitle: "Answers to the most common questions about Cortex.",
      moreQuestions: "Can't find what you're looking for?",
      openIssue: "Open Issue on GitHub",
      joinDiscussion: "Join Discussions",
      items: [
        {
          icon: "⚖️",
          question: "What's the license for Cortex?",
          answer:
            "Cortex is licensed under <strong>AGPL-3.0</strong>, which means you can use, modify, and distribute it freely, as long as you keep the code open. We also offer a <strong>commercial license</strong> for companies that need different terms.",
          link: {
            text: "View license terms",
            url: "https://github.com/DeepRatAI/cortex-knowledge-assistant/blob/main/LICENSE",
          },
        },
        {
          icon: "🚀",
          question: "What do I need to deploy Cortex?",
          answer:
            "You only need <strong>Docker</strong> and a <strong>HuggingFace</strong> token (free). The system includes all required services: Qdrant for vectors, Redis for caching, and the API. With one command <code>docker compose up -d</code> you have everything running.",
          link: {
            text: "View installation guide",
            url: "https://github.com/DeepRatAI/cortex-knowledge-assistant#quick-start",
          },
        },
        {
          icon: "💰",
          question: "How much does it cost to use Cortex?",
          answer:
            "The software is <strong>100% free</strong>. The only costs are your infrastructure (server, storage) and LLM API calls if you use external providers. You can use local models with Ollama to eliminate that cost.",
        },
        {
          icon: "🔧",
          question: "Can I use my own LLM or provider?",
          answer:
            "Yes. The <strong>Ports & Adapters</strong> architecture lets you connect any LLM: OpenAI, Anthropic, Mistral, local models with Ollama, or whichever you prefer. Just change the configuration in environment variables.",
        },
        {
          icon: "📊",
          question: "How many documents can it handle?",
          answer:
            "Cortex uses <strong>Qdrant</strong> as vector database, designed to scale to millions of vectors. The actual limit depends on your hardware and configuration. Semantic chunking optimizes memory usage.",
        },
        {
          icon: "🛡️",
          question: "How secure is it for sensitive data?",
          answer:
            "Very secure. Cortex includes <strong>automatic PII detection</strong> (IDs, cards, emails, phones), <strong>multi-tenant isolation</strong>, <strong>RBAC</strong>, and <strong>audit trails</strong>. Everything runs on your infrastructure, no data leaves to third parties.",
          link: {
            text: "View security documentation",
            url: "https://github.com/DeepRatAI/cortex-knowledge-assistant/blob/main/docs/security.md",
          },
        },
      ],
    },

    // Final CTA
    finalCta: {
      badge: "Open Source · Actively Developed",
      title: "Let's build together.",
      titleHighlight: "The code is open.",
      subtitle:
        "Cortex is an evolving project. Use it, report issues, improve it. Every PR and issue brings us closer to something better.",
      cta: {
        demo: "Explore Demo",
        github: "Contribute on GitHub",
        docs: "View Documentation",
      },
      links: {
        features: "See how it works",
        docs: "Read the code",
        license: "AGPL-3.0",
      },
    },

    // Footer
    footer: {
      tagline: "Open source RAG system with clean architecture.",
      builtBy: "Built by",
      author: {
        name: "Gonzalo Romero",
        role: "Software Engineer",
        linkedin: "https://www.linkedin.com/in/gonzalo-romero-b9b5b4355",
      },
      product: {
        title: "Project",
        links: ["Features", "Demo", "Documentation", "Roadmap"],
      },
      resources: {
        title: "Contribute",
        links: ["GitHub", "API Reference", "Contributing Guide", "Changelog"],
      },
      legal: {
        title: "Legal",
        links: ["AGPL-3.0", "Commercial License", "Security"],
      },
      copyright: "DeepRat AI. Open source under",
    },
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return translations[lang];
}
