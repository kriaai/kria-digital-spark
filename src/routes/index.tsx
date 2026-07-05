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
      { title: "Kria AI — Descubra como a IA pode economizar tempo e dinheiro" },
      {
        name: "description",
        content:
          "Responda algumas perguntas e receba um resumo inicial com o próximo passo recomendado: aprender, automatizar, criar com IA ou contratar uma solução da Kria.",
      },
      { property: "og:title", content: "Kria AI — Análise inicial com IA para o seu negócio" },
      {
        property: "og:description",
        content:
          "Entenda seu cenário e descubra o que fazer sozinho, o que otimizar com IA, o que contratar e o que a Kria pode resolver por você.",
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
