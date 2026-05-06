import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contato from './Contato';
import Suporte from './Suporte';
import Cadastro from './Cadastro';
import CadastroProfessor from './CadastroProfessor';

export default function App() {
 return (
  <Router>
   {/* Ajustado para fundo branco e texto centralizado */}
   <header className="text-center py-3">
    <p className="mb-0"><strong>UFN - Aula 22 (React)</strong></p>
    <nav>
     <Link to="/" className="text-decoration-none text-primary">Home</Link> | 
     <Link to="/contato" className="text-decoration-none text-primary"> Contato</Link> | 
     <Link to="/suporte" className="text-decoration-none text-primary"> Suporte</Link> | 
     <Link to="/cadastro" className="text-decoration-none text-primary"> Cadastro</Link> |
     <Link to="/cadastro-professor" className="nav-link text-white"> Cadastro Professor |</Link> |
    </nav>
    <hr className="container" />
   </header>

   <main className="container">
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/contato" element={<Contato />} />
     <Route path="/suporte" element={<Suporte />} />
     <Route path="/cadastro" element={<Cadastro />} />
     <Route path="/cadastro-professor" element={<CadastroProfessor />} />
    </Routes>
   </main>

   <footer className="text-center mt-5 text-secondary">
    <p>© 2026 - Sistemas de Informação - Aplicações Web</p>
   </footer>
  </Router>
 );
}