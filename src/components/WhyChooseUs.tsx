import { CheckCircle2 } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Equipe de eletricistas com experiência em projetos residenciais, comerciais e condominiais",
    "Profissionais com certificações atualizadas e foco em conformidade técnica",
    "Capacidade para obras de diferentes portes com execução segura e organizada",
    "Atendimento emergencial e agendado com prazos bem definidos",
    "Soluções em iluminação, automação e segurança eletrônica",
  ];

  return (
    <section id="sobre" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">Sobre a LH Soluções Elétricas</h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                A LH Soluções Elétricas atua com planejamento, execução e manutenção em sistemas elétricos,
                sempre com padrão técnico elevado e foco em segurança. Nossa equipe trabalha com organização,
                transparência e compromisso com a qualidade em cada serviço.
              </p>

              <ul className="mb-8 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                      <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToContact} size="lg">
                Falar com a Equipe
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card">
                <div className="absolute inset-4 rounded-2xl border-2 border-dashed border-primary/25" />
                <div className="relative z-10 p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <BrandMark size="lg" />
                  </div>
                  <p className="text-xl font-bold text-foreground">LH Soluções Elétricas</p>
                  <p className="mt-2 text-muted-foreground">Qualidade, segurança e resultado técnico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
