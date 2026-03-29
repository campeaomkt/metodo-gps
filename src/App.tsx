/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare,
  Gift,
  ChevronRight,
  ChevronDown,
  Target,
  DollarSign,
  Rocket
} from "lucide-react";

const episodes = [
  { id: 1, title: "Concepção e Ideia", desc: "O primeiro passo para o sucesso. Aprenda a identificar nichos lucrativos e produtos com alta demanda reprimida, garantindo que você comece no caminho do lucro real." },
  { id: 2, title: "Mineração de Ofertas", desc: "Aprenda a encontrar as ofertas que já estão faturando alto no mercado. Use a inteligência competitiva para filtrar o que realmente funciona e economizar tempo e dinheiro." },
  { id: 3, title: "Modelagem Estratégica", desc: "Esqueça o 'copia e cola'. Isso não traz resultados. Vou te ensinar a forma estratégica de modelar o que funciona, adaptando para o seu contexto e criando uma oferta única e imbatível." },
  { id: 4, title: "Página de Vendas Express", desc: "Crie uma página de vendas premium e de alta conversão em apenas 5 minutos. Sem precisar de programadores ou designers caros, com apenas alguns cliques." },
  { id: 5, title: "Entregáveis Profissionais", desc: "Crie produtos e bônus de alto valor percebido em minutos. Aprenda a entregar exatamente o que o seu cliente deseja com uma qualidade que gera autoridade imediata." },
  { id: 6, title: "Funil de Vendas Lucrativo", desc: "O divisor de águas do digital. Enquanto a maioria erra aqui, você terá a estrutura exata para guiar seu cliente do primeiro contato até a compra final." },
  { id: 7, title: "Meta Ads do Zero ao Avançado", desc: "Domine a ferramenta de anúncios mais poderosa do mundo. Aprenda a subir campanhas com a estrutura correta para evitar bloqueios e maximizar o seu ROI." },
  { id: 8, title: "Análise de Métricas", desc: "Não jogue no escuro. Entenda cada número do seu funil e saiba exatamente onde o seu dinheiro está rendendo mais e onde precisa de ajustes." },
  { id: 9, title: "Otimização Método GPS", desc: "O segredo do lucro alto. Saiba exatamente o que fazer e quando fazer para ajustar suas engrenagens e faturar muito mais com o mesmo investimento." },
  { id: 10, title: "Escala Explosiva", desc: "Hora de crescer. Conheça os variados tipos de escalas e estruturas de campanhas para levar o seu faturamento do zero aos 10k e além." },
];

const salaries = [
  { rank: "01", country: "Luxemburgo", usd: 2710 },
  { rank: "02", country: "Austrália", usd: 2320 },
  { rank: "03", country: "Holanda", usd: 2180 },
  { rank: "04", country: "Nova Zelândia", usd: 2100 },
  { rank: "05", country: "Reino Unido", usd: 2050 },
  { rank: "06", country: "Alemanha", usd: 1980 },
  { rank: "07", country: "Canadá", usd: 1850 },
  { rank: "08", country: "França", usd: 1780 },
  { rank: "09", country: "Bélgica", usd: 1750 },
  { rank: "10", country: "Irlanda", usd: 1700 },
  { rank: "11", country: "Estados Unidos", usd: 1250 },
  { rank: "12", country: "Espanha", usd: 1180 },
  { rank: "13", country: "Coreia do Sul", usd: 1150 },
  { rank: "14", country: "Japão", usd: 1080 },
  { rank: "15", country: "Portugal", usd: 950 },
  { rank: "67", country: "Brasil", usd: 280, highlight: true },
];

const lifestyleImages = [
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0930.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_1006.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0919.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0939.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0927.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0989.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0991.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0940.jpg",
  "https://eliabcamposteclas.com/wp-content/uploads/2026/03/IMG_0929.jpg",
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-display font-bold group-hover:text-brand-primary transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`text-brand-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row md:items-center overflow-hidden bg-bg-dark">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Refined Background Glows */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[80%] bg-blue-900/20 blur-[150px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-brand-secondary/10 blur-[150px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-brand-primary/5 blur-[150px] rounded-full" />
          </div>

          {/* Elegant World Map Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] opacity-[0.07] z-10 mix-blend-overlay" />
        </div>

        {/* Author Image: Sophisticated Integration */}
        <div className="relative md:absolute right-0 top-0 w-full md:w-[85%] h-[35vh] md:h-full z-0">
          <div className="relative w-full h-full">
            {/* Mobile Image */}
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/ChatGPT-Image-29-de-mar.-de-2026-09_21_58-1.jpg" 
              alt="Eliab Campos Mobile" 
              className="w-full h-full object-cover object-top opacity-100 md:hidden block"
              referrerPolicy="no-referrer"
            />
            {/* Desktop Image */}
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/ChatGPT-Image-29-de-mar.-de-2026-09_32_39.jpg" 
              alt="Eliab Campos Desktop" 
              className="w-full h-full object-cover object-[center_left] opacity-100 hidden md:block"
              referrerPolicy="no-referrer"
            />
            {/* Sophisticated Gradient Masking */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/40 to-transparent md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent md:hidden block" />
            
            {/* Subtle Light Leak Effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-brand-primary/5 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Refined Money Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/money.png')] opacity-[0.03] z-20 pointer-events-none mix-blend-screen" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-30 pt-0 pb-24 md:py-24">
          <div className="max-w-4xl flex flex-col items-center md:items-start text-center md:text-left">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-10 flex flex-col items-center md:items-start"
            >
              <div className="space-y-4 flex flex-col items-center md:items-start">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-brand-primary font-display font-bold tracking-[0.4em] text-[10px] uppercase"
                >
                  Método GPS • Eliab Campos
                </motion.span>
                
                <h1 className="text-white font-display font-black text-3xl sm:text-4xl md:text-8xl lg:text-9xl leading-[0.8] tracking-tighter uppercase">
                  <span className="font-light opacity-60">DO</span> ZERO <br />
                  <span className="relative">
                    AOS <span className="text-white">10K</span>
                  </span>
                </h1>
                
                <div className="inline-flex items-center gap-4">
                  <div className="h-[1px] w-8 md:w-12 bg-brand-secondary hidden md:block" />
                  <div className="bg-brand-secondary px-6 md:px-8 py-2 md:py-3 transform -skew-x-6">
                    <span className="text-white font-display font-black text-xl md:text-4xl uppercase italic tracking-tighter block transform skew-x-6">
                      POR MÊS
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6 max-w-xl flex flex-col items-center md:items-start">
                <p className="text-xl md:text-3xl font-display font-medium text-white/95 leading-tight tracking-tight">
                  Eu sei que você está cansado de teoria. <br />
                  <span className="text-brand-primary italic">Chegou a hora da prática.</span>
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                  Você vai ver na prática um infoproduto sendo criado do <span className="text-white font-bold tracking-wider">ABSOLUTO ZERO</span> até atingir a marca de <span className="text-white border-b border-brand-primary/50">10 MIL REAIS</span> por mês.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
                <button 
                  onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto group relative bg-brand-primary text-black font-display font-black text-base md:text-lg px-6 md:px-12 py-3.5 md:py-5 rounded-2xl hover:bg-white transition-all duration-500 flex items-center justify-center gap-4 shadow-[0_20px_50px_rgba(0,255,157,0.2)] whitespace-nowrap"
                >
                  QUERO MEU ACESSO AGORA
                  <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={20} />
                </button>
                
                <div className="flex flex-col items-center md:items-start bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-[0.3em] font-black mb-0.5">
                    Status do Sistema
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,157,0.5)]" />
                    <span className="text-[9px] md:text-[10px] text-white font-bold uppercase tracking-widest">Vagas Disponíveis</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sophisticated Marquee */}
        <div className="absolute bottom-0 left-0 w-full bg-brand-secondary py-3 md:py-4 overflow-hidden border-t border-white/5 z-40">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white font-display font-black text-sm md:text-lg mx-8 md:mx-12 uppercase tracking-[0.2em] italic">
                DO ZERO AOS 10K POR MÊS ★ MÉTODO GPS ★ ELIAB CAMPOS ★ 
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Image Intro Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden gradient-border shadow-2xl">
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/ChatGPT-Image-29-de-mar.-de-2026-11_24_22.jpg" 
              alt="Método GPS Dashboard" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="mt-10 md:mt-16 text-center max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-300">
            <p>Vou te ensinar o passo a passo do método que coloca <span className="text-brand-primary font-bold">R$ 10.000,00 no meu bolso todos os meses</span> vendendo infoprodutos no tráfego direto.</p>
            <p className="font-bold text-white text-xl md:text-2xl">Sem aparecer, sem equipe e 100% com IA.</p>
            <p>Chega de tentar vender no Brasil saturado. É hora de surfar o <span className="text-brand-primary font-bold italic">Oceano Azul Latino</span>.</p>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16 md:py-24 bg-white/5 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-display font-black text-center mb-12 md:mb-16 uppercase tracking-tighter">
            Etapas do <span className="text-brand-primary">Método:</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {episodes.map((ep) => (
              <motion.div 
                key={ep.id}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: ep.id % 2 === 0 ? 20 : -20 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-bg-card gradient-border hover:bg-white/5 transition-colors"
              >
                <div className="flex-shrink-0 w-full sm:w-40 h-32 sm:h-24 rounded-lg bg-black/50 flex items-center justify-center relative overflow-hidden">
                  <Play size={24} className="text-brand-primary z-10" />
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-gray-500 uppercase">ETAPA {ep.id}</div>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-display font-bold mb-2">Etapa {ep.id}: {ep.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{ep.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section: Dollar Power */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-display font-black mb-6 uppercase tracking-tighter">
            Crie ofertas em <span className="text-brand-primary">qualquer idioma</span> e fature em <span className="text-brand-primary">Dólar</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 md:mb-16 max-w-3xl mx-auto">
            O Dólar é a moeda mais forte do mundo. Ganhar 5x mais com o mesmo esforço é o que separa os amadores dos verdadeiros players do digital. <span className="text-white font-bold">Proteja seu patrimônio e multiplique seu poder de compra.</span>
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="p-8 md:p-10 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <DollarSign size={80} />
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-2xl">🇺🇸</span>
                <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-gray-400">Mercado Global (USD)</span>
              </div>
              <div className="text-4xl md:text-5xl font-display font-black text-brand-primary mb-2">$ 8.405,00</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase font-mono">Faturamento em Dólar</div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="text-xl md:text-2xl font-display font-bold text-white">R$ 42.025,00</div>
                <div className="text-[10px] text-gray-500 uppercase">Conversão direta para Real</div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={80} />
              </div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="text-2xl">🌍</span>
                <span className="font-bold uppercase tracking-widest text-xs md:text-sm text-gray-400">Poder de Escala</span>
              </div>
              <div className="text-4xl md:text-5xl font-display font-black text-brand-primary mb-2">5X MAIS</div>
              <div className="text-[10px] md:text-xs text-gray-500 uppercase font-mono">Poder de Compra no Brasil</div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Trabalhando para o mundo, você gasta em Real e ganha em Dólar. É a maior arbitragem financeira que existe hoje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Lifestyle Carousel */}
      <section className="py-12 overflow-hidden bg-black/20">
        <div className="flex flex-col gap-8">
          <div className="flex animate-marquee-slow whitespace-nowrap">
            {[...lifestyleImages, ...lifestyleImages].map((img, i) => (
              <div key={i} className="inline-block px-4">
                <div className="w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden gradient-border shadow-2xl">
                  <img 
                    src={img} 
                    alt={`Lifestyle ${i}`} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Comparison */}
      <section className="py-16 md:py-24 bg-white/5 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl md:text-3xl font-display font-black italic mb-4 uppercase tracking-tighter">"Ah Eliab, mas o mercado é limitado..."</h2>
            <p className="text-gray-400 text-base md:text-lg">
              Pare de olhar apenas para o seu quintal. O jogo é <span className="text-white font-bold">GLOBAL</span>. <br />
              Veja o ranking real dos salários mínimos pelo mundo e entenda por que o Brasil é o lugar mais difícil de enriquecer:
            </p>
          </div>
          
          <div className="bg-bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="grid grid-cols-3 p-4 md:p-6 bg-white/5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500 border-b border-white/5">
              <span># País</span>
              <span className="text-right">USD</span>
              <span className="text-right">Status</span>
            </div>
            <div className="divide-y divide-white/5">
              {salaries.map((s, i) => (
                <div 
                  key={s.country} 
                  className={`grid grid-cols-3 p-4 md:p-6 items-center transition-colors ${s.highlight ? 'bg-brand-secondary/10 border-l-4 border-brand-secondary' : 'hover:bg-white/5'}`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-[10px] md:text-xs font-mono text-gray-500">
                      {s.rank}
                    </span>
                    <span className={`text-sm md:text-base font-display font-bold ${s.highlight ? 'text-brand-secondary' : 'text-white'}`}>{s.country}</span>
                  </div>
                  <div className={`text-right text-sm md:text-base font-mono font-bold ${s.highlight ? 'text-brand-secondary' : 'text-gray-300'}`}>
                    ${s.usd.toLocaleString()}
                  </div>
                  <div className="text-right">
                    {s.highlight ? (
                      <span className="bg-brand-secondary text-white text-[8px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded-full uppercase tracking-tighter">Você está aqui</span>
                    ) : (
                      <span className="text-[8px] md:text-[10px] text-gray-600 font-bold uppercase tracking-widest">Mercado Alvo</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-3xl bg-brand-secondary/10 border border-brand-secondary/20 text-center">
            <p className="text-brand-secondary font-display font-bold text-xl italic">
              "Enquanto você foca no Brasil, o mundo está pronto para pagar 5x mais pelo seu produto."
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full" />
            <img 
              src="https://eliabcamposteclas.com/wp-content/uploads/2026/03/Fotos-Eliab-7-1.jpg" 
              alt="Eliab Campos" 
              className="relative rounded-3xl w-full aspect-[4/5] object-cover transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-display font-black leading-tight">
              QUEM É <br className="hidden md:block" />
              <span className="text-brand-primary">ELIAB CAMPOS?</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Eu abri mão da minha própria <span className="text-white font-bold">oficina mecânica</span> para viver do digital. Você teria coragem de deixar um negócio físico estabelecido, com clientes e faturamento certo, para apostar tudo na internet?
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Pois eu fiz isso. Esse é o tamanho da minha convicção no que eu faço, e no que vou te ensinar. Troquei a graxa e o trabalho pesado porque acreditei que o digital era a única forma de eu ter liberdade e ficar rico de verdade em pouco tempo.
            </p>
            <p className="text-xl font-display font-bold text-white italic">
              E agora é a sua vez de viver esse sonho também. Conte comigo pra te ensinar TUDO O QUE SEI.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-16 md:py-24 px-4 bg-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-card rounded-3xl md:rounded-[40px] p-6 md:p-16 border-2 border-brand-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
              <Target size={200} className="text-brand-primary" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-xl md:text-5xl font-display font-black mb-8">
                MÉTODO GPS <br />
                <span className="text-brand-primary">DO ZERO AOS 10K POR MÊS</span>
              </h2>
              
              <div className="space-y-4 mb-12 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span>Documentário criando o produto ao vivo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span>Suporte Individual via Whatsapp</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span>Acesso Vitalício</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span>Direito á atualizações futuras</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span>Todos os Bônus inclusos</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                  <CheckCircle2 className="text-brand-primary flex-shrink-0" size={20} />
                  <span>Garantia Incondicional</span>
                </div>
              </div>
              
              <div className="mb-10">
                <div className="text-gray-500 line-through text-xl md:text-2xl mb-2">De R$ 497,00</div>
                <div className="text-4xl sm:text-5xl md:text-8xl font-display font-black text-white mb-2">
                  12x R$ 20,37
                </div>
                <div className="text-lg md:text-xl text-brand-primary font-bold uppercase tracking-widest">
                  ou R$ 197,00 à vista
                </div>
              </div>
              
              <a 
                href="https://pay.kiwify.com.br/kGgbHqf"
                className="block w-full bg-brand-primary text-black font-display font-black text-lg md:text-2xl py-4 md:py-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(0,255,157,0.3)] mb-6 text-center"
              >
                GARANTIR MINHA VAGA AGORA
              </a>
              
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> Compra 100% segura • Garantia Incondicional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-16">
            BÔNUS <span className="text-brand-primary">EXCLUSIVOS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <Users className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-display font-bold mb-4">Grupo de Networking</h4>
              <p className="text-gray-400 text-sm">Conecte-se com outros players que estão no mesmo campo de batalha que você e troque experiências valiosas.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <MessageSquare className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-display font-bold mb-4">Suporte Individual via Whatsapp</h4>
              <p className="text-gray-400 text-sm">Tire suas dúvidas diretamente com quem vive o mercado e acelere sua jornada rumo aos resultados.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <Rocket className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-display font-bold mb-4">Atualizações Gratuitas</h4>
              <p className="text-gray-400 text-sm">Tenha acesso a todas as novas estratégias e aulas que eu adicionar ao método sem pagar nada a mais.</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 rounded-2xl bg-brand-secondary/10 border border-brand-secondary/20 text-center">
            <p className="text-brand-secondary font-bold">Bônus somados que valem mais de R$ 1.000,00, mas que você vai pagar R$ 0,00 ao entrar agora.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-bg-card/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-16">
            PERGUNTAS <span className="text-brand-primary">FREQUENTES</span>
          </h2>
          
          <div className="space-y-4">
            <FAQItem 
              question="Como vou receber o acesso ao Método GPS?" 
              answer="O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail da Kiwify com seus dados de acesso à nossa Área de Membros Premium, onde todas as aulas e bônus já estão disponíveis."
            />
            <FAQItem 
              question="Preciso de um computador para começar?" 
              answer="Não necessariamente. Você consegue assistir às aulas e aplicar boa parte das estratégias pelo celular, mas para a criação das páginas e gestão de anúncios, um computador facilitará muito o seu trabalho."
            />
            <FAQItem 
              question="O Método GPS tem garantia?" 
              answer="Sim! Você tem uma Garantia Incondicional de 7 dias. Se por qualquer motivo você achar que o conteúdo não é para você, basta solicitar o reembolso na Kiwify e devolvemos 100% do seu dinheiro."
            />
            <FAQItem 
              question="Por quanto tempo terei acesso ao curso?" 
              answer="O seu acesso é Vitalício. Isso significa que você pode assistir às aulas no seu ritmo e terá acesso a todas as atualizações futuras sem nenhum custo adicional."
            />
            <FAQItem 
              question="Como funciona o suporte?" 
              answer="Nosso suporte é individual e humanizado via WhatsApp. Você não falará com robôs, mas sim com especialistas prontos para tirar suas dúvidas e te ajudar a destravar seus resultados."
            />
            <FAQItem 
              question="A Kiwify é uma plataforma segura?" 
              answer="Sim, a Kiwify é uma das maiores e mais seguras plataformas de infoprodutos do Brasil. Seus dados estão 100% protegidos e a transação é criptografada."
            />
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <button 
              onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-brand-primary text-black font-display font-black text-base md:text-xl px-8 py-4 md:px-12 md:py-5 rounded-2xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,255,157,0.3)] flex items-center justify-center gap-3"
            >
              GARANTIR MINHA VAGA <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-display font-bold mb-6 text-brand-primary">MÉTODO GPS</h3>
          <p className="text-gray-500 text-sm mb-8">
            © 2026 Eliab Campos dos Santos. Todos os direitos reservados. <br />
            Este site não faz parte do Google ou do Facebook. Além disso, este site NÃO é endossado pelo Google ou Facebook de nenhuma maneira.
          </p>
          <div className="flex justify-center gap-8 text-xs text-gray-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
