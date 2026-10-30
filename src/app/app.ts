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
  protected activeSlide = 0;
  private autoplayId?: ReturnType<typeof setInterval>;
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

  protected readonly showcaseSlides: ShowcaseSlide[] = [
    {
      title: 'Inventario a primera vista',
      description: 'Una simulación visual de cómo consultar productos, stock, precios y categorías.',
      image: '/Inventario.jpeg',
      alt: 'Pantalla real del módulo de inventario de SC smartbo'
    },
    {
      title: 'Movimientos del día',
      description: 'Una simulación visual para revisar ventas, entradas, salidas e ingresos.',
      image: '/Movimientos.jpeg',
      alt: 'Pantalla real del módulo de movimientos de SC smartbo'
    },
    {
      title: 'Catálogo listo para compartir',
      description: 'Una simulación visual de la vista de productos que puedes compartir por WhatsApp.',
      image: '/Catalogo.jpeg',
      alt: 'Pantalla real del catálogo digital de SC smartbo'
    },
    {
      title: 'Reportes y estadísticas',
      description: 'Observa la información de tu operación desde reportes claros.',
      image: '/Reportes.jpeg',
      alt: 'Pantalla real de reportes de SC smartbo'
    },
    {
      title: 'Organiza tus categorías',
      description: 'Mantén tus productos ordenados para encontrarlos fácilmente.',
      image: '/Categorias.jpeg',
      alt: 'Pantalla real de categorías de SC smartbo'
    }
  ];

  ngOnInit(): void {
    this.autoplayId = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    if (this.autoplayId) clearInterval(this.autoplayId);
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

  protected previousSlide(): void {
    this.activeSlide = (this.activeSlide + this.showcaseSlides.length - 1) % this.showcaseSlides.length;
  }

  protected nextSlide(): void {
    this.activeSlide = (this.activeSlide + 1) % this.showcaseSlides.length;
  }

  protected goToSlide(index: number): void {
    this.pauseAutoplay();
    this.activeSlide = index;
  }

  protected selectPreviousSlide(): void {
    this.pauseAutoplay();
    this.previousSlide();
  }

  protected selectNextSlide(): void {
    this.pauseAutoplay();
    this.nextSlide();
  }

  protected pauseCarousel(): void {
    this.pauseAutoplay();
  }

  private pauseAutoplay(): void {
    if (this.autoplayId) clearInterval(this.autoplayId);
    this.autoplayId = undefined;
  }
}
