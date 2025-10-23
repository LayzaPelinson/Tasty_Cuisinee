import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Home from './components/Home'
import Perfil from './components/Perfil'
import Receitas from './components/Receitas'
import Publicadas from './components/Publicar'
import ReceitaDetalhes from './components/ReceitaDetalhes'
import VPerfil from './components/Perfil copy'
import BemEstar from './components/BemEstar'
import GuiaGastronomico from './components/GuiaGastronomico'
import Contato from './components/Contato'
import Sobre from './components/Sobre'
import VCdastro from './components/Cadastronew.tsx'
import LoginNew from './components/LoginNew.tsx'
import DicaDetalhes from './components/DicaDetalhes'
import PerfilChefe from './components/PerfilChefe'
import PerfilRestaurante from './components/PerfilRestaurante'

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login/> },
  { path: "/cadastro", element: <Cadastro/> },
  { path: "/home", element: <Home/> },
  { path: "/perfil", element: <Perfil/> },
  { path: "/receitas", element: <Receitas/> },
  { path: "/publicar", element: <Publicadas/> },
  { path: '/receitas/:id', element: <ReceitaDetalhes/> },
  { path: '/aba', element: <VPerfil/> },
  { path: '/bem-estar', element: <BemEstar/> },
  { path: '/guia-gastronomico', element: <GuiaGastronomico/> },
  { path: '/contato', element: <Contato/> },
  { path: '/sobre', element: <Sobre/> },
  { path: '/cadastronew', element: <VCdastro/>  },
  { path: '/loginnew', element: <LoginNew/> },
  { path: '/hidratacao', element: <DicaDetalhes/> },
  { path: '/vegetais', element: <DicaDetalhes/> },
  { path: '/refeicoes-regulares', element: <DicaDetalhes/> },
  { path: '/lanches-saudaveis', element: <DicaDetalhes/> },
  { path: '/mente-corpo', element: <DicaDetalhes/> },
  { path: '/menos-acucar', element: <DicaDetalhes/> },
  { path: '/cafe-manha', element: <DicaDetalhes/> },
  { path: '/ultraprocessados', element: <DicaDetalhes/> },
  { path: '/perfil-chefe', element: <PerfilChefe/> },
  { path: '/restaurante-detalhes', element: <PerfilRestaurante/> },
  { path: '*', element: <div style={{textAlign: 'center', padding: '2rem'}}><h2>Página não encontrada</h2><a href="/">Voltar ao início</a></div> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Carregando...</div>}/>
  </StrictMode>
)
