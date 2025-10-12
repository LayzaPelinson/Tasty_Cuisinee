import './css/Home.css'
import Header from './header'
    
export default function Home() {
  return (
    <div className='full-page'>
      <Header />
      <div className='Page'>
        <h1>Comida de verdade,</h1>
        <h2>Sabor de Sobra</h2>
        <h3>Receitas deliciosas criadas com amor e diversão!</h3>
        <div className="buttons">
          <button onClick={() => window.location.href = "/receitas"}>Ver Receitas</button>
          <button onClick={() => window.location.href = "/publicar"}>Publicar Receita</button>
        </div>
      </div>
    </div>
  )
}