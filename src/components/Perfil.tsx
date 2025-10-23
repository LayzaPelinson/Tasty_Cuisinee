import Header from "./header"
import './css/Perfil.css'
import Footer from './Footer'

export default function Perfil() {
  const nome = localStorage.getItem("nome")
  const email = localStorage.getItem("email")
  const data = localStorage.getItem("data")
  const usuario = localStorage.getItem("usuário")
  const senha = localStorage.getItem("senha")

  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header/>
      <main className="perfil-container">
        <aside className="perfil-card">
          <div className="foto-perfil"></div>
          <h2>{nome}</h2>
          <p className="email">{email}</p>
          <div className="progresso">
            <p>Progresso do Perfil (75%)</p>
            <div className="barra"><div className="preenchida"></div></div>
          </div>
          <p>Minhas Dietas Preferidas:</p>
          <div className="tags">
            <span className="tag verde">Vegana</span>
            <span className="tag verde">Low Carb</span>
          </div>
        </aside>
    
        <section className="conteudo-perfil">
          <div className="abas">
            <button className="aba ativa" data-alvo="info"><i className="fas fa-user"></i> Informações</button>
            <button className="aba" data-alvo="favoritas"><i className="fas fa-heart"></i> Favoritas</button>
            <button className="aba" data-alvo="publicadas"><i className="fas fa-upload"></i> Publicadas</button>
          </div>
    
          <div className="conteudo info ativa" id="info">
            <h3>Informações Pessoais</h3>
            <label>Nome Completo</label>
            <input type="text" defaultValue={nome || ""} />
            <label>Nome de Usuário</label>
            <input type="text" defaultValue={usuario || ""} />
            <label>Email</label>
            <input type="email" defaultValue={email || ""} />
            <label>Data de Nascimento</label>
            <input type="date" defaultValue={data || ""} />
            <label>Senha</label>
            <input type="password" defaultValue={senha || ""} placeholder="Defina ou altere sua senha" />
            <label>Restrições Alimentares e Alergias</label>
            <input type="text" placeholder="Ex.: intolerância à lactose, alergia a amendoim" />
            <label>Dietas Favoritas (separe por vírgulas)</label>
            <input type="text" defaultValue="Vegana, Low Carb" placeholder="Ex.: Vegana, Low Carb" />
            <label>Tipo de Conta</label>
            <select defaultValue="usuario">
              <option value="chefe">Chefe</option>
              <option value="restaurante">Restaurante</option>
              <option value="usuario">Usuário Comum</option>
            </select>
            <button className="btn-roxo">Salvar Alterações</button>
          </div>
    
          <div className="conteudo favoritas" id="favoritas"></div>
          <div className="conteudo publicadas" id="publicadas"></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}