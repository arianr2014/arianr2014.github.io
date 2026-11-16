# Plan de Trabajo: Modernización Integral del Portafolio Web Senior (GitHub Pages)

**Fecha:** 16/11/2026  
**Responsable:** Arián Reyes Arrunátegui / Antigravity Agent  
**Objetivo:** Rediseñar la página web personal (https://arianr2014.github.io/) a un estándar de ingeniería de software moderno (2026), reflejando con fidelidad el CV profesional de Senior Full Stack Engineer, Team Lead y Especialista en Productos de IA / Arquitectura Backend.

---

## 1. Justificación y Estado Actual
- **Sitio actual:** Plantilla estática obsoleta con jQuery antiguo, Bootstrap 3 y rastros residuales de texto no propio (ej. referencias a Bogotá, Brayan López, extensiones de navegador inyectadas).
- **Perfil real:** Senior Full Stack Engineer con 10+ años de experiencia, Team Lead en VAP Perú, integrador de IA Generativa (Google Gemini API, OpenAI API), creador de Cross-Posting Pro y experto en .NET 8, React, TypeScript y AWS.
- **Estrategia seleccionada:** Opción A (Arquitectura Single-Page HTML5 moderna con CSS de alto rendimiento, diseño Dark Tech profesional, ultra liviana, 100% compatible con GitHub Pages sin fricción de dependencias Ruby/Jekyll).

---

## 2. Alcance del Rediseño

### 2.1. Arquitectura Visual y UX (Dark Tech Aesthetic)
- Paleta de colores profesional: Fondo Slate/Zinc oscuro (\#0b0f19\ / \#0f172a\), acentos en Cyan / Indigo / Emerald, tipografía limpia (Inter / Plus Jakarta Sans).
- Indicador en vivo de disponibilidad (*"Available for high-impact projects & advisory"*).
- Microinteracciones suaves (hover en tarjetas de proyectos, badges de tecnologías, transiciones CSS puras sin librerías pesadas).
- 100% responsivo para móviles, tablets y monitores Ultra HD.

### 2.2. Estructura de Secciones
1. **Navbar:** Marca Arián Reyes, enlaces de navegación suave (#about, #skills, #projects, #experience, #education, #contact), botón a LinkedIn y botón de contacto directo.
2. **Hero Section:**
   - Fotografía oficial (\img/arianreyes.jpg\) con marco circular moderno y glow sutil.
   - Titular: *Full Stack Engineer | AI-Powered Products | Backend & API Architecture*.
   - Resumen ejecutivo alineado al CV.
   - Barra de métricas de impacto clave (-90% latencia de reportes, -90% incidencias ERP, 10+ años de liderazgo).
   - CTAs principales: Contacto, LinkedIn y Proyectos.
3. **Core Technical Skills:**
   - AI & LLM Integration (Google Gemini API, OpenAI API, Prompt Optimization).
   - Backend & APIs (.NET 8, C#, ASP.NET Core, REST, WCF, Clean Architecture).
   - Frontend (React, TypeScript, Angular, JavaScript, Bootstrap).
   - Architecture & Patterns (Clean Architecture, DDD, CQRS, Microservicios).
   - Data & Cloud (SQL Server, Entity Framework, LINQ, AWS, Docker).
4. **Featured Projects & AI Showcase:**
   - **Cross-Posting Pro:** Plataforma SaaS de publicación en redes con optimización mediante Google Gemini API (\https://crosspostingpro.com/\).
   - **AI-Powered English Translator:** Prototipo con Gemini API para traducción contextual y sugerencia de respuestas.
   - **ERP Corporativo Minero (VAP Perú / Colquisiri):** Módulos críticos, facturación electrónica y optimización de reportes (-90% tiempo).
   - **Extranet de Proveedores:** Portal B2B en .NET 8 y Clean Architecture (\https://extranet.colquisiri.com.pe/\).
   - **Innova Schools Pre-Registration:** Admisiones masivas e integración con NetSuite ERP.
   - **Scotiabank Enterprise Systems (SES):** Proyectos regionales ScotiaFriends, Counselor Alignment y SCI Agreements.
5. **Work Experience (Timeline Profesional):**
   - VAP Perú (Julio 2018 - Presente): Team Lead & Senior Full Stack.
   - Innova Schools (Noviembre 2016 - Junio 2018): Senior .NET / Full Stack Developer.
   - Software Enterprise Services (Junio 2011 - Julio 2016): Senior Analyst / Senior Developer.
   - ALGOLIQ (Abril 2009 - Marzo 2010 | Buenos Aires): Senior Developer.
6. **Educación y Certificaciones:**
   - UTP (Ingeniería de Sistemas) y CIBERTEC.
   - Certificaciones: Scrum Foundation, AWS Architecting, PMBOK, SQL Server BI, MCAD.
   - Idiomas: Español (Nativo) | Inglés (B2 Upper-Intermediate).
7. **Contacto y Footer:**
   - Correo (\rianr2014@gmail.com\), Teléfono/WhatsApp (\+51 922 396 990\), Ubicación (Lima, Perú), LinkedIn y GitHub.
   - Enlace a \privacy-policy.html\ y preservación intacta de \	iktok-callback.html\.

---

## 3. Archivos Afectados
- \index.html\: Reemplazo del markup por la versión moderna, limpia y semántica.
- \css/modern-portfolio.css\: Nueva hoja de estilos moderna, modular y ligera (o embebida/modularizada).
- Conservación estricta de rutas existentes (\privacy-policy.html\, \	iktok-callback.html\, \img/*\).

---

## 4. Criterios de Aceptación y Pruebas
1. Cero errores de sintaxis HTML5/CSS.
2. Contenido 100% verídico extraído del CV oficial de Arián Reyes Arrunátegui.
3. Eliminación total de datos residuales de la plantilla anterior (Bogotá, Brayan López, extensiones del navegador).
4. Renderizado impecable en móvil y escritorio.
5. Push al repositorio de GitHub y verificación del despliegue en \https://arianr2014.github.io/\.