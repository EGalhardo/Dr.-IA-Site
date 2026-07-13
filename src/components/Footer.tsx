import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-brand-footer text-white pt-[67px] pb-[67px] md:pt-[115px] md:pb-[134px] lg:pt-[173px] lg:pb-[211px] xl:pt-[230px] xl:pb-[269px] border-t-[7px] border-blue-600 relative overflow-hidden">
      {/* Main Background Image with referrerPolicy to bypass cross-origin restrictions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.postimg.cc/qvyrsDmp/Chat-GPT-Image-3-de-jul-de-2026-19-48-23.png" 
          alt="Dr. IA Background" 
          className="w-full h-full object-cover object-center opacity-100 filter brightness-[1.25] contrast-[1.02] select-none"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="font-black text-lg lg:text-xl mb-2.5 italic tracking-tightest leading-tight">Dr.IA App</div>
              <p className="text-blue-100/90 text-xs lg:text-[13px] leading-relaxed mb-3.5 font-medium">O seu médico pessoal na palma da mão</p>
            </div>
            <div className="flex gap-2.5">
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-lg lg:rounded-xl bg-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-blue-950/40 border border-white/10">
                <Facebook size={15} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-lg lg:rounded-xl bg-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-blue-950/40 border border-white/10">
                <Instagram size={15} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-lg lg:rounded-xl bg-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-blue-950/40 border border-white/10">
                <Youtube size={15} />
              </a>
              <a href="#" onClick={(e) => e.preventDefault()} className="w-8 h-8 lg:w-8.5 lg:h-8.5 rounded-lg lg:rounded-xl bg-blue-600 hover:bg-blue-50 flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-blue-950/40 border border-white/10">
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Column 1: Plataformas */}
          <div>
            <h4 className="font-black text-xs tracking-widest text-[#53f7ff] uppercase mb-3.5">PLATAFORMAS</h4>
            <ul className="space-y-2.5 text-xs lg:text-[13px] text-white font-bold">
              <li><a href="/#cidadao" className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Dr.IA Cidadão</a></li>
              <li><a href="/#hospitais" className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Dr.IA Hospital</a></li>
              <li><a href="/#ministerio" className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Ministério da Saúde</a></li>
            </ul>
          </div>

          {/* Beautiful Empty Spacer for Center Logo Visibility */}
          <div className="hidden lg:block pointer-events-none" aria-hidden="true" />

          {/* Column 2: Recursos */}
          <div>
            <h4 className="font-black text-xs tracking-widest text-[#53f7ff] uppercase mb-3.5">RECURSOS</h4>
            <ul className="space-y-2.5 text-xs lg:text-[13px] text-white font-bold">
              <li><a href="/#recursos" className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Primeiros Socorros</a></li>
              <li><Link to="/faq" className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Perguntas Frequentes</Link></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Termos de Uso</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-amber-400 transition-all hover:translate-x-1.5 inline-block">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Column 3: Suporte */}
          <div>
            <h4 className="font-black text-xs tracking-widest text-[#53f7ff] uppercase mb-3.5">SUPORTE</h4>
            <ul className="space-y-2.5 text-xs lg:text-[13px] text-white font-bold">
              <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <div className="p-1 bg-blue-600 rounded-md shrink-0"><Phone size={13} /></div> 
                <span className="truncate">+244 923 456 789</span>
              </li>
              <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <div className="p-1 bg-blue-600 rounded-md shrink-0"><Mail size={13} /></div> 
                <span className="truncate font-sans select-all text-[11px]">suporte@dria.ao</span>
              </li>
              <li className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <div className="p-1 bg-blue-600 rounded-md shrink-0"><MapPin size={13} /></div> 
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-gray-400 text-[11px] font-black tracking-widest w-full">
          <span>© 2025 Dr.IA App. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
