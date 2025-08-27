import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const RodeioPromotion = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date for Rodeio de Vacaria (example: next February)
    const targetDate = new Date();
    targetDate.setMonth(1); // February
    targetDate.setDate(15); // 15th
    if (targetDate < new Date()) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="promocao" className="py-16 lg:py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            🎪 Promoção Rodeio de Vacaria 2024
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Garante já sua blusa personalizada para o maior evento tradicionalista da região!
          </p>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-8 max-w-md mx-auto">
            {[
              { label: "Dias", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Seg", value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-primary-foreground/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Desconto Progressivo</h3>
                <ul className="space-y-2 text-sm">
                  <li>10-19 peças: <strong>10% OFF</strong></li>
                  <li>20-49 peças: <strong>15% OFF</strong></li>
                  <li>50+ peças: <strong>20% OFF</strong></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Bordado Grátis</h3>
                <p className="text-sm">
                  Para pedidos de <strong>15 peças ou mais</strong>, 
                  o bordado personalizado é por nossa conta!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="animate-pulse-soft">
              Aproveitar Promoção
            </Button>
            <Button variant="outline-hero" size="lg">
              Saiba Mais
            </Button>
          </div>

          <p className="text-sm mt-6 opacity-75">
            ⏰ Promoção válida até o dia do evento. Não perca!
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 opacity-10">
        <div className="text-6xl">🤠</div>
      </div>
      <div className="absolute bottom-4 right-4 opacity-10">
        <div className="text-6xl">🐎</div>
      </div>
    </section>
  );
};

export default RodeioPromotion;