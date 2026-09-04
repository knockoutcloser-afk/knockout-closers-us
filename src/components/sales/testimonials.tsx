import { useState } from "react";
import { ChevronDown, Linkedin } from "lucide-react";

import _evidenciaVeronica from "@/assets/evidencia-veronica_diaz.jpeg";
import _evidenciaMiguel from "@/assets/evidencia-miguel_vega.jpeg";
import _evidenciaBeatriz from "@/assets/evidencia-beatriz_morales.jpeg";
import _evidenciaBernardo from "@/assets/evidencia-bernardo_brisuela.jpeg";
import _evidenciaCarlos from "@/assets/evidencia-carlos_canas.jpeg";
import _evidenciaMarina from "@/assets/evidencia-Marina_colin.jpeg";
import _evidenciaClaudia from "@/assets/evidencia-claudia_espinosa.jpeg";
import _evidenciaKarina from "@/assets/evidencia-karina_payan.jpeg";
import _evidenciaRoberto from "@/assets/evidencia-roberto_valdez.jpeg";
import _evidenciaAldo from "@/assets/evidencia-aldo_bautista.jpeg";

import _avatarVeronica from "@/assets/avatar-veronica_diaz.jpg";
import _avatarMiguel from "@/assets/avatar-miguel_vega.jpg";
import _avatarBeatriz from "@/assets/avatar-beatriz_morales.jpg";
import _avatarBernardo from "@/assets/avatar-bernardo_brisuela.jpg";
import _avatarCarlos from "@/assets/avatar-carlos_canas.jpg";
import _avatarMarina from "@/assets/avatar-Marina_colin.jpg";
import _avatarClaudia from "@/assets/avatar-claudia_espinosa.jpg";
import _avatarKarina from "@/assets/avatar-karina_payan.jpg";
import _avatarRoberto from "@/assets/avatar-roberto_valdez.jpg";
import _avatarAldo from "@/assets/avatar-aldo_bautista.jpg";

const evidenciaVeronica = { url: _evidenciaVeronica };
const evidenciaMiguel = { url: _evidenciaMiguel };
const evidenciaBeatriz = { url: _evidenciaBeatriz };
const evidenciaBernardo = { url: _evidenciaBernardo };
const evidenciaCarlos = { url: _evidenciaCarlos };
const evidenciaMarina = { url: _evidenciaMarina };
const evidenciaClaudia = { url: _evidenciaClaudia };
const evidenciaKarina = { url: _evidenciaKarina };
const evidenciaRoberto = { url: _evidenciaRoberto };
const evidenciaAldo = { url: _evidenciaAldo };

const avatarVeronica = { url: _avatarVeronica };
const avatarMiguel = { url: _avatarMiguel };
const avatarBeatriz = { url: _avatarBeatriz };
const avatarBernardo = { url: _avatarBernardo };
const avatarCarlos = { url: _avatarCarlos };
const avatarMarina = { url: _avatarMarina };
const avatarClaudia = { url: _avatarClaudia };
const avatarKarina = { url: _avatarKarina };
const avatarRoberto = { url: _avatarRoberto };
const avatarAldo = { url: _avatarAldo };

export type Testimonial = {
  name: string;
  role: string;
  excerpt: string;
  evidence?: string;
  avatar?: string;
};

// FILA 1 (3 testimonios)
export const BLOCK_1: Testimonial[] = [
  {
    name: "Miguel Ángel Vega Murillo",
    role: "Fundador & Director General · VM Consultores",
    excerpt:
      "He tenido la oportunidad de trabajar hombro a hombro con Abraham, es un gran líder, consultor, con estrategias bien definidas en áreas comerciales y generación de negocio, un gran mentor y amigo, gracias por siempre compartir tus conocimientos amigo.",
    evidence: evidenciaMiguel.url,
    avatar: avatarMiguel.url,
  },
  {
    name: "Verónica Díaz",
    role: "Ingeniera en Sistemas UNAM · Maestría en Alta Dirección",
    excerpt:
      "Abraham es un extraordinario mentor y capacitador, la habilidad para que los alumnos llevemos del conocimiento a la práctica es único. Adicional una persona profesional y con una experiencia que se nota en cada curso.",
    evidence: evidenciaVeronica.url,
    avatar: avatarVeronica.url,
  },
  {
    name: "Beatriz Morales Gil de la Torre",
    role: "Consultora en Desarrollo Inmobiliario e Inversión",
    excerpt:
      "Abraham tiene una manera actualizada no solamente de la industria de los seguros sino de la persona. Esta combinación junto con una metodología resultado de sus años de experiencia en ventas es un requisito para cualquier agente que quiera construir un negocio en serio.",
    evidence: evidenciaBeatriz.url,
    avatar: avatarBeatriz.url,
  },
];

// FILA 2 (3 testimonios)
export const BLOCK_2: Testimonial[] = [
  {
    name: "Bernardo Brizuela",
    role: "Especialista en Retiro, Ley 73 y Planeación Financiera",
    excerpt:
      "Desde que comencé mis sesiones de coaching de venta con Abraham, he podido aprender muchas nuevas técnicas de ventas enfocada en nuestra profesión... no había tenido la suerte de tener un mentor como Abraham, que nos ayude a enfocar y ordenar toda la estructura comercial.",
    evidence: evidenciaBernardo.url,
    avatar: avatarBernardo.url,
  },
  {
    name: "Carlos Cañas",
    role: "Asesor Financiero y Patrimonial",
    excerpt:
      "En mi carrera profesional de más de 20 años en el área comercial he recibido muchísimos cursos y coaching. No había tenido la suerte de tener un mentor como Abraham, que nos ayude a enfocar y ordenar toda la estructura comercial con técnicas tan efectivas y aplicables de inmediato.",
    evidence: evidenciaCarlos.url,
    avatar: avatarCarlos.url,
  },
  {
    name: "Marina Colín Olivera",
    role: "Agente de Seguros · Finanzas Personales y Retiro",
    excerpt:
      "Durante mi formación como Agente de Seguros he logrado desarrollar una gran habilidad para brindar asesoría de calidad a los clientes. Mi formación ha sido gracias a las grandes enseñanzas y mentoría comercial de Abraham, un profesional excepcional en el cierre de ventas consultivas.",
    evidence: evidenciaMarina.url,
    avatar: avatarMarina.url,
  },
];

// FILA 3 (3 testimonios)
export const BLOCK_3: Testimonial[] = [
  {
    name: "Claudia Espinosa",
    role: "Especialista en Seguros y Protección Patrimonial",
    excerpt:
      "El coaching comercial con Abraham transformó por completo mi proceso de conversación con clientes de alto perfil. Te enseña a tomar el control con elegancia, hacer las preguntas correctas y concretar acuerdos sin desgaste.",
    evidence: evidenciaClaudia.url,
    avatar: avatarClaudia.url,
  },
  {
    name: "Karina Payán",
    role: "Especialista en Seguros y Finanzas Personales",
    excerpt:
      "La claridad estratégica que transmite Abraham es impresionante. Su método te da la seguridad para sentarte con cualquier prospecto corporativo sabiendo exactamente cómo guiar la sesión hacia una decisión firme.",
    evidence: evidenciaKarina.url,
    avatar: avatarKarina.url,
  },
  {
    name: "Roberto Valdez",
    role: "Consultor de Negocios y Ventas Consultivas",
    excerpt:
      "Las herramientas tácticas y el laboratorio de contragolpe comercial que entrega Abraham son oro puro. Cambió radicalmente mi tasa de conversión en llamadas y reuniones decisivas.",
    evidence: evidenciaRoberto.url,
    avatar: avatarRoberto.url,
  },
];

// FILA 4 (1 testimonio final: Aldo Bautista)
export const BLOCK_4: Testimonial[] = [
  {
    name: "Aldo Bautista",
    role: "Agente Profesional de Seguros | Estrategias Patrimoniales",
    excerpt:
      "Llevo varias semanas tomando la mentoría de AGENTE CRACK 100K y desde el primer día empecé a aplicar en mis procesos puntos clave que Abraham dice y experimenté cambios inmediatos! La mentoría funciona de una manera increíble mientras sigas la metodología. Cada peso invertido ha valido la pena!",
    evidence: evidenciaAldo.url,
    avatar: avatarAldo.url,
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  const [showEvidence, setShowEvidence] = useState(false);

  return (
    <div
      className="relative flex flex-col justify-between rounded-[26px] p-7 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
      style={{
        background: "#0c0d12",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9)",
      }}
    >
      <div>
        <div className="flex items-center gap-3.5">
          {item.avatar ? (
            <img
              src={item.avatar}
              alt={item.name}
              className="h-12 w-12 shrink-0 rounded-full object-cover border border-white/20"
            />
          ) : (
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[14px] font-bold text-white">
              {item.name.charAt(0)}
            </div>
          )}
          <div className="min-w-0">
            <h4 className="truncate text-[15px] font-bold text-white tracking-wide">
              {item.name}
            </h4>
            <p className="truncate text-[12px] text-white/50">{item.role}</p>
          </div>
        </div>

        <p className="mt-5 text-[14px] leading-relaxed text-white/85 font-normal">
          “{item.excerpt}”
        </p>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3">
        {/* Badge LinkedIn Verificado */}
        <div
          className="inline-flex items-center gap-1.5 rounded-[6px] px-3.5 py-1.5 text-[10px] font-bold tracking-[0.14em] text-[#0a0b0d] uppercase"
          style={{
            background: "linear-gradient(180deg, #d8dee8 0%, #b0b8c6 100%)",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Linkedin size={11} className="text-[#0a0b0d] fill-current" />
          <span>LINKEDIN VERIFICADO</span>
        </div>

        {/* Botón Ver Evidencia - Titanium Cepillado */}
        {item.evidence && (
          <div className="relative mt-1 inline-block">
            <button
              type="button"
              onClick={() => setShowEvidence((v) => !v)}
              className="group relative inline-flex items-center gap-2 rounded-full px-7 py-2.5 text-[10.5px] font-extrabold tracking-[0.16em] text-[#0a0b0d] uppercase transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              style={{
                background: "linear-gradient(90deg, #b8c0cc 0%, #e2e6ec 25%, #8f98a8 50%, #e2e6ec 75%, #b8c0cc 100%)",
                border: "1px solid rgba(255, 255, 255, 0.9)",
                boxShadow:
                  "0 0 35px 8px rgba(255, 255, 255, 0.45), 0 8px 20px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 1)",
              }}
            >
              <span>{showEvidence ? "OCULTAR EVIDENCIA" : "VER EVIDENCIA"}</span>
              <ChevronDown
                size={13}
                className={`text-[#0a0b0d] stroke-[3] transition-transform duration-300 ${
                  showEvidence ? "rotate-180" : ""
                }`}
              />
            </button>

            {showEvidence && (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/15 bg-black/90 p-2.5 backdrop-blur-md">
                <img
                  src={item.evidence}
                  alt={`Recomendación de ${item.name}`}
                  className="w-full rounded-xl object-cover shadow-2xl"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function TestimonialGrid({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <TestimonialCard key={t.name} item={t} />
      ))}
    </div>
  );
}

export function TestimonialSingle({ items }: { items: Testimonial[] }) {
  return (
    <div className="mx-auto max-w-md">
      {items.map((t) => (
        <TestimonialCard key={t.name} item={t} />
      ))}
    </div>
  );
}
