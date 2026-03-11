import { Button } from "@/components/ui/button";
import { Zap, Shield, Clock } from "lucide-react";

const whatsappUrl = "https://wa.me/message/MFAXWB5NL5QZI1";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Instalações Elétricas • Manutenção • Segurança Eletrônica</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-foreground block">Guilherme Eletrecista</span>
            <span className="text-primary block mt-2">Equipe com mais de 10 anos de experiência</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Soluções completas em elétrica para Palhoça e região: instalação, manutenção, automação,
            iluminação externa e segurança eletrônica para residências, condomínios, comércios e hotéis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={scrollToContact} variant="hero" size="lg" className="sm:text-base sm:px-8 sm:h-14">
              <Zap className="w-5 h-5" />
              <span className="hidden sm:inline">Solicitar Orçamento</span>
              <span className="sm:hidden">Orçamento</span>
            </Button>
            <Button asChild variant="outline" size="lg" className="sm:text-base sm:px-8 sm:h-14">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 md:gap-12">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground text-sm md:text-base">Certificações</p>
                <p className="text-xs text-muted-foreground hidden md:block">Atualizadas e em conformidade</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground text-sm md:text-base">Atendimento ágil</p>
                <p className="text-xs text-muted-foreground hidden md:block">Emergencial e agendado</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground text-sm md:text-base">Experiência ampla</p>
                <p className="text-xs text-muted-foreground hidden md:block">Projetos de vários portes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
