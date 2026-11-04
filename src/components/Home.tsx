import React from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Countdown } from "@/components/Countdown";

/* ── Timeline data ─────────────────────────────── */
const STORY = [
  { year: "2020", np: "पहिलो भेट",    en: "First Meeting",  desc: "Two souls crossed paths at a family gathering in Kathmandu — a glance neither could forget." },
  { year: "2021", np: "मित्रता",       en: "Friendship",     desc: "Late-night calls and long walks through Patan Durbar Square turned strangers into best friends." },
  { year: "2023", np: "प्रेम",         en: "Love Declared",  desc: "Under a canopy of marigolds, Aashish took Aayushi's hands and told her what his heart always knew." },
  { year: "2025", np: "सगाई",          en: "Engagement",     desc: "Surrounded by family, rings were exchanged and a promise made — to journey through life together." },
  { year: "Dec 2026", np: "शुभ विवाह", en: "Wedding Day",   desc: "On the auspicious twelfth of December, they take their seven sacred vows and begin their forever." },
];

const SCHEDULE = [
  { time: "11:00 AM", event: "Mehendi & Sangeet" },
  { time: "12:30 PM", event: "Var Mala Ceremony" },
  { time: "2:00 PM",  event: "Saptapadi (Seven Vows)" },
  { time: "5:00 PM",  event: "Wedding Reception & Feast" },
];

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden text-[#FDFBF7]">

      {/* ════════════════════════════════════════
          SECTION 1 — HERO INVITATION
      ════════════════════════════════════════ */}
      <section id="hero" className="wedding-hero relative flex min-h-[100svh] items-center overflow-hidden px-5 py-10 md:px-8 lg:px-12">
        <div className="wedding-hero-inner relative z-10 mx-auto grid w-full max-w-[1440px] items-center">
          <div className="wedding-hero-copy">
            <ScrollReveal className="wedding-invitation-copy">
              <div className="wedding-mantra">
                <img src="/ganesh.png" alt="Ganesh" className="w-11 h-11 md:w-14 md:h-14 animate-shimmer" />
                <div className="font-yatra text-gold-gradient leading-relaxed">
                  <p className="text-base md:text-lg">ॐ श्री गणेशाय नमः</p>
                  <p className="mt-1 text-[11px] md:text-xs text-[#FDFBF7]/70">वक्रतुंड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव।</p>
                </div>
              </div>

              <p className="wedding-eyebrow font-cinzel">With the blessings of our families</p>
              <h1 className="wedding-couple-names font-yatra text-gold-gradient">
                <span>आशीष</span>
                <span className="wedding-name-divider" aria-hidden="true">&amp;</span>
                <span>आयुषी</span>
              </h1>
              <p className="wedding-name-roman font-cinzel">Aashish <span>&amp;</span> Aayushi</p>

              <div className="wedding-date-rule" aria-hidden="true"><span>१२</span><i /><span>१२</span><i /><span>२०२६</span></div>
              <p className="wedding-date font-cinzel">December 12, 2026</p>

              <div className="wedding-family">
                <p className="font-sans text-sm md:text-base text-[#FDFBF7]/85 leading-relaxed">
                  सुपुत्र: <span>श्री राम प्रसाद शर्मा</span> तथा <span>श्रीमती सीता शर्मा</span>
                </p>
                <p className="wedding-family-separator font-cinzel">— र —</p>
                <p className="font-sans text-sm md:text-base text-[#FDFBF7]/85 leading-relaxed">
                  सुपुत्री: <span>श्री हरि बहादुर थापा</span> तथा <span>श्रीमती गीता थापा</span>
                </p>
              </div>

              <p className="wedding-invitation font-yatra text-gold-gradient leading-loose">
                हाम्रो शुभ विवाहको पावन अवसरमा यहाँको गरिमामय उपस्थितिको लागि हार्दिक निमन्त्रणा।
              </p>
              <img
                src="/shubha-vivah-couple.png"
                alt="Traditional Nepali wedding emblem featuring a bride and groom"
                className="wedding-couple-mark"
                decoding="async"
              />
              <div className="wedding-scroll-cue">
                <span className="font-cinzel">Scroll to explore</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </ScrollReveal>
          </div>

          <figure className="wedding-hero-photo">
            <img
              src="/traditional-couple-hero.jpg"
              alt="A Nepali bride and groom beneath a marigold-draped wedding pavilion"
              fetchPriority="high"
            />
            <span className="wedding-photo-frame" aria-hidden="true" />
            <figcaption className="wedding-photo-caption">
              <span className="font-cinzel">Aashish &amp; Aayushi</span>
              <span className="font-yatra">शुभ विवाह · २०२६</span>
            </figcaption>
            <span className="wedding-photo-seal font-cinzel" aria-hidden="true">S&nbsp;V</span>
          </figure>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 2 — COUNTDOWN
      ════════════════════════════════════════ */}
      <section id="countdown" className="py-20 md:py-32 px-5">
        <ScrollReveal className="text-center space-y-4 mb-10">
          <p className="font-cinzel text-[#D4AF37]/55 tracking-[0.45em] uppercase text-xs">The Big Day Is Near</p>
          <h2 className="font-yatra text-3xl md:text-5xl text-gold-gradient">१२ · १२ · २०२६</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto" />
        </ScrollReveal>
        <ScrollReveal>
          <Countdown />
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════
          SECTION 3 — OUR STORY
      ════════════════════════════════════════ */}
      <section id="story" className="py-20 md:py-32 px-5">
        <div className="max-w-4xl mx-auto">

          <ScrollReveal className="text-center space-y-3 mb-12 md:mb-16">
            <img src="/kalash.png" alt="Kalash" className="w-10 h-10 mx-auto animate-shimmer opacity-75" />
            <h2 className="font-yatra text-4xl md:text-6xl text-gold-gradient">हाम्रो कहानी</h2>
            <p className="font-cinzel text-[#D4AF37]/55 tracking-[0.4em] uppercase text-xs">Our Story</p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent mx-auto" />
            <p className="font-sans text-[#FDFBF7]/65 text-sm md:text-base italic max-w-xl mx-auto leading-relaxed pt-2">
              "दुई मनको मिलन, एउटा जीवनको सुरुवात।"
            </p>
          </ScrollReveal>

          {/* Compact timeline grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {STORY.map((s, i) => (
              <ScrollReveal key={i}>
                <div className="relative border border-[#D4AF37]/20 rounded-xl bg-black/20 backdrop-blur-sm p-5 hover:border-[#D4AF37]/45 transition-colors duration-300 h-full">
                  {/* Year badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_0_4px_rgba(212,175,55,0.1)]" aria-hidden="true" />
                    <span className="font-cinzel text-[#D4AF37]/60 text-xs tracking-widest">{s.year}</span>
                  </div>
                  <h3 className="font-yatra text-lg md:text-xl text-gold-gradient mb-1">{s.np}</h3>
                  <p className="font-cinzel text-[#D4AF37]/50 text-[10px] tracking-widest uppercase mb-2">{s.en}</p>
                  <p className="font-sans text-[#FDFBF7]/65 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <p className="font-yatra text-xl md:text-2xl text-gold-gradient">आशीष र आयुषी — सधैँ सँगसँगै</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SECTION 4 — VENUE / BANQUET
      ════════════════════════════════════════ */}
      <section id="banquet" className="py-20 md:py-32 px-5">
        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">

          {/* Header */}
          <ScrollReveal className="text-center space-y-3">
            <p className="font-cinzel text-[#D4AF37]/55 tracking-[0.45em] uppercase text-xs">Join Us At</p>
            <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl text-gold-gradient leading-tight">
              Himalaya Grand Banquet
            </h2>
            <p className="font-cinzel text-[#D4AF37]/65 tracking-widest text-sm">DURBAR MARG, KATHMANDU</p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent mx-auto" />
          </ScrollReveal>

          {/* Venue image */}
          <ScrollReveal>
            <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_30px_rgba(212,175,55,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
              <img
                src="/traditional-nepali-mandap.jpg"
                alt="Traditional Nepali wedding mandap decorated with marigolds and brass lamps"
                loading="lazy"
                decoding="async"
                className="venue-photo w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Info cards */}
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#D4AF37]/20 border border-[#D4AF37]/20 rounded-xl overflow-hidden">
              {[
                { title: "Capacity",   body: "500+ Guests" },
                { title: "Facilities", body: "3 Premium Halls\nValet Parking" },
                { title: "Dining",     body: "Multi-Cuisine Buffet\nTraditional Nepali Feast" },
              ].map(({ title, body }) => (
                <div key={title} className="py-7 px-5 text-center bg-black/20">
                  <h3 className="font-cinzel text-[#D4AF37] text-base md:text-lg mb-2">{title}</h3>
                  <p className="font-sans text-[#FDFBF7]/80 text-sm whitespace-pre-line">{body}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Schedule */}
          <ScrollReveal className="space-y-6">
            <h3 className="font-cinzel text-xl md:text-3xl text-gold-gradient text-center">Ceremony Schedule</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {SCHEDULE.map(({ time, event }) => (
                <div key={time} className="flex items-center gap-4 p-4 border border-[#D4AF37]/20 rounded-lg bg-black/15 hover:border-[#D4AF37]/45 transition-colors">
                  <span className="font-cinzel text-[#D4AF37] text-sm shrink-0">{time}</span>
                  <div className="w-px h-7 bg-[#D4AF37]/25 shrink-0" />
                  <span className="font-sans text-[#FDFBF7]/80 text-sm">{event}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Map link */}
          <ScrollReveal className="text-center space-y-4">
            <p className="font-sans text-[#FDFBF7]/65 text-sm">
              <span className="text-[#D4AF37]">Address:</span> Durbar Marg, Kathmandu 44600, Nepal
            </p>
            <a
              href="https://maps.google.com/?q=Durbar+Marg+Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 font-cinzel tracking-widest text-xs border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2A0B0D] transition-all duration-300"
            >
              VIEW ON MAP →
            </a>
          </ScrollReveal>

        </div>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="py-10 px-5 text-center space-y-3 border-t border-[#D4AF37]/15">
        <img src="/ganesh.png" alt="Om" className="w-8 h-8 mx-auto opacity-50 animate-shimmer" />
        <p className="font-yatra text-gold-gradient text-base md:text-lg">
          आशीष &amp; आयुषी — १२ डिसेम्बर २०२६
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/35 to-transparent mx-auto" />
        <p className="font-cinzel text-[#D4AF37]/35 text-[10px] tracking-[0.4em] uppercase">
          © 2026 SanioX · All Rights Reserved
        </p>
        <p className="font-cinzel text-[#D4AF37]/25 text-[9px] tracking-widest">
          Crafted with love for Aashish &amp; Aayushi
        </p>
      </footer>

      <style>{`
        .wedding-hero {
          isolation: isolate;
          background:
            radial-gradient(ellipse at 9% 48%, rgba(145, 34, 43, .34), transparent 46%),
            linear-gradient(110deg, rgba(37, 7, 13, .52), transparent 76%);
        }
        .wedding-hero::before {
          content: "";
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(212, 175, 55, .15);
          pointer-events: none;
          z-index: 2;
        }
        .wedding-hero-inner {
          grid-template-columns: minmax(0, .86fr) minmax(0, 1.14fr);
          gap: clamp(2rem, 5vw, 5.6rem);
        }
        .wedding-hero-copy { order: 1; min-width: 0; }
        .wedding-invitation-copy {
          max-width: 600px;
          padding: clamp(1rem, 3vw, 2.4rem) 0;
          text-align: left;
          animation: wedding-arrive .9s cubic-bezier(.2,.72,.22,1) both;
        }
        .wedding-mantra { display:flex; align-items:center; gap: .9rem; margin-bottom: clamp(2rem, 5vh, 3.8rem); }
        .wedding-eyebrow {
          color: rgba(245, 222, 153, .72);
          font-size: .61rem;
          letter-spacing: .22em;
          text-transform: uppercase;
          margin-bottom: .8rem;
        }
        .wedding-couple-names {
          display:flex;
          align-items:baseline;
          flex-wrap:wrap;
          gap: .03em .14em;
          font-size: clamp(3.5rem, 6.25vw, 6.4rem);
          line-height: 1.28;
          letter-spacing: .025em;
          text-shadow: 0 8px 32px rgba(0,0,0,.24);
        }
        .wedding-name-divider {
          color: #e6c86c;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: .47em;
          font-weight: 300;
          line-height: 1;
          margin: 0 .07em;
        }
        .wedding-name-roman {
          margin-top: .5rem;
          color: rgba(248, 227, 166, .72);
          font-size: .68rem;
          letter-spacing: .34em;
          text-transform: uppercase;
        }
        .wedding-name-roman span { color: #e3bd55; padding: 0 .3em; }
        .wedding-date-rule {
          display:flex;
          align-items:center;
          gap:.7rem;
          max-width: 270px;
          margin: 1.4rem 0 .3rem;
          color:#f0d87e;
          font: 600 .7rem "Cinzel Decorative", serif;
          letter-spacing:.12em;
        }
        .wedding-date-rule i { height:1px; flex:1; background:linear-gradient(90deg,rgba(212,175,55,.1),rgba(245,223,155,.75),rgba(212,175,55,.1)); }
        .wedding-date { color:rgba(255,240,207,.83); font-size:.67rem; letter-spacing:.24em; text-transform:uppercase; }
        .wedding-family {
          border-left:1px solid rgba(224,190,89,.55);
          padding:.1rem 0 .1rem 1.1rem;
          margin:1.6rem 0 1rem;
        }
        .wedding-family p span { color:rgba(241,207,112,.95); }
        .wedding-family-separator { color:rgba(220,183,81,.56); font-size:.57rem; letter-spacing:.26em; margin:.35rem 0; }
        .wedding-invitation { max-width: 35rem; font-size:clamp(1rem,1.35vw,1.2rem); }
        .wedding-couple-mark {
          display:block;
          width:clamp(8rem, 13vw, 10rem);
          height:auto;
          margin-top:.65rem;
          opacity:.92;
          filter:drop-shadow(0 3px 14px rgba(15,3,5,.3));
        }
        .wedding-scroll-cue {
          display:flex;
          align-items:center;
          gap:.65rem;
          margin-top:clamp(1.5rem, 4vh, 2.5rem);
          color:rgba(224,190,89,.68);
          font-size:.55rem;
          letter-spacing:.3em;
          text-transform:uppercase;
        }
        .wedding-scroll-cue svg { animation: wedding-nudge 2.2s ease-in-out infinite; }
        .wedding-hero-photo {
          position:relative;
          order:2;
          height:min(82svh, 850px);
          min-height:600px;
          margin:0;
          overflow:hidden;
          border:1px solid rgba(228,194,104,.72);
          padding:8px;
          background:#401016;
          box-shadow:0 32px 90px rgba(16,3,5,.45), 0 0 0 1px rgba(250,223,154,.13);
          animation:wedding-arrive .95s .12s cubic-bezier(.2,.72,.22,1) both;
        }
        .wedding-hero-photo::before {
          content:"";
          position:absolute;
          inset:9px;
          z-index:1;
          pointer-events:none;
          border:1px solid rgba(255,226,154,.6);
        }
        .wedding-hero-photo::after {
          content:"";
          position:absolute;
          inset:8px;
          z-index:0;
          background:linear-gradient(180deg,rgba(30,5,8,.06) 48%,rgba(30,5,8,.66) 100%);
          pointer-events:none;
        }
        .wedding-hero-photo img {
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center 54%;
          display:block;
          transform:scale(1.015);
          animation:wedding-photo-settle 1.6s cubic-bezier(.2,.72,.22,1) both;
        }
        .wedding-photo-frame {
          position:absolute;
          inset:17px;
          z-index:2;
          border:1px solid rgba(244,219,147,.38);
          pointer-events:none;
        }
        .wedding-photo-caption {
          position:absolute;
          z-index:3;
          left:clamp(1.6rem,4vw,3rem);
          right:2rem;
          bottom:clamp(1.8rem,5vh,3.2rem);
          display:flex;
          flex-direction:column;
          gap:.45rem;
          color:#fff1c8;
          text-shadow:0 2px 12px rgba(0,0,0,.65);
        }
        .wedding-photo-caption span:first-child { font-size:.61rem; letter-spacing:.3em; text-transform:uppercase; }
        .wedding-photo-caption span:last-child { font-size:1.12rem; color:#f2d682; }
        .wedding-photo-seal {
          position:absolute;
          z-index:3;
          top:1.7rem;
          right:1.7rem;
          display:grid;
          width:3.2rem;
          aspect-ratio:1;
          place-items:center;
          border:1px solid rgba(250,226,161,.72);
          border-radius:50%;
          color:#fff0bd;
          background:rgba(54,10,17,.48);
          font-size:.67rem;
          letter-spacing:.08em;
        }
        @keyframes wedding-arrive { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes wedding-photo-settle { from { transform:scale(1.07); } to { transform:scale(1.015); } }
        @keyframes wedding-nudge { 0%,100% { transform:translateY(0); } 50% { transform:translateY(4px); } }
        @media (max-width: 767px) {
          .wedding-hero { display:block; padding:1.1rem 1.1rem 3.4rem; }
          .wedding-hero::before { inset:8px; }
          .wedding-hero-inner { display:flex; flex-direction:column; align-items:stretch; gap:0; }
          .wedding-hero-photo { order:1; height:58svh; min-height:390px; max-height:560px; padding:6px; }
          .wedding-hero-photo::before { inset:7px; }
          .wedding-hero-photo::after { inset:6px; background:linear-gradient(180deg,rgba(30,5,8,.02) 35%,rgba(30,5,8,.76) 100%); }
          .wedding-photo-frame { inset:12px; }
          .wedding-photo-caption { left:1.45rem; bottom:1.7rem; }
          .wedding-photo-seal { top:1.25rem; right:1.25rem; width:2.7rem; }
          .wedding-hero-copy { order:2; }
          .wedding-invitation-copy { padding:1.7rem .15rem 0; text-align:center; }
          .wedding-mantra { justify-content:center; gap:.7rem; margin-bottom:1.6rem; }
          .wedding-mantra img { width:2.5rem; height:2.5rem; }
          .wedding-mantra p:last-child { max-width:16.5rem; }
          .wedding-eyebrow { font-size:.55rem; letter-spacing:.16em; margin-bottom:.45rem; }
          .wedding-couple-names { justify-content:center; gap:.02em .1em; font-size:clamp(2.8rem,12vw,4.3rem); line-height:1.38; }
          .wedding-name-roman { font-size:.58rem; letter-spacing:.23em; }
          .wedding-date-rule { margin:1.15rem auto .3rem; }
          .wedding-date { font-size:.6rem; letter-spacing:.17em; }
          .wedding-family { border-left:0; border-top:1px solid rgba(224,190,89,.4); padding:1rem .15rem 0; margin:1.3rem 0 .7rem; }
          .wedding-family p { font-size:.85rem; }
          .wedding-invitation { font-size:1.05rem; }
          .wedding-couple-mark { width:8.25rem; margin:.4rem auto 0; }
          .wedding-scroll-cue { justify-content:center; margin-top:1.7rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wedding-invitation-copy,.wedding-hero-photo,.wedding-hero-photo img { animation:none; }
          .wedding-scroll-cue svg { animation:none; }
        }
      `}</style>
    </div>
  );
}
