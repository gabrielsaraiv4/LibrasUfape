import { Target } from 'lucide-react';
import './Objetivo.css';

export function Objetivo() {
  return (
    <section className="objetivo-section" id="objetivo">
      <div className="objetivo-card">
        <div className="section-title">
          <span className="icon-badge laranja">
            <Target size={26} strokeWidth={2.2} />
          </span>
          <h2>Objetivo</h2>
        </div>
        <p>
          Divulgar a Língua Brasileira de Sinais (Libras) à comunidade acadêmica e à
          comunidade local, promovendo a conscientização sobre a importância da
          acessibilidade linguística e cultural para a população surda.
        </p>
      </div>
    </section>
  );
}
