import { Instagram, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappUrl = "https://api.whatsapp.com/send/?phone=48998149149";
const instagramUrl = "https://www.instagram.com/lightofhands/";

const ContactForm = () => {
  return (
    <section id="contato" className="bg-muted py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-primary/25 bg-card p-8 text-center shadow-xl md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">Solicite seu Orçamento</p>
            <h2 className="mb-4 text-3xl font-black text-foreground md:text-4xl">
              Fale agora com a LH Soluções Elétricas
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Atendimento para instalações, manutenção, reparos e projetos elétricos. Resposta rápida pelo WhatsApp.
            </p>

            <Button asChild size="xl" className="h-16 w-full max-w-2xl text-lg md:w-auto md:px-14">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chamar no WhatsApp
              </a>
            </Button>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-muted-foreground md:flex-row">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                48 998 149 149
              </span>
              <span className="hidden text-border md:inline">•</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
