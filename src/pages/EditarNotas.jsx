import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../styles/editar.css';

const EditarNotas = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [materia, setMateria] = useState("");
  const [dia, setDia] = useState("");
  const [horario, setHorario] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Muestra el ID en la consola para la depuración
  console.log("ID de la nota a editar:", id);

  useEffect(() => {
    setError(null);
    setLoading(true);

    // Si el ID no existe, muestra un error inmediatamente y detiene la carga.
    if (!id) {
      setError("Error: No se encontró el ID de la nota en la URL.");
      setLoading(false);
      return;
    }

    fetch(`https://6892b509c49d24bce8681f80.mockapi.io/notas/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar la nota. El ID podría ser incorrecto.");
        }
        return res.json();
      })
      .then((data) => {
        setMateria(data.materia || "");
        setDia(data.dia || "");
        setHorario(data.horario || "");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching nota:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!materia || !dia || !horario) {
      setError("Completa todos los campos antes de guardar.");
      return;
    }

    setError(null);

    fetch(`https://6892b509c49d24bce8681f80.mockapi.io/notas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ materia, dia, horario, descripcion }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al actualizar la nota.");
        }
        return res.json();
      })
      .then(() => {
        alert("Nota actualizada con éxito");
        navigate("/");
      })
      .catch((err) => {
        console.error("Error actualizando nota:", err);
        setError(err.message);
      });
  };

  if (loading) {
    return <div className="load-row"><span></span> <span></span> <span></span><span></span></div>
  }

  return (
    <div className="container">
      <h1 className="text-center mt-3">Editar Notas</h1>
      <form
        className="formu"
        onSubmit={handleSubmit}
        style={{ maxWidth: 400, margin: "0 auto" }}
      >
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Materia"
            type="text"
            id="materia"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="descripcion"
            type="text"
            id="horario"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
            required
            style={{ minHeight: 40 }}
          />
        </div>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Día"
            type="date"
            id="dia"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Horario"
            type="time"
            id="horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
            style={{ minHeight: 40 }}
          />
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        <button className="BOTON" type="submit">
          Guardar Cambios
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default EditarNotas;