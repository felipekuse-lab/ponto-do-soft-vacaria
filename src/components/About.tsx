import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
            Tradição e Qualidade Artesanal
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No Ponto do Soft, cada peça é confeccionada com o cuidado e a dedicação que a tradição gaúcha merece. 
            Há anos, especializamos-nos em criar blusas de soft personalizadas que combinam conforto, durabilidade 
            e identidade para CTGs, grupos de laçadores e acampamentos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Confecção Artesanal</h3>
              <p className="text-muted-foreground">
                Cada blusa é cuidadosamente confeccionada com técnicas tradicionais e atenção aos detalhes.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Foco em Grupos</h3>
              <p className="text-muted-foreground">
                Especializados em atender CTGs, grupos de laçadores e acampamentos com soluções personalizadas.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-leather/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">Tradição Gaúcha</h3>
              <p className="text-muted-foreground">
                Valorizamos e preservamos a identidade gaúcha em cada peça que criamos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;