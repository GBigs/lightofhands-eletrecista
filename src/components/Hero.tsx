import { Clock, MessageCircle, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappUrl = "https://api.whatsapp.com/send/?phone=48998149149";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#031134]/70 blur-3xl" />
        <div className="absolute top-14 right-0 h-[28rem] w-[28rem] rounded-full bg-[#031134]/65 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#0a2a66]/45 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-0 md:container md:mx-auto md:px-4">
        <div className="w-full px-4 text-center md:mx-auto md:max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Instalações Elétricas • Manutenção • Segurança Eletrônica
            </span>
          </div>

          <h1 className="mb-6 text-[2rem] font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-foreground">LH Soluções Elétricas</span>
            <span className="mt-2 block text-primary">Atendimento técnico com agilidade e segurança</span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Soluções completas em elétrica para residências, condomínios e empresas: instalação,
            manutenção, automação, iluminação externa e sistemas de segurança eletrônica.
          </p>

          <div className="mb-16 flex justify-center">
            <Button asChild variant="hero" size="lg" className="h-14 px-8 text-base sm:px-10">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 md:gap-12">
            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
                <Shield className="h-5 w-5 text-primary md:h-6 md:w-6" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm font-bold text-foreground md:text-base">Conformidade Técnica</p>
                <p className="hidden text-xs text-muted-foreground md:block">Normas e segurança em cada etapa</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
                <Clock className="h-5 w-5 text-primary md:h-6 md:w-6" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm font-bold text-foreground md:text-base">Atendimento Ágil</p>
                <p className="hidden text-xs text-muted-foreground md:block">Emergencial e agendado</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 md:h-12 md:w-12">
                <Zap className="h-5 w-5 text-primary md:h-6 md:w-6" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm font-bold text-foreground md:text-base">Equipe Especializada</p>
                <p className="hidden text-xs text-muted-foreground md:block">Projetos de diferentes portes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
