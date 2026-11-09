import ScrollProgressLive from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <ScrollProgressLive />
      <Header />
      <Hero />
      <ProductCatalog />
      <About />
      <ContactBanner />
    </div>
  );
};

export default Index;
