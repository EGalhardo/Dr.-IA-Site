import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Landmark, CreditCard, HeartPulse, Zap, ShieldCheck, Check, Repeat, LayoutGrid, UserCheck, Brain, Users, Flame, ShieldAlert, PlayCircle, Play, X, Volume2, Maximize2, Share2, Sparkles, Languages } from "lucide-react";
import ThreeDCarousel from "../components/ThreeDCarousel";
import DownloadModal from "../components/DownloadModal";
import PlanActivationModal from "../components/PlanActivationModal";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import NewVersionModal from "../components/NewVersionModal";

const SECTORS = [
  {
    id: "cidadao",
    icon: UserCheck,
    title: "Painel do Cidadão",
    subtitle: "Citizen Panel",
    desc: "Assistência imediata e triagem inteligente na palma da mão.",
    bullets: [
      {
        title: "Assistência Imediata & Triagem Inteligente",
        text: "O cidadão pode dialogar por voz ou chat com a Inteligência Artificial sobre o seu estado de saúde de forma imediata, sem necessidade de fazer quilómetros de deslocação ou enfrentar as habituais longas filas de espera."
      },
      {
        title: "Direcionamento Clínico e Diagnóstico Inicial",
        text: "Com base nos sintomas descritos, o DR.IA diagnostica a probabilidade clínica (\"Com base nas informações partilhadas, o senhor está com X e deverá fazer Y\")."
      },
      {
        title: "Encaminhamento para Casos Graves",
        text: "Caso a IA detete sinais de perigo ou um estado grave, ela envia automaticamente o relatório de triagem para a unidade hospitalar mais próxima, permitindo ao cidadão ser atendido imediatamente assim que chegar, ignorando a fila padrão de triagem física."
      }
    ]
  },
  {
    id: "hospitais",
    icon: HeartPulse,
    title: "Painel do Hospital",
    subtitle: "Hospital Panel",
    desc: "Otimização pré-hospitalar e gestão inteligente de pacientes.",
    bullets: [
      {
        title: "Página \"Pacientes\" Otimizada",
        text: "Exibe em tempo real a listagem de todos os utentes da localidade nos quais a Inteligência Artificial detetou algum sintoma de saúde ou situação de risco."
      },
      {
        title: "Gestão Pré-Hospitalar",
        text: "O hospital recebe o relatório prévio contendo os sintomas, sinais vitais reportados e o grau de prioridade atribuído pela IA para preparar as equipas médicas antes da chegada do utente."
      },
      {
        title: "Diminuição de Filas",
        text: "Filtra eficientemente os casos de sintomas leves que receberam orientações de primeiros socorros em casa, desobstruindo as urgências e permitindo focar os recursos nos casos urgentes."
      },
      {
        title: "Gestão de Conta",
        text: "Adicionada a página \"Conta\" no menu para que o utilizador do hospital consulte e atualize os seus dados de perfil e credenciais profissionais."
      }
    ]
  },
  {
    id: "ministerio",
    icon: Landmark,
    title: "Painel do Ministério (MINSA)",
    subtitle: "Ministry Panel",
    desc: "Vigilância epidemiológica e planeamento sanitário nacional.",
    bullets: [
      {
        title: "Vigilância Epidemiológica",
        text: "Permite acompanhar os dados agregados de sintomas da população para identificar tendências sanitárias locais."
      },
      {
        title: "Combate a Pandemias",
        text: "Mapeamento de surtos e focos de contágio em tempo real para um planeamento geográfico preciso de campanhas de vacinação, distribuição de medicamentos e reforço de equipas médicas onde são mais necessárias."
      },
      {
        title: "Gestão Estratégica Nacional",
        text: "Visão consolidada da eficiência hospitalar, tempos médios de espera e distribuição do corpo clínico no país."
      },
      {
        title: "Gestão de Conta",
        text: "Adicionada a página \"Conta\" no menu para fácil acesso aos dados de perfil do agente ministerial logado."
      }
    ]
  }
];

interface Plan {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Painel do Cidadão",
    price: "0",
    features: [
      "Assistência por Voz ou Chat 24h",
      "Triagem inteligente imediata",
      "Diagnóstico e probabilidade clínica",
      "Encaminhamento para Casos Graves",
      "Histórico de saúde integrado",
      "Dados 100% confidenciais"
    ],
  },
  {
    name: "Painel do Hospital",
    price: "ACORDO INSTITUCIONAL",
    features: [
      "Página Pacientes Otimizada",
      "Relatório de Sintomas & Sinais Vitais",
      "Priorização inteligente de risco",
      "Redução drástica de filas físicas",
      "Filtro de casos de sintomas leves",
      "Gestão de Conta profissional"
    ],
  },
  {
    name: "Painel do MINSA",
    price: "15.000",
    features: [
      "Vigilância epidemiológica agregada",
      "Combate & mapeamento de surtos",
      "Planeamento geográfico de equipas",
      "Gestão Estratégica Nacional",
      "Gestão de Conta de agentes",
      "Suporte técnico prioritário"
    ],
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState(false);
  const [isNewVersionModalOpen, setIsNewVersionModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<typeof PLANS[0] | null>(null);
  const [activePlanIndex, setActivePlanIndex] = useState<number | null>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(0);

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Solução mais robusta usando Audio() direto
  const handlePlayAudio = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/dr-ia_audio.mp3");
        audioRef.current.onended = () => setIsPlayingAudio(false);
        audioRef.current.onpause = () => setIsPlayingAudio(false);
      }

      const audio = audioRef.current;

      if (isPlayingAudio) {
        audio.pause();
        setIsPlayingAudio(false);
      } else {
        audio.currentTime = 0;
        audio.play()
          .then(() => {
            setIsPlayingAudio(true);
          })
          .catch((err) => {
            console.error("Erro ao tocar áudio:", err);
            // Último recurso: mostrar alerta amigável
            alert("O áudio não pôde ser reproduzido automaticamente. Clique novamente ou verifique as permissões do navegador.");
          });
      }
    } catch (error) {
      console.error("Erro geral no áudio:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isVideoOpen) {
      interval = setInterval(() => {
        setDemoStep((prev) => (prev + 1) % 4);
      }, 4200);
    } else {
      setDemoStep(0);
    }
    return () => clearInterval(interval);
  }, [isVideoOpen]);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const openPlanModal = (plan: typeof PLANS[0]) => {
    setSelectedPlan(plan);
    setIsPlanModalOpen(true);
  };

  return (
    <div id="top" className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="inicio" className="bg-brand-main relative overflow-hidden pt-[96px] pb-[115px] px-5">
        {/* Main Background Image with referrerPolicy to bypass cross-origin restrictions */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/qvyrsDmp/Chat-GPT-Image-3-de-jul-de-2026-19-48-23.png" 
            alt="Dr. IA Background" 
            className="w-full h-full object-cover opacity-100 filter brightness-[1.25] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-[-64px] left-[-80px] w-[336px] h-[336px] rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-48px] right-[-64px] w-[304px] h-[304px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10 relative pt-[48px]">
          <ThreeDCarousel isPlayingAudio={isPlayingAudio} onPlayClick={handlePlayAudio} />
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-gray-50 border-y border-gray-100 py-5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-5">
            {[
              { icon: Brain, label: "Triagem IA" },
              { icon: Sparkles, label: "Relatorio" },
              { icon: HeartPulse, label: "Encaminhamento" },
              { icon: Users, label: "Integracao com Hospitais" },
              { icon: ShieldAlert, label: "Vigilancia" },
              { icon: ShieldCheck, label: "Confidencialidade" }
            ].map((f, i) => (
              <div 
                key={i} 
                className="w-full flex flex-col items-center gap-2.5 group p-2.5 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-1 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent group-hover:rotate-6 group-hover:scale-110 shadow-sm">
                  <f.icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-[11px] font-bold text-gray-700 group-hover:text-blue-600 transition-colors uppercase tracking-tight text-center">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectores" className="py-12 md:py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight uppercase">PAINÉIS DO DR.IA</h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">Como funciona cada painel do nosso ecossistema de saúde inteligente</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SECTORS.map((s, i) => (
             <div key={i} id={s.id} className="border-2 border-gray-200 rounded-3xl p-6 bg-white transition-all duration-300 hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-600/10 hover:-translate-y-1.5 flex flex-col">
               <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                   <s.icon size={18} />
                 </div>
                 <div>
                   <h3 className="font-extrabold text-gray-900 text-base leading-tight uppercase tracking-tight">{s.title}</h3>
                   <span className="text-[10px] font-mono uppercase font-black text-blue-500 tracking-wider block mt-0.5">{s.subtitle}</span>
                 </div>
               </div>
               
               <p className="text-gray-600 text-xs font-semibold mb-6 pb-4 border-b border-gray-100">{s.desc}</p>
               
               <div className="space-y-4 flex-grow">
                 {s.bullets?.map((b, bi) => (
                   <div key={bi} className="flex gap-2.5 items-start">
                     <span className="text-blue-500 text-xs font-bold select-none mt-0.5">•</span>
                     <div>
                       <h4 className="text-[11px] font-black text-gray-950 uppercase tracking-tight leading-normal">{b.title}</h4>
                       <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">{b.text}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          ))}
        </div>
      </section>

      {/* How it Works Summary */}
      <section id="recursos" className="pt-12 pb-40 md:pt-16 md:pb-52 lg:pb-60 bg-brand-main text-white relative overflow-hidden">
        {/* Main Background Image with referrerPolicy to bypass cross-origin restrictions */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/dQjJXfvF/Fundo-2.jpg" 
            alt="Dr. IA Background" 
            className="w-full h-full object-cover opacity-100 filter brightness-[1.25] contrast-[1.02]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-[1296px] mx-auto px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10 tracking-tight uppercase">COMO FUNCIONA</h2>
          <div className="grid grid-cols-3 gap-3 md:gap-7 max-w-[1296px] mx-auto">
            <div className="how-card group">
              <div className="w-[33.6px] h-[33.6px] sm:w-[38.4px] sm:h-[38.4px] md:w-[46px] md:h-[46px] bg-white/10 rounded-lg flex items-center justify-center mb-[14.4px] md:mb-[23px] text-white shadow-xl group-hover:scale-110 transition-transform">
                <Brain className="w-[16.8px] h-[16.8px] sm:w-[19.2px] sm:h-[19.2px] md:w-[23px] md:h-[23px]" />
              </div>
              <h3 className="text-[12px] sm:text-[14.4px] md:text-[23px] font-black mb-[4.8px] md:mb-3 uppercase tracking-wide leading-tight">Passo 1<br/><span className="text-[9.6px] sm:text-[12px] md:text-[17.3px] font-bold text-[#53f7ff]">AVALIAÇÃO COM IA</span></h3>
              <p className="text-blue-100/90 text-[10.2px] sm:text-[12.6px] md:text-[17.3px] leading-relaxed">Converse com o Dr.IA, descreva os seus sintomas e envie imagens e informações.</p>
            </div>
            <div className="how-card group">
              <div className="w-[33.6px] h-[33.6px] sm:w-[38.4px] sm:h-[38.4px] md:w-[46px] md:h-[46px] bg-white/10 rounded-lg flex items-center justify-center mb-[14.4px] md:mb-[23px] text-white shadow-xl group-hover:scale-110 transition-transform">
                <HeartPulse className="w-[16.8px] h-[16.8px] sm:w-[19.2px] sm:h-[19.2px] md:w-[23px] md:h-[23px]" />
              </div>
              <h3 className="text-[12px] sm:text-[14.4px] md:text-[23px] font-black mb-[4.8px] md:mb-3 uppercase tracking-wide leading-tight">Passo 2<br/><span className="text-[9.6px] sm:text-[12px] md:text-[17.3px] font-bold text-[#53f7ff]">RELATÓRIO E ENCAMINHAMENTO</span></h3>
              <p className="text-blue-100/90 text-[10.2px] sm:text-[12.6px] md:text-[17.3px] leading-relaxed">Receba uma avaliação preliminar e escolha o hospital ideal para enviar o relatório.</p>
            </div>
            <div className="how-card group">
              <div className="w-[33.6px] h-[33.6px] sm:w-[38.4px] sm:h-[38.4px] md:w-[46px] md:h-[46px] bg-white/10 rounded-lg flex items-center justify-center mb-[14.4px] md:mb-[23px] text-white shadow-xl group-hover:scale-110 transition-transform">
                <Zap className="w-[16.8px] h-[16.8px] sm:w-[19.2px] sm:h-[19.2px] md:w-[23px] md:h-[23px]" />
              </div>
              <h3 className="text-[12px] sm:text-[14.4px] md:text-[23px] font-black mb-[4.8px] md:mb-3 uppercase tracking-wide leading-tight">Passo 3<br/><span className="text-[9.6px] sm:text-[12px] md:text-[17.3px] font-bold text-[#53f7ff]">ATENDIMENTO ACELERADO</span></h3>
              <p className="text-blue-100/90 text-[10.2px] sm:text-[12.6px] md:text-[17.3px] leading-relaxed">O hospital recebe todos os seus dados antes da sua chegada e o médico confirma o diagnóstico.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="planos" className="py-12 md:py-16 max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[28.8px] md:text-[36px] font-black text-gray-900 mb-3.5 tracking-tight uppercase">PARCERIAS & ADESÃO</h2>
          <p className="text-gray-600 text-[16.8px] max-w-[684px] mx-auto">Sustentabilidade e inclusão digital real para todos. Existem três painéis.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[31.2px] max-w-[1080px] mx-auto px-2">
          {PLANS.map((p, i) => (
            <div 
              key={i} 
              className="group border-2 rounded-[14.4px] sm:rounded-[31px] p-5 md:p-6 lg:p-[31.2px] transition-all hover:-translate-y-2 hover:shadow-3xl relative bg-white border-gray-200 hover:border-blue-600"
            >
              {p.popular && (
                <div className="absolute -top-[16.8px] left-1/2 -translate-x-1/2 text-[10.8px] font-black px-6 py-1.5 rounded-full shadow-xl tracking-widest uppercase bg-blue-600 text-white border border-blue-600">
                  MAIS POPULAR
                </div>
              )}
              <div className="text-center mb-[28.8px]">
                <h3 className="text-[21.6px] font-black mb-3 uppercase tracking-wider text-gray-900">
                  {p.name.toUpperCase()}
                </h3>
              </div>
              <ul className="space-y-[14.4px] mb-2">
                {p.features.map((f, fi) => (
                  <li key={fi} className="flex gap-3 text-[14.4px] font-bold text-gray-800 transition-colors duration-300">
                    <Check 
                      size={18} 
                      className="shrink-0 rounded-full p-[2.4px] animate-pulse text-blue-600 bg-blue-50" 
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section (Testemunha) */}
      <section id="depoimentos">
        <TestimonialsCarousel />
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-black text-blue-600 mb-6 tracking-tight uppercase">PRONTO PARA TRANSFORMAR A SAÚDE EM ANGOLA?</h2>
          <div className="max-w-2xl w-full flex flex-col items-center">
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed font-semibold italic max-w-xl">
              "Junte-se ao novo paradigma de saúde digital e ajude a construir uma Angola mais saudável, conectada e inteligente."
            </p>
            <a 
              href="https://dr-ia-plataforma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs w-full inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-extrabold text-base px-8 py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 tracking-wide uppercase cursor-pointer text-center"
            >
              Entrar
            </a>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <NewVersionModal isOpen={isNewVersionModalOpen} onClose={() => setIsNewVersionModalOpen(false)} />
      
      <audio 
        ref={audioRef}
        src="/dr-ia_audio.mp3"
        preload="auto"
        crossOrigin="anonymous"
        onPlay={() => setIsPlayingAudio(true)}
        onPause={() => setIsPlayingAudio(false)}
        onEnded={() => setIsPlayingAudio(false)}
        onError={(e) => console.error("Erro no elemento de áudio:", e)}
      >
        Your browser does not support the audio element.
      </audio>
      {selectedPlan && (
        <PlanActivationModal 
          isOpen={isPlanModalOpen} 
          onClose={() => setIsPlanModalOpen(false)} 
          planName={selectedPlan.name} 
          planPrice={selectedPlan.price} 
        />
      )}

      {/* Interactive Video Demonstration Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <div id="video-demo-modal" className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-neutral-950 border border-neutral-800/80 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative z-10 flex flex-col"
            >
              {/* Player Top Nav Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-900 bg-neutral-950/90 relative z-25">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest font-mono">DEMO OFICIAL // CORREIO DIGITAL ANGOLA</span>
                </div>
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="rounded-full bg-neutral-900 border border-neutral-800 p-2 text-gray-400 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Player Main Simulated Screen */}
              <div className="relative aspect-video w-full bg-neutral-950 flex flex-col items-center justify-center p-8 overflow-hidden min-h-[360px] sm:min-h-[420px]">
                {/* Background ambient mesh */}
                <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -translate-y-1/2" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/5 blur-[140px] pointer-events-none" />
                
                {/* Simulated active stage using current demoStep */}
                <AnimatePresence mode="wait">
                  {demoStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center max-w-md w-full relative z-10"
                    >
                      <span className="text-[10px] font-black tracking-widest text-[#B87A14] uppercase mb-4">PASSO 01 / AUTENTICAÇÃO NACIONAL</span>
                      <h4 className="text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-tight">Acesso por Identificação Única</h4>
                      
                      {/* Interactive Fingerprint/ID scan Mockup */}
                      <div className="w-32 h-32 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center relative shadow-inner shadow-black/60 mb-6">
                        <div className="absolute inset-x-4 top-1/2 h-[2px] bg-blue-500 animate-bounce shadow-lg shadow-blue-500/50" />
                        <UserCheck size={48} className="text-blue-500 animate-pulse" />
                      </div>
                      
                      <div className="bg-neutral-900/50 border border-neutral-800/40 rounded-2xl px-5 py-3 w-full backdrop-blur-sm">
                        <p className="text-xs text-gray-400 font-mono text-center">USUÁRIO: <span className="text-white font-bold font-sans">Nº BI DOC 001239...</span></p>
                        <p className="text-[10px] text-green-400 font-mono mt-1 uppercase tracking-wider text-center animate-pulse">● Autenticado através da rede segura</p>
                      </div>
                    </motion.div>
                  )}

                  {demoStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center max-w-md w-full relative z-10"
                    >
                      <span className="text-[10px] font-black tracking-widest text-[#B87A14] uppercase mb-4">PASSO 02 / ENDEREÇO OFICIAL</span>
                      <h4 className="text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-tight">O Seu Endereço Digital Único</h4>
                      
                      {/* Orbiting Envelope/Box simulation */}
                      <div className="w-48 h-32 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col items-center justify-center relative mb-6 p-4">
                        <Repeat size={36} className="text-[#B87A14] animate-spin [animation-duration:8s] mb-2" />
                        <span className="text-xs font-mono font-black text-white uppercase tracking-wider">001234567LA8.correio.ao</span>
                      </div>
                      
                      <div className="bg-neutral-900/50 border border-neutral-800/40 rounded-2xl px-5 py-3 w-full backdrop-blur-sm">
                        <p className="text-xs text-gray-300 font-bold">Vínculo automático entre o cidadão e a administração central, garantindo canal exclusivo.</p>
                      </div>
                    </motion.div>
                  )}

                  {demoStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center max-w-lg w-full relative z-10"
                    >
                      <span className="text-[10px] font-black tracking-widest text-[#B87A14] uppercase mb-4">PASSO 03 / NOTIFICAÇÃO CÉLERE</span>
                      <h4 className="text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-tight">Receber Cartas e Avisos do Estado</h4>
                      
                      {/* Timeline flow */}
                      <div className="space-y-3 w-full mb-6">
                        <div className="flex items-center justify-between border border-neutral-800 bg-neutral-900/60 p-4 rounded-2xl text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs font-sans">AGT</div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Imposto Predial Urbano</p>
                              <p className="text-[10px] text-gray-400">Guia de pagamento emitida com código de barras.</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono text-[#B87A14] uppercase font-bold px-2.5 py-1 rounded bg-amber-500/5 border border-amber-500/20">Recebido</span>
                        </div>

                        <div className="flex items-center justify-between border border-neutral-800 bg-neutral-900/60 p-4 rounded-2xl text-left">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-500 font-black text-xs font-sans">SME</div>
                            <div>
                              <p className="text-xs font-bold text-white uppercase tracking-tight">Passaporte Pronto</p>
                              <p className="text-[10px] text-gray-400">Levantamento disponível no posto de atendimento.</p>
                            </div>
                          </div>
                          <span className="text-[9px] font-mono text-green-400 uppercase font-bold px-2.5 py-1 rounded bg-green-500/5 border border-green-500/20">Novo</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {demoStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.03 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center text-center max-w-md w-full relative z-10"
                    >
                      <span className="text-[10px] font-black tracking-widest text-[#B87A14] uppercase mb-4">PASSO 04 / ASSISTÊNCIA INTEGRAL COM IA</span>
                      <h4 className="text-xl sm:text-2xl font-black text-white mb-6 uppercase tracking-tight">Inclusão Total por Teclado e Voz</h4>
                      
                      {/* Wave anim placeholder */}
                      <div className="flex items-center justify-center gap-1.5 h-12 mb-6 font-sans">
                        {[0.8, 1.4, 0.5, 1.2, 1.6, 0.9, 1.3, 0.6, 1.1, 0.4].map((h, i) => (
                          <motion.div
                            key={i}
                            animate={{ scaleY: [1, 1.8, 1] }}
                            transition={{ repeat: Infinity, duration: h * 1.5, ease: "easeInOut" }}
                            className="w-1.5 h-6 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full origin-center"
                          />
                        ))}
                      </div>
                      
                      <div className="bg-neutral-900/50 border border-neutral-800/40 rounded-2xl px-5 py-4 w-full backdrop-blur-sm text-center">
                        <p className="text-xs text-white leading-relaxed italic font-semibold">
                          "Olá, o seu novo imposto da AGT está pronto. Quer que eu leia os detalhes do documento para si?"
                        </p>
                        <p className="text-[9px] text-[#B87A14] font-bold uppercase tracking-widest mt-2 font-mono">SÍNTESE DE VOZ INTERACTIVA ACTIVADA</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Player Bottom Control Deck */}
              <div className="bg-neutral-950 border-t border-neutral-900 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Timeline and Navigation Dots for Steps */}
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3].map((step) => (
                    <button
                      key={step}
                      onClick={() => setDemoStep(step)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        demoStep === step 
                          ? "w-8 bg-blue-600" 
                          : "w-2.5 bg-neutral-800 hover:bg-neutral-750"
                      }`}
                      title={`Passo ${step + 1}`}
                    />
                  ))}
                  <span className="text-[10px] font-black text-gray-500 font-mono uppercase tracking-widest ml-4">
                    PASSO {demoStep + 1} DE 4
                  </span>
                </div>

                {/* Simulated playback visual controls */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Volume2 size={16} />
                    <div className="w-16 h-1 bg-blue-600 rounded" />
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 font-bold uppercase tracking-tight">
                    0{demoStep + 1}:00 / 04:00
                  </span>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Maximize2 size={16} className="hover:text-white cursor-pointer transition-colors" />
                    <Share2 size={16} className="hover:text-white cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
