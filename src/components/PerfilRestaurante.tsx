import { useLocation } from 'react-router-dom'
import './css/guia-gastronomico.css'
import Header from './header'
import Footer from './Footer'

const restaurantesDetalhes = {
  'flor-de-sal': {
    nome: 'Flor de Sal',
    localizacao: 'São Paulo, SP',
    culinaria: 'Brasileira contemporânea',
    img: 'https://images.unsplash.com/photo-1555992336-03a23c6e96f3',
    descricao: 'O Flor de Sal oferece uma experiência gastronômica única, combinando sabores tradicionais brasileiros com técnicas culinárias modernas.',
    endereco: 'Rua Augusta, 1234 - Consolação, São Paulo - SP',
    telefone: '(11) 3456-7890',
    horario: 'Ter-Dom: 18h às 23h',
    especialidades: ['Moqueca de Palmito', 'Risotto de Pequi', 'Bobó de Camarão Vegano'],
    preco: 'R$ 80-120 por pessoa',
    ambiente: 'Moderno e aconchegante, ideal para jantares românticos e encontros de negócios.'
  },
  'bella-cucina': {
    nome: 'Bella Cucina',
    localizacao: 'Curitiba, PR',
    culinaria: 'Italiana artesanal',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092',
    descricao: 'Autêntica culinária italiana com ingredientes frescos e receitas tradicionais passadas de geração em geração.',
    endereco: 'Av. Batel, 567 - Batel, Curitiba - PR',
    telefone: '(41) 2345-6789',
    horario: 'Seg-Sáb: 12h às 15h e 19h às 23h',
    especialidades: ['Pasta Fresca Caseira', 'Pizza Napoletana', 'Tiramisu Tradicional'],
    preco: 'R$ 60-90 por pessoa',
    ambiente: 'Familiar e acolhedor, com decoração italiana autêntica.'
  },
  'veg-vida': {
    nome: 'Veg & Vida',
    localizacao: 'Salvador, BA',
    culinaria: 'Vegetariana & saudável',
    img: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2',
    descricao: 'Restaurante 100% vegetariano focado em alimentação saudável e sustentável, com ingredientes orgânicos locais.',
    endereco: 'Rua do Pelourinho, 89 - Centro Histórico, Salvador - BA',
    telefone: '(71) 3456-7890',
    horario: 'Seg-Dom: 11h às 22h',
    especialidades: ['Bowl de Açaí Orgânico', 'Hambúrguer de Jaca', 'Smoothie Detox'],
    preco: 'R$ 40-70 por pessoa',
    ambiente: 'Descontraído e natural, com vista para o centro histórico.'
  }
}

export default function PerfilRestaurante() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const restauranteId = params.get('id')
  const restaurante = restauranteId ? restaurantesDetalhes[restauranteId as keyof typeof restaurantesDetalhes] : null

  if (!restaurante) {
    return (
      <div>
        <Header />
        <div style={{ textAlign: 'center', padding: '2rem', paddingTop: '140px' }}>
          <h2>Restaurante não encontrado</h2>
          <a href="/guia-gastronomico">Voltar para Guia Gastronômico</a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main style={{ paddingTop: '120px', padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <a href="/guia-gastronomico" style={{ color: 'rgb(216, 113, 65)', textDecoration: 'none', fontWeight: '500' }}>
            ← Voltar para Guia Gastronômico
          </a>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <img 
            src={restaurante.img} 
            alt={`Restaurante ${restaurante.nome}`} 
            style={{ width: '100%', maxWidth: '400px', height: '250px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1rem' }}
          />
          <h1 style={{ color: 'rgb(216, 113, 65)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{restaurante.nome}</h1>
          <h2 style={{ color: '#666', fontSize: '1.2rem', fontWeight: 'normal' }}>{restaurante.culinaria}</h2>
        </div>

        <div style={{ background: '#ffc787', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <h3 style={{ color: 'rgb(216, 113, 65)', marginBottom: '1rem' }}>Sobre o Restaurante</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{restaurante.descricao}</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Ambiente:</strong> {restaurante.ambiente}</p>
          <p><strong>Faixa de preço:</strong> {restaurante.preco}</p>
        </div>

        <div style={{ background: '#ffc787', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <h3 style={{ color: 'rgb(216, 113, 65)', marginBottom: '1rem' }}>Especialidades da Casa</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {restaurante.especialidades.map((especialidade, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{especialidade}</li>
            ))}
          </ul>
        </div>

        <div style={{ background: '#ffc787', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <h3 style={{ color: 'rgb(216, 113, 65)', marginBottom: '1rem' }}>Informações de Contato</h3>
          <p style={{ marginBottom: '0.5rem' }}><strong>Endereço:</strong> {restaurante.endereco}</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Telefone:</strong> {restaurante.telefone}</p>
          <p><strong>Horário:</strong> {restaurante.horario}</p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href={`tel:${restaurante.telefone}`}
            style={{
              background: 'rgb(216, 113, 65)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              marginRight: '1rem'
            }}
          >
            Ligar para Reserva
          </a>
          <a 
            href={`https://maps.google.com/?q=${encodeURIComponent(restaurante.endereco)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgb(255, 144, 92)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            Ver no Mapa
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}