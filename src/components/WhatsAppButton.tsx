import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5554999999999"; // Replace with actual WhatsApp number
    const message = "Olá! Gostaria de saber mais sobre as blusas de soft personalizadas.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-warm animate-pulse-soft"
        size="icon"
      >
        <span className="text-2xl">📱</span>
      </Button>
    </div>
  );
};

export default WhatsAppButton;