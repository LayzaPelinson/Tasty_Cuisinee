import React from 'react';
import './css/guia-gastronomico.css';
import Header from './header';

function GuiaGastronomico() {
  const verPerfil = (chefeId: string) => {
    window.location.href = `perfil-chefe.html?chefe=${chefeId}`;
  };

  const handleSubmitChefe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Indicação enviada com sucesso!');
    (e.target as HTMLFormElement).reset();
  };

  const handleSubmitRestaurante = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Restaurante sugerido com sucesso!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div>
      <Header />
      <main>
        {/* Seção Chefes */}
        <section className="chefes-intro">
          <h2>Conheça nossos Chefes</h2>
          <p>Profissionais apaixonados por gastronomia e saúde. Inspire-se com suas criações e conheça seus restaurantes!</p>
        </section>

        <section className="chefes-container">
          <div className="chefes-lista">
            <div className="chefe-card">
              <img src="img/chefe1.jpg" alt="Chefe Maria Lima" />
              <h3>Maria Lima</h3>
              <p>Especialista em culinária vegetariana e saudável. Criadora do restaurante "Sabor da Terra".</p>
              <button onClick={() => verPerfil('maria-lima')}>Ver Perfil</button>
            </div>

            <div className="chefe-card">
              <img src="img/chefe2.jpg" alt="Chefe João Prado" />
              <h3>João Prado</h3>
              <p>Chefe contemporâneo, une sabores tradicionais com técnicas modernas. Atende no "Gourmet Vital".</p>
              <button onClick={() => verPerfil('joao-prado')}>Ver Perfil</button>
            </div>

            <div className="chefe-card">
              <img src="img/chefe3.jpg" alt="Chefe Carla Mendes" />
              <h3>Carla Mendes</h3>
              <p>Formada na França, traz inovação à culinária funcional e saudável.</p>
              <button onClick={() => verPerfil('carla-mendes')}>Ver Perfil</button>
            </div>
          </div>
          
          <div className="indique-chefe-form">
            <h3>Indique um chefe incrível!</h3>
            <form onSubmit={handleSubmitChefe}>
              <input type="text" placeholder="Nome completo" required />
              <input type="email" placeholder="E-mail do chefe" required />
              <button type="submit">Enviar indicação</button>
            </form>
          </div>
        </section>

        {/* Seção Restaurantes */}
        <section className="restaurantes-intro">
          <h2>Restaurantes Recomendados</h2>
          <p>Explore os melhores restaurantes indicados pelos nossos chefes e usuários!</p>
        </section>

        <section className="restaurantes-container">
          <div className="restaurantes-grid">
            {/* Card 1 */}
            <div className="restaurante-card">
              <img src="https://images.unsplash.com/photo-1555992336-03a23c6e96f3" alt="Restaurante Flor de Sal" />
              <h2>Flor de Sal</h2>
              <p><strong>Localização:</strong> São Paulo, SP</p>
              <p><strong>Culinária:</strong> Brasileira contemporânea</p>
              <a href="restaurante-detalhes.html?id=flor-de-sal">Ver mais</a>
            </div>

            {/* Card 2 */}
            <div className="restaurante-card">
              <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="Restaurante Bella Cucina" />
              <h2>Bella Cucina</h2>
              <p><strong>Localização:</strong> Curitiba, PR</p>
              <p><strong>Culinária:</strong> Italiana artesanal</p>
              <a href="restaurante-detalhes.html?id=bella-cucina">Ver mais</a>
            </div>

            {/* Card 3 */}
            <div className="restaurante-card">
              <img src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2" alt="Restaurante Veg & Vida" />
              <h2>Veg & Vida</h2>
              <p><strong>Localização:</strong> Salvador, BA</p>
              <p><strong>Culinária:</strong> Vegetariana & saudável</p>
              <a href="restaurante-detalhes.html?id=veg-vida">Ver mais</a>
            </div>
          </div>
          
          <div className="indique-restaurante-form">
            <h3>Indique um restaurante incrível!</h3>
            <form onSubmit={handleSubmitRestaurante}>
              <input type="text" placeholder="Nome do restaurante" required />
              <input type="text" placeholder="Cidade e Estado" required />
              <button type="submit">Enviar sugestão</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GuiaGastronomico;