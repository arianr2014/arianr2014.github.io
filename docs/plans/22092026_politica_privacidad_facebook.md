# Plan de Trabajo: Creación de Página de Política de Privacidad (Privacy Policy) para Facebook

**Fecha:** 22/09/2026  
**Proyecto:** Portafolio Arian Reyes (`arianr2014.github.io`)  
**Objetivo:** Crear una página de Política de Privacidad (`privacy-policy.html`) responsive, elegante y totalmente en cumplimiento con las directrices de Meta / Facebook for Developers.

---

## 1. Contexto y Requerimiento

Meta (Facebook) exige que cualquier aplicación o integración que utilice Facebook Login o sus APIs proporcione una URL válida y pública de **Política de Privacidad**. Esta política debe cumplir con los requisitos mínimos de transparencia sobre recolección de datos, uso, almacenamiento y proporcionar instrucciones claras de cómo el usuario puede solicitar la eliminación de sus datos.

---

## 2. Alcance

- Crear el archivo `privacy-policy.html` en la raíz del proyecto.
- Mantener la identidad visual y estructura técnica existente (Bootstrap, estilos de `style.css`, FontAwesome, encabezado y pie de página).
- Incluir las cláusulas requeridas por Facebook / Meta Developers:
  1. Información recopilada (Nombre, email, ID de usuario de Facebook, etc.).
  2. Uso de la información.
  3. Almacenamiento y protección de datos.
  4. Política sobre no venta/compartición a terceros.
  5. **Instrucciones explícitas para la eliminación de datos (Data Deletion Instructions)** exigidas por Meta.
  6. Derechos del usuario (ARCO / GDPR / Regulaciones locales).
  7. Información de contacto del responsable.
- Añadir el enlace a la Política de Privacidad en el pie de página de `index.html`.

---

## 3. Archivos Afectados

- **[NUEVO]** [`privacy-policy.html`](file:///d:/AREYES/Pagina/arianr2014.github.io/privacy-policy.html)
- **[MODIFICAR]** [`index.html`](file:///d:/AREYES/Pagina/arianr2014.github.io/index.html)

---

## 4. Detalle de Secciones de la Política de Privacidad

1. **Introducción:** Declaración de compromiso con la privacidad.
2. **Información que recopilamos:** Datos del perfil público de Facebook (nombre, correo electrónico, foto de perfil, ID de usuario).
3. **Uso de los datos:** Autenticación de usuario, personalización de experiencia, soporte técnico.
4. **Instrucciones para la Eliminación de Datos (Requisito Meta):**
   - Opción A: Eliminar el acceso desde la configuración de Aplicaciones y Sitios Web de Facebook.
   - Opción B: Solicitud directa por correo electrónico para eliminación de registros del sistema.
5. **Seguridad y almacenamiento:** Medidas de protección.
6. **Terceros y Cookies:** Aclaración de no venta de datos.
7. **Contacto:** Datos de contacto del desarrollador / propietario del sitio.

---

## 5. Plan de Pruebas

- Verificación de la estructura HTML y diseño responsive en navegador.
- Validación de navegación y enlaces (retorno al `index.html` y apertura de la política desde el footer).
- Comprobación de que cumple con los términos y políticas de plataforma Meta App Review.
