import './css/bem-estar.css'
import Header from './header'

const dicas = [
  { emoji: '💧', titulo: 'Hidratação é Essencial', texto: 'Beba pelo menos 2 litros de água por dia. Hidrate-se com sucos naturais e chás sem açúcar.', classe: 'rosa', link: null },
  { emoji: '🥗', titulo: 'Coma Mais Verde', texto: 'Inclua vegetais em todas as refeições. Eles fornecem fibras e vitaminas importantes para o corpo.', classe: 'lavanda', link: null },
  { emoji: '⏰', titulo: 'Refeições Regulares', texto: 'Não pule refeições! Manter uma rotina ajuda seu metabolismo a funcionar corretamente.', classe: 'verde', link: null },
  { emoji: '🥜', titulo: 'Lanches Inteligentes', texto: 'Evite industrializados. Prefira castanhas, frutas secas, iogurte natural e outros snacks saudáveis.', classe: 'lilas', link: null },
  { emoji: '🧘', titulo: 'Mente e Corpo', texto: 'Alimentação saudável também inclui bem-estar mental. Pratique meditação ou uma atividade relaxante.', classe: 'lavanda', link: '/mente-corpo' },
  { emoji: '🍓', titulo: 'Menos Açúcar', texto: 'Reduza o consumo de açúcar refinado e explore adoçantes naturais, como mel e frutas.', classe: 'rosa', link: '/menos-acucar' },
  { emoji: '🍳', titulo: 'Café da Manhã Completo', texto: 'Inclua proteínas, fibras e frutas para começar o dia com energia e saciedade.', classe: 'verde', link: '/cafe-manha' },
  { emoji: '🚫', titulo: 'Evite Ultraprocessados', texto: 'Alimentos industrializados têm aditivos nocivos. Prefira o que vem direto da natureza.', classe: 'lilas', link: null }
]

const nutricionistas = [
  { nome: 'Ana Clara Silva', especialidade: 'Especialista em alimentação saudável e funcional.', id: 'ana' },
  { nome: 'Rafael Lima', especialidade: 'Foco em dietas personalizadas para emagrecimento.', id: 'rafael' },
  { nome: 'Camila Rocha', especialidade: 'Acompanhamento nutricional para atletas e veganos.', id: 'camila' },
  { nome: 'Mariana Santos', especialidade: 'Nutrição clínica e distúrbios alimentares.', id: 'mariana' },
  { nome: 'Pedro Oliveira', especialidade: 'Nutrição esportiva e suplementação.', id: 'pedro' },
  { nome: 'Júlia Ferreira', especialidade: 'Nutrição infantil e familiar.', id: 'julia' }
]

export default function BemEstar() {
  return (
    <div>
      <Header />
      <main className="bem-estar-container">
        <section className="dicas-section">
          <h1 className="titulo-destaque">Dicas Saudáveis para o Dia a Dia</h1>
          <p className="subtitulo">Pequenas mudanças podem fazer uma grande diferença na sua jornada de bem-estar. Confira nossas dicas!</p>
          <div className="dicas-lista">
            {dicas.map((dica, index) => (
              <div key={index} className={`dica-card ${dica.classe}`}>
                <h2>{dica.emoji} {dica.titulo}</h2>
                <p>{dica.texto}</p>
                {dica.link ? (
                  <a href={dica.link} className="botao-dica">Saiba mais</a>
                ) : (
                  <button className="botao-dica" disabled>Saiba mais</button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="consulta-section">
          <h2>Consulte com Nossos Nutricionistas</h2>
          <div className="nutricionistas">
            {nutricionistas.map((nutri, index) => (
              <div key={index} className="card">
                <img src={`/nutri${index + 1}.jpg`} alt={`Nutricionista ${nutri.nome}`} />
                <h3>{nutri.nome}</h3>
                <p>{nutri.especialidade}</p>
                <a href={`/contato-nutricionista?nutri=${nutri.id}`}>Contato por e-mail</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}