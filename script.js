// ============================================================
// CANSUAR CONSULTORA — script.js (datos y animaciones — landing)
// ============================================================

document.body.classList.add('js-ready');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.body.classList.add('reduced-motion');
}

/* ── Categorías de capacitaciones (solo etiqueta informativa) ─── */
const CATEGORIAS = [
  { id: 'liderazgo-gestion', nombre: 'Liderazgo y Gestión' },
  { id: 'equipos-cambio', nombre: 'Equipos y Cambio Organizacional' },
];

/* ── Capacitaciones (programas — servicio informativo, sin venta online) ── */
const CAPACITACIONES = [
  {
    id: 'gestion-estrategica-directores',
    nombre: 'Gestión Estratégica para Directores',
    categoria: 'liderazgo-gestion',
    img: 'images/reunion-de-negocios-moderna-y-colaborativa_1x1.png',
    imgPos: 'center 32%',
    badge: '',
    desc: 'Un programa pensado para direcciones y gerencias que necesitan traducir la visión de la empresa en decisiones concretas. Trabajamos planificación estratégica, toma de decisiones bajo incertidumbre y alineación de equipos directivos.',
    beneficios: ['Planificación estratégica', 'Toma de decisiones', 'Alineación directiva'],
    presentacion: '10 hs · Online en vivo · Certificado',
  },
  {
    id: 'liderazgo-mandos-medios',
    nombre: 'Liderazgo para Mandos Medios',
    categoria: 'liderazgo-gestion',
    img: 'images/reunion-corporativa-en-sala-moderna_1x1.png',
    imgPos: 'center 30%',
    badge: 'Más elegido',
    desc: 'Herramientas concretas para jefes y supervisores que lideran equipos por primera vez o quieren profesionalizar su rol: delegación efectiva, feedback y manejo de conversaciones difíciles.',
    beneficios: ['Delegación efectiva', 'Feedback estructurado', 'Manejo de conflictos'],
    presentacion: '8 hs · Online en vivo · Certificado',
  },
  {
    id: 'gestion-proyectos-desde-inicio',
    nombre: 'Gestión de Proyectos desde el Inicio',
    categoria: 'liderazgo-gestion',
    img: 'images/reunion-en-la-fabrica-con-tablet_1x1.png',
    imgPos: 'center 28%',
    badge: '',
    desc: 'Metodología aplicada para arrancar un proyecto con bases sólidas: definición de alcance, cronograma, recursos y riesgos. Ideal para líderes de proyecto en empresas medianas y pymes.',
    beneficios: ['Definición de alcance', 'Cronograma y recursos', 'Gestión de riesgos'],
    presentacion: '12 hs · Online en vivo · Certificado',
  },
  {
    id: 'comunicacion-efectiva-equipos',
    nombre: 'Comunicación Efectiva en Equipos de Trabajo',
    categoria: 'equipos-cambio',
    img: 'images/sesion-de-trabajo-colaborativa-en-oficina_1x1.png',
    imgPos: 'center 34%',
    badge: '',
    desc: 'Prácticas concretas para reducir malentendidos, mejorar reuniones y construir acuerdos claros entre áreas. Pensado para equipos que necesitan trabajar mejor juntos, no solo más.',
    beneficios: ['Reuniones efectivas', 'Escucha activa', 'Acuerdos claros'],
    presentacion: '6 hs · Online en vivo · Certificado',
  },
  {
    id: 'formacion-formadores-internos',
    nombre: 'Formación de Formadores Internos',
    categoria: 'equipos-cambio',
    img: 'images/espacio-de-trabajo-calido-y-moderno_1x1.png',
    imgPos: 'center 30%',
    badge: 'Nuevo',
    desc: 'Formá a tu propio equipo de referentes internos para que puedan replicar capacitaciones dentro de la empresa, con técnicas de didáctica y diseño de contenidos.',
    beneficios: ['Diseño de contenidos', 'Técnicas didácticas', 'Evaluación de aprendizaje'],
    presentacion: '10 hs · Online en vivo · Certificado',
  },
  {
    id: 'gestion-cambio-organizacional',
    nombre: 'Gestión del Cambio Organizacional',
    categoria: 'equipos-cambio',
    img: 'images/espacio-de-trabajo-moderno-y-calido_1x1.png',
    imgPos: 'center 32%',
    badge: '',
    desc: 'Modelos y herramientas para acompañar procesos de cambio (reestructuraciones, nuevas tecnologías, fusiones) minimizando la resistencia y sosteniendo el compromiso del equipo.',
    beneficios: ['Modelos de cambio', 'Manejo de resistencia', 'Plan de comunicación'],
    presentacion: '8 hs · Online en vivo · Certificado',
  },
];

/* ── Servicios de consultoría (contacto) ──────────────────────── */
const SERVICIOS = [
  {
    id: 'consultoria-gestion-proyectos',
    nombre: 'Consultoría en Gestión de Proyectos',
    desc: 'Acompañamiento experto desde el diseño hasta el cierre de tus proyectos clave.',
    icon: 'project',
  },
  {
    id: 'diagnostico-reestructuracion',
    nombre: 'Diagnóstico y Reestructuración Organizacional',
    desc: 'Analizamos tu estructura actual y diseñamos un modelo más eficiente.',
    icon: 'chart',
  },
  {
    id: 'consultoria-pymes',
    nombre: 'Consultoría para Pymes',
    desc: 'Profesionalizamos procesos clave para que tu empresa escale con orden.',
    icon: 'building',
  },
  {
    id: 'transformacion-cultural',
    nombre: 'Transformación Cultural y Cambio',
    desc: 'Acompañamos a tu organización en procesos de cambio sostenidos en el tiempo.',
    icon: 'compass',
  },
];

function getCategoria(id) { return CATEGORIAS.find(c => c.id === id); }
const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

/* ── Tarjeta de capacitación (informativa, CTA por WhatsApp — sin precio) ─── */
function crearCapacitacionCardHTML(p) {
  const cat = getCategoria(p.categoria);
  const wspMsg = encodeURIComponent(`Hola! Quiero más información sobre ${p.nombre}`);
  return `
  <article class="training-card" data-animate style="transform:translateY(24px);opacity:0">
    <div class="training-card__img-wrap">
      <img src="${esc(p.img)}" style="object-position:${esc(p.imgPos || 'center')}" alt="Cansuar Consultora — ${esc(p.nombre)}" width="500" height="375" loading="lazy">
      ${p.badge ? `<span class="training-card__badge">${esc(p.badge)}</span>` : ''}
    </div>
    <div class="training-card__body">
      <span class="training-card__cat">${esc(cat ? cat.nombre : '')}</span>
      <h3 class="training-card__name">${esc(p.nombre)}</h3>
      <span class="training-card__meta">${esc(p.presentacion)}</span>
      <ul class="training-card__beneficios">
        ${p.beneficios.map(b => `<li>${esc(b)}</li>`).join('')}
      </ul>
      <div class="training-card__cta">
        <a class="btn btn-primary" href="https://wa.me/5491100000000?text=${wspMsg}" target="_blank" rel="noopener">Consultar este programa</a>
      </div>
    </div>
  </article>`;
}

/* ============================================================
   TOPBAR
   ============================================================ */
function initTopbar() {
  const el = document.getElementById('site-topbar');
  const track = document.getElementById('topbar-track');
  if (!el || !track) return;
  const avisos = [
    'Capacitaciones in-company disponibles para tu empresa',
    'Nuevo: Formación de Formadores Internos',
    'Certificado digital al finalizar cada programa',
  ];
  track.innerHTML = avisos.map(a => `<span class="topbar-item">${esc(a)}</span>`).join('<span class="topbar-sep">·</span>');
  el.classList.add('visible');
  requestAnimationFrame(() => {
    if (track.scrollWidth > el.clientWidth) {
      track.innerHTML += '<span class="topbar-sep">·</span>' + track.innerHTML;
      track.classList.add('loop');
      track.style.animationDuration = Math.round(track.scrollWidth / 80) + 's';
    }
  });
}

/* ============================================================
   MENÚ MOBILE
   ============================================================ */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('mobile-overlay');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('mobile-menu-close');
  const linksWrap = document.getElementById('mobile-menu-links');
  if (!toggle || !menu) return;
  linksWrap.innerHTML = `
    <a href="index.html">Inicio</a>
    <a href="#servicios">Consultoría</a>
    <a href="#capacitaciones">Capacitaciones</a>
    <a href="#nosotros">Nosotros</a>
    <a href="#contacto">Contacto</a>
  `;
  function open() { overlay.classList.add('open'); menu.classList.add('open'); document.body.style.overflow = 'hidden'; }
  function close() { overlay.classList.remove('open'); menu.classList.remove('open'); document.body.style.overflow = ''; }
  toggle.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
}

/* ============================================================
   WHATSAPP FLOTANTE
   ============================================================ */
function initWspFloat() {
  const btn = document.getElementById('wsp-float');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) btn.classList.add('visible'); else btn.classList.remove('visible');
  }, { passive: true });
}

/* ============================================================
   SERVICIOS (home)
   ============================================================ */
const SERVICE_ICONS = {
  project: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>',
  chart: '<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-5"/>',
  building: '<path d="M3 21h18"/><path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/><path d="M9 9h1M14 9h1M9 13h1M14 13h1M9 17h1M14 17h1"/>',
  compass: '<circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z"/>',
};
function initServicios() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = SERVICIOS.map(s => `
    <div class="service-card" data-animate style="transform:translateY(24px);opacity:0">
      <div class="service-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${SERVICE_ICONS[s.icon] || ''}</svg></div>
      <h3>${esc(s.nombre)}</h3>
      <p>${esc(s.desc)}</p>
      <a href="https://wa.me/5491100000000?text=${encodeURIComponent('Hola! Quiero consultar sobre ' + s.nombre)}" target="_blank" rel="noopener">Solicitar consultoría <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>`).join('');
}

/* ============================================================
   CAPACITACIONES (home — todas, sin catálogo separado)
   ============================================================ */
function initCapacitaciones() {
  const grid = document.getElementById('capacitaciones-grid');
  if (!grid) return;
  grid.innerHTML = CAPACITACIONES.map(crearCapacitacionCardHTML).join('');
}

/* ============================================================
   SCROLL ANIMATIONS (GSAP)
   ============================================================ */
function initScrollAnimations() {
  if (typeof gsap === 'undefined' || document.body.classList.contains('reduced-motion')) return;
  gsap.registerPlugin(ScrollTrigger);

  // Firma "autoridad cálida": encabezados de sección con revelado en cortina,
  // grillas con cascada secuencial confiada, resto con entrada estándar más perceptible.
  document.querySelectorAll('.section-head h2').forEach(h => {
    gsap.fromTo(h, { clipPath: 'inset(0 0 100% 0)' }, {
      clipPath: 'inset(0 0 0% 0)', duration: 1.1, ease: 'power4.out',
      scrollTrigger: { trigger: h, start: 'top 88%' },
    });
  });

  ['#services-grid', '#capacitaciones-grid'].forEach(sel => {
    if (!document.querySelector(sel)) return;
    ScrollTrigger.batch(`${sel} > [data-animate]`, {
      start: 'top 88%',
      onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.15 }),
      once: true,
    });
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    if (el.closest('#services-grid, #capacitaciones-grid')) return;
    gsap.to(el, { y: 0, opacity: 1, duration: 0.95, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
  });

  gsap.utils.toArray('[data-animate-stagger]').forEach(group => {
    const items = group.querySelectorAll('[data-animate-item]');
    gsap.to(items, { y: 0, opacity: 1, duration: 0.85, ease: 'power3.out', stagger: 0.16, scrollTrigger: { trigger: group, start: 'top 85%' } });
  });
}

function initHeroEntrance() {
  if (typeof gsap === 'undefined' || document.body.classList.contains('reduced-motion')) return;
  const tl = gsap.timeline({ delay: 0.15 });
  tl.to('.hero .eyebrow', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' })
    .to('.hero h1', { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.45')
    .to('.hero-desc', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.55')
    .to('.hero-ctas', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .to('.hero-badges', { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.45');
}

/* ============================================================
   INIT GLOBAL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTopbar();
  initMobileMenu();
  initWspFloat();
  initServicios();
  initCapacitaciones();
  initHeroEntrance();
  initScrollAnimations();
});
