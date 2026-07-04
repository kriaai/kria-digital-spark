import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/kria/Header";
import { Hero } from "@/components/kria/Hero";
import { DiagnosticForm } from "@/components/kria/DiagnosticForm";
import { HowItWorks } from "@/components/kria/HowItWorks";
import { WhatWeAnalyze } from "@/components/kria/WhatWeAnalyze";
import { Testimonial } from "@/components/kria/Testimonial";
import { FinalCTA } from "@/components/kria/FinalCTA";
import { Footer } from "@/components/kria/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kria AI — Diagnóstico da sua presença digital" },
      {
        name: "description",
        content:
          "Responda em 2 a 5 minutos e receba um diagnóstico personalizado da sua presença digital direto no WhatsApp. Estratégia, conteúdo e crescimento com a Kria AI.",
      },
      { property: "og:title", content: "Kria AI — Diagnóstico da sua presença digital" },
      {
        property: "og:description",
        content:
          "Descubra o que está travando sua presença digital e receba um plano de ação no WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DiagnosticForm />
        <HowItWorks />
        <WhatWeAnalyze />
        <Testimonial />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
