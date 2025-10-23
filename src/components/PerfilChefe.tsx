import { useLocation } from 'react-router-dom'
import './css/guia-gastronomico.css'
import Header from './header'
import Footer from './Footer'

const chefesDetalhes = {
  'maria-lima': {
    nome: 'Maria Lima',
    especialidade: 'Culinária Vegetariana e Saudável',
    descricao: 'Especialista em culinária vegetariana e saudável. Criadora do restaurante "Sabor da Terra".',
    img: 'img/chefe1.jpg',
    biografia: 'Maria Lima é uma chef renomada com mais de 15 anos de experiência em culinária vegetariana. Formada em Gastronomia pela Universidade Anhembi Morumbi, especializou-se em alimentação saudável e sustentável.',
    restaurante: 'Sabor da Terra',
    receitas: ['Salada de Quinoa com Legumes', 'Hambúrguer de Grão-de-Bico', 'Smoothie Verde Detox'],
    contato: 'maria@sabordaterra.com'
  },
  'joao-prado': {
    nome: 'João Prado',
    especialidade: 'Culinária Contemporânea',
    descricao: 'Chefe contemporâneo, une sabores tradicionais com técnicas modernas. Atende no "Gourmet Vital".',
    img: 'img/chefe2.jpg',
    biografia: 'João Prado combina tradição e inovação em seus pratos. Com formação no Le Cordon Bleu, trouxe técnicas francesas para a culinária brasileira saudável.',
    restaurante: 'Gourmet Vital',
    receitas: ['Salmão Grelhado com Quinoa', 'Risotto de Cogumelos', 'Sobremesa de Chia'],
    contato: 'joao@gourmetvital.com'
  },
  'carla-mendes': {
    nome: 'Carla Mendes',
    especialidade: 'Culinária Funcional',
    descricao: 'Formada na França, traz inovação à culinária funcional e saudável.',
    img: 'img/chefe3.jpg',
    biografia: 'Carla Mendes estudou na França e se especializou em culinária funcional. Seus pratos são desenvolvidos pensando nos benefícios nutricionais de cada ingrediente.',
    restaurante: 'Atelier Funcional',
    receitas: ['Bowl Antioxidante', 'Peixe com Crosta de Ervas', 'Mousse de Abacate'],
    contato: 'carla@atelierfuncional.com'
  }
}

export default function PerfilChefe() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const chefeId = params.get('chefe')
  const chefe = chefeId ? chefesDetalhes[chefeId as keyof typeof chefesDetalhes] : null

  if (!chefe) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header />
        <div style={{ textAlign: 'center', padding: '2rem', paddingTop: '140px' }}>
          <h2>Chefe não encontrado</h2>
          <a href="/guia-gastronomico">Voltar para Guia Gastronômico</a>
        </div>
      </div>
    )
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
      <main style={{ paddingTop: '120px', padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '2rem' }}>
          <a href="/guia-gastronomico" style={{ color: 'rgb(216, 113, 65)', textDecoration: 'none', fontWeight: '500' }}>
            ← Voltar para Guia Gastronômico
          </a>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <img 
            src={chefe.img} 
            alt={`Chefe ${chefe.nome}`} 
            style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', marginBottom: '1rem' }}
          />
          <h1 style={{ color: 'rgb(216, 113, 65)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>{chefe.nome}</h1>
          <h2 style={{ color: '#666', fontSize: '1.2rem', fontWeight: 'normal' }}>{chefe.especialidade}</h2>
        </div>

        <div style={{ background: '#ffc787', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <h3 style={{ color: 'rgb(216, 113, 65)', marginBottom: '1rem' }}>Sobre</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{chefe.biografia}</p>
          <p><strong>Restaurante:</strong> {chefe.restaurante}</p>
        </div>

        <div style={{ background: '#ffc787', padding: '2rem', borderRadius: '16px', marginBottom: '2rem' }}>
          <h3 style={{ color: 'rgb(216, 113, 65)', marginBottom: '1rem' }}>Receitas Famosas</h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            {chefe.receitas.map((receita, index) => (
              <li key={index} style={{ marginBottom: '0.5rem' }}>{receita}</li>
            ))}
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href={`mailto:${chefe.contato}`}
            style={{
              background: 'rgb(216, 113, 65)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '24px',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block'
            }}
          >
            Entrar em Contato
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}