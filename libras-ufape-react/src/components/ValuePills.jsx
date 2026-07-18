import { HeartHandshake, Hand, Users, Lightbulb } from 'lucide-react';
import './ValuePills.css';

const valores = [
  { Icone: HeartHandshake, texto: 'Acessibilidade é respeito' },
  { Icone: Hand, texto: 'Libras conecta' },
  { Icone: Users, texto: 'Inclusão transforma' },
  { Icone: Lightbulb, texto: 'Conhecimento que inclui' },
];

export function ValuePills() {
  return (
    <ul className="value-pills">
      {valores.map(({ Icone, texto }) => (
        <li key={texto} className="value-pill">
          <span className="icon-badge pequeno">
            <Icone size={18} strokeWidth={2.2} />
          </span>
          <span>{texto}</span>
        </li>
      ))}
    </ul>
  );
}
