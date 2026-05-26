import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import BrandMark from "@/components/BrandMark";
import { Button } from "@/components/ui/button";

const whatsappUrl = "https://api.whatsapp.com/send/?phone=48998149149";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <BrandMark size="sm" />
            <span className="font-bold text-foreground">LH Soluções Elétricas</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("servicos")}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              FAQ
            </button>
            <Button asChild size="lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Falar no WhatsApp
              </a>
            </Button>
          </nav>

          <button className="p-2 text-foreground md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="border-t border-border bg-background py-6 md:hidden">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="py-2 text-left font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="py-2 text-left font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="py-2 text-left font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="py-2 text-left font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                FAQ
              </button>
              <Button asChild className="mt-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
