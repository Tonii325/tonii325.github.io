const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    "hero.tag": "Desarrollador IT · Buenos Aires, Argentina",
    "hero.desc":
      "Desarrollador IT orientado a traducir necesidades de negocio en soluciones técnicas concretas utilizando Agentes de IA autónomos y arquitectura Backend de alto rendimiento.",
    "hero.btn_projects": "Ver proyectos",
    "hero.btn_contact": "Contactarme",
    "hero.stat1_label": "Año en ProContacto",
    "hero.stat2_label": "Proyectos destacados",
    "hero.stat3_num": "Último",
    "hero.stat3_label": "Año de Ingeniería",
    "hero.available": "Disponible",
    "about.tag": "01. Sobre mí",
    "about.title": "¿Quién soy?",
    "about.p1":
      "Soy <strong>Antonio Solis</strong>, desarrollador IT con experiencia en Salesforce, automatización de procesos e implementación de <strong>agentes de inteligencia artificial conversacional</strong>.",
    "about.p2":
      "Actualmente trabajo en <strong>ProContacto</strong> como Backend Developer / AI Specialist, donde diseño e implemento agentes de IA con Agentforce, Elevenlabs y desarrollo integraciones entre IA y CRM.",
    "about.p3":
      "Me apasiona traducir necesidades concretas de negocio en soluciones técnicas robustas. Tengo experiencia tanto en la plataforma Salesforce como en desarrollo backend con <strong>NestJS y arquitectura hexagonal</strong>.",
    "about.label_age": "Edad",
    "about.val_age": "26 años",
    "about.label_location": "Ubicación",
    "about.label_languages": "Idiomas",
    "about.val_languages": "Español · Inglés Intermedio",
    "about.label_education": "Educación",
    "about.val_education": "Ingeniería en Informática",
    "about.h1": "IA Conversacional con Agentforce",
    "about.p_h1":
      "Diseño e implementación de agentes con Agentforce, Elevenlabs e integración con bases de conocimiento del negocio.",
    "about.h3": "Backend con NestJS",
    "about.p_h2":
      "Automatización de leads, agendamiento y flujos CRM mediante Autolaunched Flows y desarrollo dentro de la plataforma Salesforce.",
    "about.p_h3":
      "Desarrollo de microservicios con arquitectura hexagonal, TypeORM, MariaDB y documentación REST con Swagger.",
    "exp.tag": "02. Experiencia",
    "exp.title": "Trayectoria laboral",
    "exp.workspace_tag": "Mi lugar de trabajo",
    "exp.role1_period": "2026 – Actualidad",
    "exp.role1_badge": "Rol actual",
    "exp.role1_li1":
      "Desarrollo de agentes con Agentforce: Configuración de Subagents, Actions, Guardrails e instrucciones de comportamiento, integrados con bases de conocimiento del negocio.",
    "exp.role1_li2":
      "Automatización IA-CRM: Diseño de Autolaunched Flows para la gestión de leads y agendamiento, traduciendo necesidades comerciales en soluciones técnicas dentro de Salesforce.",
    "exp.role1_li3":
      "Optimización y Debugging: Análisis y resolución de incidentes en flujos y comportamiento de agentes, asegurando la estabilidad de los 2 agentes en producción y los 4 en desarrollo.",
    "exp.role1_li4":
      "Traducción de necesidades comerciales en soluciones técnicas dentro de la plataforma Salesforce.",
    "exp.role1_li5":
      "Identificación de mejoras y optimización continua basada en feedback de usuarios y métricas.",
    "exp.role2_period": "2025 – Actualidad",
    "exp.role2_li1":
      "Desarrollo de microservicio para auditoría de stock, sirviendo como core API para aplicación móvil Android de gestión logística.",
    "exp.role2_li2":
      "Integración y modelado de datos con MariaDB a través de TypeORM.",
    "exp.role2_li3":
      "Creación de tests unitarios y documentación de la API REST con Swagger.",
    "exp.role2_li4":
      "Trabajo colaborativo bajo metodología ágil Scrum y Kanban, participación en code reviews y mejoras de código.",
    "skills.tag": "03. Habilidades",
    "skills.title": "Stack tecnológico",
    "skills.ia": "IA Conversacional",
    "skills.db": "Bases de datos",
    "skills.langs": "Lenguajes",
    "skills.tools": "Herramientas & Metodologías",
    "proj.tag": "04. Proyectos",
    "proj.title": "Proyectos destacados",
    "proj.p1_title":
      "Agente Conversacional Agentforce<br>— Gestión de Leads y Agendamiento",
    "proj.p1_desc":
      "Implementación end-to-end de un agente de IA sobre Salesforce para automatizar el ciclo completo de atención al lead, desde el primer contacto hasta el agendamiento operable vía WhatsApp y Web.",
    "proj.p1_li1":
      "Configuración de Subagents, Actions y Guardrails personalizados.",
    "proj.p1_li2":
      "Integración con base de conocimiento del negocio para respuestas contextualmente correctas.",
    "proj.p1_li3":
      "Automatización del agendamiento con reducción estimada del 40% en la carga operativa del equipo comercial.",
    "proj.p2_title": "Microservicio Logístico<br>— Auditoría de Stock",
    "proj.p2_desc":
      "Microservicio backend para auditoría de stock en tiempo real, construido con NestJS y arquitectura hexagonal. Entregado en equipo ágil con cobertura de tests y documentación completa.",
    "proj.p2_li1":
      "Diseñado bajo arquitectura hexagonal para garantizar la mantenibilidad y facilitar la migración de servicios en el futuro.",
    "proj.p2_li2": "Modelado relacional con MariaDB y TypeORM.",
    "proj.p2_li3": "Documentación completa de la API REST con Swagger.",
    "proj.p2_li4": "Cobertura de tests unitarios con Jest.",
    "edu.tag": "05. Educación",
    "edu.title": "Formación académica",
    "edu.degree1": "Ingeniería en Informática",
    "edu.period1": "2019 – Actualidad - Ultimo año",
    "edu.note1":
      "<strong>Materias relevantes:</strong> Base de Datos y SQL · Sistemas Operativos · Análisis de Sistemas · Programación Avanzada",
    "edu.degree2": "Técnico Mecánico en Máquinas Herramientas",
    "edu.note2":
      "Formación técnica con orientación en fabricación y mecanizado de precisión.",
    "contact.tag": "06. Contacto",
    "contact.title": "Trabajemos juntos",
    "contact.info_title": "Información de Contacto",
    "contact.label_phone": "Teléfono",
    "contact.label_location": "Ubicación",
    "contact.follow": "Sígueme en",
    "contact.form_title": "Envíame un Mensaje",
    "contact.label_name": "Nombre",
    "contact.label_subject": "Asunto",
    "contact.label_message": "Mensaje",
    "contact.placeholder_name": "Tu nombre",
    "contact.placeholder_subject": "¿En qué puedo ayudarte?",
    "contact.placeholder_msg": "Cuéntame sobre tu proyecto...",
    "contact.btn_send": "Enviar Mensaje",
    "footer.desc":
      "Desarrollador IT & AI Specialist especializado en crear soluciones tecnológicas escalables y eficientes. Transformando ideas en realidad digital.",
    "footer.nav_title": "Navegación",
    "footer.nav_home": "Inicio",
    "footer.nav_about": "Sobre mí",
    "footer.nav_experience": "Experiencia",
    "footer.nav_skills": "Habilidades",
    "footer.nav_projects": "Proyectos",
    "footer.contact_title": "Contacto",
    "footer.label_phone": "Teléfono",
    "footer.label_location": "Ubicación",
    "footer.copy":
      "© 2026 <span>Antonio Solís</span>. Todos los derechos reservados.",
    "footer.built": "Hecho con",
  },
  en: {
    "nav.about": "About me",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.tag": "IT Developer · Buenos Aires, Argentina",
    "hero.desc":
      "IT Developer focused on translating business needs into concrete technical solutions using autonomous AI Agents and high-performance Backend architecture.",
    "hero.btn_projects": "View projects",
    "hero.btn_contact": "Contact me",
    "hero.stat1_label": "Year at ProContacto",
    "hero.stat2_label": "Featured projects",
    "hero.stat3_num": "Last",
    "hero.stat3_label": "Year of Engineering",
    "hero.available": "Available",
    "about.tag": "01. About me",
    "about.title": "Who am I?",
    "about.p1":
      "I am <strong>Antonio Solis</strong>, an IT developer with experience in Salesforce, process automation and implementation of <strong>conversational artificial intelligence agents</strong>.",
    "about.p2":
      "I currently work at <strong>ProContacto</strong> as Backend Developer / AI Specialist, where I design and implement AI agents with Agentforce, Elevenlabs and develop integrations between AI and CRM.",
    "about.p3":
      "I am passionate about translating concrete business needs into robust technical solutions. I have experience both on the Salesforce platform and in backend development with <strong>NestJS and hexagonal architecture</strong>.",
    "about.label_age": "Age",
    "about.val_age": "26 years old",
    "about.label_location": "Location",
    "about.label_languages": "Languages",
    "about.val_languages": "Spanish · Intermediate English",
    "about.label_education": "Education",
    "about.val_education": "Computer Engineering",
    "about.h1": "Conversational AI with Agentforce",
    "about.p_h1":
      "Design and implementation of agents with Subagents, Actions, Guardrails and integration with business knowledge bases.",
    "about.h3": "Backend with NestJS",
    "about.p_h2":
      "Lead automation, scheduling and CRM flows through Autolaunched Flows and development within the Salesforce platform.",
    "about.p_h3":
      "Microservice development with hexagonal architecture, TypeORM, MariaDB and REST documentation with Swagger.",
    "exp.tag": "02. Experience",
    "exp.title": "Work history",
    "exp.workspace_tag": "My workplace",
    "exp.role1_period": "2026 – Present",
    "exp.role1_badge": "Current role",
    "exp.role1_li1":
      "Agent development with Agentforce: Configuration of Subagents, Actions, Guardrails and behavioral instructions, integrated with business knowledge bases.",
    "exp.role1_li2":
      "AI-CRM Automation: Design of Autolaunched Flows for lead management and scheduling, translating business needs into technical solutions within Salesforce.",
    "exp.role1_li3":
      "Optimization and Debugging: Analysis and resolution of incidents in flows and agent behavior, ensuring the stability of 2 agents in production and 4 in development.",
    "exp.role1_li4":
      "Translation of business needs into technical solutions within the Salesforce platform.",
    "exp.role1_li5":
      "Identification of improvements and continuous optimization based on user feedback and metrics.",
    "exp.role2_period": "2025 – Present",
    "exp.role2_li1":
      "Development of a stock audit microservice, serving as the core API for an Android mobile application for logistics management.",
    "exp.role2_li2":
      "Data integration and modeling with MariaDB through TypeORM.",
    "exp.role2_li3":
      "Creation of unit tests and REST API documentation with Swagger.",
    "exp.role2_li4":
      "Collaborative work under agile Scrum and Kanban methodology, participation in code reviews and code improvements.",
    "skills.tag": "03. Skills",
    "skills.title": "Tech stack",
    "skills.ia": "Conversational AI",
    "skills.db": "Databases",
    "skills.langs": "Languages",
    "skills.tools": "Tools & Methodologies",
    "proj.tag": "04. Projects",
    "proj.title": "Featured projects",
    "proj.p1_title":
      "Agentforce Conversational Agent<br>— Lead Management & Scheduling",
    "proj.p1_desc":
      "End-to-end implementation of an AI agent on Salesforce to automate the complete lead attention cycle, from first contact to scheduling operable via WhatsApp and Web.",
    "proj.p1_li1":
      "Configuration of custom Subagents, Actions and Guardrails.",
    "proj.p1_li2":
      "Integration with business knowledge base for contextually correct responses.",
    "proj.p1_li3":
      "Scheduling automation with an estimated 40% reduction in the operational load of the commercial team.",
    "proj.p2_title": "Logistics Microservice<br>— Stock Audit",
    "proj.p2_desc":
      "Backend microservice for real-time stock auditing, built with NestJS and hexagonal architecture. Delivered in an agile team with test coverage and complete documentation.",
    "proj.p2_li1":
      "Designed under hexagonal architecture to ensure maintainability and facilitate future service migration.",
    "proj.p2_li2": "Relational modeling with MariaDB and TypeORM.",
    "proj.p2_li3": "Complete REST API documentation with Swagger.",
    "proj.p2_li4": "Unit test coverage with Jest.",
    "edu.tag": "05. Education",
    "edu.title": "Academic background",
    "edu.degree1": "Computer Engineering",
    "edu.period1": "2019 – Present - Final year",
    "edu.note1":
      "<strong>Relevant courses:</strong> Databases and SQL · Operating Systems · Systems Analysis · Advanced Programming",
    "edu.degree2": "Mechanical Technician in Machine Tools",
    "edu.note2":
      "Technical training with a focus on precision manufacturing and machining.",
    "contact.tag": "06. Contact",
    "contact.title": "Let's work together",
    "contact.info_title": "Contact Information",
    "contact.label_phone": "Phone",
    "contact.label_location": "Location",
    "contact.follow": "Follow me on",
    "contact.form_title": "Send me a Message",
    "contact.label_name": "Name",
    "contact.label_subject": "Subject",
    "contact.label_message": "Message",
    "contact.placeholder_name": "Your name",
    "contact.placeholder_subject": "How can I help you?",
    "contact.placeholder_msg": "Tell me about your project...",
    "contact.btn_send": "Send Message",
    "footer.desc":
      "IT Developer & AI Specialist specialized in creating scalable and efficient technological solutions. Turning ideas into digital reality.",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Home",
    "footer.nav_about": "About me",
    "footer.nav_experience": "Experience",
    "footer.nav_skills": "Skills",
    "footer.nav_projects": "Projects",
    "footer.contact_title": "Contact",
    "footer.label_phone": "Phone",
    "footer.label_location": "Location",
    "footer.copy":
      "© 2026 <span>Antonio Solís</span>. All rights reserved.",
    "footer.built": "Made with",
  },
};
