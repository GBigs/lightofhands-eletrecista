import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Equipe de eletricistas com mais de 10 anos de experiência no setor",
    "Profissionais com certificações atualizadas e foco em conformidade técnica",
    "Capacidade para projetos de diferentes portes e complexidades",
    "Atendimento para residências, condomínios, hotéis, shoppings e empresas",
    "Soluções em iluminação externa/pública e segurança eletrônica",
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre Nós</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Aqui na Guilherme Eletrecista, somos uma equipe de profissionais altamente qualificados,
                preparados para atender necessidades elétricas com segurança e eficiência em Palhoça.
                Unimos conhecimento técnico, equipamentos modernos e compromisso com excelência,
                inovação e confiança em cada projeto.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToContact} size="lg">
                Falar com a Equipe
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary/10 rounded-none flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-none" />
                <div className="text-center p-8 relative z-10">
                  <div className="text-6xl md:text-7xl font-black text-primary mb-2 flex justify-center">
                    <Zap className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <p className="text-xl font-bold text-foreground">Excelência em cada etapa</p>
                  <p className="text-muted-foreground mt-2">Qualidade, segurança e resultado de alto padrão</p>
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
