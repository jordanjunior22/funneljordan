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
        <meta
          name="description"
          content="Payez une seule fois, vendez à vie. Intégration MoMo & Orange Money incluse par Jordan le Développeur."
        />

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
        `
        }} />
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

        <a
          href={whatsappLink}
          onClick={trackLead}
          className="bg-[#25D366] hover:bg-[#1eb957] text-white px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-[#25D366]/20 shrink-0"
        >
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
          <span className="bg-gradient-to-r from-[#00C853] via-[#81f7ad] to-[#FFB300] bg-clip-text text-transparent">
            Sans abonnement.
          </span>
        </h1>

        <p className="text-[#a3b8a8] text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Offrez à votre business une boutique en ligne ultra-performante, conçue pour convertir...
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">

          <a
            href={whatsappLink}
            onClick={trackLead}
            className="group relative bg-[#f0fdf4] text-[#050806] px-12 py-6 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-[1.02]"
          >
            <span className="relative z-10 uppercase tracking-tight">
              Lancer ma boutique — 100k
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-[#00C853]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <div className="text-left hidden md:block border-l border-white/10 pl-6">
            <p className="text-sm font-bold text-[#00C853]">✓ Site prêt en 10 jours</p>
            <p className="text-xs text-[#6b8f71]">Accompagnement direct par Jordan</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#00C853] to-[#007a33] rounded-[40px] p-12 text-center shadow-[0_40px_100px_rgba(0,200,83,0.2)]">

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Prêt à dominer le marché ?
          </h2>

          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto font-light italic">
            Rejoignez les entrepreneurs camerounais qui ont choisi l'indépendance financière.
          </p>

          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 inline-block mb-10 border border-white/10">
            <span className="block text-white/60 text-sm uppercase font-bold tracking-widest mb-1">
              Investissement Unique
            </span>
            <span className="text-5xl font-black text-white italic">
              100.000 <span className="text-sm not-italic">FCFA</span>
            </span>
          </div>

          <a
            href={whatsappLink}
            onClick={trackLead}
            className="inline-block bg-white text-[#007a33] px-12 py-5 rounded-2xl font-black text-xl hover:bg-[#f0fdf4] transition-all shadow-xl uppercase"
          >
            Réserver mon site via WhatsApp
          </a>

          <p className="mt-6 text-white/60 text-xs font-bold uppercase tracking-widest">
            Paiement sécurisé • Jordan le Développeur
          </p>
        </div>
      </section>

    </div>
  );
}