import { ArrowLeft, Brain, HeartPulse, Landmark, ShieldCheck, HelpCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  return (
    <main id="helpcenter-container" className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
      <div className="mb-12">
        <Link id="helpcenter-back-link" to="/" className="text-red-600 font-bold flex items-center gap-2 mb-8 hover:text-red-700 transition-colors">
          <ArrowLeft size={18} />
          Voltar ao Início
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight uppercase">
          Central de Ajuda — DR.IA APP
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl">
          Bem-vindo ao centro oficial de suporte do DR.IA APP. Descubra como funciona a nossa plataforma inteligente de triagem clínica, como interagir com o Dr.IA, consultar primeiros socorros e como as informações chegam ao hospital.
        </p>
      </div>

      <div className="space-y-16">
        <section className="space-y-12 text-gray-700">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter flex items-center gap-2">
              <Brain className="text-red-600" size={24} /> 1. O que é e o que não é o Dr.IA?
            </h2>
            <p className="text-lg leading-relaxed">
              O DR.IA APP é uma plataforma de triagem clínica preliminar que utiliza inteligência artificial avançada. Ele serve para avaliar rapidamente sintomas gerais, dar orientações imediatas e facilitar o encaminhamento inteligente para o hospital municipal correto.
            </p>
            <p className="text-lg leading-relaxed font-bold text-red-600 border-l-4 border-red-600 pl-4 bg-red-50/50 py-3 rounded-r-xl">
              Aviso Importante: O Dr.IA não é um médico humano substituto. O aplicativo fornece um relatório preliminar de sintomas com indicações de gravidade, mas todos os diagnósticos finais, tratamentos e prescrições médicas dependem estritamente de consulta médica profissional presencial.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter flex items-center gap-2">
              <HeartPulse className="text-red-600" size={24} /> 2. O Fluxo de Triagem Passo a Passo
            </h2>
            <p className="text-lg leading-relaxed">
              O fluxo de atendimento da plataforma conecta as pontas do sistema de saúde de Angola:
            </p>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <div className="p-6 bg-red-600 text-white rounded-2xl border border-red-500 shadow-lg shadow-red-950/20">
                <h3 className="font-bold text-white mb-2 uppercase text-lg">Etapa 1: Avaliação de Sintomas</h3>
                <p className="text-red-50">Converse com o assistente Dr.IA por texto, descrevendo o que sente, fornecendo detalhes corporais básicos (peso, altura, idade, histórico de alergias e doenças crónicas) e fotos se aplicável.</p>
              </div>
              <div className="p-6 bg-red-600 text-white rounded-2xl border border-red-500 shadow-lg shadow-red-950/20">
                <h3 className="font-bold text-white mb-2 uppercase text-lg">Etapa 2: Relatório de Triagem</h3>
                <p className="text-red-50">A IA processa os seus sintomas instantaneamente e gera um relatório clínico resumido contendo a gravidade sugerida e as orientações iniciais de suporte.</p>
              </div>
              <div className="p-6 bg-red-600 text-white rounded-2xl border border-red-500 shadow-lg shadow-red-950/20">
                <h3 className="font-bold text-white mb-2 uppercase text-lg">Etapa 3: Receção Hospitalar Antecipada</h3>
                <p className="text-red-50">Ao selecionar o hospital, a ficha clínica da triagem é enviada com criptografia de ponta para a recepção do hospital selecionado. O médico acede ao relatório antes da sua entrada física na consulta.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter flex items-center gap-2">
              <ShieldCheck className="text-red-600" size={24} /> 3. Segurança de Dados Médicos (LGPD)
            </h2>
            <p className="text-lg leading-relaxed">
              A segurança e a confidencialidade clínica são bases inegociáveis do DR.IA APP. Todas as informações clínicas recolhidas são encriptadas de ponta a ponta e armazenadas de forma segura. O Ministério da Saúde recebe apenas estatísticas consolidadas e anonimizadas para controlo epidemiológico, preservando totalmente a sua identidade.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter flex items-center gap-2">
              <Landmark className="text-red-600" size={24} /> 4. Parceria com Municípios e Gratuidade
            </h2>
            <p className="text-lg leading-relaxed">
              O aplicativo é gratuito para o Cidadão angolano graças ao financiamento estratégico dos Municípios e Administrações locais. Os contratos anuais cobrem as triagens dos cidadãos locais como benefício público de inclusão social e transformação da saúde primária municipal.
            </p>
          </div>

          <div className="space-y-4 border-t border-gray-100 pt-8">
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tighter">Precisa de Suporte Oficial?</h2>
            <p className="text-lg leading-relaxed">
              Se você é administrador de um município, clínica ou hospital e precisa de integração API, formação ou esclarecimento de dúvidas institucionais, entre em contacto com o suporte:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-bold text-xs uppercase tracking-wide mt-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <div className="p-2 bg-red-100 text-red-600 rounded-xl mb-3"><Phone size={20} /></div>
                <span>+244 923 456 789</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <div className="p-2 bg-red-100 text-red-600 rounded-xl mb-3"><Mail size={20} /></div>
                <span className="truncate max-w-full font-sans">suporte@dria.ao</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center">
                <div className="p-2 bg-red-100 text-red-600 rounded-xl mb-3"><MapPin size={20} /></div>
                <span>Luanda, Angola</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center italic mt-8 font-medium">
              DR.IA APP — Inclusão, inovação e modernização da saúde primária angolana.
            </p>
          </div>
        </section>

        <section className="pt-4 border-t border-gray-100">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-black text-gray-900 tracking-tighter leading-none">DR.IA APP</span>
            <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px] leading-none mt-2">República de Angola</span>
          </div>
        </section>
      </div>
    </main>
  );
}
