import { QRCodeSVG } from 'qrcode.react';
import { Calendar, Clock, MapPin, User, Ticket, CreditCard } from 'lucide-react';

interface TicketInfo {
  eventTitle: string;
  artistName: string;
  date: string;
  time: string;
  venue: string;
  holder: string;
  ticketType: string;
  price: string;
  notice: string;
  logo: string;
  ticketId: string;
}

const defaultTicketInfo: TicketInfo = {
  eventTitle: "CONCERT DE MUSIQUE",
  artistName: "VANO",
  date: "30/11/2025",
  time: "12h00",
  venue: "CTN",
  holder: "Akobi Koubourath",
  ticketType: "VANO",
  price: "50 000 F CFA",
  notice: "Veuillez présenter ce ticket à l'entrée. Ce ticket n'est pas remboursable.",
  logo: "OURITEK",
  ticketId: "VANO-2025-001-AK"
};

export function EventTicket({ ticketInfo = defaultTicketInfo }: { ticketInfo?: TicketInfo }) {
  const qrData = JSON.stringify({
    id: ticketInfo.ticketId,
    event: ticketInfo.artistName,
    holder: ticketInfo.holder,
    date: ticketInfo.date
  });

  return (
    <div className="ticket-container ticket-border-gold rounded-xl w-full max-w-4xl mx-auto gold-shine">
      {/* Corner Ornaments */}
      <div className="corner-ornament top-left" />
      <div className="corner-ornament top-right" />
      <div className="corner-ornament bottom-left" />
      <div className="corner-ornament bottom-right" />

      <div className="flex flex-col md:flex-row">
        {/* Main Ticket Section */}
        <div className="flex-1 p-8 md:p-10">
          {/* Logo */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                <span className="font-display text-primary font-bold text-lg">O</span>
              </div>
              <span className="font-display text-primary font-semibold tracking-wider text-lg">
                {ticketInfo.logo}
              </span>
            </div>
            <span className="text-xs text-muted-foreground font-body tracking-widest uppercase">
              Ticket Officiel
            </span>
          </div>

          {/* Decorative Line */}
          <div className="decorative-line mb-8" />

          {/* Event Title */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground font-body tracking-widest uppercase mb-2">
              {ticketInfo.eventTitle}
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold gold-text text-shadow-gold tracking-wide">
              {ticketInfo.artistName}
            </h1>
          </div>

          {/* Event Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <DetailItem 
              icon={<Calendar className="w-4 h-4" />}
              label="Date"
              value={ticketInfo.date}
            />
            <DetailItem 
              icon={<Clock className="w-4 h-4" />}
              label="Heure"
              value={ticketInfo.time}
            />
            <DetailItem 
              icon={<MapPin className="w-4 h-4" />}
              label="Lieu"
              value={ticketInfo.venue}
            />
            <DetailItem 
              icon={<User className="w-4 h-4" />}
              label="Titulaire"
              value={ticketInfo.holder}
            />
            <DetailItem 
              icon={<Ticket className="w-4 h-4" />}
              label="Type"
              value={ticketInfo.ticketType}
            />
            <DetailItem 
              icon={<CreditCard className="w-4 h-4" />}
              label="Prix"
              value={ticketInfo.price}
              highlight
            />
          </div>

          {/* Decorative Line */}
          <div className="decorative-line mb-6" />

          {/* Notice */}
          <p className="text-xs text-muted-foreground font-body leading-relaxed">
            {ticketInfo.notice}
          </p>
        </div>

        {/* QR Code Section - Separated by perforation */}
        <div className="ticket-perforation relative md:border-l border-t md:border-t-0 border-border/50">
          {/* Perforation line positioning */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px" style={{
            background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 8px, hsl(var(--border)) 8px, hsl(var(--border)) 16px)'
          }} />
          <div className="md:hidden absolute left-0 right-0 top-0 h-px" style={{
            background: 'repeating-linear-gradient(to right, transparent 0px, transparent 8px, hsl(var(--border)) 8px, hsl(var(--border)) 16px)'
          }} />

          <div className="p-8 md:p-10 flex flex-col items-center justify-center h-full min-h-[280px]">
            {/* QR Code Container */}
            <div className="bg-foreground p-4 rounded-lg shadow-gold">
              <QRCodeSVG 
                value={qrData}
                size={140}
                level="H"
                bgColor="hsl(45, 30%, 95%)"
                fgColor="hsl(220, 20%, 8%)"
              />
            </div>
            
            <p className="text-xs text-muted-foreground font-body mt-4 text-center tracking-wide">
              SCANNER POUR VALIDER
            </p>
            
            <p className="text-xs text-primary/80 font-mono mt-2 tracking-widest">
              {ticketInfo.ticketId}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ 
  icon, 
  label, 
  value, 
  highlight = false 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  highlight?: boolean;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-xs font-body tracking-wide uppercase">{label}</span>
      </div>
      <p className={`font-body font-semibold ${highlight ? 'text-primary text-lg' : 'text-foreground'}`}>
        {value}
      </p>
    </div>
  );
}

export default EventTicket;
