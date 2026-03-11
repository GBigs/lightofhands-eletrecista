import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Vocês atendem emergências elétricas?",
    answer:
      "Sim. Temos atendimento emergencial e também agendado para reparos, manutenção e diagnósticos elétricos.",
  },
  {
    question: "Qual é a experiência da equipe?",
    answer:
      "Nossa equipe conta com mais de 10 anos de experiência no setor elétrico, atuando em projetos residenciais, prediais e comerciais.",
  },
  {
    question: "Os profissionais possuem certificações?",
    answer:
      "Sim. Todos os especialistas trabalham com certificações atualizadas, seguindo normas técnicas, segurança e conformidade em cada etapa.",
  },
  {
    question: "Quais tipos de projetos vocês executam?",
    answer:
      "Atuamos em residências, condomínios, hotéis, shoppings e empresas, incluindo iluminação externa/pública, automação e segurança eletrônica.",
  },
  {
    question: "Como solicito atendimento?",
    answer:
      "Você pode falar pelo WhatsApp, ligar para (48) 99673-1221 ou enviar e-mail para guilhermeelectricatotal@gmail.com.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">Dúvidas comuns sobre atendimento, prazos e serviços</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-none px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Não encontrou sua dúvida? Fale com nossa equipe.</p>
            <Button onClick={scrollToContact} size="lg">
              Ir para Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
