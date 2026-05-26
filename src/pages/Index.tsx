import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LH Soluções Elétricas | Instalação, Manutenção e Segurança Eletrônica</title>
        <meta
          name="description"
          content="Equipe especializada em instalações, manutenção, automação, iluminação e segurança eletrônica para residências, condomínios e empresas."
        />
        <meta
          name="keywords"
          content="LH Soluções Elétricas, eletricista, instalação elétrica, manutenção elétrica, automação, iluminação externa, segurança eletrônica"
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
