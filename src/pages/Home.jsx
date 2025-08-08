import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const API = "https://6892b509c49d24bce8681f80.mockapi.io/notas";

const Home = () => {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNotas = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      setNotas(data);
    } catch (err) {
      console.error("Error cargando las notas:", err);
      setError("No se pudieron cargar las notas. Volvé a intentar.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Error al eliminar');
      // Si se eliminó bien, actualizo la lista sacando la nota eliminada
      setNotas(notas.filter(nota => nota.id !== id));
    } catch (error) {
      console.error('Error eliminando la nota:', error);
    }
  };

  useEffect(() => {
    fetchNotas();
  }, []);

  if (loading) return <div className="load-row"><span></span> <span></span> <span></span><span></span></div>

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Eventos cargados</h1>
        <div className="home-buttons">
          <button onClick={fetchNotas} className="reload">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-rotate-cw-icon"
            >
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
              <path d="M21 3v5h-5" />
            </svg>
          </button>
          <Link to="/cargarNotas" className="nav-link  link-button"> Cargar evento
            <span></span>
          </Link>
        </div>
      </header>

      {error && <div className="error-message">{error}</div>}

      {notas.length === 0 ? (
        <p className="no-notas">No hay eventos cargados.</p>
      ) : (
        <ul className="notas-list">
          {notas.map((nota) => (
            <li key={nota.id} className="nota-item">
              <div>
                <strong>Materia:</strong> {nota.materia ?? nota.name ?? "(sin nombre)"}
              </div>
              <div>
                <strong>Día:</strong> {nota.dia ?? "(sin día)"}
              </div>
              <div>
                <strong>Horario:</strong> {nota.horario ?? "(sin horario)"}
              </div>

              <div className="botones">
                <button className="delete" onClick={() => handleDelete(nota.id)} s>
                  <svg
                    viewBox="0 0 15 17.5"
                    height="17.5"
                    width="15"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      transform="translate(-2.5 -1.25)"
                      d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                      id="Fill"
                    ></path>
                  </svg>
                </button>

                <Link className="editBtn" to={`/editarNotas/${nota.id}`} title="Editar">
                  <svg viewBox="0 0 512 512">
                    <path
                      d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}      
    </div>
  );
};

export default Home;
