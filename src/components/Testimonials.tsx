import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "CTG Querência Gaúcha",
      text: "As blusas ficaram perfeitas! Qualidade excelente e o bordado do nosso brasão ficou impecável.",
      role: "Grupo Tradicionalista"
    },
    {
      name: "Marcos Silva",
      text: "Já é o terceiro ano que fazemos nossas blusas com o Ponto do Soft. Sempre pontual e com ótima qualidade.",
      role: "Coordenador de Acampamento"
    },
    {
      name: "Grupo Laçadores Unidos",
      text: "O atendimento é excelente e o resultado superou nossas expectativas. Recomendo para todos os grupos!",
      role: "Grupo de Laçadores"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-soft hover:shadow-warm transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;