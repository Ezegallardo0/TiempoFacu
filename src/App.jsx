import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Nav from './components/Nav';
import Home from './pages/Home';
import CargarNotas from './pages/CargarNotas';
import EditarNotas from './pages/EditarNotas';
import Calendario from './components/Calendario';
import Footer from './components/Footer';
import Login from './components/login';
import Register from './components/Register';

function App() {

  return (
    <div className="app-container">
      <Nav />
      <main className="content-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cargarNotas" element={<CargarNotas />} />
          <Route path="/editarNotas/:id" element={<EditarNotas />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
