import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.tsx'
import Login from './components/Login.tsx'
import Cadastro from './components/Cadastro.tsx'
import Home from './components/Home.tsx';
import Header from './components/header.tsx'

import Perfil from './components/Perfil.tsx'
import Receitas from './components/Receitas.tsx'
import Publicadas from './components/Publicar.tsx';
import VerDetalhes from './components/VerDetalhesR.tsx'
import VPerfil from './components/Perfil copy.tsx'
import BemEstar from './components/BemEstar.tsx'
import GuiaGastronomico from './components/GuiaGastronomico.tsx'
import Contato from './components/Contato.tsx'

import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "/login",
  element: <Login/>
},
{
  path: "/cadastro",
  element: <Cadastro/>
},
{
  path: "/home",
  element: <Home/>
},
{
  path: "/header",
  element: <Header/>
},

{
  path: "/perfil",
  element: <Perfil/>
},
{
  path: "/receitas",
  element: <Receitas/>
}	,{
  path: "/publicar",
  element: <Publicadas/>
},
{
  path: '/receitas/:id',
  element: <VerDetalhes/>
},
{
  path: '/aba',
  element: <VPerfil/>
},
{
  path: '/bem-estar',
  element: <BemEstar/>
},
{
  path: '/guia-gastronomico',
  element: <GuiaGastronomico/>
},
{
  path: '/contato',
  element: <Contato/>
}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
