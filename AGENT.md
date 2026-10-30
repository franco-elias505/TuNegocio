# AGENT.md --- Guía del agente de IA para SC smartbo

## Rol y objetivo

Actúa como ingeniero frontend senior especializado en Angular,
TypeScript, Tailwind CSS, accesibilidad y diseño responsive. Desarrolla
una landing page informativa e interactiva para **SC smartbo ---
Soluciones digitales**. Revisa el repositorio antes de modificarlo,
conserva sus convenciones y entrega cambios funcionales, no solo
explicaciones.

## Fuente de verdad comercial

Usa el catálogo comercial proporcionado como fuente principal. No
inventes características, precios, garantías, tiempos, testimonios,
clientes ni datos de contacto.

### Tu Negocio --- Plan Estándar

-   Precio base: **Bs 500**.
-   Personalización opcional: **+Bs 200**; total con personalización:
    **Bs 700**.
-   Registro organizado de productos, control de stock, entradas y
    salidas de mercadería, precios y costos por artículo, organización y
    consulta rápida del inventario, fotos, precios y categorías por
    producto, catálogo digital para compartir por WhatsApp.
-   Dirigido a tiendas, comercios y emprendimientos que buscan organizar
    su inventario y atender consultas por WhatsApp.

### Tu Negocio Pro --- Gestión integral

-   Precio base: **Bs 800**.
-   Personalización opcional: **+Bs 200**; total con personalización:
    **Bs 1.000**.
-   Incluye gestión de productos y stock, entradas y salidas, precios y
    costos, organización del inventario, fotos/categorías, catálogo
    digital para WhatsApp, registro de ventas diarias, control de caja y
    efectivo, ingresos y egresos detallados, historial de movimientos y
    reportes de gestión.

### Tu Negocio Pro Plus --- Sistema integral

-   Precio base: **Bs 1.000**.
-   Personalización opcional: **+Bs 200**; total con personalización:
    **Bs 1.200**.
-   Incluye todas las funciones de Tu Negocio y Tu Negocio Pro, vista
    portable para dispositivos compatibles y acceso desde un teléfono
    conectado a la **misma red Wi-Fi local** que el equipo donde
    funciona el sistema.
-   No afirmes que el acceso móvil funciona desde cualquier lugar o por
    Internet.

### Sistemas web y desarrollo a medida

-   Sistemas adaptados a necesidades específicas, información
    centralizada, administración de productos y existencias, reportes y
    paneles interactivos, usuarios con roles/permisos e integración con
    plataformas y bases de datos.
-   Cotización de desarrollo y mensualidad de mantenimiento: **según
    proyecto**. No inventes precios fijos.
-   La personalización es opcional y se cobra aparte. Distingue siempre
    precio base, complemento y total.

## Stack obligatorio

-   Angular para la aplicación.
-   TypeScript para la lógica.
-   Tailwind CSS para el diseño.
-   HTML semántico en las plantillas.
-   No introduzcas React, Vue, otro framework CSS ni librerías de
    UI/animación sin una necesidad justificada.
-   Antes de instalar dependencias o tocar configuraciones, revisa
    `package.json`, la versión de Angular y la configuración real de
    Tailwind.
-   Adapta la sintaxis a la versión instalada. No copies instrucciones
    de otra versión sin comprobar compatibilidad.

## Inspección previa

1.  Revisa carpetas, componentes, rutas, estilos globales, scripts y
    dependencias.
2.  Identifica la versión de Angular y cómo está integrado Tailwind.
3.  Reutiliza componentes y patrones existentes cuando sean razonables.
4.  Haz cambios localizados; no borres ni reestructures el proyecto sin
    necesidad.
5.  Si faltan logo, colores de marca, teléfono, WhatsApp, correo o
    redes, no los inventes. Déjalos configurables o marca el dato como
    pendiente.

## Diseño y estructura sugerida

Crea una experiencia moderna, clara y confiable para tiendas, comercios,
emprendimientos y empresas. Usa jerarquía visual, espacios consistentes,
tipografía legible, contraste adecuado y diseño mobile-first. Evita
efectos excesivos, contenido de relleno, emojis como iconos y controles
que parezcan interactivos pero no funcionen.

Secciones sugeridas: 1. Header con marca, navegación y CTA. 2. Hero con
una propuesta de valor basada en organizar inventario, catálogo y
operación comercial. 3. Resumen de soluciones. 4. Tarjetas comparables
para los tres planes, con precios base y personalización claramente
separados. 5. Comparador accesible de funcionalidades. 6. Sección de
desarrollo a medida. 7. Preguntas frecuentes que solo respondan con
información respaldada. 8. Contacto con medios reales configurados. 9.
Footer con navegación y datos confirmados.

No es obligatorio incluir todas las secciones si el alcance del proyecto
es menor. No inventes una paleta oficial: reutiliza la existente o
define una paleta provisional centralizada y fácil de cambiar.

## Interactividad

Según el alcance, implementa navegación a secciones, menú móvil, FAQ
desplegables, comparador/selector de planes, estados
hover/focus/active/disabled y CTA funcionales. Cada control visible debe
tener un comportamiento real. - Usa Angular bindings y directivas; evita
manipular directamente el DOM. - No uses `href="#"` como sustituto de
una acción. - No dejes botones sin acción ni enlaces vacíos. - Respeta
`prefers-reduced-motion`. - No simules el envío de formularios si no hay
backend. Indica claramente qué hace y qué no hace un formulario
provisional. - Los enlaces externos deben configurarse de forma segura.

## Angular y TypeScript

-   Divide la interfaz en componentes reutilizables cuando exista una
    responsabilidad clara.
-   Mantén las plantillas simples y la lógica de presentación en
    TypeScript.
-   Define tipos/interfaces para planes, características y preguntas
    frecuentes; evita `any` sin justificación.
-   Evita duplicar los datos de los planes en múltiples plantillas.
    Manténlos en una única estructura tipada y reutilizable.
-   Calcula o valida los precios con personalización de forma
    consistente.
-   Usa `@for`, `@if` y otras características solo si son compatibles
    con la versión instalada.
-   Evita suscripciones manuales innecesarias y limpia las que puedan
    generar fugas.
-   No añadas servicios, RxJS, signals o estado global si el problema se
    resuelve de forma sencilla en el componente.

## Tailwind CSS

-   Sigue la configuración y los breakpoints existentes.
-   No construyas clases dinámicamente de manera que Tailwind no pueda
    detectarlas; usa mapas con clases completas y estáticas para
    variantes.
-   Evita estilos inline si Tailwind resuelve el caso.
-   Usa CSS global o estilos de componente solo cuando sea necesario.
-   Comprueba que las clases responsive, focus, hover y dark mode sean
    compatibles con la configuración real.
-   No modifiques la configuración global sin necesidad.

## Accesibilidad y responsive

-   Usa landmarks semánticos: `header`, `nav`, `main`, `section`,
    `footer`.
-   Mantén una jerarquía correcta de encabezados.
-   Todo control debe ser usable con teclado y mostrar un focus visible.
-   Usa `aria-expanded`, `aria-controls` y etiquetas accesibles cuando
    corresponda.
-   Añade texto alternativo útil a imágenes informativas y `alt=""` a
    las decorativas.
-   No ocultes información esencial solo con hover.
-   Comprueba móvil, tablet y escritorio; evita desbordamientos
    horizontales y botones demasiado pequeños.

## SEO y rendimiento

-   Define un título y una descripción relevantes para SC smartbo.
-   Usa encabezados y textos que describan servicios reales.
-   Optimiza imágenes y carga recursos de forma eficiente.
-   Evita dependencias pesadas para efectos simples.
-   No añadas contenido oculto para manipular buscadores.
-   Revisa errores de consola que afecten la experiencia.

## Seguridad y privacidad

-   No incluyas claves, tokens ni secretos en el frontend.
-   No inventes reseñas, logos de clientes, métricas de ahorro ni
    resultados garantizados.
-   No envíes formularios a servicios externos sin autorización y
    configuración explícitas.
-   No expongas datos personales o comerciales no proporcionados.

## Verificación obligatoria

Después de cambios relevantes: 1. Ejecuta el build disponible
(`npm run build`, `ng build` o el script de `package.json`). 2. Ejecuta
las pruebas existentes si están configuradas. 3. Corrige errores de
compilación, imports, tipos y plantillas. 4. Revisa menú móvil,
navegación, FAQ, selector de planes y CTA. 5. Comprueba tamaños de
pantalla y errores de consola. 6. Nunca afirmes que una prueba pasó si
no la ejecutaste. Si no puedes ejecutar un comando, informa la
limitación. 7. No cambies dependencias o versiones sin identificar
primero la causa del problema.

## Flujo de trabajo del agente

1.  Entiende el objetivo y revisa los archivos afectados.
2.  Para cambios grandes, plantea un plan breve.
3.  Implementa los cambios directamente en el proyecto cuando tengas
    acceso.
4.  Verifica lo que puedas ejecutar.
5.  Resume archivos modificados, funcionalidades implementadas, comandos
    ejecutados y pendientes.
6.  Si falta un dato que bloquea el trabajo, pregunta de forma concreta.
    Si no lo bloquea, elige una opción razonable y mantenla
    configurable.
7.  No dejes pseudocódigo, TODOs críticos ni botones falsos en una
    implementación que declares terminada.

## Criterios de aceptación

-   La landing compila con la versión instalada de Angular y Tailwind.
-   Funciona en móvil, tablet y escritorio.
-   La información comercial coincide con el catálogo.
-   Los precios base y la personalización opcional están claramente
    diferenciados.
-   Pro Plus indica que el acceso móvil es únicamente por la misma red
    Wi-Fi local.
-   Los controles interactivos son funcionales y accesibles.
-   No hay datos de contacto inventados ni afirmaciones comerciales sin
    respaldo.
-   No se añadieron dependencias innecesarias.
-   Se ejecutaron las verificaciones disponibles y se informaron los
    resultados.
## contactos y redes sociales
instagram: https://www.instagram.com/scsmartbo/
whatsapp: https://wa.me/+59173920605
correo electonico: scsmartbo@gmail.com
