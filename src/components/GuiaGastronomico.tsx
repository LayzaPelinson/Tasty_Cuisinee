import './css/guia-gastronomico.css'
import Header from './header'
import Footer from './Footer'

const chefes = [
  { id: 'maria-lima', nome: 'Maria Lima', descricao: 'Especialista em culinária vegetariana e saudável. Criadora do restaurante "Sabor da Terra".', img: 'img/chefe1.jpg' },
  { id: 'joao-prado', nome: 'João Prado', descricao: 'Chefe contemporâneo, une sabores tradicionais com técnicas modernas. Atende no "Gourmet Vital".', img: 'img/chefe2.jpg' },
  { id: 'carla-mendes', nome: 'Carla Mendes', descricao: 'Formada na França, traz inovação à culinária funcional e saudável.', img: 'img/chefe3.jpg' }
]

export default function GuiaGastronomico() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, tipo: string) => {
    e.preventDefault()
    alert(`${tipo} enviado com sucesso!`)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main>
        <section className="chefes-intro">
          <h2>Conheça nossos Chefes</h2>
          <p>Profissionais apaixonados por gastronomia e saúde. Inspire-se com suas criações e conheça seus restaurantes!</p>
        </section>

        <section className="chefes-container">
          <div className="chefes-lista">
            {chefes.map(chefe => (
              <div key={chefe.id} className="chefe-card">
                <img src={chefe.img} alt={`Chefe ${chefe.nome}`} />
                <h3>{chefe.nome}</h3>
                <p>{chefe.descricao}</p>
                <button onClick={() => window.location.href = `/perfil-chefe?chefe=${chefe.id}`}>Ver Perfil</button>
              </div>
            ))}
          </div>
          
          <div className="indique-chefe-form">
            <h3>Indique um chefe incrível!</h3>
            <form onSubmit={e => handleSubmit(e, 'Indicação')}>
              <input type="text" placeholder="Nome completo" required />
              <input type="email" placeholder="E-mail do chefe" required />
              <button type="submit">Enviar indicação</button>
            </form>
          </div>
        </section>

    
      </main>
      <Footer />
    </div>
  )
}