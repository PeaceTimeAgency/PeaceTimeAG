import CTAButton from "@/components/CTAButton";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import SocialProof from "@/components/SocialProof";
import DiscordCTA from "@/components/DiscordCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* ==== HERO (optional – we kept it minimal per brief) ==== */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
          Peace Time Agency
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          We handle the stress so you can focus on the fun of streaming.
          Early‑stage strategies, analytics insights, and a calm community
          – all built for creators who want to grow without the noise.
        </p>
        <div className="mt-8 flex justify-center">
          <CTAButton href="#discord" label="Join Our Discord" />
        </div>
      </section>

      {/* ==== ABOUT / FOUNDER (Priority #1) ==== */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* ==== SERVICES (Priority #2) ==== */}
      <section id="services" className="scroll-mt-24">
        <Services />
      </section>

      {/* ==== PROCESS (Priority #3) ==== */}
      <section id="process" className="scroll-mt-24">
        <Process />
      </section>

      {/* ==== SOCIAL PROOF (Priority #4) ==== */}
      <section id="social" className="scroll-mt-24">
        <SocialProof />
      </section>

      {/* ==== DISCORD CALL‑TO‑ACTION (Primary Goal) ==== */}
      <section id="discord" className="scroll-mt-24">
        <DiscordCTA />
      </section>
    </div>
  );
}
