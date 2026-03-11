import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Guilherme Eletrecista | Instalação, Manutenção e Segurança Eletrônica</title>
        <meta
          name="description"
          content="Equipe com mais de 10 anos de experiência em serviços elétricos em Palhoça: instalações, manutenção, automação, iluminação e segurança eletrônica."
        />
        <meta
          name="keywords"
          content="guilherme eletrecista, eletricista em palhoça, instalação elétrica, manutenção elétrica, automação, iluminação externa, segurança eletrônica"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <Services />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
