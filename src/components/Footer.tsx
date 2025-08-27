import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/a1be35eb-b948-4087-80bd-7bb9bdcc8420.png" 
              alt="Ponto do Soft" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm opacity-90">
              Tradição e qualidade em blusas de soft personalizadas para grupos gaúchos.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#inicio" className="hover:opacity-100 transition-opacity">Início</a></li>
              <li><a href="#sobre" className="hover:opacity-100 transition-opacity">Sobre</a></li>
              <li><a href="#produtos" className="hover:opacity-100 transition-opacity">Produtos</a></li>
              <li><a href="#promocao" className="hover:opacity-100 transition-opacity">Promoção</a></li>
              <li><a href="#contato" className="hover:opacity-100 transition-opacity">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Blusas Básicas</li>
              <li>Blusas Premium</li>
              <li>Kits para Grupos</li>
              <li>Bordados Personalizados</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Vacaria, RS
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (54) 9999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@pontodosoft.com.br
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Direto
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Ponto do Soft. Todos os direitos reservados. | Vacaria - Rio Grande do Sul
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;