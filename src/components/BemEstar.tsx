import React from 'react';
import './css/bem-estar.css';
import Header from './header';

function BemEstar() {
  return (
    <div>
      <Header />
      <main className="bem-estar-container">
      <section className="dicas-section">
        <h1 className="titulo-destaque">Dicas Saudáveis para o Dia a Dia</h1>
        <p className="subtitulo">Pequenas mudanças podem fazer uma grande diferença na sua jornada de bem-estar. Confira nossas dicas!</p>

        <div className="dicas-lista">
          <div className="dica-card rosa">
            <h2>💧 Hidratação é Essencial</h2>
            <p>Beba pelo menos 2 litros de água por dia. Hidrate-se com sucos naturais e chás sem açúcar.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card lavanda">
            <h2>🥗 Coma Mais Verde</h2>
            <p>Inclua vegetais em todas as refeições. Eles fornecem fibras e vitaminas importantes para o corpo.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card verde">
            <h2>⏰ Refeições Regulares</h2>
            <p>Não pule refeições! Manter uma rotina ajuda seu metabolismo a funcionar corretamente.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card lilas">
            <h2>🥜 Lanches Inteligentes</h2>
            <p>Evite industrializados. Prefira castanhas, frutas secas, iogurte natural e outros snacks saudáveis.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card lavanda">
            <h2>🧘 Mente e Corpo</h2>
            <p>Alimentação saudável também inclui bem-estar mental. Pratique meditação ou uma atividade relaxante.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card rosa">
            <h2>🍓 Menos Açúcar</h2>
            <p>Reduza o consumo de açúcar refinado e explore adoçantes naturais, como mel e frutas.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card verde">
            <h2>🍳 Café da Manhã Completo</h2>
            <p>Inclua proteínas, fibras e frutas para começar o dia com energia e saciedade.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>

          <div className="dica-card lilas">
            <h2>🚫 Evite Ultraprocessados</h2>
            <p>Alimentos industrializados têm aditivos nocivos. Prefira o que vem direto da natureza.</p>
            <button className="botao-dica">Saiba mais</button>
          </div>
        </div>
      </section>

      <section className="consulta-section">
        <h2>Consulte com Nossos Nutricionistas</h2>
        <div className="nutricionistas">
          <div className="card">
            <img src="/nutri1.jpg" alt="Nutricionista Ana Clara" />
            <h3>Ana Clara Silva</h3>
            <p>Especialista em alimentação saudável e funcional.</p>
            <a href="/contato-nutricionista?nutri=ana">Contato por e-mail</a>
          </div>

          <div className="card">
            <img src="/nutri2.jpg" alt="Nutricionista Rafael Lima" />
            <h3>Rafael Lima</h3>
            <p>Foco em dietas personalizadas para emagrecimento.</p>
            <a href="/contato-nutricionista?nutri=rafael">Contato por e-mail</a>
          </div>

          <div className="card">
            <img src="/nutri3.jpg" alt="Nutricionista Camila Rocha" />
            <h3>Camila Rocha</h3>
            <p>Acompanhamento nutricional para atletas e veganos.</p>
            <a href="/contato-nutricionista?nutri=camila">Contato por e-mail</a>
          </div>

          <div className="card">
            <img src="/nutri4.jpg" alt="Nutricionista Mariana Santos" />
            <h3>Mariana Santos</h3>
            <p>Nutrição clínica e distúrbios alimentares.</p>
            <a href="/contato-nutricionista?nutri=mariana">Contato por e-mail</a>
          </div>

          <div className="card">
            <img src="/nutri5.jpg" alt="Nutricionista Pedro Oliveira" />
            <h3>Pedro Oliveira</h3>
            <p>Nutrição esportiva e suplementação.</p>
            <a href="/contato-nutricionista?nutri=pedro">Contato por e-mail</a>
          </div>

          <div className="card">
            <img src="/nutri6.jpg" alt="Nutricionista Júlia Ferreira" />
            <h3>Júlia Ferreira</h3>
            <p>Nutrição infantil e familiar.</p>
            <a href="/contato-nutricionista?nutri=julia">Contato por e-mail</a>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}

export default BemEstar;