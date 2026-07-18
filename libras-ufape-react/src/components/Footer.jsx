import { Heart } from 'lucide-react';
import { ValuePills } from './ValuePills';
import './Footer.css';

export function Footer() {
  return (
    <footer className="rodape">
      <div className="container">
        <p className="rodape-frase">
          Libras conecta pessoas, culturas e possibilidades! <Heart size={20} fill="currentColor" />
        </p>

        <ValuePills />

        <p className="rodape-cta">
          Participe, envolva-se e faça parte dessa transformação!
        </p>
      </div>
    </footer>
  );
}