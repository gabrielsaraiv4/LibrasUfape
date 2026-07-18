import { CalendarDays, Clock, MapPin } from 'lucide-react';
import './EventInfo.css';

export function EventInfo() {
  return (
    <section className="evento-section" id="evento">
      <div className="evento-faixa">
        <div className="evento-item">
          <span className="icon-badge laranja pequeno">
            <CalendarDays size={20} strokeWidth={2.2} />
          </span>
          <div>
            <strong>Data</strong>
            <span>07 de agosto</span>
          </div>
        </div>

        <div className="evento-divisor" aria-hidden="true"></div>

        <div className="evento-item">
          <span className="icon-badge laranja pequeno">
            <Clock size={20} strokeWidth={2.2} />
          </span>
          <div>
            <strong>Horário</strong>
            <span>das 8h às 11h</span>
          </div>
        </div>

        <div className="evento-divisor" aria-hidden="true"></div>

        <div className="evento-item">
          <span className="icon-badge laranja pequeno">
            <MapPin size={20} strokeWidth={2.2} />
          </span>
          <div>
            <strong>Local</strong>
            <span>UFAPE</span>
          </div>
        </div>
      </div>
    </section>
  );
}