import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Plan {
  name: string;
  eyebrow: string;
  price: string;
  total: string;
  description: string;
  features: string[];
  accent: 'neutral' | 'green';
}

interface ShowcaseSlide {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface PlanShowcase {
  name: string;
  description: string;
  slides: ShowcaseSlide[];
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit, OnInit, OnDestroy {
  protected menuOpen = false;
  protected openedFaq: number | null = null;
  protected selectedPlan = 1;
  protected readonly activePlanSlides = [0, 0, 0];
  private readonly autoplayIds: Array<ReturnType<typeof setInterval> | undefined> = [];
  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    this.host.nativeElement.querySelectorAll('.section-heading, .solution-card, .plan-card, .faq-item, .showcase-copy, .carousel, .custom-card, .contact > div').forEach((element) => {
      element.classList.add('reveal-on-scroll');
      this.observer?.observe(element);
    });
  }

  protected readonly whatsappUrl = 'https://wa.me/+59161456044';
  protected readonly instagramUrl = 'https://www.instagram.com/scsmartbo/';
  protected readonly emailUrl = 'mailto:scsmartbo@gmail.com';

  protected readonly plans: Plan[] = [
    {
      name: 'Tu Negocio',
      eyebrow: 'Plan Estándar',
      price: 'Bs 500',
      total: 'Bs 700',
      description: 'Organiza productos, existencias y un catálogo digital para compartir por WhatsApp.',
      features: ['Inventario y stock', 'Entradas y salidas', 'Fotos, precios y categorías', 'Catálogo digital para WhatsApp'],
      accent: 'neutral'
    },
    {
      name: 'Tu Negocio Pro',
      eyebrow: 'Gestión integral',
      price: 'Bs 800',
      total: 'Bs 1.000',
      description: 'Suma ventas, caja y reportes para tener una visión más completa de tu operación.',
      features: ['Todo del plan Estándar', 'Registro de ventas diarias', 'Control de caja y efectivo', 'Historial y reportes de gestión'],
      accent: 'green'
    },
    {
      name: 'Tu Negocio Pro Plus',
      eyebrow: 'Sistema integral',
      price: 'Bs 1.000',
      total: 'Bs 1.200',
      description: 'Incluye todas las funciones anteriores y una vista portable en tu red local.',
      features: ['Todo del plan Pro', 'Vista portable', 'Acceso móvil en la misma red Wi-Fi local', 'Dispositivos compatibles'],
      accent: 'neutral'
    }
  ];

  protected readonly planShowcases: PlanShowcase[] = [
    {
      name: 'Tu Negocio',
      description: 'Inventario y catalogo digital para organizar tus productos.',
      slides: [
        { title: 'Panel principal', description: 'Una vista general de la operacion.', image: '/tunegocio/Dashboard.jpeg', alt: 'Panel principal del plan Tu Negocio' },
        { title: 'Inventario', description: 'Consulta productos, precios y existencias.', image: '/tunegocio/Inventario.jpeg', alt: 'Inventario del plan Tu Negocio' },
        { title: 'Movimientos', description: 'Revisa entradas y salidas de mercaderia.', image: '/tunegocio/Movimientos.jpeg', alt: 'Movimientos del plan Tu Negocio' },
        { title: 'Catalogo digital', description: 'Organiza productos para compartirlos.', image: '/tunegocio/Catalogo.jpeg', alt: 'Catalogo digital del plan Tu Negocio' },
        { title: 'Reportes', description: 'Consulta reportes de tu negocio.', image: '/tunegocio/Reportes.jpeg', alt: 'Reportes del plan Tu Negocio' },
        { title: 'Categorias', description: 'Mantén tus registros organizados.', image: '/tunegocio/Categorias.jpeg', alt: 'Categorias del plan Tu Negocio' },
        { title: 'Proveedores', description: 'Administra la informacion de proveedores.', image: '/tunegocio/Proveedores.jpeg', alt: 'Proveedores del plan Tu Negocio' }
      ]
    },
    {
      name: 'Tu Negocio Pro',
      description: 'Suma ventas, caja, movimientos y estadisticas de gestion.',
      slides: [
        { title: 'Registro de ventas', description: 'Registra las ventas de tu negocio.', image: '/tunegociopro/Venta.jpeg', alt: 'Registro de ventas del plan Tu Negocio Pro' },
        { title: 'Control de caja', description: 'Consulta el control de caja y efectivo.', image: '/tunegociopro/caja.jpeg', alt: 'Control de caja del plan Tu Negocio Pro' },
        { title: 'Estadisticas', description: 'Visualiza estadisticas de la operacion.', image: '/tunegociopro/Estadisticas.jpeg', alt: 'Estadisticas del plan Tu Negocio Pro' },
        { title: 'Reportes', description: 'Revisa reportes de gestion.', image: '/tunegociopro/reportes.jpeg', alt: 'Reportes del plan Tu Negocio Pro' },
        { title: 'Catalogos', description: 'Administra los catalogos de productos.', image: '/tunegociopro/catalogos.jpeg', alt: 'Catalogos del plan Tu Negocio Pro' },
        { title: 'Proveedores', description: 'Consulta registros de proveedores.', image: '/tunegociopro/proveedor.jpeg', alt: 'Proveedores del plan Tu Negocio Pro' }
      ]
    },
    {
      name: 'Tu Negocio Pro Plus',
      description: 'Incluye la gestion integral de Pro y una vista portable para dispositivos compatibles en la misma red Wi-Fi local.',
      slides: [
        { title: 'Panel principal', description: 'Una vista general de la operacion.', image: '/tunegocioproplus/dashboard.jpeg', alt: 'Panel principal del plan Tu Negocio Pro Plus' },
        { title: 'Ventas', description: 'Registra las ventas de tu negocio.', image: '/tunegocioproplus/venta.jpeg', alt: 'Ventas del plan Tu Negocio Pro Plus' },
        { title: 'Control de caja', description: 'Consulta el control de caja y efectivo.', image: '/tunegocioproplus/caja.jpeg', alt: 'Control de caja del plan Tu Negocio Pro Plus' },
        { title: 'Estadisticas', description: 'Visualiza estadisticas de gestion.', image: '/tunegocioproplus/estadisticas.jpeg', alt: 'Estadisticas del plan Tu Negocio Pro Plus' },
        { title: 'Reportes', description: 'Revisa reportes de tu operacion.', image: '/tunegocioproplus/resportes.jpeg', alt: 'Reportes del plan Tu Negocio Pro Plus' },
        { title: 'Catalogos', description: 'Administra tus catalogos de productos.', image: '/tunegocioproplus/catalogos.jpeg', alt: 'Catalogos del plan Tu Negocio Pro Plus' },
        { title: 'Categorias', description: 'Organiza tus productos por categorias.', image: '/tunegocioproplus/categorias.jpeg', alt: 'Categorias del plan Tu Negocio Pro Plus' },
        { title: 'Proveedores', description: 'Administra los datos de proveedores.', image: '/tunegocioproplus/proveedores.jpeg', alt: 'Proveedores del plan Tu Negocio Pro Plus' },
        { title: 'Configuracion', description: 'Consulta las opciones de configuracion del sistema.', image: '/tunegocioproplus/configuracion.jpeg', alt: 'Configuracion del plan Tu Negocio Pro Plus' },
        { title: 'Uso movil', description: 'Vista portable para dispositivos conectados a la misma red Wi-Fi local.', image: '/tunegocioproplus/UsoMovil.jpeg', alt: 'Vista de uso movil del plan Tu Negocio Pro Plus' }
      ]
    }
  ];
  ngOnInit(): void {
    this.planShowcases.forEach((_, planIndex) => {
      this.autoplayIds[planIndex] = setInterval(() => this.nextSlide(planIndex), 5000);
    });
  }

  ngOnDestroy(): void {
    this.autoplayIds.forEach((timer) => {
      if (timer) clearInterval(timer);
    });
    this.observer?.disconnect();
  }

  protected readonly comparisonFeatures = [
    { label: 'Inventario y stock', plans: [true, true, true] },
    { label: 'Catálogo digital para WhatsApp', plans: [true, true, true] },
    { label: 'Registro de ventas diarias', plans: [false, true, true] },
    { label: 'Control de caja y efectivo', plans: [false, true, true] },
    { label: 'Reportes de gestión', plans: [false, true, true] },
    { label: 'Acceso móvil en red Wi-Fi local', plans: [false, false, true] }
  ];

  protected readonly faqs: Faq[] = [
    {
      question: '¿Qué incluye la personalización?',
      answer: 'La personalización es opcional, se cobra aparte y suma Bs 200 al precio base de cualquiera de los tres planes.'
    },
    {
      question: '¿El acceso móvil funciona desde cualquier lugar?',
      answer: 'No. El Plan Pro Plus permite acceder desde un teléfono conectado a la misma red Wi-Fi local que el equipo donde funciona el sistema.'
    },
    {
      question: '¿Qué plan incluye control de caja?',
      answer: 'El control de caja y efectivo, junto con ventas diarias, ingresos, egresos e historial de movimientos, está incluido desde Tu Negocio Pro.'
    },
    {
      question: '¿Ofrecen sistemas adaptados a necesidades específicas?',
      answer: 'Sí. Se pueden desarrollar sistemas a medida con información centralizada, productos y existencias, reportes, paneles, roles, permisos e integraciones. La cotización y mensualidad de mantenimiento dependen del proyecto.'
    }
  ];

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }

  protected toggleFaq(index: number): void {
    this.openedFaq = this.openedFaq === index ? null : index;
  }

  protected selectPlan(index: number): void {
    this.selectedPlan = index;
  }

  protected previousSlide(planIndex: number): void {
    const slides = this.planShowcases[planIndex].slides;
    this.activePlanSlides[planIndex] = (this.activePlanSlides[planIndex] + slides.length - 1) % slides.length;
  }

  protected nextSlide(planIndex: number): void {
    const slides = this.planShowcases[planIndex].slides;
    this.activePlanSlides[planIndex] = (this.activePlanSlides[planIndex] + 1) % slides.length;
  }

  protected goToSlide(planIndex: number, slideIndex: number): void {
    this.pauseAutoplay(planIndex);
    this.activePlanSlides[planIndex] = slideIndex;
  }

  protected selectPreviousSlide(planIndex: number): void {
    this.pauseAutoplay(planIndex);
    this.previousSlide(planIndex);
  }

  protected selectNextSlide(planIndex: number): void {
    this.pauseAutoplay(planIndex);
    this.nextSlide(planIndex);
  }

  protected pauseCarousel(planIndex: number): void {
    this.pauseAutoplay(planIndex);
  }

  private pauseAutoplay(planIndex: number): void {
    const timer = this.autoplayIds[planIndex];
    if (timer) clearInterval(timer);
    this.autoplayIds[planIndex] = undefined;
  }
}
