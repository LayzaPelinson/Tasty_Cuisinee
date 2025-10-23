import { useLocation } from 'react-router-dom'
import './css/bem-estar.css'
import Header from './header'
import Footer from './Footer'

const dicasDetalhes = {
  'hidratacao': {
    titulo: '💧 Hidratação é Essencial',
    conteudo: {
      introducao: 'A hidratação adequada é fundamental para o bom funcionamento do nosso organismo.',
      beneficios: [
        'Melhora a digestão e absorção de nutrientes',
        'Regula a temperatura corporal',
        'Transporta nutrientes para as células',
        'Elimina toxinas do corpo',
        'Mantém a pele saudável e hidratada'
      ],
      dicas: [
        'Beba um copo de água ao acordar',
        'Tenha sempre uma garrafa de água por perto',
        'Inclua chás e sucos naturais na rotina',
        'Consuma frutas ricas em água como melancia e laranja',
        'Evite bebidas açucaradas e com cafeína em excesso'
      ]
    }
  },
  'vegetais': {
    titulo: '🥗 Coma Mais Verde',
    conteudo: {
      introducao: 'Os vegetais são fontes essenciais de vitaminas, minerais e fibras para uma alimentação equilibrada.',
      beneficios: [
        'Fornecem vitaminas A, C, K e folato',
        'Rico em fibras que melhoram a digestão',
        'Baixo em calorias e gorduras',
        'Antioxidantes que combatem o envelhecimento',
        'Reduzem o risco de doenças crônicas'
      ],
      dicas: [
        'Inclua pelo menos 3 cores diferentes de vegetais por refeição',
        'Comece o almoço e jantar com uma salada',
        'Experimente vegetais refogados, grelhados ou no vapor',
        'Adicione folhas verdes em sucos e vitaminas',
        'Mantenha vegetais cortados na geladeira para lanches'
      ]
    }
  },
  'refeicoes-regulares': {
    titulo: '⏰ Refeições Regulares',
    conteudo: {
      introducao: 'Manter horários regulares para as refeições é crucial para um metabolismo saudável.',
      beneficios: [
        'Estabiliza os níveis de açúcar no sangue',
        'Melhora o funcionamento do metabolismo',
        'Reduz a compulsão alimentar',
        'Melhora a digestão',
        'Aumenta a sensação de saciedade'
      ],
      dicas: [
        'Faça 5-6 refeições pequenas ao longo do dia',
        'Não fique mais de 3-4 horas sem comer',
        'Estabeleça horários fixos para as principais refeições',
        'Prepare lanches saudáveis com antecedência',
        'Evite pular o café da manhã'
      ]
    }
  },
  'lanches-saudaveis': {
    titulo: '🥜 Lanches Inteligentes',
    conteudo: {
      introducao: 'Escolher lanches nutritivos ajuda a manter a energia e evita excessos nas refeições principais.',
      beneficios: [
        'Fornece energia sustentada',
        'Rico em proteínas e gorduras boas',
        'Controla a fome entre as refeições',
        'Melhora a concentração',
        'Evita picos de açúcar no sangue'
      ],
      dicas: [
        'Prefira castanhas, nozes e amêndoas',
        'Combine frutas com iogurte natural',
        'Prepare mix de frutas secas sem açúcar',
        'Inclua vegetais com pasta de amendoim',
        'Evite produtos industrializados e processados'
      ]
    }
  },
  'mente-corpo': {
    titulo: '🧘 Mente e Corpo',
    conteudo: {
      introducao: 'O bem-estar mental está diretamente conectado com nossa alimentação e saúde física.',
      beneficios: [
        'Reduz o estresse e ansiedade',
        'Melhora a qualidade do sono',
        'Aumenta a consciência alimentar',
        'Fortalece o sistema imunológico',
        'Promove equilíbrio emocional'
      ],
      dicas: [
        'Pratique meditação por 10 minutos diários',
        'Faça refeições sem distrações (TV, celular)',
        'Inclua atividades relaxantes na rotina',
        'Mastigue devagar e saboreie os alimentos',
        'Pratique gratidão antes das refeições'
      ]
    }
  },
  'menos-acucar': {
    titulo: '🍓 Menos Açúcar',
    conteudo: {
      introducao: 'Reduzir o açúcar refinado é essencial para uma vida mais saudável e equilibrada.',
      beneficios: [
        'Estabiliza os níveis de energia',
        'Reduz o risco de diabetes',
        'Melhora a saúde dental',
        'Controla o peso corporal',
        'Diminui a inflamação no corpo'
      ],
      dicas: [
        'Use mel, tâmaras ou stevia como adoçantes naturais',
        'Leia rótulos e evite açúcares ocultos',
        'Substitua refrigerantes por água com frutas',
        'Prefira frutas frescas a sucos industrializados',
        'Reduza gradualmente o açúcar no café e chá'
      ]
    }
  },
  'cafe-manha': {
    titulo: '🍳 Café da Manhã Completo',
    conteudo: {
      introducao: 'Um café da manhã equilibrado fornece energia e nutrientes essenciais para começar bem o dia.',
      beneficios: [
        'Ativa o metabolismo pela manhã',
        'Melhora a concentração e foco',
        'Fornece energia sustentada',
        'Controla a fome ao longo do dia',
        'Melhora o humor e disposição'
      ],
      dicas: [
        'Inclua proteínas: ovos, iogurte ou queijo',
        'Adicione fibras: aveia, frutas ou pães integrais',
        'Não esqueça das gorduras boas: abacate ou castanhas',
        'Hidrate-se com água ou chás naturais',
        'Evite açúcares refinados e produtos industrializados'
      ]
    }
  },
  'ultraprocessados': {
    titulo: '🚫 Evite Ultraprocessados',
    conteudo: {
      introducao: 'Alimentos ultraprocessados contêm aditivos químicos que podem prejudicar nossa saúde.',
      beneficios: [
        'Reduz a ingestão de conservantes e corantes',
        'Diminui o sódio e açúcar na dieta',
        'Melhora a digestão',
        'Fortalece o sistema imunológico',
        'Promove maior saciedade'
      ],
      dicas: [
        'Prefira alimentos in natura ou minimamente processados',
        'Cozinhe mais em casa',
        'Leia sempre os rótulos dos produtos',
        'Evite produtos com mais de 5 ingredientes',
        'Substitua por versões caseiras quando possível'
      ]
    }
  }
}

export default function DicaDetalhes() {
  const location = useLocation()
  const slug = location.pathname.substring(1) // Remove a barra inicial
  const dica = slug ? dicasDetalhes[slug as keyof typeof dicasDetalhes] : null

  if (!dica) {
    return (
      <div>
        <Header />
        <div style={{ textAlign: 'center', padding: '2rem', paddingTop: '140px' }}>
          <h2>Dica não encontrada</h2>
          <a href="/bem-estar">Voltar para Bem-Estar</a>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="bem-estar-container">
        <div className="dica-detalhes">
          <div className="voltar">
            <a href="/bem-estar">← Voltar para Bem-Estar</a>
          </div>
          
          <div className="dica-completa">
            <h1>{dica.titulo}</h1>
            
            <div className="dica-conteudo">
              <p>{dica.conteudo.introducao}</p>
              
              <h2>Benefícios:</h2>
              <ul>
                {dica.conteudo.beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
              
              <h2>Dicas Práticas:</h2>
              <ul>
                {dica.conteudo.dicas.map((dicaPratica, index) => (
                  <li key={index}>{dicaPratica}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}