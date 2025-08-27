import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert("Formulário enviado! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-foreground">
            Solicite seu Orçamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco e receba um orçamento personalizado para seu grupo ou empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border shadow-soft">
            <CardHeader>
              <CardTitle className="text-card-foreground">Formulário de Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" name="name" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone/WhatsApp</Label>
                  <Input id="phone" name="phone" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="group">Nome do grupo/CTG/empresa</Label>
                  <Input id="group" name="group" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantidade de peças</Label>
                  <Input id="quantity" name="quantity" type="number" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Detalhes da personalização</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Descreva como gostaria da personalização (bordado, cores, etc.)"
                    className="mt-1"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">WhatsApp Direto</h3>
                </div>
                <p className="mb-4">
                  Prefere conversar pelo WhatsApp? Clique no botão abaixo e fale conosco agora mesmo!
                </p>
                <Button variant="hero" size="lg" className="w-full">
                  Conversar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-card-foreground">Informações de Contato</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <span>Vacaria, Rio Grande do Sul</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span>(54) 9999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>contato@pontodosoft.com.br</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground border-0 shadow-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-xl font-semibold">Horário de Atendimento</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;