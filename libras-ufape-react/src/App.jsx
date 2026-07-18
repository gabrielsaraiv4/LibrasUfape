import { Header } from './components/Header';
import { Objetivo } from './components/Objetivo';
import { AcoesExtensionistas } from './components/AcoesExtensionistas';
import { EventInfo } from './components/EventInfo';
import { Footer } from './components/Footer';
import { CrayonFilters } from './components/CrayonFilters';
import './App.css';
import logo from './assets/img/logo.png';
import grupoPessoas from './assets/img/grupo-pessoas.png';

function App() {
  return (
    <>
      <CrayonFilters />
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <Header />

      <main>
        <section className="hero-section container" id="vivencia">
          <div className="hero-left">
            <div className="card-inclinado cartao-giz">
              <h3>Quem somos?</h3>
              <p>Esse site foi desenvolvido por discentes matriculados na disciplina de Libras 2026.1 com o intuito de compartilhar vivência do povo surdo na nossa instituição - UFAPE - divulgar fatos e conectar pessoas.</p>
            </div>
          </div>

          <div className="hero-right">
            <img src={logo} alt="Logo Libras" className="img-logo-grande" />
            <img src={grupoPessoas} alt="Grupo de pessoas se comunicando em Libras" className="img-grupo" />
          </div>
        </section>

        <div className="container">
          <Objetivo />
        </div>

        <div className="container">
          <AcoesExtensionistas />
        </div>

        <div className="container">
          <EventInfo />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;