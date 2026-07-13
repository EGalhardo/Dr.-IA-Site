import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <main id="faq-container" className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
      <div className="mb-12">
        <Link id="faq-back-link" to="/" className="text-red-600 font-bold flex items-center gap-2 mb-8 hover:text-red-700 transition-colors">
          <ArrowLeft size={18} />
          Voltar ao Início
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-tight uppercase">
          Perguntas Frequentes
        </h1>
        <p className="text-gray-600 font-semibold text-lg leading-relaxed">
          Tire as suas dúvidas sobre a triagem clínica inteligente por Inteligência Artificial do Dr.IA.
        </p>
      </div>

      <div className="space-y-16">
        <section className="space-y-12">
          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">O que é o DR.IA APP?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              O DR.IA APP é uma plataforma inteligente baseada em Inteligência Artificial desenhada para triagem clínica primária. Através do telemóvel, o cidadão descreve sintomas e recebe orientação, direcionamento para hospitais e um relatório clínico imediato.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">O Dr.IA substitui uma consulta médica presencial?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Não.</strong> O Dr.IA atua como uma ferramenta preliminar de apoio à decisão clínica e triagem primária. Ele ajuda a organizar, triar e avaliar a gravidade dos sintomas do paciente, mas <strong>nunca substitui</strong> a consulta, o exame físico ou o diagnóstico definitivo de um médico licenciado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">Os meus dados clínicos e de saúde estão protegidos?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Sim, com rigor absoluto. O DR.IA APP opera sob fortes protocolos de segurança e criptografia, respeitando integralmente a Lei Geral de Proteção de Dados (LGPD). Seus sintomas e histórico são de acesso exclusivo seu e do hospital selecionado no ato de envio.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">Como é que o hospital recebe o meu relatório de triagem?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Ao concluir a triagem na plataforma do Cidadão, você escolhe uma unidade hospitalar municipal recomendada. O sistema envia imediatamente o relatório de forma encriptada e segura para a plataforma do Hospital, permitindo que a receção e a equipe médica preparem o atendimento de forma acelerada antes da sua chegada.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">Por que a plataforma é gratuita para os cidadãos?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              A gratuidade é garantida por meio de parcerias e acordos anuais institucionais celebrados com as administrações dos Municípios e Governos Provinciais. Os órgãos estatais financiam o serviço para promover a inclusão digital social, melhorar a saúde pública e reduzir as filas de urgência das suas unidades locais.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">Como as clínicas e hospitais privados podem aderir?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              As clínicas e hospitais privados que queiram usufruir da receção antecipada de pacientes triados e otimizar as suas filas e prioridades de atendimento inteligente podem aderir ao plano comercial com um custo mensal recorrente de 15.000 Kz/mês.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-950 uppercase mb-2 tracking-wider">Como funciona o Painel do Ministério da Saúde?</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              O Ministério da Saúde acede a dados agregados e 100% anonimizados de triagem nacional e municipal. O sistema gera análises epidemiológicas de sintomas em tempo real, permitindo identificar e conter surtos (como surtos de malária ou cólera) com rapidez e inteligência geográfica.
            </p>
          </div>
        </section>

        <section className="pt-4 border-t border-gray-100">
          <div className="flex flex-col">
            <span className="text-4xl font-black text-gray-900 tracking-tighter leading-none">DR.IA APP</span>
            <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-[10px] leading-none mt-2">República de Angola</span>
          </div>
        </section>
      </div>
    </main>
  );
}
