"use client"
import React from 'react';
import Head from 'next/head';

const pixelId = '801149143038789';
const whatsappLink = "https://wa.me/237676828121?text=Bonjour Jordan, je souhaite lancer ma boutique avec ta solution";
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}
export default function LandingPage() {
    // ✅ Facebook Lead tracking helper
  const trackLead = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  return (
    <div className="bg-[#050806] text-[#f0fdf4] font-sans selection:bg-[#00C853] selection:text-white overflow-x-hidden text-sm md:text-base">
      <Head>
        <title>Les Solutions de Jordan le Développeur | E-commerce Pro au Cameroun</title>
        <meta name="description" content="Payez une seule fois, vendez à vie. Intégration MoMo & Orange Money incluse par Jordan le Développeur." />
        <script dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}} />
      </Head>

      {/* AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00C853]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FFB300]/5 blur-[100px] rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 inset-x-0 z-[100] flex justify-between items-center px-6 md:px-12 py-5 bg-[#050806]/60 backdrop-blur-md border-b border-white/5">
        <div className="font-black text-lg md:text-2xl tracking-tighter italic leading-none">
          Les Solutions de <span className="text-[#00C853]">Jordan le Développeur</span>
        </div>
        <a href={whatsappLink} onClick={trackLead} className="bg-[#25D366] hover:bg-[#1eb957] text-white px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-[#25D366]/20 shrink-0">
          Discuter avec Jordan
        </a>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-6 text-center max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00C853]/40 bg-[#00C853]/10 rounded-full text-[#00C853] text-[11px] font-bold tracking-widest mb-10 animate-fade-in uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C853] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C853]"></span>
          </span>
          Propulsez votre business au Cameroun
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
          Vendez en ligne <br />
          <span className="bg-gradient-to-r from-[#00C853] via-[#81f7ad] to-[#FFB300] bg-clip-text text-transparent">Sans abonnement.</span>
        </h1>

        <p className="text-[#a3b8a8] text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Offrez à votre business une boutique en ligne ultra-performante, conçue pour convertir.
          Elle intègre un <span className="text-white font-medium"> système de paiement à la livraison</span>, avec
          <span className="text-white font-medium"> MoMo & Orange Money</span> activables à tout moment selon votre croissance.
          Profitez d’un <span className="text-white font-medium"> panneau d’administration avancé</span> pour piloter vos ventes,
          ainsi que de l’intégration du <span className="text-white font-medium">Facebook Pixel</span> pour optimiser chaque campagne.
          Un <span className="text-white font-medium">investissement unique</span>, sans abonnement — seul le renouvellement de votre nom de domaine reste à votre charge.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href={whatsappLink} onClick={trackLead} className="group relative bg-[#f0fdf4] text-[#050806] px-12 py-6 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-[1.02]">
            <span className="relative z-10 uppercase tracking-tight">Lancer ma boutique — 100k</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-[#00C853]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <div className="text-left hidden md:block border-l border-white/10 pl-6">
            <p className="text-sm font-bold text-[#00C853]">✓ Site prêt en 10 jours</p>
            <p className="text-xs text-[#6b8f71]">Accompagnement direct par Jordan</p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 px-6 border-y border-white/5 bg-[#080f0a]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6 leading-tight">Pourquoi Shopify est <br />lourd pour un débutant ?</h2>
              <p className="text-[#6b8f71] mb-8 leading-relaxed">Shopify est un outil puissant, mais son modèle économique est un fardeau au Cameroun. Les charges fixes mangent vos bénéfices avant même votre première vente.</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-red-500/10 flex items-center justify-center rounded-xl text-red-500 text-xl font-bold">!</div>
                  <div>
                    <h4 className="font-bold text-white">L'abonnement mensuel</h4>
                    <p className="text-sm text-[#6b8f71]">Environ 20.000F chaque mois à sortir de votre caisse, peu importe votre volume de ventes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 bg-red-500/10 flex items-center justify-center rounded-xl text-red-500 text-xl font-bold">!</div>
                  <div>
                    <h4 className="font-bold text-white">Commissions Invisibles</h4>
                    <p className="text-sm text-[#6b8f71]">Entre les frais de plateforme et les conversions de devises, vos marges s'effritent silencieusement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#050806] p-1 rounded-3xl border border-white/10 shadow-2xl">
              <div className="bg-[#0c140e] rounded-[22px] p-8">
                <h3 className="text-[#FFB300] font-black text-xl mb-6 tracking-widest uppercase text-center">Coût Réel Mensuel</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#6b8f71] uppercase font-bold">Plateformes Standard</span>
                      <span className="text-sm font-medium">Frais Fixes</span>
                    </div>
                    <span className="text-red-400 font-black italic">~ 20.000F+</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-[#00C853]/10 rounded-xl border border-[#00C853]/30">
                    <div className="flex flex-col">
                      <span className="text-xs text-[#00C853] uppercase font-bold text-[9px]">Solution Jordan</span>
                      <span className="text-sm font-bold">Maintenance incluse</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[#00C853] font-black text-xl tracking-tighter italic block leading-none">0 FCFA</span>
                      <span className="text-[10px] text-[#00C853]/60 uppercase font-black">Évolutions sur devis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY SECTION: THE FOUNDER'S "WHY" */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 text-left">
            <div className="text-[#00C853] font-bold text-sm mb-4 uppercase tracking-widest">Le mot de Jordan</div>
            <h2 className="text-3xl md:text-4xl font-black mb-8 italic leading-tight text-white">
              Une solution née de <br />
              <span className="text-[#00C853]">ma propre frustration.</span>
            </h2>
            <div className="space-y-6 text-[#a3b8a8] text-lg font-light leading-relaxed">
              <p>
                Il y a quelques années, j'ai voulu lancer ma propre boutique en ligne. Comme tout le monde, j'ai couru vers <span className="text-white font-medium">Shopify</span>.
              </p>
              <p>
                Mais la réalité m'a vite rattrapé : entre l'abonnement mensuel et les frais de thèmes, mon petit capital s'évaporait avant même que je ne reçoive ma première commande. <span className="text-[#FFB300] font-medium italic">C'était insoutenable pour un débutant au pays.</span>
              </p>
              <p>
                En tant que développeur, j'ai décidé de briser ce cycle. J'ai codé <span className="text-white font-medium">ma propre infrastructure</span> pour mon usage personnel — une solution ultra-performante, sans frais fixes, pensée pour nos réalités locales.
              </p>
              <p className="border-l-2 border-[#00C853] pl-6 italic text-white/90">
                Aujourd'hui, j'ai décidé d'ouvrir cette technologie à <span className="text-[#00C853] font-bold text-xl">10 entrepreneurs seulement</span>. Je ne vends pas juste un site, je partage l'outil qui m'a libéré du stress financier.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00C853] to-[#FFB300] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#050806] border border-white/10 p-8 rounded-3xl text-center">
                <div className="w-20 h-20 bg-[#00C853]/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00C853]/40">
                  <span className="text-3xl">👨‍💻</span>
                </div>
                <h4 className="text-white font-black text-xl mb-2 uppercase italic">Jordan</h4>
                <p className="text-[#00C853] text-xs font-bold mb-6 tracking-tighter">DÉVELOPPEUR & ENTREPRENEUR</p>
                <div className="h-px bg-white/10 w-full mb-6"></div>
                <ul className="space-y-4 text-left text-sm text-[#6b8f71]">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#00C853] mt-1">✔</span>
                    <span>Technologie testée par mes propres business.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#00C853] mt-1">✔</span>
                    <span>Accès direct à mon expertise (Pas de robot).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (TECH CLARIFICATION) */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center border-t border-white/5">
        <h2 className="text-xl md:text-2xl font-bold mb-16 text-[#6b8f71] uppercase tracking-[0.3em]">Côté Technique : Comment est-ce possible ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              t: "Infrastructure Partagée",
              d: "Je gère des serveurs cloud mutualisés haute performance. Je répartis la puissance pour supprimer vos frais d'hébergement individuels.",
              i: "🤝"
            },
            {
              t: "Le Seuil de Gratuité",
              d: "Votre site supporte jusqu'à 40 000 visites/mois sans frais. C'est 4x plus que ce qu'une boutique moyenne génère au Cameroun.",
              i: "📈"
            },
            {
              t: "Architecture 'Headless'",
              d: "Pas de CMS lourd. J'utilise du code pur (Next.js). C'est 10x plus rapide, parfait pour les clients sur réseau mobile lent.",
              i: "🚀"
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-[#00C853]/30 transition-all group">
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.i}</div>
              <h4 className="font-bold text-lg mb-2 text-white">{item.t}</h4>
              <p className="text-sm text-[#6b8f71] leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RARE OPPORTUNITY / SCARCITY SECTION */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto border border-[#FFB300]/30 bg-[#FFB300]/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl">💎</div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 text-[#FFB300]">Une offre introuvable ailleurs.</h2>
          <p className="text-lg text-[#a3b8a8] mb-8 leading-relaxed">
            Pour garantir une performance maximale et un suivi personnalisé à chacun, <span className="text-[#00C853] font-bold underline italic">je n'accepte que 10 clients</span>.
          </p>
          <div className="inline-block px-6 py-2 bg-[#FFB300] text-black font-black rounded-full text-sm animate-pulse uppercase tracking-tighter">
            PLACES DISPONIBLES : 04 / 10
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#00C853] to-[#007a33] rounded-[40px] p-12 text-center shadow-[0_40px_100px_rgba(0,200,83,0.2)]">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Prêt à dominer le marché ?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-light italic">
            Rejoignez les entrepreneurs camerounais qui ont choisi l'indépendance financière et technologique avec Jordan.
          </p>

          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 inline-block mb-10 border border-white/10">
            <span className="block text-white/60 text-sm uppercase font-bold tracking-widest mb-1">Investissement Unique</span>
            <span className="text-5xl font-black text-white italic">100.000 <span className="text-sm not-italic">FCFA</span></span>
          </div>

          <br />

          <a href={whatsappLink} onClick={trackLead} className="inline-block bg-white text-[#007a33] px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#f0fdf4] transition-all shadow-xl uppercase">
            Réserver mon site via WhatsApp
          </a>
          <p className="mt-6 text-white/60 text-xs font-bold uppercase tracking-widest">Paiement sécurisé • Jordan le Développeur</p>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center">
        <div className="font-black text-xl mb-4 opacity-20 leading-none italic uppercase">
          Les Solutions de <br /> Jordan le Développeur
        </div>
        <p className="text-[#6b8f71] text-[10px] tracking-widest uppercase mb-2">
          © 2026 — Yaoundé • Douala • Garoua
        </p>
        <p className="text-[#6b8f71] text-[9px] opacity-50 px-6">Propulsé par Next.js pour une vitesse de chargement instantanée.</p>
      </footer>
    </div>
  );
}