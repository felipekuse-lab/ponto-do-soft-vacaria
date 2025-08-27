import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/a1be35eb-b948-4087-80bd-7bb9bdcc8420.png" 
            alt="Ponto do Soft" 
            className="h-10 w-auto"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
            Início
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#produtos" className="text-foreground hover:text-primary transition-colors">
            Produtos
          </a>
          <a href="#promocao" className="text-foreground hover:text-primary transition-colors">
            Promoção
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
        <Button variant="primary" size="sm">
          Peça seu Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;