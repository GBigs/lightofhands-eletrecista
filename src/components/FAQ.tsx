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
      "Sim. A LH Soluções Elétricas oferece atendimento emergencial e também atendimento agendado para manutenção e reparos.",
  },
  {
    question: "Quais tipos de serviço vocês realizam?",
    answer:
      "Executamos instalações elétricas, manutenção preventiva e corretiva, iluminação, automação e segurança eletrônica.",
  },
  {
    question: "A equipe segue normas técnicas?",
    answer:
      "Sim. Todos os serviços são executados com foco em segurança, conformidade técnica e boas práticas de instalação.",
  },
  {
    question: "Vocês atendem residência e empresa?",
    answer:
      "Atendemos residências, comércios, condomínios e empreendimentos de diferentes portes.",
  },
  {
    question: "Como solicito atendimento?",
    answer:
      "Você pode chamar no WhatsApp pelo número 48 998 149 149 ou acessar nossa página no Instagram para entrar em contato.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">Dúvidas comuns sobre atendimento, prazos e serviços</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card px-6 transition-all data-[state=open]:border-primary/40 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:text-primary hover:no-underline [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="mb-4 text-muted-foreground">Não encontrou sua dúvida? Fale com nossa equipe.</p>
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
