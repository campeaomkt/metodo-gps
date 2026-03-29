/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
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
  Target,
  DollarSign,
  Rocket
} from "lucide-react";

const episodes = [
  { id: 1, title: "O Começo do Zero", desc: "Iniciante, eu não esqueci de você. Peguei um perfil do Facebook virgem que nunca tinha rodado anúncio, criei toda a estrutura e fiz o aquecimento do absoluto zero." },
  { id: 2, title: "Espionagem", desc: "Sem nem saber qual produto eu ia vender, fui direto na biblioteca de anúncios e mostrei como encontrar produtos milionários ocultos que são inexplorados." },
  { id: 3, title: "Modelagem Cultural", desc: "Depois de encontrar a oferta em português, transformei ela numa versão em espanhol, adaptada pra cultura e linguagem do mercado latino." },
  { id: 4, title: "Criativos Infinitos", desc: "Aqui mais uma vez eu usei somente IA para fazer tudo: avatar, copy e edição. Um método que me permite produzir criativos sem limites." },
  { id: 5, title: "Teste Inteligente", desc: "Sem sair torrando dinheiro igual um maluco, usei minha metodologia de teste rápido de criativos pra descobrir se a oferta tinha futuro." },
  { id: 6, title: "Otimização de Escala", desc: "Como subir tudo do jeito certo para não tomar bloqueio. Identifiquei onde estava o problema e usei meu processo de otimização." },
  { id: 7, title: "O Entregável em App", desc: "Transformei a oferta em um aplicativo (sem programar e em minutos). Isso reduziu reembolso e aumentou a percepção de valor." },
  { id: 8, title: "Upsell e Downsell", desc: "Criei ofertas complementares de upsell e downsell, entreguei os scripts prontos e ensinei como aumentar o faturamento." },
  { id: 9, title: "Trackeamento Avançado", desc: "Como eu não manjo nada disso, chamei meu mano especialista pra cuidar do trackeamento. Esse processo faz você vender com até 40% a mais de lucro." },
  { id: 10, title: "Escala com 1 Campanha Só", desc: "Depois de deixar tudo redondo, escalei o produto usando o 'Método de 1 Campanha Só' até bater 10k por mês já na primeira semana." },
];

const salaries = [
  { country: "Costa Rica", usd: 750 },
  { country: "Panamá", usd: 637 },
  { country: "Uruguai", usd: 629 },
  { country: "Chile", usd: 595 },
  { country: "Guatemala", usd: 530 },
  { country: "México", usd: 528 },
  { country: "Equador", usd: 482 },
  { country: "Bolívia", usd: 477 },
  { country: "Rep. Dominicana", usd: 476 },
  { country: "Colômbia", usd: 470 },
  { country: "Paraguai", usd: 442 },
  { country: "Honduras", usd: 342 },
  { country: "Peru", usd: 336 },
  { country: "El Salvador", usd: 305 },
  { country: "Brasil", usd: 298, highlight: true },
  { country: "Nicarágua", usd: 255 },
  { country: "Argentina", usd: 231 },
  { country: "Cuba", usd: 5 },
  { country: "Venezuela", usd: 1 },
];

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark selection:bg-brand-primary selection:text-black">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-5 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-brand-primary font-display font-bold tracking-widest text-sm mb-6 uppercase">
              Método GPS — Eliab Campos dos Santos
            </h2>
            <h1 className="text-5xl md:text-8xl font-display font-black leading-tight mb-8">
              DO ZERO AOS <br />
              <span className="text-brand-primary glow-text">10K POR MÊS</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Eu sei que você está cansado de teoria. Por isso você vai ver na prática um infoproduto sendo criado do <span className="text-white font-bold">ABSOLUTO ZERO</span> até atingir 10 mil reais por mês.
            </p>
            
            <button className="bg-brand-primary text-black font-display font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,255,157,0.4)] flex items-center gap-3 mx-auto">
              QUERO MEU ACESSO AGORA <ArrowRight size={24} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-brand-secondary py-3 overflow-hidden border-y border-white/10">
        <div className="animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-display font-black text-sm mx-8 uppercase">
              DO ZERO AOS 10K POR MÊS • MÉTODO GPS • ELIAB CAMPOS • DO ZERO AOS 10K POR MÊS • 
            </span>
          ))}
        </div>
      </div>

      {/* Video Intro Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden gradient-border group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Dashboard Preview" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
              <div className="w-24 h-24 rounded-full bg-brand-primary flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={40} fill="currentColor" />
              </div>
              <h3 className="mt-8 text-2xl font-display font-bold">Aprenda com quem mata a cobra e mostra o pau.</h3>
              <p className="mt-2 text-gray-400">Assista ao vídeo de introdução</p>
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto space-y-6 text-lg text-gray-300">
            <p>Vou te ensinar o passo a passo do método que coloca <span className="text-brand-primary font-bold">R$ 10.000,00 no meu bolso todos os meses</span> vendendo infoprodutos no tráfego direto.</p>
            <p className="font-bold text-white text-2xl">Sem aparecer, sem equipe e 100% com IA.</p>
            <p>Chega de tentar vender no Brasil saturado. É hora de surfar o <span className="text-brand-primary font-bold italic">Oceano Azul Latino</span>.</p>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-24 bg-white/5 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-display font-black text-center mb-16">
            O QUE VOCÊ VAI <span className="text-brand-primary">DOMINAR</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {episodes.map((ep) => (
              <motion.div 
                key={ep.id}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: ep.id % 2 === 0 ? 20 : -20 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-2xl bg-bg-card gradient-border hover:bg-white/5 transition-colors"
              >
                <div className="flex-shrink-0 w-40 h-24 rounded-lg bg-black/50 flex items-center justify-center relative overflow-hidden">
                  <Play size={24} className="text-brand-primary z-10" />
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-gray-500">EP.{ep.id}</div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Ep.{ep.id} {ep.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{ep.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-12">No mercado latino você tem 70% mais chance de sucesso comparado a vender no Brasil.</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-bg-card gradient-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">🇨🇴</span>
                <span className="font-bold uppercase tracking-widest text-sm text-gray-400">Colômbia</span>
              </div>
              <div className="text-4xl font-display font-black text-brand-primary mb-2">R$ 42.023,62</div>
              <div className="text-xs text-gray-500 uppercase">em faturamento este mês</div>
            </div>
            
            <div className="p-8 rounded-3xl bg-bg-card gradient-border">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-2xl">🇲🇽</span>
                <span className="font-bold uppercase tracking-widest text-sm text-gray-400">México</span>
              </div>
              <div className="text-4xl font-display font-black text-brand-primary mb-2">R$ 30.788,77</div>
              <div className="text-xs text-gray-500 uppercase">em faturamento este mês</div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Comparison */}
      <section className="py-24 bg-white/5 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold italic mb-4">"Ah Eliab, mas o povo latino é pobre"</h2>
            <p className="text-gray-400">Meu amigo, veja abaixo o ranking dos salários mínimos de toda a América Latina já convertidos para dólar:</p>
          </div>
          
          <div className="bg-bg-card rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-3 p-4 bg-white/5 text-xs font-bold uppercase tracking-widest text-gray-500">
              <span># País</span>
              <span className="text-right">USD</span>
              <span className="text-right">Ação</span>
            </div>
            <div className="divide-y divide-white/5">
              {salaries.map((s, i) => (
                <div key={i} className={`grid grid-cols-3 p-4 text-sm ${s.highlight ? 'bg-brand-secondary/20 text-brand-secondary font-bold' : 'text-gray-300'}`}>
                  <span>{i + 1}. {s.country}</span>
                  <span className="text-right">${s.usd}</span>
                  <span className="text-right text-[10px] opacity-50">{s.highlight ? 'VOCÊ ESTÁ AQUI' : ''}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-display">O Brasil é o <span className="text-brand-secondary font-bold">15º da lista</span>. E você tentando vender aqui...</p>
            <p className="text-gray-400 mt-4">Enquanto isso o povo latino tem mais poder de compra, menos concorrência no tráfego e um mercado três vezes maior pra explorar.</p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full" />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974" 
              alt="Eliab Campos" 
              className="relative rounded-3xl w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-black leading-tight">
              QUEM É <br />
              <span className="text-brand-primary">ELIAB CAMPOS?</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Eu larguei a carreira de <span className="text-white font-bold">oficial do exército</span> para viver do digital. Você largaria um cargo público concursado, ganhando R$ 10 mil por mês e com aposentadoria garantida de mais de R$ 20 mil?
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Pois eu larguei. Esse é o tamanho da minha convicção no que eu faço, e no que vou te ensinar. Troquei a "estabilidade" porque acreditei que o digital era a única forma de eu ficar rico de verdade em pouco tempo.
            </p>
            <p className="text-xl font-display font-bold text-white italic">
              E agora é a sua vez de viver esse sonho também. Conte comigo pra te ensinar TUDO O QUE SEI.
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 px-4 bg-brand-primary/5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-bg-card rounded-[40px] p-8 md:p-16 border-2 border-brand-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target size={200} className="text-brand-primary" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-black mb-8">
                MÉTODO GPS <br />
                <span className="text-brand-primary">DO ZERO AOS 10K POR MÊS</span>
              </h2>
              
              <div className="space-y-4 mb-12 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span>Documentário criando o produto do zero</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span>Calls Tira-Dúvidas Mensais AO VIVO</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span>Suporte VIP no WhatsApp</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-brand-primary" size={20} />
                  <span>Acesso vitalício às atualizações</span>
                </div>
              </div>
              
              <div className="mb-10">
                <div className="text-gray-500 line-through text-2xl mb-2">De R$ 997,00</div>
                <div className="text-6xl md:text-8xl font-display font-black text-white mb-2">
                  12x R$ 39,62
                </div>
                <div className="text-xl text-brand-primary font-bold uppercase tracking-widest">
                  ou R$ 397,00 à vista
                </div>
              </div>
              
              <button className="w-full bg-brand-primary text-black font-display font-bold text-2xl py-6 rounded-2xl hover:scale-[1.02] transition-transform shadow-[0_0_40px_rgba(0,255,157,0.3)] mb-6">
                GARANTIR MINHA VAGA AGORA
              </button>
              
              <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                <ShieldCheck size={16} /> Compra 100% segura • 7 dias de garantia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-black text-center mb-16">
            BÔNUS <span className="text-brand-primary">EXCLUSIVOS</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <Gift className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-display font-bold mb-4">Calls com Especialistas</h4>
              <p className="text-gray-400 text-sm">Calls com convidados especialistas em espionagem, criativos, funil de quiz, VSL e muito mais.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <TrendingUp className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-display font-bold mb-4">Análise de Ofertas</h4>
              <p className="text-gray-400 text-sm">Análise prática de mais duas ofertas minhas que escalaram + de 1 milhão cada.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-bg-card gradient-border relative overflow-hidden group">
              <DollarSign className="text-brand-primary mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h4 className="text-xl font-display font-bold mb-4">Masterclass Contábil</h4>
              <p className="text-gray-400 text-sm">Tudo o que você precisa saber sobre impostos e contabilidade para vendas internacionais.</p>
            </div>
          </div>
          
          <div className="mt-12 p-6 rounded-2xl bg-brand-secondary/10 border border-brand-secondary/20 text-center">
            <p className="text-brand-secondary font-bold">Bônus somados que valem mais de R$ 3.000,00, mas que você vai pagar R$ 0,00 ao entrar agora.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-24 px-4 bg-emerald-500/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-6 rounded-full bg-emerald-500/20 text-emerald-500 mb-8">
            <MessageSquare size={48} />
          </div>
          <h2 className="text-4xl font-display font-black mb-6">COMUNIDADE GPS</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Faça parte do maior Grupo de Networking de Low Ticket em Dólar no WhatsApp. Troque experiências com quem já está faturando.
          </p>
          <button className="bg-emerald-500 text-white font-display font-bold text-xl px-12 py-6 rounded-full hover:scale-105 transition-transform flex items-center gap-3 mx-auto">
            ENTRAR NO GRUPO VIP <ChevronRight size={24} />
          </button>
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
