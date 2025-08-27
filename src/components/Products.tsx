import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, Crown, Users } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Blusa Básica Personalizada",
      description: "Blusa de soft com bordado do seu CTG, grupo ou empresa",
      features: ["Tecido de alta qualidade", "Bordado personalizado", "Várias cores disponíveis"],
      icon: Shirt
    },
    {
      title: "Blusa Premium com Brasão",
      description: "Modelo premium com brasão bordado e detalhes especiais",
      features: ["Tecido premium", "Brasão bordado", "Acabamento especial", "Nome personalizado"],
      icon: Crown
    },
    {
      title: "Kit Grupo/Empresa Completo",
      description: "Pacote especial para grupos e empresas com desconto progressivo",
      features: ["A partir de 10 peças", "Desconto progressivo", "Bordado grátis", "Entrega expressa"],
      icon: Users
    }
  ];

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira nossos modelos de blusas de soft personalizadas, especialmente desenvolvidas 
            para grupos tradicionalistas, acampamentos e empresas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="aspect-square bg-accent/50 rounded-lg mb-4 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-primary" />
                  </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" className="w-full">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
            );
          })}
        </div>

        <div className="bg-accent/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Personalização Completa
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Oferecemos bordado com brasão do CTG, nome do grupo/empresa, frases especiais e logos personalizados. 
            Cada peça é única e representa a identidade do seu grupo ou empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Brasões de CTG
            </span>
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">
              Nomes de Grupos
            </span>
            <span className="bg-leather/20 text-leather-dark px-4 py-2 rounded-full text-sm font-medium">
              Frases Gaúchas
            </span>
            <span className="bg-wood/30 text-foreground px-4 py-2 rounded-full text-sm font-medium">
              Logos Personalizados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;