import { EventTicket } from "@/components/EventTicket";
import { Printer } from "lucide-react";

const Index = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-16">
      {/* Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-4 font-body">
            Votre billet électronique
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold gold-text mb-2">
            Ticket d'Événement
          </h1>
        </header>

        {/* Ticket */}
        <section aria-label="Ticket d'événement" className="mb-12">
          <EventTicket />
        </section>

        {/* Print Button */}
        <div className="text-center no-print">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-body font-semibold tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-gold hover:shadow-gold-lg"
          >
            <Printer className="w-5 h-5" />
            Imprimer le Ticket
          </button>
          <p className="text-xs text-muted-foreground mt-4 font-body">
            Format optimisé pour impression A4 ou mobile
          </p>
        </div>
      </div>
    </main>
  );
};

export default Index;
