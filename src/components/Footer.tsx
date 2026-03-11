import { Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src="/logo-brand.svg" alt="Guilherme Eletrecista" className="h-[51px] w-auto mb-4" />
              <p className="text-secondary-foreground/70 leading-relaxed">
                Equipe de eletricistas com experiência ampla, certificações atualizadas e foco total em
                qualidade, segurança e confiabilidade.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-secondary-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#servicos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    onClick={scrollToContact}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary-foreground mb-4">Contato</h4>
              <ul className="space-y-3 text-secondary-foreground/70">
                <li>(48) 99673-1221</li>
                <li className="break-all">guilhermeelectricatotal@gmail.com</li>
                <li>Palhoça e região</li>
                <li>Atendimento emergencial e agendado</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-secondary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground/60 text-sm">
                (c) {currentYear} Guilherme Eletrecista. Todos os direitos reservados.
              </p>
              <a
                href="https://www.ultrafastsites.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/60 text-sm hover:text-primary transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>Desenvolvido por UltraFastSites</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

