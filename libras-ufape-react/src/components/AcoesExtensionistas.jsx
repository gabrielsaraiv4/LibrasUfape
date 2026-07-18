import {
  Presentation,
  Hand,
  HeartHandshake,
  Tent,
  Images,
  BookOpen,
  Milestone,
  Share2,
  ListChecks,
} from 'lucide-react';
import './AcoesExtensionistas.css';

const acoes = [
  {
    letra: 'a',
    Icone: Presentation,
    titulo: 'Palestra com convidado surdo',
    descricao: 'Compartilhando vivências e conhecimentos.',
  },
  {
    letra: 'b',
    Icone: Hand,
    titulo: 'Oficina de Libras',
    descricao: 'Aprenda, pratique e se conecte!',
  },
  {
    letra: 'c',
    Icone: HeartHandshake,
    titulo: 'Caixa de acessibilidade',
    descricao: 'Sua opinião faz a diferença!',
  },
  {
    letra: 'd',
    Icone: Tent,
    titulo: 'Tenda sobre mitos relacionados a Libras e ao surdo',
    descricao: 'Desconstruir para incluir.',
  },
  {
    letra: 'e',
    Icone: Images,
    titulo: 'Fotografias de surdos de referência',
    descricao: 'Histórias que inspiram e representam.',
  },
  {
    letra: 'f',
    Icone: BookOpen,
    titulo: 'Material informativo',
    descricao: 'Informação que conecta e transforma.',
  },
  {
    letra: 'g',
    Icone: Milestone,
    titulo: 'Trajetória histórica da educação de surdos',
    descricao: 'Conhecer o passado para construir o futuro.',
  },
  {
    letra: 'h',
    Icone: Share2,
    titulo: 'Divulgação pelo Instagram e site do evento',
    descricao: 'Acompanhe, compartilhe e participe!',
  },
];

export function AcoesExtensionistas() {
  return (
    <section className="acoes-section" id="acoes">
      <div className="section-title">
        <span className="icon-badge">
          <ListChecks size={26} strokeWidth={2.2} />
        </span>
        <h2>Ações extensionistas</h2>
      </div>

      <div className="acoes-grid">
        {acoes.map(({ letra, Icone, titulo, descricao }) => (
          <article className="acao-card" key={letra}>
            <span className="acao-letra">{letra}</span>
            <span className="icon-badge pequeno">
              <Icone size={22} strokeWidth={2.2} />
            </span>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
