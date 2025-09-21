# Guía de Usuario y Accesibilidad — Gestor de Gastos

## Introducción

**Gestor de Gastos** es una aplicación web diseñada para que cualquier persona pueda registrar, consultar y gestionar sus gastos mensuales de forma sencilla y accesible. El proyecto sigue buenas prácticas de accesibilidad para garantizar que todas las personas, incluidas aquellas con discapacidades, puedan utilizar la aplicación sin barreras.

---

## Uso Básico

1. **Inicio de sesión:** Ingresa tu nombre para comenzar a usar la aplicación.
2. **Agregar gasto:** Haz clic en el botón “Agregar gasto”, completa los campos requeridos y guarda.
3. **Editar o eliminar:** Usa los botones correspondientes junto a cada gasto para modificar o eliminar registros.
4. **Navegación:** Utiliza el menú principal para cambiar entre meses o ver el resumen general.

---

## Características de Accesibilidad

### 1. Etiquetas ARIA y roles semánticos

- Todos los elementos interactivos (botones, formularios, menús) incluyen atributos `aria-label` o `aria-describedby` para describir su función a los lectores de pantalla.
- Se utilizan roles semánticos (`<main>`, `<header>`, `<section>`, `<button>`, etc.) para estructurar la aplicación.

### 2. Navegación por teclado

- Todos los controles pueden ser accedidos y operados usando solo el teclado (tabulación, enter, espacio, escape).
- El foco visual es claro y visible en todos los elementos interactivos.

### 3. Contraste y legibilidad

- Los colores cumplen con el estándar WCAG AA para contraste mínimo entre texto y fondo.
- Los tamaños de fuente son adaptables y escalables según la configuración del navegador.

### 4. Mensajes claros y estados

- Los mensajes de error y confirmación son descriptivos y se anuncian a los lectores de pantalla.
- Los campos obligatorios están claramente indicados.

---

## Decisiones Técnicas y Justificación

- **React + TypeScript:** Permite crear componentes reutilizables y tipados, facilitando la integración de props de accesibilidad y la validación de atributos.
- **TailwindCSS:** Facilita la implementación de estilos responsivos y de alto contraste, además de permitir personalización rápida para cumplir criterios de accesibilidad visual.
- **Estructura semántica:** El uso de etiquetas HTML5 semánticas mejora la navegación para tecnologías de asistencia.
- **Validación y feedback:** Los formularios validan entradas y muestran mensajes accesibles.
- **Soporte para lectores de pantalla:** Se han probado los flujos principales con lectores de pantalla populares.

---

## Cumplimiento de Criterios de Accesibilidad

- **Perceptible:** Información y componentes son presentados de manera que todos los usuarios puedan percibirlos (contraste, texto alternativo, estructura clara).
- **Operable:** Todos los controles son accesibles por teclado y tienen foco visible.
- **Comprensible:** La navegación y los mensajes son claros y consistentes.
- **Robusto:** Compatible con diferentes navegadores y tecnologías de asistencia.

---

## Recomendaciones para Usuarios

- Si usas lector de pantalla, navega por encabezados (`H1`, `H2`, etc.) para moverte rápidamente entre secciones.
- Usa la tecla `Tab` para moverte entre campos y botones, y `Enter` o `Espacio` para activar acciones.

## Pruebas

El proyecto cuenta con validacion con puntaje 100 en todos los aspectos de Lighthouse y sin errores en WAVE

<img width="1182" height="842" alt="image" src="https://github.com/user-attachments/assets/b0ceeb68-f75c-4842-832a-89e4967caba7" />
<img width="367" height="705" alt="image" src="https://github.com/user-attachments/assets/297ea214-dfb8-4310-8c73-0f689f679e5b" />



