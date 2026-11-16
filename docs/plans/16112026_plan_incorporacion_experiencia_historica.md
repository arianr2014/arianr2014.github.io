# Plan de Trabajo: Incorporación de Experiencia Histórica Profesional (Xstrata Copper, Axle, SILSA)

**Fecha:** 16/11/2026  
**Responsable:** Arián Reyes Arrunátegui / Antigravity Agent  
**Objetivo:** Agregar 3 posiciones laborales históricas (2005 - 2008) en la sección de Experiencia Profesional del portafolio web, redactadas con estándar de ingeniería senior, en inglés (por defecto) y español, con integración completa en el sistema bilingüe i18n.

---

## 1. Posiciones a Incorporar (Orden Cronológico Inverso)

1. **Xstrata Copper — Proyecto Las Bambas (06/2007 – 12/2008):**
   - Rol: Senior / Analista Programador (Análisis Funcional y Liderazgo de Proyecto).
   - Sector: Minería / Energía.
   - Puntos clave: Sistema HSEC (Salud, Seguridad, Medio Ambiente y Comunidad), arquitectura de capa modelo con .NET Web Services y SQL Server 2005, portal de consulta estadística con ChartFX, cubos dinámicos DevExpress y Gantt interactivo DlhSoft.

2. **Axle Financial Solutions (11/2006 – 05/2007):**
   - Rol: Analista Programador.
   - Sector: Banca y Finanzas.
   - Puntos clave: Mantenimiento y nuevos requerimientos para la plataforma central de remesas internacionales *Xpress Remittance*, intranet corporativa con ASP.NET AJAX, .NET Framework y SQL Server 2000.

3. **SILSA S.A. (11/2005 – 10/2006):**
   - Rol: Analista Programador / Responsable de Proyecto.
   - Sector: Servicios Empresariales.
   - Puntos clave: Desarrollo de módulos transaccionales de contratos, adendas, cartas fianza, órdenes de compra y cotizaciones en C# / ASP.NET y SQL Server 2000. Liderazgo en migración de datos FoxPro a SQL Server, creación de componentes reutilizables y seguimiento con MS Project.

---

## 2. Archivos Afectados
- \js/i18n.js\: Incorporación de claves de traducción para las 3 posiciones tanto en \en\ como en \es\.
- \index.html\: Adición de los 3 items en el timeline con markup semántico y atributos \data-i18n\ y \data-i18n-html\.
- Validación de codificación UTF-8 con BOM en todos los archivos.

---

## 3. Criterios de Aceptación
1. Redacción profesional, clara y de alto impacto en inglés y español.
2. Cambio fluido con el selector bilingüe \[ EN | ES ]\.
3. Despliegue exitoso en GitHub Pages verificado vía GitHub Actions.