import { useMemo, useState } from 'react'
import { MOCK_RECIPES } from './data/recipes'
import './css/Receitas.css'
import Header from './header'

const CATEGORIES = ['Todos', 'Café da Manhã', 'Snacks', 'Marmitas Fit', 'Veganas', 'Detox', 'Low Carb', 'Sobremesas Saudáveis']

const getCategoryClass = (category: string) => {
  const classes: Record<string, string> = {
    'Sobremesas Saudáveis': 'rosa',
    'Café da Manhã': 'verde',
    'Marmitas Fit': 'lilas',
    'Veganas': 'lavanda',
    'Detox': 'verde',
    'Low Carb': 'lilas'
  }
  return classes[category] || 'roxo'
}

export default function Receitas() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todos')

  const receitasFiltradas = useMemo(() => {
    return MOCK_RECIPES.filter(r => {
      const matchCategoria = categoria === 'Todos' || r.category === categoria
      const matchBusca = r.title.toLowerCase().includes(busca.trim().toLowerCase())
      return matchCategoria && matchBusca
    })
  }, [busca, categoria])

  return (
    <main className="receitas-main">
      <Header/>
      <section className="search-bar">
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            placeholder="Buscar receita por nome..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
          />
          <button type="submit" className="search-icon" aria-label="Buscar">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </section>

      <div className="filtros">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={categoria === cat ? 'ativo' : ''}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="grid-receitas">
        {receitasFiltradas.map(r => (
          <article key={r.id} className="card-receita">
            <div className="imagem-receita">
              <img src={r.image} alt={r.title} />
            </div>
            <span className={`tag ${getCategoryClass(r.category)}`}>{r.category}</span>
            <h2 className='Card-Title'>{r.title}</h2>
            <div className="info-receita">
              <span>🕒 {r.time}</span>
              <span>⚙ {r.difficulty}</span>
              <button className='Favoritar'>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg> {r.likes}
              </button>
            </div>
            <button className="ver-receita" onClick={() => window.location.href = `/receitas/${r.id}`}>Ver Receita</button>
          </article>
        ))}
        {receitasFiltradas.length === 0 && (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#777' }}>
            Nenhuma receita encontrada com os filtros atuais.
          </p>
        )}
      </section>
    </main>
  )
}
