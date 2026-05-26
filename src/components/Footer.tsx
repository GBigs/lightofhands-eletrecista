import BrandMark from "@/components/BrandMark";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-12 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <BrandMark size="sm" />
                <span className="font-bold text-secondary-foreground">LH Soluções Elétricas</span>
              </div>
              <p className="leading-relaxed text-secondary-foreground/70">
                Equipe especializada em instalações, manutenção e soluções elétricas com foco total em
                qualidade técnica, segurança e confiabilidade.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-secondary-foreground">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#servicos" className="text-secondary-foreground/70 transition-colors hover:text-primary">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-secondary-foreground/70 transition-colors hover:text-primary">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-secondary-foreground/70 transition-colors hover:text-primary">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-secondary-foreground/70 transition-colors hover:text-primary">
                    FAQ
                  </a>
                </li>
                <li>
                  <button onClick={scrollToContact} className="text-secondary-foreground/70 transition-colors hover:text-primary">
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-secondary-foreground">Contato</h4>
              <ul className="space-y-3 text-secondary-foreground/70">
                <li>48 998 149 149</li>
                <li className="break-all">contato@lhsolucoeseletricas.com.br</li>
                <li>Palhoça e região</li>
                <li>Atendimento emergencial e agendado</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/10 pt-8">
            <div className="flex justify-center">
              <p className="text-sm text-secondary-foreground/60">
                (c) {currentYear} LH Soluções Elétricas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
