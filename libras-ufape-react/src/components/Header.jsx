import { HandHeart, Brain, CalendarDays, Sparkles } from 'lucide-react';
import './Header.css';

export function Header() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-onda" aria-hidden="true"></div>
      <div className="container cabecalho-container">
        <div className="marca-cabecalho">
          <div className="titulos-cabecalho">
            <h1><HandHeart size={30} strokeWidth={2.2} />Divulga Libras - 1ª Edição</h1>
            <h2>Universidade do Agreste de Pernambuco - Unidade Acadêmica de Garanhuns</h2>
          </div>
        </div>
        <nav className="menu-navegacao">
          <ul>
            <li>
              <a href="#quiz" className="nav-pill">
                <Brain size={16} className="nav-icon" />
                <span className="nav-label">Quiz</span>
              </a>
            </li>
            <li>
              <a href="#evento" className="nav-pill">
                <CalendarDays size={16} className="nav-icon" />
                <span className="nav-label">Evento</span>
              </a>
            </li>
            <li>
              <a href="#vivencia" className="nav-pill">
                <Sparkles size={16} className="nav-icon" />
                <span className="nav-label">Vivência</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}