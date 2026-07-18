import { HandHeart, Brain, CalendarDays, Sparkles } from 'lucide-react';
import './Header.css';
import logo from '../assets/img/logo.png';

export function Header() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-onda" aria-hidden="true"></div>
      <div className="container cabecalho-container">
        <div className="marca-cabecalho">
          <img src={logo} alt="" className="logo-cabecalho" aria-hidden="true" />
          <div className="titulos-cabecalho">
            <h1><HandHeart size={30} strokeWidth={2.2} /> Libras</h1>
            <h2>Universidade do Agreste de Pernambuco</h2>
          </div>
        </div>
        <nav className="menu-navegacao">
          <ul>
            <li><a href="#quiz"><Brain size={16} /> Quiz</a></li>
            <li><a href="#evento"><CalendarDays size={16} /> Evento</a></li>
            <li><a href="#vivencia"><Sparkles size={16} /> Vivência</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}