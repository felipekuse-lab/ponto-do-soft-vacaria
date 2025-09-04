import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Captura os valores do formulário
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const group = formData.get('group') as string;
    const quantity = formData.get('quantity') as string;
    const message = formData.get('message') as string;
    
    // Monta a mensagem para o WhatsApp
    let whatsappMessage = `*SOLICITAÇÃO DE ORÇAMENTO*\n\n`;
    whatsappMessage += `*Nome:* ${name}\n`;
    whatsappMessage += `*Telefone:* ${phone}\n`;
    whatsappMessage += `*E-mail:* ${email}\n`;
    
    if (group) whatsappMessage += `*Grupo/Empresa:* ${group}\n`;
    if (quantity) whatsappMessage += `*Quantidade:* ${quantity}\n`;
    if (message) whatsappMessage += `\n*Detalhes:*\n${message}`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abre o WhatsApp com a mensagem
    const whatsappUrl = `https://wa.me/5554999058528?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };
  return <section id="contato" className="py-16 lg:py-24 bg-background">
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
              <CardTitle className="text-2xl font-bold text-card-foreground">Solicitar Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" placeholder="Seu nome" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" name="phone" placeholder="(00) 00000-0000" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div>
                  <Label htmlFor="group">Grupo/Empresa</Label>
                  <Input id="group" name="group" placeholder="Nome do seu grupo ou empresa" />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantidade aproximada</Label>
                  <Input id="quantity" name="quantity" placeholder="Ex: 20 peças" />
                </div>
                <div>
                  <Label htmlFor="message">Detalhes do pedido</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Descreva o que você precisa: modelo, cores, bordados, etc." 
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
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
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/5554999058528?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20Softs', '_blank', 'noopener,noreferrer')}
                >
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
                    <span>(54) 99905-8528</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span>contato@pontodosoft.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Instagram className="w-4 h-4 text-primary" />
                    </div>
                    <span>@pontodosoft</span>
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
    </section>;
};
export default Contact;