import { Wrench, Lightbulb, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Instalações Elétricas",
    description: "Projetos e execução de instalações para residências, condomínios e empreendimentos comerciais.",
    items: [
      "Instalação de tomadas, interruptores e pontos de energia",
      "Montagem e adequação de quadros elétricos",
      "Instalação de chuveiros, aquecedores e bombas",
      "Infraestrutura elétrica para obras e reformas",
      "Configurações gerais em sistemas elétricos",
    ],
  },
  {
    icon: Settings,
    title: "Manutenção e Reparos",
    description: "Equipe especializada em manutenção elétrica preventiva e corretiva de qualquer natureza.",
    items: [
      "Diagnóstico de falhas e curtos-circuitos",
      "Troca de disjuntores e fiação danificada",
      "Manutenção predial e condominial",
      "Reparos emergenciais e programados",
      "Ajustes e revisões técnicas completas",
    ],
  },
  {
    icon: Lightbulb,
    title: "Iluminação e Automação",
    description: "Soluções eficientes para iluminar melhor, economizar energia e trazer mais praticidade.",
    items: [
      "Iluminação residencial e comercial",
      "Iluminação externa e de áreas públicas",
      "Instalação de perfis, fitas e luminárias LED",
      "Sensores de presença e fotocélulas",
      "Automação para ambientes internos e externos",
    ],
  },
  {
    icon: Shield,
    title: "Segurança Eletrônica",
    description: "Implementação de sistemas para aumentar a proteção de residências, empresas e condomínios.",
    items: [
      "Instalação de câmeras e CFTV",
      "Alarmes e sensores de segurança",
      "Controle de acesso e vídeo porteiro",
      "Fechaduras elétricas",
      "Integração com automação e monitoramento",
    ],
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Serviços Oferecidos</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Oferecemos soluções completas em sistemas de eletricidade, incluindo instalação,
              manutenção, reparos e configurações em geral. Atendemos às necessidades específicas de
              cada cliente com eficiência, confiabilidade e foco total em segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-none p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg">
              Solicitar Orçamento para Meu Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
