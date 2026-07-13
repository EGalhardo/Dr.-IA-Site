import { ArrowLeft, Target, Users, Landmark, AlertTriangle, ShieldCheck, CreditCard, BarChart3, Award, Brain, HeartPulse, TrendingUp, ShieldAlert, CheckCircle2, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState<"plano" | "swot" | "canvas" | "financas">("plano");

  return (
    <main id="about-container" className="flex-grow max-w-5xl mx-auto w-full px-6 py-16">
      {/* Back navigation */}
      <div className="mb-12">
        <Link id="about-back-link" to="/" className="text-red-600 font-bold flex items-center gap-2 mb-8 hover:text-red-700 transition-colors">
          <ArrowLeft size={18} />
          Voltar ao Início
        </Link>
        <span className="text-red-600 font-black text-xs uppercase tracking-[0.2em] block mb-2">Plano de Negócio Oficial</span>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight uppercase">
          DR.IA APP
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed font-semibold max-w-3xl">
          Plataforma Inteligente de Triagem Clínica para Angola — O seu médico pessoal na palma da sua mão.
        </p>
      </div>

      {/* Tabs for Plan / SWOT / Canvas / Projections */}
      <div className="flex border-b border-gray-200 mb-12 overflow-x-auto gap-2 scrollbar-none">
        <button
          onClick={() => setActiveTab("plano")}
          className={`px-5 py-3 font-black text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
            activeTab === "plano"
              ? "border-red-600 text-red-600"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          Plano de Negócio
        </button>
        <button
          onClick={() => setActiveTab("swot")}
          className={`px-5 py-3 font-black text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
            activeTab === "swot"
              ? "border-red-600 text-red-600"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          Análise SWOT
        </button>
        <button
          onClick={() => setActiveTab("canvas")}
          className={`px-5 py-3 font-black text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
            activeTab === "canvas"
              ? "border-red-600 text-red-600"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          Business Model Canvas
        </button>
        <button
          onClick={() => setActiveTab("financas")}
          className={`px-5 py-3 font-black text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
            activeTab === "financas"
              ? "border-red-600 text-red-600"
              : "border-transparent text-gray-500 hover:text-gray-900"
          }`}
        >
          Projeções e Impacto
        </button>
      </div>

      {activeTab === "plano" && (
        <div className="space-y-16">
          {/* Section: Resumo Executivo */}
          <section className="bg-red-50/40 border-l-4 border-red-600 p-8 rounded-r-3xl">
            <h2 className="text-2xl font-black text-gray-950 mb-4 uppercase tracking-tight">
              1. Resumo Executivo
            </h2>
            <div className="space-y-4 text-gray-800 text-lg leading-relaxed">
              <p>
                O <strong className="text-gray-950 font-black">DR.IA APP</strong> é uma plataforma digital de saúde baseada em Inteligência Artificial, desenvolvida para melhorar o acesso dos cidadãos angolanos aos cuidados de saúde, reduzir o tempo de espera nas unidades hospitalares e apoiar a tomada de decisão clínica.
              </p>
              <p>
                O sistema é composto por três plataformas totalmente integradas:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4 text-gray-700 font-semibold">
                <li><strong className="text-red-600">DR.IA Cidadão:</strong> Triagem por IA, histórico seguro e encaminhamento.</li>
                <li><strong className="text-red-600">DR.IA Hospital:</strong> Receção de relatórios, gestão de filas e decisão clínica.</li>
                <li><strong className="text-red-600">DR.IA Ministério da Saúde:</strong> Painel estatístico nacional e vigilância epidemiológica.</li>
              </ul>
              <p>
                Todas funcionam sobre uma única base de dados central e utilizam Inteligência Artificial para realizar uma avaliação clínica preliminar antes da chegada do paciente ao hospital. O principal modelo de implementação consiste na celebração de contratos com <strong className="text-gray-900 font-bold">Municípios</strong>, que assumem o custo das avaliações realizadas pelos seus munícipes, permitindo que o cidadão utilize o serviço gratuitamente.
              </p>
            </div>
          </section>

          {/* Section: O Problema */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  <AlertTriangle size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 uppercase tracking-tight">Desafios do Sistema</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  O sistema de saúde enfrenta desafios de saturação física, escassez de médicos, longos tempos de espera para consultas básicas e dificuldades de resposta descentralizada nas províncias e municípios.
                </p>
              </div>
              <div className="md:col-span-7 space-y-6">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
                  2. Problema e Justificação
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    O sistema de saúde angolano enfrenta desafios estruturais severos: escassez de médicos especialistas, tempos de espera que por vezes superam as 6 horas nas urgências, sobrecarga de hospitais públicos por casos de baixa gravidade e a falta de uma triagem primária eficaz na comunidade.
                  </p>
                  <p>
                    Para além disso, a recolha de dados epidemiológicos em tempo real é morosa, dificultando o combate célere a surtos e o planeamento estratégico em saúde pelo Ministério da Saúde.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: A Solução */}
          <section className="bg-gradient-to-br from-red-950 to-red-900 text-white rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-red-950/25">
            <div className="relative z-10 max-w-3xl">
              <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest block mb-3">Transformação de Cuidados</span>
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight">3. A Solução Proposta</h2>
              <div className="space-y-6 text-red-100/90 text-lg leading-relaxed">
                <p>
                  O DR.IA APP oferece uma triagem clínica digital baseada em Inteligência Artificial generativa e conversacional. O cidadão descreve os seus sintomas, envia dados corporais e imagens, recebendo de imediato um relatório clínico e o direcionamento para a unidade de saúde municipal recomendada.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-sm font-black text-white uppercase tracking-wider text-center">
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">Triagem de Sintomas</div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">Relatório Clínico</div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">Alerta Epidemiológico</div>
                  <div className="bg-white/10 p-3 rounded-xl border border-white/5">Gestão de Filas</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Missão, Visão e Valores */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <Target size={20} />
              </div>
              <h3 className="font-bold text-gray-900 uppercase text-lg mb-3">Missão</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Democratizar o acesso à orientação clínica, reduzir o tempo de espera e apoiar cidadãos, hospitais e entidades governamentais através de inteligência clínica.</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <Users size={20} />
              </div>
              <h3 className="font-bold text-gray-900 uppercase text-lg mb-3">Visão</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Ser a principal plataforma digital de apoio à saúde em Angola, tornando-se uma referência africana em IA aplicada à medicina e saúde pública.</p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <Award size={20} />
              </div>
              <h3 className="font-bold text-gray-900 uppercase text-lg mb-3">Valores</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Inclusão social, soberania cidadã, ética médica na IA, precisão de dados clínicos e confidencialidade absoluta.</p>
            </div>
          </section>

          {/* Section: Proposta de Valor Detalhada */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">4. Proposta de Valor</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-100 p-8 rounded-[36px]">
                <span className="text-red-600 font-extrabold text-[10px] uppercase tracking-widest block mb-2">Cidadãos e Municípios</span>
                <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Impacto Comunitário</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600 shrink-0" />
                    <span><strong className="text-gray-900">Orientação 24h:</strong> Orientação de triagem imediata na ponta dos dedos, prevenindo pânico.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600 shrink-0" />
                    <span><strong className="text-gray-900">Uso Gratuito:</strong> Graças ao patrocínio e financiamento contratual com os Municípios e Governos locais.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600 shrink-0" />
                    <span><strong className="text-gray-900">Histórico de Saúde:</strong> Guarde as avaliações de sintomas, relatórios e alertas seguros sempre acessíveis.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-8 rounded-[36px]">
                <span className="text-red-600 font-extrabold text-[10px] uppercase tracking-widest block mb-2">Hospitais e Ministério</span>
                <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Impacto Clínico e Estatal</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600 shrink-0" />
                    <span><strong className="text-gray-900">Receção Antecipada:</strong> O hospital recebe o relatório médico de triagem antes do paciente chegar, economizando tempo de consulta.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600 shrink-0" />
                    <span><strong className="text-gray-900">Painel Epidemiológico:</strong> O Ministério da Saúde monitoriza sintomas de forma agregada, prevendo surtos de cólera, malária ou outras patologias.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-600 shrink-0" />
                    <span><strong className="text-gray-900">Decisão Apoiada por IA:</strong> Relatório clínico objetivo que apoia a decisão do médico de plantão de forma ágil.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Modelo de Negócio */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <Landmark size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 uppercase text-lg mb-3">Parcerias com Municípios</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Os Municípios celebram acordos anuais institucionais para cobrir o serviço dos seus cidadãos, promovendo inclusão digital real sem barreiras financeiras para o utilizador final.
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <CreditCard size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 uppercase text-lg mb-3">Licenciamento de Hospitais</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                As clínicas e hospitais privados pagam uma mensalidade (de 15.000 Kz/mês por exemplo) para receber de forma prioritária os relatórios, usufruir da gestão de filas inteligente e ter integrações nativas em API.
              </p>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-extrabold text-gray-900 uppercase text-lg mb-3">Dados e Análises</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Relatórios consolidados anonimizados, inteligência preditiva epidemiológica e relatórios estruturados apoiam o planeamento de governos e seguradoras corporativas de saúde.
              </p>
            </div>
          </section>
        </div>
      )}

      {activeTab === "swot" && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Análise SWOT (F.O.F.A.)</h2>
            <p className="text-gray-500 font-bold mt-2 uppercase text-xs tracking-widest">Matriz Estratégica do DR.IA APP</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Forças */}
            <div className="bg-green-50/50 border border-green-100 p-8 rounded-[32px]">
              <h3 className="text-xl font-black text-green-900 mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="p-1.5 bg-green-500 rounded-lg text-white text-xs">F</span> Forças (Strengths)
              </h3>
              <ul className="space-y-3 text-green-950 font-medium text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  <span>Primeira plataforma integrada de triagem por IA desenhada para o contexto e infraestrutura de Angola.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  <span>Modelo de negócio sem custos diretos ao cidadão (financiamento municipal) que elimina barreira de adoção.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  <span>Solução abrangente ligando Cidadão, Hospital e Ministério da Saúde em tempo real.</span>
                </li>
              </ul>
            </div>

            {/* Oportunidades */}
            <div className="bg-red-50/50 border border-red-100 p-8 rounded-[32px]">
              <h3 className="text-xl font-black text-red-900 mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="p-1.5 bg-red-500 rounded-lg text-white text-xs">O</span> Oportunidades (Opportunities)
              </h3>
              <ul className="space-y-3 text-red-950 font-medium text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0 mt-0.5" />
                  <span>Crescente aposta estatal na transformação digital e digitalização dos serviços públicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0 mt-0.5" />
                  <span>Parcerias internacionais para apoio técnico e financiamento ao desenvolvimento de tecnologias sociais.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-red-600 shrink-0 mt-0.5" />
                  <span>Integração futura com seguradoras privadas de saúde, farmácias, laboratórios e registos médicos eletrónicos.</span>
                </li>
              </ul>
            </div>

            {/* Fraquezas */}
            <div className="bg-yellow-50/50 border border-yellow-100 p-8 rounded-[32px]">
              <h3 className="text-xl font-black text-yellow-900 mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="p-1.5 bg-yellow-500 rounded-lg text-white text-xs">F</span> Fraquezas (Weaknesses)
              </h3>
              <ul className="space-y-3 text-yellow-950 font-medium text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <ShieldAlert size={16} className="text-yellow-600 shrink-0 mt-0.5" />
                  <span>Dependência de infraestrutura estável de internet nos hospitais para receção contínua dos relatórios clínicos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldAlert size={16} className="text-yellow-600 shrink-0 mt-0.5" />
                  <span>Necessidade de capacitação contínua e formação de equipes administrativas e médicas nos hospitais locais.</span>
                </li>
              </ul>
            </div>

            {/* Ameaças */}
            <div className="bg-red-50/50 border border-red-100 p-8 rounded-[32px]">
              <h3 className="text-xl font-black text-red-900 mb-4 uppercase tracking-tight flex items-center gap-2">
                <span className="p-1.5 bg-red-500 rounded-lg text-white text-xs">A</span> Ameaças (Threats)
              </h3>
              <ul className="space-y-3 text-red-950 font-medium text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <ShieldAlert size={16} className="text-red-600 shrink-0 mt-0.5" />
                  <span>Incertezas regulatórias sobre as licenças para triagens médicas e uso de dados clínicos em saúde pública.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldAlert size={16} className="text-red-600 shrink-0 mt-0.5" />
                  <span>Resistência inicial de parte da população sénior ou mais conservadora à adoção de consultas com Inteligência Artificial.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === "canvas" && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Business Model Canvas</h2>
            <p className="text-gray-500 font-bold mt-2 uppercase text-xs tracking-widest">Estrutura de Negócio do DR.IA APP</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Parcerias Chave */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl md:col-span-1 space-y-3">
              <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Parcerias Chave</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                • Ministérios e Governos Provinciais<br/>
                • Municípios Administradores<br/>
                • Hospitais e Clínicas<br/>
                • Empresas de Telecomunicações
              </p>
            </div>

            {/* Actividades e Recursos Chave */}
            <div className="md:col-span-1 space-y-4">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Actividades Chave</h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                  • Desenvolvimento IA Clínica<br/>
                  • Certificação de IA em Saúde<br/>
                  • Parcerias comerciais e municipais
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Recursos Chave</h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                  • Algoritmo de IA proprietário<br/>
                  • Servidores dedicados e seguros<br/>
                  • Equipa técnica clínica e técnica
                </p>
              </div>
            </div>

            {/* Proposta de Valor */}
            <div className="bg-gradient-to-b from-red-50 to-red-100/50 border border-red-200 p-6 rounded-2xl md:col-span-1 space-y-3">
              <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Proposta de Valor</h4>
              <p className="text-xs text-red-950 leading-relaxed font-bold">
                • Orientação de sintomas 24/7 de forma rápida<br/>
                • Redução drástica das filas e espera de urgências<br/>
                • Monitorização epidemiológica integrada para órgãos governamentais
              </p>
            </div>

            {/* Relação e Canais */}
            <div className="md:col-span-1 space-y-4">
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Relação com Clientes</h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                  • Atendimento 100% humanizado e transparente<br/>
                  • Relatórios claros e seguros
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-2">
                <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Canais</h4>
                <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                  • Aplicações Web e Mobile<br/>
                  • Hospitais Públicos e Redes Sociais
                </p>
              </div>
            </div>

            {/* Segmentos de Mercado */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl md:col-span-1 space-y-3">
              <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Segmentos de Mercado</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                • População geral de Angola<br/>
                • Municípios Administradores<br/>
                • Redes e Associações de Hospitais e Clínicas Privadas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            {/* Estrutura de Custos */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-3">
              <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Estrutura de Custos</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                • Desenvolvimento contínuo da IA, infraestrutura cloud e servidores.<br/>
                • Equipe clínica para revisão das orientações e validações de dados médicos.<br/>
                • Marketing local, formação técnica e capacitação nos hospitais estatais.
              </p>
            </div>

            {/* Fontes de Receita */}
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl space-y-3">
              <h4 className="font-black text-xs text-red-600 uppercase tracking-wide">Fontes de Receita</h4>
              <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                • Contratos anuais institucionais de subscrição celebrados com Municípios.<br/>
                • Licenciamento de serviços e integrações de relatórios rápidos para Clínicas Privadas.<br/>
                • Integrações corporativas exclusivas com operadoras e seguradoras de saúde.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "financas" && (
        <div className="space-y-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Projeções Financeiras & Impacto</h2>
            <p className="text-gray-500 font-bold mt-2 uppercase text-xs tracking-widest">Metas e Projeções Estratégicas a 5 anos</p>
          </div>

          {/* Impact Indicators Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">Tempo de Espera</span>
              <span className="text-2xl md:text-3xl font-black text-red-600">-60%</span>
              <p className="text-xs text-gray-600 mt-1 font-semibold">Redução média nas triagens hospitalares</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">Cidades Cobertas</span>
              <span className="text-2xl md:text-3xl font-black text-red-600">45+</span>
              <p className="text-xs text-gray-600 mt-1 font-semibold">Municípios planeados nos próximos 3 anos</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">Vilas / Províncias</span>
              <span className="text-2xl md:text-3xl font-black text-red-600">18/18</span>
              <p className="text-xs text-gray-600 mt-1 font-semibold">Cobertura total do território angolano</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-6 rounded-2xl text-center">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-wider block mb-1">Utilizadores Ativos</span>
              <span className="text-2xl md:text-3xl font-black text-red-600">2.5M+</span>
              <p className="text-xs text-gray-600 mt-1 font-semibold">Cidadãos beneficiados até ao 5º ano</p>
            </div>
          </div>

          {/* Table: Financial Projections */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm overflow-x-auto">
            <h3 className="font-black text-gray-900 uppercase tracking-tight text-lg mb-6">Demonstração de Resultados Previstos (Kz)</h3>
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-gray-100 font-black text-gray-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Indicador</th>
                  <th className="py-3 px-4 text-right">Ano 1</th>
                  <th className="py-3 px-4 text-right">Ano 2</th>
                  <th className="py-3 px-4 text-right">Ano 3</th>
                  <th className="py-3 px-4 text-right">Ano 4</th>
                  <th className="py-3 px-4 text-right">Ano 5</th>
                </tr>
              </thead>
              <tbody className="font-semibold text-gray-700">
                <tr className="border-b border-gray-100/60">
                  <td className="py-3 px-4 font-bold text-gray-900">Municípios Contratados</td>
                  <td className="py-3 px-4 text-right">3</td>
                  <td className="py-3 px-4 text-right">10</td>
                  <td className="py-3 px-4 text-right">25</td>
                  <td className="py-3 px-4 text-right">45</td>
                  <td className="py-3 px-4 text-right">80</td>
                </tr>
                <tr className="border-b border-gray-100/60">
                  <td className="py-3 px-4 font-bold text-gray-900">Receita Anual Total (Kz)</td>
                  <td className="py-3 px-4 text-right">18.000.000</td>
                  <td className="py-3 px-4 text-right">65.000.000</td>
                  <td className="py-3 px-4 text-right">180.000.000</td>
                  <td className="py-3 px-4 text-right">350.000.000</td>
                  <td className="py-3 px-4 text-right">680.000.000</td>
                </tr>
                <tr className="border-b border-gray-100/60">
                  <td className="py-3 px-4 font-bold text-gray-900">Custos Operacionais (Kz)</td>
                  <td className="py-3 px-4 text-right">14.000.000</td>
                  <td className="py-3 px-4 text-right">38.000.000</td>
                  <td className="py-3 px-4 text-right">85.000.000</td>
                  <td className="py-3 px-4 text-right">150.000.000</td>
                  <td className="py-3 px-4 text-right">260.000.000</td>
                </tr>
                <tr className="border-b border-gray-100 font-black text-gray-900 bg-red-50/40">
                  <td className="py-3.5 px-4">Lucro Líquido Real (Kz)</td>
                  <td className="py-3.5 px-4 text-right text-red-600">4.000.000</td>
                  <td className="py-3.5 px-4 text-right text-red-600">27.000.000</td>
                  <td className="py-3.5 px-4 text-right text-red-600">95.000.000</td>
                  <td className="py-3.5 px-4 text-right text-red-600">200.000.000</td>
                  <td className="py-3.5 px-4 text-right text-red-600">420.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section: Cronograma de Implementação */}
          <section className="space-y-6">
            <h3 className="font-black text-gray-900 uppercase tracking-tight text-lg">Estratégia de Implementação Nacional</h3>
            <div className="relative border-l-2 border-red-200 pl-6 space-y-8 ml-2">
              <div className="relative">
                <span className="absolute -left-10 top-0.5 bg-red-600 text-white font-black text-[10px] w-6 h-6 rounded-full flex items-center justify-center">1</span>
                <h4 className="font-black text-gray-900 text-sm uppercase">Fase 1: Desenvolvimento do MVP e Validação</h4>
                <p className="text-xs text-gray-600 mt-1 font-semibold">Testes internos do algoritmo de IA clínica em Luanda e parametrização das bases clínicas com terminologia e epidemiologia nacional angolana.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-10 top-0.5 bg-red-600 text-white font-black text-[10px] w-6 h-6 rounded-full flex items-center justify-center">2</span>
                <h4 className="font-black text-gray-900 text-sm uppercase">Fase 2: Projeto-Piloto Municipal</h4>
                <p className="text-xs text-gray-600 mt-1 font-semibold">Implementação prática numa administração municipal selecionada, ligando dois hospitais de referência para validar o fluxo real de triagem eletrónica.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-10 top-0.5 bg-red-600 text-white font-black text-[10px] w-6 h-6 rounded-full flex items-center justify-center">3</span>
                <h4 className="font-black text-gray-900 text-sm uppercase">Fase 3: Expansão Provincial e Parcerias Privadas</h4>
                <p className="text-xs text-gray-600 mt-1 font-semibold">Conexão de dezenas de hospitais provinciais públicos e lançamento dos primeiros planos pagos para as maiores redes de clínicas privadas do país.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-10 top-0.5 bg-red-600 text-white font-black text-[10px] w-6 h-6 rounded-full flex items-center justify-center">4</span>
                <h4 className="font-black text-gray-900 text-sm uppercase">Fase 4: Integração Nacional no Ministério da Saúde</h4>
                <p className="text-xs text-gray-600 mt-1 font-semibold">Alimentação global anonimizada das estatísticas epidemiológicas nacionais diretamente no gabinete ministerial para apoio de saúde pública preventiva.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Footer Branding */}
      <section className="pt-16 border-t border-gray-100 mt-16">
        <div className="flex flex-col items-center text-center">
          <span className="text-4xl font-black text-gray-900 tracking-tighter leading-none">DR.IA APP</span>
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px] leading-none mt-2">Saúde Inteligente para Angola</span>
        </div>
      </section>
    </main>
  );
}
