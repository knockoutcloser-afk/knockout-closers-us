import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Play,
  Shield,
  MessageCircle,
  Check,
  ChevronDown,
  ShieldCheck,
  FileText,
  Bell,
  Target,
} from "lucide-react";

import { AtmosphericBackground, CTAButton } from "@/components/sales/primitives";
import {
  BLOCK_1,
  BLOCK_2,
  BLOCK_3,
  BLOCK_4,
  TestimonialGrid,
  TestimonialSingle,
} from "@/components/sales/testimonials";
import { RingRopes, RingCornerFrame, RingDivider } from "@/components/sales/boxing";

import { VturbHero } from "@/components/sales/VturbHero";
import logoCompleto from "@/assets/logo-kc-completo.png";
import abrahamPhoto from "@/assets/abraham-solis.png";
import portadaT1 from "@/assets/portada-t1.jpg";
import portadaT2 from "@/assets/portada-t2.jpg";
import portadaT3 from "@/assets/portada-t3.jpg";
import portadaT4 from "@/assets/portada-t4.jpg";
import portadaT5 from "@/assets/portada-t5.jpg";
import portadaCombo from "@/assets/portada-combo.jpg";

const HOTMART_URL = "https://pay.hotmart.com/W105842676N?checkoutMode=10";
const BUNDLE_URL = "https://pay.hotmart.com/U107310079O?checkoutMode=10";

/* Reemplaza por el ID de tu player VTurb */
const VTURB_PLAYER_ID = "";

const WHATSAPP_URL = "https://wa.me/525619555939";

const CTA_LABEL = "Asegurar mi lugar en Temporada 1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Knockout Closers™ US — Domina la Venta Consultiva B2B" },
      {
        name: "description",
        content:
          "Rompe el techo de cristal en Estados Unidos. El sistema en español para ingenieros y profesionales técnicos que quieren cerrar contratos de seis cifras.",
      },
      { property: "og:title", content: "Knockout Closers™ US — Venta Consultiva B2B" },
      {
        property: "og:description",
        content:
          "Domina la venta consultiva B2B y rompe el techo de cristal en Estados Unidos con respaldo de FGU.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <div className="relative min-h-screen text-white antialiased">
      <AtmosphericBackground />
      <CanvasTexture />
      <Header />
      <Hero />
      <Testimonios />
      <VideoTestimonial />
      <Arsenal />
      <Autoridad />
      <RutaTemporadas />
      <PricingCard />
      <GarantiaCTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

/* ---------- Textura lona de ring 5% ---------- */

function CanvasTexture() {
  return (
    <div
      aria-hidden
      className="ring-canvas pointer-events-none fixed inset-0 -z-10"
    />
  );
}

function KCMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logoCompleto}
      alt="Knockout Closers"
      aria-hidden
      width={size}
      height={size}
      className={className ?? "kc-glow"}
      style={{ width: size, height: size, objectFit: "contain" }}
    />
  );
}

/* ---------- Header ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur-xl">
      <div className="absolute inset-0 -z-10 bg-[#0A0A0B]/80" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <KCMark size={32} />
          <span className="titanium-glow text-[13px]">
            Knockout Closers
            <sup className="ml-0.5 text-[9px]">™</sup>
          </span>
        </a>
        <CTAButton href={HOTMART_URL} className="hidden md:inline-flex">
          {CTA_LABEL}
        </CTAButton>
      </div>
    </header>
  );
}

/* ---------- A) HERO ---------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0A0A0B] px-6 pt-12 pb-20 md:pb-28"
    >
      <RingRopes className="absolute inset-x-0 top-4 opacity-40" />

      <div className="relative flex flex-col items-center py-6">
        <img
          src={logoCompleto}
          alt="Knockout Closers"
          className="kc-glow-lg w-64 md:w-96 h-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
        />
        <div style={{ height: 24 }} />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="text-center lg:text-left">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#0A0A0D] shadow-lg"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.2), inset 0 1px 0 #FFFFFF, 0 4px 15px rgba(0,0,0,0.6)"
            }}
          >
            Mercado Estados Unidos · Edición en Español
          </div>
          <h1 className="mx-auto max-w-[24ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl lg:mx-0">
            Domina la Venta Consultiva B2B y <span className="gradient-text">Rompe el Techo de Cristal</span> en Estados Unidos
          </h1>
          <p className="mx-auto mt-7 max-w-[46ch] text-balance text-lg font-medium leading-relaxed text-zinc-200 md:text-xl lg:mx-0">
            La única mentoría en español diseñada para ingenieros, preventas y profesionales técnicos que quieren dejar de escribir código detrás de bambalinas y empezar a cerrar contratos de seis cifras.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 lg:items-start">
            <CTAButton href={HOTMART_URL}>{CTA_LABEL}</CTAButton>
            <p className="text-[13px] text-white/45">
              Acceso inmediato · Pago seguro vía Hotmart
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[340px]">
          <RingCornerFrame>
            <VturbHero />
          </RingCornerFrame>
        </div>
      </div>
    </section>
  );
}

/* ---------- B) 9 TESTIMONIOS ---------- */

function Testimonios() {
  return (
    <section
      id="historias"
      className="relative border-b border-white/5 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#0A0A0D] shadow-lg mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF"
            }}
          >
            Historias Documentadas
          </div>
          <h2 className="mt-2 text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
            10 profesionales. Evidencia verificada en LinkedIn.
          </h2>
        </div>

        <div className="mt-16">
          <TestimonialGrid items={BLOCK_1} />
        </div>
        <div className="mt-8">
          <TestimonialGrid items={BLOCK_2} />
        </div>
        <div className="mt-8">
          <TestimonialGrid items={BLOCK_3} />
        </div>
        <div className="mt-8">
          <TestimonialSingle items={BLOCK_4} />
        </div>
      </div>
    </section>
  );
}

/* ---------- C) VIDEO TESTIMONIAL ---------- */

function VturbDocumental() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const existing = document.getElementById("vturb-doc-script");
    if (existing) return;
    const s = document.createElement("script");
    s.id = "vturb-doc-script";
    s.src =
      "https://scripts.converteai.net/0f8477cd-e3e0-47cf-9163-945270490e3f/players/6a8c8930dc480ab6c2755ee4/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div ref={ref} className="w-full">
      <vturb-smartplayer
        id="vid-6a8c8930dc480ab6c2755ee4"
        style={{
          display: "block",
          margin: "0 auto",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <div
          className="vturb-player-placeholder"
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "177.77777777777777%",
            zIndex: 0,
            backgroundColor: "black",
          }}
        />
      </vturb-smartplayer>
    </div>
  );
}
function VideoTestimonial() {
  return (
    <section className="relative border-b border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#0A0A0D] shadow-lg mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF"
            }}
          >
            Video Documental
          </div>
          <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight text-white md:text-4xl">
            Escúchalo directamente de quienes ya lo vivieron.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-[400px]">
          <RingCornerFrame>
            <div className="w-full overflow-hidden rounded-2xl bg-black">
              <VturbDocumental />
            </div>
          </RingCornerFrame>
        </div>
      </div>
    </section>
  );
}

/* ---------- D) EL ARSENAL DEL CLOSER ---------- */

const ARSENAL = [
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
        <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
        <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
        <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
      </svg>
    ),
    title: "El Guante",
    sub: "Metodología de Impacto Inmediato",
    desc: "El sistema de negociación consultiva en video de alta definición. Toma el control desde el minuto cero, neutraliza la evasión del prospecto y conduce a decisiones firmes.",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="m3 9 12 12" />
        <path d="m9 3 12 12" />
        <path d="m3 15 6 6" />
        <path d="m15 3 6 6" />
      </svg>
    ),
    title: "La Venda",
    sub: "Blindaje Táctico y Guiones de Combate",
    desc: "Arsenal de plantillas descargables, frameworks de preguntas de poder y scripts de respuesta rápida. La estructura que te protege y desarma objeciones complejas de raíz.",
  },
  {
    icon: Bell,
    title: "La Campana",
    sub: "Laboratorio de Dominio y Presión Real",
    desc: "Dinámicas de roleplay y simulación de escenarios exigentes. Pule tus reflejos comerciales antes de sentarte frente a tomadores de decisión reales.",
  },
  {
    icon: Target,
    title: "El Ring",
    sub: "Ejecución y Conversión en Vivo",
    desc: "Puesta en práctica en llamadas y reuniones reales de negocio. Implementas la técnica, recibes feedback estratégico y cierras en tiempo real.",
  },
];

function Arsenal() {
  return (
    <section className="relative border-b border-white/10 bg-[#060608] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#0A0A0D] shadow-lg"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.2), inset 0 1px 0 #FFFFFF, 0 4px 15px rgba(0,0,0,0.6)"
            }}
          >
            Temporada 1
          </div>
          <h2 
            className="mt-6 text-3xl font-black uppercase tracking-tight md:text-5xl"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 20%, #D1D5DB 65%, #9CA3AF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.9))"
            }}
          >
            El Arsenal del Closer
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {ARSENAL.map(({ icon: Icon, title, sub, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(168,85,247,0.18)]"
              style={{
                background: "linear-gradient(180deg, rgba(26, 28, 35, 0.85) 0%, rgba(10, 11, 15, 0.98) 100%)",
                border: "1px solid rgba(199, 204, 214, 0.25)",
                boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 20px 45px rgba(0,0,0,0.8)"
              }}
            >
              <div 
                className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), rgba(199,204,214,0.8), transparent)"
                }}
              />
              <div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
                  border: "1px solid #FFFFFF",
                  boxShadow: "0 0 20px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF, 0 4px 12px rgba(0,0,0,0.6)"
                }}
              >
                <Icon className="h-6 w-6 stroke-[2] text-[#0A0A0D]" />
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider text-white">
                {title}
              </h3>
              <div className="mt-2.5">
                <span 
                  className="inline-block rounded-md px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#0A0A0D]"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #D4D8E0 45%, #A2A8B5 100%)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 #FFFFFF"
                  }}
                >
                  {sub}
                </span>
              </div>
              <p className="mt-4 text-sm font-normal leading-relaxed text-[#C7CCD6]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- E) AUTORIDAD ---------- */

const BULLETS = [
  "Mercadólogo con más de 25 años en ventas. Fundador de la primera escuela de Closers High Ticket en México, hoy Knockout Closers™.",
  "+20 años entrenando equipos de tecnología, seguros, inmobiliaria y lujo. Experto en convertir ingenieros y especialistas tech en Closers consultivos.",
  "Coach en Neuroventas, Maxwell Leadership y EOI Madrid, España.",
];

function Autoridad() {
  return (
    <section className="relative border-b border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-[auto_1fr]">
        <div className="mx-auto">
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              height: 200,
              width: 200,
              border: "2px solid #C7CCD6",
              background:
                "radial-gradient(80% 80% at 50% 20%, #101C42 0%, #05070D 100%)",
              boxShadow:
                "0 0 0 8px rgba(199,204,214,0.06), 0 30px 60px -30px rgba(0,0,0,0.8)",
            }}
          >
            <img
              src={abrahamPhoto}
              alt="Abraham Solis, fundador de Knockout Closers"
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.32em] text-white/40">
            Quién te entrena
          </div>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-4xl">
            Abraham Solis
            <span className="block text-[15px] font-medium tracking-[0.06em] text-[#C7CCD6] md:text-lg">
              Fundador · Knockout Closers™
            </span>
          </h2>
          <ul className="mt-8 space-y-4">
            {BULLETS.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[15px] leading-[1.7] text-white/70"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7CCD6]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- F) RUTA 5 TEMPORADAS + CERTIFICACIÓN FGU ---------- */

type Temporada = {
  id: string;
  img: string;
  title: string;
  price: string;
  rounds: string[];
  cta: string;
  url: string;
};

const TEMPORADAS: Temporada[] = [
  {
    id: "t1",
    img: portadaT1,
    title: "Temporada 1: Iniciación",
    price: "$147 USD",
    rounds: [
      "Round 1: Mentalidad y Propósito del Closer",
      "Round 2: El Arte del Contragolpe Comercial",
      "Round 3: La Muerte del Monólogo / Preguntas Poderosas",
      "Round 4: El Dominio del Rechazo",
      "Round 5: El Metajuego del Closer",
    ],
    cta: "Inscribirme a Temporada 1 ($147 USD)",
    url: "https://pay.hotmart.com/W105842676N?checkoutMode=10",
  },
  {
    id: "t2",
    img: portadaT2,
    title: "Temporada 2: Arsenal de Prospección",
    price: "$297 USD",
    rounds: [
      "Round 5: Follow Up y Resurrección de Prospectos",
      "Round 6: Los 8 Pasos de la Llamada de Prospección",
      "Round 7: Califica Duro para Cerrar Fácil",
    ],
    cta: "Inscribirme a Temporada 2 ($297 USD)",
    url: "https://pay.hotmart.com/P105843633S?checkoutMode=10",
  },
  {
    id: "t3",
    img: portadaT3,
    title: "Temporada 3: Psicología del Cierre",
    price: "$297 USD",
    rounds: [
      "Round 8: Psicología de Ventas y Comportamiento Humano / Filosofía Knockout Closers",
      "Round 9: Convertir Beneficios en Dolor / El Escudo del Comprador",
      "Round 10: DISC y Psicología del Comportamiento",
    ],
    cta: "Inscribirme a Temporada 3 ($297 USD)",
    url: "https://pay.hotmart.com/S105843792U?checkoutMode=10",
  },
  {
    id: "t4",
    img: portadaT4,
    title: "Temporada 4: Estatura de Élite",
    price: "$297 USD",
    rounds: [
      "Round 11: Manifiesto Knockout Closers",
      "Round 12: Video Backup y Prospección Moderna",
      "Round 13: El Triángulo del Knockout Closer",
    ],
    cta: "Inscribirme a Temporada 4 ($297 USD)",
    url: "https://pay.hotmart.com/D105844077F?checkoutMode=10",
  },
  {
    id: "t5",
    img: portadaT5,
    title: "Temporada 5: Metodología DISC y las Aves",
    price: "$297 USD",
    rounds: [
      "¿Qué es DISC y cómo aplicarlo en Ventas B2B?",
      "El Mapa de Ruta de Preguntas Poderosas para Cierre de Ventas",
      "Hacks Poderosos para Identificar el Comportamiento de Compra",
      "The Connection Pitch de Ventas Persuasivo y Consultivo",
      "23 Disparadores Mentales que Disparan un 'SÍ'",
      "El Poder del Neuromarketing para Cerrar sin Presionar",
    ],
    cta: "Inscribirme a Temporada 5 ($297 USD)",
    url: "https://pay.hotmart.com/G107310969B?off=tue2s4uz&checkoutMode=10",
  },
];

function TemporadaCard({ t }: { t: Temporada }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex flex-col overflow-hidden rounded-3xl"
      style={{
        background: "#111113",
        border: "1px solid rgba(199,204,214,0.35)",
      }}
    >
      <img
        src={t.img}
        alt={t.title}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[17px] font-semibold leading-snug text-white">
          {t.title}
        </h3>
        <div
          className="mt-2 text-[15px] font-semibold"
          style={{ color: "#C7CCD6" }}
        >
          {t.price}
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-[#C7CCD6]/30 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-[#E8EAED] transition hover:bg-white/[0.07]"
        >
          {open ? "Ocultar temario" : "Ver temario"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className="grid transition-all duration-500 ease-out"
          style={{
            gridTemplateRows: open ? "1fr" : "0fr",
            opacity: open ? 1 : 0,
          }}
        >
          <div className="overflow-hidden">
            <ul className="mt-5 space-y-3">
              {t.rounds.map((r) => (
                <li
                  key={r}
                  className="flex items-start gap-2.5 text-[13.5px] leading-[1.6] text-white/70"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C7CCD6]" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <a
              href={t.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-titanium mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-center text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#0A0A0B]"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const BUNDLE_INCLUYE = [
  "Temporada 1: Iniciación (Rounds 1 al 4)",
  "Temporada 2: Arsenal de Prospección (Rounds 5 al 7)",
  "Temporada 3: Psicología del Cierre (Rounds 8 al 10)",
  "Temporada 4: Estatura de Élite (Rounds 11 al 13)",
  "Temporada 5: Metodología DISC y las Aves (Masterclass Completa)",
  "Bono: Sesiones de Mentoría 1-1 + Acompañamiento a Certificación Internacional FGU",
];

function BundleBanner() {
  return (
    <div className="glass-card shadow-card-premium relative overflow-hidden rounded-3xl">
      <div className="grid gap-0 md:grid-cols-[minmax(0,320px)_1fr]">
        <img
          src={portadaCombo}
          alt="Pase All-Access — Universo Knockout Closers"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="p-8 md:p-10">
          {/* Botón plateado con aura para el Pase de Fundador */}
          <div 
            className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#0A0A0D] shadow-lg mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF"
            }}
          >
            Tu Mejor Inversión · Pase de Fundador
          </div>
          <h3 className="mt-2 text-balance text-2xl font-semibold leading-tight text-white md:text-3xl">
            ¿Quieres el ecosistema completo con más del{" "}
            <span className="gradient-text">65% de descuento</span>?
          </h3>
          <p className="mt-4 text-[15px] leading-[1.7] text-white/70">
            Obtén acceso total a las 5 Temporadas + Mentorías 1-1 + Opción a Certificación Oficial con Florida Global University (FGU) y nuestro acompañamiento guiado.
          </p>
          <ul className="mt-6 space-y-2.5">
            {BUNDLE_INCLUYE.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-white/70"
              >
                <Check
                  size={16}
                  strokeWidth={2}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#C7CCD6" }}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-white/50">
            Valor individual: <span className="line-through">$1,335 USD</span> →{" "}
            <span className="font-semibold text-[#E8EAED]">
              Precio All-Access: $597 USD
            </span>
          </p>
          <div className="mt-7">
            <CTAButton href={BUNDLE_URL}>
              Obtener el Combo All-Access Completo ($597 USD)
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return null;
}

const SELLOS = ["Florida Global University (USA)", "Continuing Education", "High-Ticket B2B Sales"];

function RutaTemporadas() {
  return (
    <section className="relative border-b border-white/5 px-6 py-24 md:py-32">
      {/* Estilos CSS en línea para la animación de pulso y aura morada */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 15px rgba(168, 85, 247, 0.4), 0 0 30px rgba(168, 85, 247, 0.2);
            transform: scale(1);
          }
          50% {
            text-shadow: 0 0 25px rgba(168, 85, 247, 0.8), 0 0 50px rgba(168, 85, 247, 0.4);
            transform: scale(1.01);
          }
        }
        .pulsing-purple-aura {
          animation: pulseGlow 3s infinite ease-in-out;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        
        {/* BLOQUE 1: TEMPORADA 1 (CON BOTÓN PLATEADO Y TÍTULO CON AURA PULSATIVA MORADA, SIN GUION) */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#0A0A0D] shadow-lg mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.3), inset 0 1px 0 #FFFFFF"
            }}
          >
            Temporada 1 · Empieza tu cambio
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl pulsing-purple-aura inline-block">
            Rompe el Techo de Cristal Entra a la Temporada 1
          </h2>
        </div>

        <div className="max-w-md mx-auto mb-24">
          {TEMPORADAS.filter(t => t.id === "t1").map((t) => (
            <TemporadaCard key={t.id} t={t} />
          ))}
        </div>

        {/* BLOQUE 2: COMBO ALL-ACCESS (CON BOTÓN PLATEADO DE AUTORIDAD Y FRASE DE ESTATUS) */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-[0.28em] text-[#0A0A0D] shadow-lg mb-4"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: "0 0 25px rgba(255,255,255,0.3), inset 0 1px 0 #FFFFFF"
            }}
          >
            Combo All-Access · Ecosistema Definitivo
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
            O domina el juego completo con el Ecosistema All-Access
          </h2>
        </div>

        <div className="mb-24">
          <BundleBanner />
        </div>

        {/* 3. RESBALDO ACADÉMICO EXCLUSIVO FGU */}
        <div 
          className="relative mt-14 overflow-hidden rounded-3xl p-8 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
          style={{
            background: "linear-gradient(180deg, rgba(22, 24, 30, 0.85) 0%, rgba(8, 9, 12, 0.98) 100%)",
            border: "1px solid rgba(199, 204, 214, 0.3)",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 20px 50px rgba(0,0,0,0.8)"
          }}
        >
          <div 
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), rgba(199,204,214,0.9), transparent)"
            }}
          />

          <div className="relative text-center">
            <div 
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-extrabold uppercase tracking-[0.28em] text-[#0A0A0D] shadow-lg"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
                border: "1px solid #FFFFFF",
                boxShadow: "0 0 25px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF"
              }}
            >
              Respaldo Curricular de Élite
            </div>

            <h3 
              className="mx-auto mt-6 max-w-[28ch] text-balance text-2xl font-black uppercase tracking-tight md:text-4xl"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 20%, #D1D5DB 65%, #9CA3AF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.9))"
              }}
            >
              Acreditación Internacional con Florida Global University (FGU)
            </h3>

            <p className="mx-auto mt-4 max-w-[62ch] text-[15px] font-medium leading-[1.75] text-[#C7CCD6]">
              Al completar las 5 temporadas del programa, obtén el respaldo académico internacional emitido por Florida Global University (USA), diseñado para destacar en corporativos globales en Estados Unidos. Nuestro equipo te guía y acompaña de la mano en todo el proceso de solicitud.
            </p>
          </div>

          <div className="relative mt-10 max-w-xl mx-auto overflow-hidden rounded-2xl p-8"
            style={{
              background: "linear-gradient(180deg, rgba(32, 26, 44, 0.8) 0%, rgba(12, 13, 17, 0.98) 100%)",
              border: "1px solid rgba(168, 85, 247, 0.35)",
              boxShadow: "inset 0 1px 0 rgba(216, 180, 254, 0.2), 0 10px 30px rgba(109, 40, 217, 0.18)"
            }}
          >
            <div 
              className="inline-block rounded-md px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-[#0A0A0D]"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #E3DDF4 45%, #B6A7D9 100%)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 2px 10px rgba(168,85,247,0.3), inset 0 1px 0 #FFFFFF"
              }}
            >
              Internacional · Florida, USA
            </div>
            <h4 className="mt-4 text-xl font-bold tracking-tight text-white">
              Certificación Oficial FGU
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-[#C7CCD6]/80">
              Institución registrada legalmente en el Estado de Florida, EE. UU. (Licencia #3180 de la CIE del Departamento de Educación de Florida). Validez internacional para tu historial profesional y LinkedIn.
            </p>
          </div>

          {/* Botones inferiores: Negro metal con aura morada (UV Light) */}
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8">
            {SELLOS.map((s) => (
              <span
                key={s}
                className="rounded-xl px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.24em] transition-all"
                style={{
                  background: "linear-gradient(180deg, rgba(20, 18, 30, 0.95) 0%, rgba(10, 8, 15, 0.98) 100%)",
                  border: "1px solid rgba(168, 85, 247, 0.4)",
                  color: "#FFFFFF",
                  boxShadow: "0 0 20px rgba(168, 85, 247, 0.25), inset 0 1px 0 rgba(216, 180, 254, 0.15)"
                }}
              >
                {s}
              </span>
            ))}
          </div>

          <p className="relative mt-6 text-center text-xs italic leading-relaxed text-[#C7CCD6]/60">
            *Nota importante: El certificado oficial de Florida Global University (USA) está sujeto a la conclusión exitosa de las 5 temporadas del programa, la aprobación de las evaluaciones y el pago de los derechos de trámite correspondientes establecidos directamente por la universidad, los cuales no están incluidos en el costo del entrenamiento.
          </p>
        </div>

        {/* 4. ABAJO: EL RESTO DE LAS TEMPORADAS INDIVIDUALES (T2 a T5) */}
        <div className="mt-20">
          <div className="text-center mb-10">
            {/* Subtítulo indicador 5 temporadas / 5 rounds */}
            <div 
              className="inline-flex items-center gap-2 rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.25em] text-[#0A0A0D] shadow-lg mb-3"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
                border: "1px solid #FFFFFF",
                boxShadow: "0 0 20px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF"
              }}
            >
              5 Temporadas · 5 Rounds
            </div>
            <h3 className="text-xl font-semibold text-white">¿Prefieres avanzar paso a paso? Explora el resto de las temporadas individuales:</h3>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPORADAS.filter(t => t.id !== "t1").map((t) => (
              <TemporadaCard key={t.id} t={t} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- G) GARANTÍA + CTA FINAL ---------- */

function GarantiaCTA() {
  return (
    <section id="oferta" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 20%, rgba(109,62,255,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl">
        <div 
          className="relative overflow-hidden rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300"
          style={{
            background: "linear-gradient(180deg, rgba(24, 26, 32, 0.9) 0%, rgba(9, 10, 14, 0.98) 100%)",
            border: "1px solid rgba(199, 204, 214, 0.3)",
            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 20px 50px rgba(0,0,0,0.85)"
          }}
        >
          <div 
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), rgba(199,204,214,0.9), transparent)"
            }}
          />

          <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left">
            <div 
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-lg"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #D8DCE3 35%, #9EA5B4 70%, #E2E6EC 100%)",
                border: "1px solid #FFFFFF",
                boxShadow: "0 0 20px rgba(255,255,255,0.25), inset 0 1px 0 #FFFFFF, 0 4px 15px rgba(0,0,0,0.6)"
              }}
            >
              <svg className="h-8 w-8 stroke-[2.2] text-[#0A0A0D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
                <span 
                  className="inline-block rounded-md px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#0A0A0D]"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #D4D8E0 45%, #A2A8B5 100%)",
                    border: "1px solid rgba(255,255,255,0.9)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.5), inset 0 1px 0 #FFFFFF"
                  }}
                >
                  Garantía de Combate · 7 Días
                </span>
                <span className="rounded-md border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C7CCD6]/80">
                  Respaldo Hotmart®
                </span>
              </div>

              <h3 
                className="mt-3 text-2xl font-black uppercase tracking-tight text-white md:text-3xl"
                style={{
                  background: "linear-gradient(180deg, #FFFFFF 20%, #D1D5DB 65%, #9CA3AF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Garantía Knockout™
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#C7CCD6]">
                Entra a <strong className="font-semibold text-white">Temporada 1</strong>, aplica la metodología y si no es para ti, tienes 7 días de garantía gestionada directamente por Hotmart. Reembolso total, inmediato y sin preguntas incómodas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="mx-auto max-w-[20ch] text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl">
          El mercado ya comenzó un{" "}
          <span className="gradient-text">nuevo Round</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-[40ch] text-[17px] leading-[1.7] text-white/70">
          Bienvenido al Ring. Bienvenido al universo de Knockout Closers™.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <CTAButton href={HOTMART_URL}>{CTA_LABEL}</CTAButton>
          <p className="text-[13px] text-white/45">
            Acceso inmediato · Pago seguro vía Hotmart
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs text-white/40 underline hover:text-white/70"
          >
            ¿Tienes dudas previas? Habla directo con un coach
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- WhatsApp flotante ---------- */

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="¿Duda? Escríbeme por WhatsApp"
      title="¿Duda? Escríbeme"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
      style={{
        background: "#25D366",
        boxShadow: "0 12px 40px -10px rgba(37,211,102,0.6)",
      }}
    >
      <MessageCircle size={26} className="text-white" strokeWidth={2} />
      <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg bg-[#111113] px-3 py-2 text-[12px] text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
        ¿Duda? Escríbeme
      </span>
    </a>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <KCMark size={32} />
          <span className="titanium-glow text-[12px]">
            Knockout Closers<sup className="ml-0.5 text-[9px]">™</sup>
          </span>
        </div>
        <p className="text-[12px] text-white/40">
          © {new Date().getFullYear()} Knockout Closers™ · Abraham Solis · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
