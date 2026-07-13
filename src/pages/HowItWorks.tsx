import { useState } from "react";
import { ArrowLeft, Brain, ShieldAlert, CheckCircle2, UserCheck, HeartPulse, Landmark, Zap, MessageSquare, Sparkles, Activity, FileText, Map, HelpCircle, Key, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"cidadao" | "hospital" | "minsa" | "integracao">("cidadao");

  const integrationSteps = [
    {
      num: "01",
      title: "Início da Conversa",
      desc: "O cidadão inicia um diálogo intuitivo com o Dr.IA por voz ou texto, expondo a sua queixa ou sintomas."
    },
    {
      num: "02",
      title: "Recolha & Triagem",
      desc: "A IA conduz a entrevista clínica dinâmica inteligente e calcula o nível de risco prioritário do paciente."
    },
    {
      num: "03",
      title: "Cuidados Domiciliários",
      desc: "Casos classificados como ligeiros recebem de imediato orientações de repouso e monitorização em casa."
    },
    {
      num: "04",
      title: "Apoio Clínico Moderado",
      desc: "Pacientes com sintomas de média intensidade são direcionados com segurança para o hospital municipal mais adequado."
    },
    {
      num: "05",
      title: "Relatório de Urgência",
      desc: "Casos classificados como graves desencadeiam a geração automatizada e imediata de um relatório clínico."
    },
    {
      num: "06",
      title: "Organização Pré-Hospitalar",
      desc: "O hospital recebe a triagem encriptada antes da chegada do paciente, mobilizando a equipa médica."
    },
    {
      num: "07",
      title: "Vigilância Nacional",
      desc: "As estatísticas anonimizadas e agregadas alimentam o Painel do MINSA para monitorização epidemiológica estratégica."
    }
  ];

  return (
    <main id="howitworks-container" className="flex-grow max-w-[1200px] mx-auto w-full px-6 py-16">
      {/* Back navigation */}
      <div className="mb-12">
        <Link id="howitworks-back-link" to="/" className="text-blue-600 font-bold flex items-center gap-2 mb-8 hover:text-blue-700 transition-colors">
          <ArrowLeft size={18} />
          Voltar ao Início
        </Link>
        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] block mb-2">ECOSSISTEMA INTEGRADO DR.IA</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight uppercase">
          Funcionamento dos Painéis
        </h1>
        <p className="text-lg text-gray-650 leading-relaxed font-semibold max-w-4xl mt-3">
          O <strong>DR.IA</strong> é uma plataforma inteligente de saúde digital concebida para aproximar os cidadãos dos serviços de saúde através da Inteligência Artificial. O sistema funciona como um ecossistema integrado onde três painéis operam em perfeita sintonia para otimizar o atendimento, reduzir os tempos de espera e apoiar a tomada de decisões clínicas e nacionais.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-12 gap-2 scrollbar-none">
        {[
          { id: "cidadao", label: "CIDADÃO", icon: UserCheck },
          { id: "hospital", label: "HOSPITAL", icon: HeartPulse },
          { id: "minsa", label: "MINISTÉRIO (MINSA)", icon: Landmark },
          { id: "integracao", label: "FLUXO DE INTEGRAÇÃO", icon: Zap }
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 font-black text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600 font-black"
                  : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
        >
          {/* PAINEL DO CIDADÃO */}
          {activeTab === "cidadao" && (
            <div className="space-y-12">
              <div className="bg-blue-50/40 border-l-4 border-blue-600 p-8 rounded-r-3xl">
                <span className="text-blue-600 font-extrabold text-[10px] uppercase tracking-widest block mb-1">Acesso Direto à Saúde</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">1. Painel do Cidadão</h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Porta de entrada do ecossistema, permitindo a qualquer cidadão obter uma avaliação clínica inicial rápida, segura e acessível a partir de um smartphone ou computador, reduzindo deslocações desnecessárias e democratizando o atendimento.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* AI Interview */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <MessageSquare size={22} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Assistência Imediata via IA</h3>
                  <p className="text-gray-650 text-sm leading-relaxed mb-4">
                    O cidadão dialoga naturalmente por texto ou voz. A Inteligência Artificial conduz uma entrevista clínica estruturada, adaptando dinamicamente as perguntas de acordo com as respostas do paciente:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-gray-700">
                    <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      Qual é o principal sintoma?
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      Há quanto tempo começou?
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      Tem episódios de febre?
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      Qual a intensidade da dor?
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      Tem dificuldade em respirar?
                    </li>
                    <li className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-100/50">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                      Histórico de doença crónica?
                    </li>
                  </ul>
                </div>

                {/* Intelligent Triage */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Brain size={22} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Triagem Inteligente</h3>
                    <p className="text-gray-650 text-sm leading-relaxed mb-6">
                      A IA correlaciona sintomas, idade, género, fatores de risco e histórico pessoal para classificar o nível de prioridade e probabilidade clínica, apresentando uma simulação realista de forma clara.
                    </p>
                  </div>
                  
                  {/* Styled Example Box */}
                  <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 relative">
                    <span className="absolute -top-3 left-4 bg-[#B87A14] text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-md tracking-wider">Avaliação Exemplo da IA</span>
                    <p className="text-xs text-gray-700 italic font-medium leading-relaxed mt-1">
                      "Com base nas informações fornecidas, existe uma elevada probabilidade de infeção respiratória. Recomenda-se hidratação, monitorização da temperatura corporal e observação dos sintomas. Caso surja dificuldade respiratória, procure imediatamente assistência médica."
                    </p>
                    <span className="text-[10px] block mt-3 font-bold text-gray-500 uppercase tracking-tight">
                      * Nota: Não substitui o diagnóstico médico clínico.
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recommendations */}
                <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6">
                  <div className="w-10 h-10 bg-white border border-gray-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Sparkles size={18} />
                  </div>
                  <h4 className="font-extrabold text-gray-950 uppercase text-sm mb-2.5">Recomendações Práticas</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Orientações estruturadas para cuidados domiciliares, primeiros socorros, repouso, hidratação, ou sinalização imediata da urgência de realizar exames ou procurar consultas.
                  </p>
                </div>

                {/* Auto Routing */}
                <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6">
                  <div className="w-10 h-10 bg-white border border-gray-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Zap size={18} />
                  </div>
                  <h4 className="font-extrabold text-gray-950 uppercase text-sm mb-2.5">Encaminhamento Urgente</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Em estados críticos, o sistema gera instantaneamente um relatório e alerta diretamente as equipas de urgência do hospital ideal para que o acolhimento seja imediato à chegada.
                  </p>
                </div>

                {/* Digital History */}
                <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6">
                  <div className="w-10 h-10 bg-white border border-gray-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                    <Activity size={18} />
                  </div>
                  <h4 className="font-extrabold text-gray-950 uppercase text-sm mb-2.5">Histórico Médico Digital</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Garante o acompanhamento progressivo de todas as triagens feitas, facilitando ao próprio paciente e aos futuros médicos assistentes a análise evolutiva das queixas.
                  </p>
                </div>
              </div>

              {/* Citizen Benefits list */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight mb-6">Benefícios Reais para o Cidadão</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Disponibilidade 24 horas por dia.",
                    "Orientação sem sair de casa.",
                    "Redução de despesas com transportes.",
                    "Rapidez no encaminhamento crítico.",
                    "Prevenção do agravamento de sintomas.",
                    "Canal de voz interativo acessível.",
                    "Fácil partilha de exames no chat.",
                    "Histórico clínico centralizado."
                  ].map((b, bi) => (
                    <div key={bi} className="flex gap-2.5 items-start">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-gray-700 leading-normal">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAINEL DO HOSPITAL */}
          {activeTab === "hospital" && (
            <div className="space-y-12">
              <div className="bg-emerald-50/40 border-l-4 border-emerald-600 p-8 rounded-r-3xl">
                <span className="text-emerald-600 font-extrabold text-[10px] uppercase tracking-widest block mb-1">Mobilização e Preparação Médica</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">2. Painel do Hospital</h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Transforma o atendimento hospitalar reativo em ações preventivas. Permite à administração e equipas médicas visualizar os pacientes que estão a caminho, analisando antecipadamente as triagens para organizar recursos.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Patients Page */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <UserCheck size={22} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Página "Pacientes" em Tempo Real</h3>
                  <p className="text-gray-650 text-sm leading-relaxed mb-4">
                    A principal interface clínica exibe todos os munícipes da área de abrangência que realizaram uma triagem no DR.IA. A equipa médica visualiza imediatamente uma grelha consolidada contendo:
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs font-bold text-gray-700">
                    <div className="bg-gray-50 p-2.5 rounded-xl">Identificação (Nome/Idade/Sexo)</div>
                    <div className="bg-gray-50 p-2.5 rounded-xl">Localização (Município)</div>
                    <div className="bg-gray-50 p-2.5 rounded-xl">Hora exata da triagem</div>
                    <div className="bg-gray-50 p-2.5 rounded-xl">Sintomas e prioridade de risco</div>
                  </div>
                </div>

                {/* Anticipated Report */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <FileText size={22} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Relatório Clínico Antecipado</h3>
                    <p className="text-gray-650 text-sm leading-relaxed">
                      O hospital recebe de imediato o resumo clínico gerado pela IA. Isto permite a preparação adequada de equipamentos, medicamentos, equipas de enfermagem e agendamento prévio de médicos especialistas.
                    </p>
                  </div>
                  <div className="bg-emerald-50/50 border border-emerald-200/60 rounded-2xl p-4.5 mt-4">
                    <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest block mb-1">Prevenção de Segundos Cruciais</span>
                    <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                      <strong>Exemplo Clínico:</strong> Se o DR.IA diagnostica probabilidade elevada de AVC, o serviço de Neurologia é alertado antes da chegada do utente. Se for enfarte, a Cardiologia entra em prontidão.
                    </p>
                  </div>
                </div>
              </div>

              {/* Priority Classification Block */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                <div className="max-w-2xl">
                  <h3 className="text-lg font-black text-gray-990 uppercase tracking-tight mb-3">Gestão e Classificação de Prioridades</h3>
                  <p className="text-gray-650 text-xs font-bold leading-relaxed mb-6">
                    A IA calcula de forma automatizada e segura os níveis de urgência para orientar as equipas médicas do hospital na triagem rápida e otimização das filas físicas:
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  <div className="border border-red-200 bg-red-50 text-red-900 rounded-2xl p-4 text-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-red-600 inline-block mb-2 shadow-sm" />
                    <h5 className="font-black text-xs uppercase">EMERGÊNCIA</h5>
                    <p className="text-[10px] text-red-700/90 mt-1 font-semibold">Risco de vida imediato</p>
                  </div>
                  <div className="border border-orange-200 bg-orange-50 text-orange-900 rounded-2xl p-4 text-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-orange-500 inline-block mb-2 shadow-sm" />
                    <h5 className="font-black text-xs uppercase">MUITO URGENTE</h5>
                    <p className="text-[10px] text-orange-700/90 mt-1 font-semibold">Intervenção rápida necessária</p>
                  </div>
                  <div className="border border-yellow-200 bg-yellow-50 text-yellow-900 rounded-2xl p-4 text-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-400 inline-block mb-2 shadow-sm" />
                    <h5 className="font-black text-xs uppercase">URGENTE</h5>
                    <p className="text-[10px] text-yellow-700/90 mt-1 font-semibold">Necessita cuidados céleres</p>
                  </div>
                  <div className="border border-green-200 bg-green-50 text-green-900 rounded-2xl p-4 text-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500 inline-block mb-2 shadow-sm" />
                    <h5 className="font-black text-xs uppercase">POUCO URGENTE</h5>
                    <p className="text-[10px] text-green-700/90 mt-1 font-semibold">Acompanhamento padrão</p>
                  </div>
                  <div className="border border-blue-200 bg-blue-50 text-blue-900 rounded-2xl p-4 text-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-500 inline-block mb-2 shadow-sm" />
                    <h5 className="font-black text-xs uppercase">NÃO URGENTE</h5>
                    <p className="text-[10px] text-blue-700/90 mt-1 font-semibold">Pode aguardar ou autocuidado</p>
                  </div>
                </div>
              </div>

              {/* Account management sub-bullet */}
              <div className="bg-gray-50/50 border border-gray-100 rounded-[32px] p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                  <div>
                    <h4 className="font-black text-gray-950 uppercase text-base flex items-center gap-2">
                      <Key size={18} className="text-emerald-600" />
                      Gestão de Conta Profissional Integrada
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 max-w-2xl leading-relaxed">
                      Cada hospital possui uma área segura para atualizar os seus dados cadastrais, alterar palavras-passe, configurar alertas urgentes de notificação e controlar as permissões e credenciais do seu corpo médico autorizado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hospital Benefits list */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight mb-6">Benefícios para os Hospitais</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Triagem rápida antes da receção física.",
                    "Filtro inteligente de queixas leves.",
                    "Redução de aglomeração nas urgências.",
                    "Melhor gestão de leitos e salas.",
                    "Alocação eficiente de especialistas.",
                    "Fácil acesso ao histórico do paciente.",
                    "Histórico de exames digitais prévios.",
                    "Decisões baseadas em estatísticas sólidas."
                  ].map((b, bi) => (
                    <div key={bi} className="flex gap-2.5 items-start">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-gray-700 leading-normal">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PAINEL DO MINISTÉRIO DA SAÚDE */}
          {activeTab === "minsa" && (
            <div className="space-y-12">
              <div className="bg-amber-50/40 border-l-4 border-amber-500 p-8 rounded-r-3xl">
                <span className="text-[#B87A14] font-extrabold text-[10px] uppercase tracking-widest block mb-1">Vigilância Epidemiológica e Decisão Nacional</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">3. Painel do Ministério da Saúde (MINSA)</h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Concebido exclusivamente para a gestão estratégica nacional de saúde pública. Em vez de focar apenas no doente individual, trabalha com dados consolidados e anonimizados, permitindo uma tomada de decisão ágil baseada em indicadores agregados em tempo real.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Epidemiological Surveillance */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <Activity size={22} />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Vigilância Epidemiológica</h3>
                  <p className="text-gray-650 text-sm leading-relaxed mb-4">
                    O sistema agrega sintomas de forma anónima para identificar de imediato crescimentos invulgares em sintomas específicos nas diferentes províncias:
                  </p>
                  <ul className="space-y-2 text-xs font-bold text-gray-700">
                    <li className="flex items-center gap-2.5 bg-gray-50 p-2 rounded-lg">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      Deteção precoce de surtos sazonais (Malária, Cólera, etc.).
                    </li>
                    <li className="flex items-center gap-2.5 bg-gray-50 p-2 rounded-lg">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      Visualização de picos de febre e infetados respiratórios.
                    </li>
                    <li className="flex items-center gap-2.5 bg-gray-50 p-2 rounded-lg">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                      Distribuição territorial exata de queixas gastrointestinais.
                    </li>
                  </ul>
                </div>

                {/* Intelligent Mapping */}
                <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                      <Map size={22} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">Mapeamento Geográfico Inteligente</h3>
                    <p className="text-gray-650 text-sm leading-relaxed">
                      O painel disponibiliza mapas interativos atualizados constantemente, detalhando os municípios e províncias com maior índice de triagens críticas, facilitando intervenções sanitárias prioritárias localizadas.
                    </p>
                  </div>
                  <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 mt-4">
                    <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                      <strong>Combate Ativo a Pandemias:</strong> Ajuda a rastrear focos epidemiológicos em tempo real, fornecendo inteligência indispensável para o planeamento de campanhas de vacinação, posicionamento de hospitais de campanha e reforço de profissionais médicos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Resource Planning and strategic blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-gray-100 text-[#B87A14] rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 uppercase text-sm mb-1.5">Planeamento de Recursos</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      A IA realiza previsões analíticas que apoiam o MINSA na compra programada de vacinas, distribuição estratégica de ambulâncias, contratação de pessoal e expansão de infraestruturas locais.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-6 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-white border border-gray-100 text-[#B87A14] rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <Key size={18} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-950 uppercase text-sm mb-1.5">Acesso Ministerial Seguro</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Painel restrito de conta permitindo às autoridades ministeriais regular acessos regionais, monitorizar a eficácia dos hospitais do país e auditar relatórios de forma altamente profissional.
                    </p>
                  </div>
                </div>
              </div>

              {/* Minsa Benefits list */}
              <div className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm">
                <h3 className="text-lg font-black text-gray-950 uppercase tracking-tight mb-6">Benefícios para o Ministério da Saúde (MINSA)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "Dados epidemiológicos agregados em tempo real.",
                    "Análise preditiva de surtos nacionais.",
                    "Monitorização da eficiência dos hospitais.",
                    "Otimização da compra e stock de fármacos.",
                    "Decisões de saúde pública guiadas por dados.",
                    "Planeamento de campanhas de vacinação eficaz.",
                    "Interoperabilidade segura no sistema de saúde.",
                    "Redução global de custos de tratamento urgentes."
                  ].map((b, bi) => (
                    <div key={bi} className="flex gap-2.5 items-start">
                      <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-gray-700 leading-normal">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* INTEGRACAO ENTRE OS TRES PAINÉIS */}
          {activeTab === "integracao" && (
            <div className="space-y-12">
              <div className="bg-indigo-50/40 border-l-4 border-indigo-600 p-8 rounded-r-3xl">
                <span className="text-indigo-600 font-extrabold text-[10px] uppercase tracking-widest block mb-1">Ecossistema Conectado em Sinergia</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Fluxo Contínuo de Integração</h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  A verdadeira inovação do DR.IA assenta na perfeita interligação das três pontas do ecossistema. Um único fluxo garante que a resposta individual do cidadão apoie o hospital a receber o paciente e alimente a tomada de decisão nacional no Ministério.
                </p>
              </div>

              {/* Interactive timeline of the 7 steps */}
              <div className="relative border-l-2 border-indigo-100 pl-6 space-y-8 ml-3 py-4">
                {integrationSteps.map((step, si) => (
                  <div key={si} className="relative">
                    <span className="absolute -left-[37px] top-0 bg-indigo-600 text-white font-black text-xs w-6.5 h-6.5 rounded-full flex items-center justify-center shadow-md border border-indigo-100 animate-pulse">
                      {step.num}
                    </span>
                    <h4 className="font-extrabold text-gray-950 text-sm uppercase tracking-tight">{step.title}</h4>
                    <p className="text-xs text-gray-600 mt-1 max-w-3xl leading-relaxed font-semibold">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Summary of integration */}
              <div className="bg-indigo-950 text-white rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-lg font-black uppercase tracking-wider mb-3 text-indigo-300">Visão Holística do Ecossistema</h3>
                <p className="text-sm text-indigo-100/90 leading-relaxed max-w-4xl font-medium">
                  Desta forma, o DR.IA estabelece um canal direto e encriptado de informações cruciais. A população sente-se amparada com triagem médica automatizada instantânea, os hospitais organizam-se para evitar sobrecargas e os governantes ganham instrumentos modernos para desenhar estratégias preventivas para o Sistema Nacional de Saúde de Angola.
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Fine-print branding */}
      <section className="pt-16 border-t border-gray-100 mt-20">
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl font-black text-gray-900 tracking-tighter leading-none">DR.IA APP</span>
          <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-[10px] leading-none mt-2">Tecnologia Médica para Angola</span>
        </div>
      </section>
    </main>
  );
}

