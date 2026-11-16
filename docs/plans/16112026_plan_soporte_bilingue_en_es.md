# Plan de Trabajo: Internacionalización Bilingüe (Inglés por Defecto / Español)

**Fecha:** 16/11/2026  
**Responsable:** Arián Reyes Arrunátegui / Antigravity Agent  
**Objetivo:** Incorporar soporte bilingüe completo (Inglés por defecto y Español alternativo) mediante un selector interactivo en la barra de navegación, con persistencia en \localStorage\ y traducción instantánea sin recarga.

---

## 1. Requerimientos
1. **Idioma por defecto: INGLÉS (EN)**. Al ingresar por primera vez, el sitio debe mostrarse íntegramente en inglés profesional (extraído del CV oficial).
2. **Selector de idioma interactivo:** Botón o pill switcher \[ EN | ES ]\ en el Navbar, visible tanto en escritorio como en móviles.
3. **Persistencia:** Si el usuario elige cambiar a español, recordar la preferencia en \localStorage\ para futuras visitas.
4. **Traducción integral:**
   - Meta etiquetas y título de página.
   - Navegación y menús.
   - Hero, métricas y badges de estado.
   - Perfil profesional y categorías de habilidades.
   - Proyectos destacados, descripciones y logros.
   - Línea de tiempo de experiencia laboral.
   - Educación, certificaciones e idiomas.
   - Sección de contacto y pie de página.
5. **Rendimiento:** Ejecución del cambio en el DOM en tiempo real mediante atributos \data-i18n\ y diccionario estructurado, sin parpadeos ni recargas de página.

---

## 2. Archivos Afectados
- \index.html\: Estructura HTML con textos base en inglés y marcado con atributos \data-i18n\.
- \js/i18n.js\: Diccionario completo EN / ES y controlador de cambio de idioma.
- \css/modern.css\: Estilos para el switch \[ EN | ES ]\ en el Navbar.

---

## 3. Pruebas y Criterios de Aceptación
1. Carga inicial en inglés por defecto (\lang="en"\).
2. Clic en "ES" cambia inmediatamente todos los textos a español.
3. Clic en "EN" regresa de inmediato al inglés.
4. Recargar la página mantiene el último idioma seleccionado.
5. Commit, push y verificación en GitHub Pages (\https://arianr2014.github.io/\).