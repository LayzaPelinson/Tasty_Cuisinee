import { useEffect, useState } from "react"
import "./css/header.css"

export default function Header() {
  const [isLogged, setIsLogged] = useState(false)
  
  useEffect(() => {
    setIsLogged(localStorage.getItem("isLogged") === "true")
  }, [])
  
  const navigate = (path: string, requireAuth = true) => {
    if (requireAuth && !isLogged) {
      alert("Você precisa estar logado para acessar a página")
      window.location.href = "/login"
    } else {
      window.location.href = path
    }
  }

  const menuItems = [
    { label: "Home", path: "/home" },
    { label: "Receitas", path: "/receitas" },
    { label: "Bem-Estar", path: "/bem-estar" },
    { label: "Guia Gastronômico", path: "/guia-gastronomico" },
    { label: "Perfil", path: "/perfil" },
    { label: "Contato", path: "/contato", requireAuth: false },
    { label: "Sobre", path: "/sobre", requireAuth: false }
  ]

  return (
    <header>
      <div className="logo">
        <h1 className="Title">Tasty Cuisine</h1>
      </div>
      <nav className="nav-bar">
        <ul>
          {menuItems.map(item => (
            <li key={item.label} className="options">
              <a className="item" onClick={() => navigate(item.path, item.requireAuth)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
