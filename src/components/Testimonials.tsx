import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Renata P.",
    text: "Equipe muito organizada e técnica. Fizeram toda a parte elétrica do meu condomínio com segurança e prazo.",
    rating: 5,
    serviceType: "Projeto Condominial",
    clientType: "Síndica",
  },
  {
    name: "Marcos L.",
    text: "Contratamos para reforma elétrica em hotel e o resultado foi excelente. Profissionais certificados e atenciosos.",
    rating: 5,
    serviceType: "Reforma Elétrica",
    clientType: "Gestor de Hotel",
  },
  {
    name: "Patrícia S.",
    text: "Atendimento emergencial muito rápido. Resolveram nosso problema no quadro e evitaram novos riscos.",
    rating: 5,
    serviceType: "Manutenção",
    clientType: "Cliente Residencial",
  },
  {
    name: "Eduardo C.",
    text: "Instalaram câmeras, alarmes e controle de acesso na empresa. Serviço limpo e com excelente acabamento.",
    rating: 5,
    serviceType: "Segurança Eletrônica",
    clientType: "Empresário",
  },
  {
    name: "Luciana M.",
    text: "A nova iluminação externa valorizou muito o espaço. Equipe experiente e com orientação técnica clara.",
    rating: 5,
    serviceType: "Iluminação Externa",
    clientType: "Cliente Residencial",
  },
  {
    name: "Fernando R.",
    text: "Orçamento transparente, execução precisa e total confiança do início ao fim do projeto.",
    rating: 5,
    serviceType: "Instalação Elétrica",
    clientType: "Cliente Comercial",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Quem contrata recomenda
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Experiências reais de clientes atendidos em projetos de diferentes portes
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-lg relative h-full">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />

                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {testimonial.serviceType}
                    </span>

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-foreground text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.clientType}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-primary hover:text-primary-foreground" />

            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 bg-card border-border hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>

          <div className="text-center mt-12">
            <p className="text-secondary-foreground/80 text-lg">
              Seu projeto pode ser o próximo caso de sucesso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
