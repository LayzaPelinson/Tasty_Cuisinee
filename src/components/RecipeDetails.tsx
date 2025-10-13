import React, { useState, useEffect } from 'react';
import './RecipeDetails.css';

interface Recipe {
  id: string;
  nome: string;
  categoria: string;
  tempo: number;
  dificuldade: string;
  favoritos: number;
  nota: number;
  ingredientes: string[];
  preparo: string[];
  imagem: string;
}

const RecipeDetails: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Simular carregamento da receita
    const mockRecipe: Recipe = {
      id: '1',
      nome: 'Bolo de Chocolate Fit',
      categoria: 'Sobremesa',
      tempo: 45,
      dificuldade: 'Fácil',
      favoritos: 128,
      nota: 4.8,
      ingredientes: [
        '2 xícaras de farinha de aveia',
        '1/2 xícara de cacau em pó',
        '1 xícara de açúcar demerara',
        '3 ovos',
        '1 xícara de leite desnatado'
      ],
      preparo: [
        'Pré-aqueça o forno a 180°C',
        'Misture os ingredientes secos',
        'Adicione os ingredientes líquidos',
        'Asse por 35-40 minutos'
      ],
      imagem: '/src/assets/bolo-chocolate-fit.svg'
    };
    
    setRecipe(mockRecipe);
  }, []);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating: number) => {
    return '⭐'.repeat(Math.floor(rating));
  };

  if (!recipe) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="recipe-details">
      <header>
        <h1 className="logo">Tasty Cuisine</h1>
        <nav>
          <ul className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/receitas">Receitas</a></li>
            <li><a href="/bem-estar">Bem-Estar</a></li>
            <li><a href="/guia-gastronomico">Guia Gastronômico</a></li>
            <li><a href="/contato">Contato</a></li>
            <li><a href="/perfil">Perfil</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <img 
          src={recipe.imagem} 
          alt={recipe.nome}
          style={{ width: '100%', height: '320px', objectFit: 'cover' }}
        />
        <h1>{recipe.nome}</h1>
        <p>Uma receita deliciosa e saudável para você!</p>
      </div>

      <div className="info-bar">
        <span className="tag">{recipe.categoria}</span>
        <span>⏱ {recipe.tempo} min</span>
        <span>💧 {recipe.dificuldade}</span>
        <span>❤ {recipe.favoritos}</span>
        <span>{renderStars(recipe.nota)}</span>
        <span>({recipe.nota})</span>
      </div>

      <div className="container">
        <div className="ingredientes">
          <h2>Ingredientes</h2>
          <ul>
            {recipe.ingredientes.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </div>

        <div className="preparo">
          <h2>Modo de Preparo</h2>
          <ol>
            {recipe.preparo.map((passo, index) => (
              <li key={index}>{passo}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="botao">
        <button onClick={toggleFavorite}>
          <span>{isFavorite ? '❤️' : '🤍'}</span>
          <span>{isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}</span>
        </button>
      </div>

      <footer>
        <div className="footer-text">
          <h3>Tasty Cuisine</h3>
          <p>Feito com carinho, saúde e um toque de afeto.</p>
        </div>
        <div className="footer-links">
          <a href="/politica">Política de Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
        <div className="footer-social">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetails;