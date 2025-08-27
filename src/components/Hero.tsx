import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            Blusas de soft personalizadas para o frio da Vacaria
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Conforto, tradição e identidade para CTGs, grupos de laçadores e acampamentos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="animate-pulse-soft">
              Peça um orçamento para seu grupo
            </Button>
            <Button variant="outline-hero" size="lg">
              Ver nossos produtos
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="w-20 h-20 border-2 border-primary-foreground rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-16 h-16 border-2 border-primary-foreground rounded-lg rotate-45"></div>
      </div>
    </section>
  );
};

export default Hero;